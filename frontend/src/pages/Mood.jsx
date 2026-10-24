import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Coins, Dices, Map, MapPin, X } from 'lucide-react'
import AppHeader from '../components/AppHeader'
import BottomSheet from '../components/BottomSheet'
import { slideNavigate } from '../components/SlideLink'
import OriginPicker from '../components/plan/OriginPicker'
import { createRollReveal } from '../components/plan/rollReveal'
import { MOODS } from '../data/options'
import AiMoodBox from '../components/mood/AiMoodBox'
import MoodTile from '../components/mood/MoodTile'
import BudgetPicker from '../components/mood/BudgetPicker'
import TravelersPicker from '../components/mood/TravelersPicker'
import { useTripDraft } from '../context/TripDraftContext'
import { useAuth } from '../context/AuthContext'
import { updateHomeProvince } from '../lib/api/profile'
import { listAllPlaces } from '../lib/api/places'
import { randomizeTrip } from '../lib/trip/random'
import { formatBaht } from '../lib/trip/budget'

const MAX_MOODS = 3
const primaryClass = 'flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brown text-base font-semibold text-white transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-40'

export default function Mood() {
  const navigate = useNavigate()
  const reduced = useReducedMotion()
  const { draft, updateDraft } = useTripDraft()
  const { user, profile, refreshProfile } = useAuth()
  const [open, setOpen] = useState(false)
  const [phase, setPhase] = useState('choose')
  const [origin, setOrigin] = useState(draft.origin ?? profile?.home_province ?? null)
  const [savingOrigin, setSavingOrigin] = useState(false)
  const [profileWarning, setProfileWarning] = useState('')
  const [error, setError] = useState('')
  const [needMore, setNeedMore] = useState(null)
  const request = useRef(0)
  const placesCache = useRef(null)
  useEffect(() => () => { request.current += 1 }, [])
  const busy = phase === 'rolling' || savingOrigin
  const full = draft.moods.length >= MAX_MOODS
  const tap = reduced ? undefined : { scale: 0.96 }
  const spring = { type: 'spring', duration: 0.22, bounce: 0.2 }

  const close = useCallback(() => {
    if (!busy) setOpen(false)
  }, [busy])

  function toggle(id) {
    updateDraft(current => ({ moods: current.moods.includes(id) ? current.moods.filter(v => v !== id) : current.moods.length >= MAX_MOODS ? current.moods : [...current.moods, id], deck: null, likedIds: [], swipeKey: null, swipeHistory: [], itineraryKey: null, itinerary: null }))
  }

  function choosePick() {
    updateDraft({ mode: 'pick', rollId: null, revealed: [], deck: null, likedIds: [], swipeKey: null, swipeHistory: [], itineraryKey: null, itinerary: null, locked: [] })
    slideNavigate(navigate, '/map')
  }

  async function saveOrigin(id) {
    setOrigin(id)
    setSavingOrigin(true)
    setProfileWarning('')
    try {
      if (user) {
        await updateHomeProvince(user.id, id)
        await refreshProfile()
      }
    } catch {
      setProfileWarning('จำต้นทางไว้ในทริปนี้แล้ว แต่ยังบันทึกลงโปรไฟล์ไม่ได้')
    } finally {
      updateDraft({ origin: id })
      setSavingOrigin(false)
    }
  }

  async function roll(budget = draft.budget) {
    const from = origin ?? draft.origin ?? profile?.home_province
    if (!from) { setPhase('origin'); return }
    const token = ++request.current
    setPhase('rolling')
    setError('')
    setNeedMore(null)
    try {
      const places = placesCache.current ?? await listAllPlaces()
      placesCache.current = places
      const today = new Date()
      today.setHours(12, 0, 0, 0)
      const { patch, needMore: extra } = randomizeTrip({ draft: { ...draft, origin: from, budget, locked: [] }, places, today })
      if (request.current !== token) return
      if (!patch) {
        setNeedMore(extra)
        setPhase(extra == null ? 'error' : 'budget')
        if (extra == null) setError('ยังไม่มีที่เที่ยวที่ตรงมู้ดนี้ ลองเปลี่ยนมู้ดอีกนิด')
        return
      }
      updateDraft({ ...patch, budget, origin: from, mode: 'random', locked: [], swipeKey: null, swipeHistory: [], itineraryKey: null, itinerary: null, ...createRollReveal() })
      if (!reduced) await new Promise(resolve => setTimeout(resolve, 800))
      if (request.current === token) slideNavigate(navigate, `/map/${patch.province}`)
    } catch {
      if (request.current !== token) return
      setError('โหลดที่เที่ยวไม่สำเร็จ ลองอีกครั้ง')
      setPhase('error')
    }
  }

  function raiseBudget() {
    const budget = { ...draft.budget, max: draft.budget.max + needMore }
    updateDraft({ budget })
    roll(budget)
  }

  return (
    <MotionConfig reducedMotion="user">
      <div inert={open ? true : undefined} aria-hidden={open ? true : undefined} className="min-h-svh bg-cream text-ink">
        <div className="mx-auto flex min-h-svh w-full max-w-[560px] flex-col lg:pt-4">
          <AppHeader title="วางทริป" step="1 / 4" backTo="/home" />
          <div className="flex flex-col gap-1 px-[22px] pb-1 pt-3">
            <h1 className="m-0 text-[28px] font-semibold">ทริปนี้อยากได้ฟีลไหน?</h1>
            <p className="m-0 text-sm text-muted">เลือกได้สูงสุด {MAX_MOODS} มู้ด <span className="ml-1 rounded-full bg-white px-2.5 py-0.5 text-xs text-brown">{draft.moods.length} / {MAX_MOODS}</span></p>
          </div>
          <div className="flex flex-col gap-3.5 px-4 pb-[calc(7rem+env(safe-area-inset-bottom))] pt-4">
            <AiMoodBox onPick={ids => updateDraft({ moods: ids.slice(0, MAX_MOODS), deck: null, likedIds: [], swipeKey: null, swipeHistory: [], itineraryKey: null, itinerary: null })} />
            <div className="grid grid-cols-2 gap-2.5">
              {MOODS.map(mood => <MoodTile key={mood.id} mood={mood} selected={draft.moods.includes(mood.id)} disabled={full && !draft.moods.includes(mood.id)} onClick={() => toggle(mood.id)} />)}
            </div>
            <BudgetPicker value={draft.budget} onChange={budget => updateDraft({ budget })} />
            <TravelersPicker value={draft.travelers} onChange={travelers => updateDraft({ travelers })} />
          </div>
          <div className="grow" />
          <div className={`sticky bottom-0 z-30 isolate bg-cream px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 before:pointer-events-none before:absolute before:inset-x-0 before:-top-6 before:h-6 before:bg-linear-to-t before:from-cream before:to-transparent ${open ? 'invisible' : ''}`}>
            <motion.button type="button" disabled={!draft.moods.length || open} whileTap={tap} transition={spring} className={primaryClass} onClick={() => { setPhase('choose'); setError(''); setOpen(true) }}>ต่อไป <ArrowRight size={20} strokeWidth={2} aria-hidden="true" /></motion.button>
          </div>
        </div>
      </div>
      <BottomSheet open={open} onClose={close} labelledBy="plan-mode-title">
        <div className="overflow-y-auto px-[22px] pb-7 pt-5">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 id="plan-mode-title" className="m-0 text-[22px] font-semibold">{phase === 'origin' ? 'เริ่มจากที่ไหนดี?' : phase === 'budget' ? 'งบไม่พอ' : phase === 'rolling' ? 'ทริปของคุณกำลังมา…' : 'ไปแบบไหนดี?'}</h2>
            {!busy && <motion.button type="button" aria-label="ปิด" onClick={close} whileTap={tap} transition={spring} className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-cream text-muted transition-colors duration-200"><X size={20} strokeWidth={2} aria-hidden="true" /></motion.button>}
          </div>
          <AnimatePresence mode="wait" initial={false}>
            {phase === 'choose' && (
              <motion.div key="choose" className="grid grid-cols-2 gap-3" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <motion.button type="button" whileTap={tap} transition={spring} onClick={() => roll()} className="flex min-h-44 cursor-pointer flex-col items-center justify-center gap-4 rounded-[28px] bg-peach text-lg font-semibold text-brown transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brown">
                  <motion.span aria-hidden="true" animate={reduced ? undefined : { rotate: [0, -14, 14, -7, 0] }} transition={{ duration: 1.1, delay: 0.2 }}><Dices size={48} strokeWidth={2} /></motion.span>สุ่มให้
                </motion.button>
                <motion.button type="button" whileTap={tap} transition={spring} onClick={choosePick} className="flex min-h-44 cursor-pointer flex-col items-center justify-center gap-4 rounded-[28px] bg-cream text-lg font-semibold text-brown transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brown">
                  <motion.span aria-hidden="true" className="relative" animate={reduced ? undefined : { y: [-12, 2, -4, 0] }} transition={{ duration: 0.7, delay: 0.35 }}><Map size={48} strokeWidth={2} /><MapPin size={24} strokeWidth={2} className="absolute -right-2 -top-2 fill-cream" /></motion.span>เลือกเอง
                </motion.button>
              </motion.div>
            )}
            {phase === 'origin' && (
              <motion.div key="origin" className="flex flex-col gap-4" initial={false} animate={{ opacity: 1 }}>
                <fieldset disabled={savingOrigin} className="m-0 min-w-0 border-0 p-0 disabled:opacity-60"><OriginPicker value={origin} onChange={saveOrigin} /></fieldset>
                {profileWarning && <p role="status" className="m-0 text-xs text-muted">{profileWarning}</p>}
                <motion.button type="button" disabled={!origin || savingOrigin} onClick={() => roll()} whileTap={tap} transition={spring} className={primaryClass}>{!savingOrigin && <Dices size={20} strokeWidth={2} aria-hidden="true" />}{savingOrigin ? 'กำลังจำต้นทาง…' : 'สุ่มทริป'}</motion.button>
              </motion.div>
            )}
            {phase === 'rolling' && (
              <motion.div key="rolling" role="status" className="flex min-h-48 items-center justify-center rounded-[28px] bg-[#FBE3D2]">
                <motion.span aria-hidden="true" className="text-brown" animate={reduced ? undefined : { rotate: [0, -20, 30, -15, 360], scale: [1, 1.15, 0.95, 1.1, 1] }} transition={{ duration: 0.8, repeat: 1 }}><Dices size={72} strokeWidth={2} /></motion.span>
                <span className="sr-only">กำลังสุ่มทริป</span>
              </motion.div>
            )}
            {phase === 'budget' && (
              <motion.div key="budget" className="flex flex-col gap-4" initial={false} animate={{ opacity: 1 }}>
                <div className="rounded-[24px] bg-[#FBE3D2] p-5 text-center"><Coins size={40} strokeWidth={2} aria-hidden="true" className="mx-auto text-brown" /><p className="mb-0 mt-3 text-sm text-muted">เพิ่มอีกนิด ก็ออกเดินทางได้</p><p className="mb-0 mt-1 text-3xl font-bold text-brown">{formatBaht(needMore)}</p></div>
                <motion.button type="button" onClick={raiseBudget} whileTap={tap} transition={spring} className={primaryClass}>เพิ่มงบ {formatBaht(needMore)} แล้วสุ่มใหม่</motion.button>
                <motion.button type="button" onClick={() => { close() }} whileTap={tap} transition={spring} className="h-11 cursor-pointer rounded-full bg-cream text-sm font-semibold text-brown transition-colors duration-200">กลับไปปรับงบ</motion.button>
              </motion.div>
            )}
            {phase === 'error' && (
              <motion.div key="error" className="flex flex-col gap-4" initial={false} animate={{ opacity: 1 }}>
                <p role="alert" className="m-0 rounded-[24px] bg-cream p-5 text-sm text-muted">{error}</p>
                <motion.button type="button" onClick={() => roll()} whileTap={tap} transition={spring} className={primaryClass}>ลองสุ่มอีกครั้ง</motion.button>
                <motion.button type="button" onClick={choosePick} whileTap={tap} transition={spring} className="flex h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-cream text-sm font-semibold text-brown transition-colors duration-200"><Map size={18} strokeWidth={2} aria-hidden="true" />เลือกจังหวัดเอง</motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </BottomSheet>
    </MotionConfig>
  )
}
