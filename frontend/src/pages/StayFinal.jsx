import { useEffect, useMemo, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion'
import AppHeader from '../components/AppHeader'
import { slideNavigate } from '../components/SlideLink'
import { tripLength, useTripDraft } from '../context/TripDraftContext'
import { PACES } from '../data/travel'
import { getPlacesByIds } from '../lib/api/places'
import { getStaysByIds } from '../lib/api/stays'
import { assignStays } from '../lib/trip/meals'
import { dayCapacities, planTrip } from '../lib/trip/plan'
import { travelOptions } from '../lib/trip/travel'
import { TripLoading } from '../components/trip/TripStates'
import { PRIMARY_BUTTON } from '../components/trip/styles'
import { StayModeTile, StayNightList, StayOption } from '../components/trip/StayChoice'

// สถานที่ต่อวันแบบคร่าวๆ จากที่ปัดชอบ (ใช้จัดตัวอย่างที่พัก — แผนจริงอาจเติมที่เที่ยวเพิ่ม)
function roughDayPlaces(draft, places) {
  const { days } = tripLength(draft)
  const perDay = PACES.find((p) => p.id === draft.pace)?.perDay ?? 3
  const travelHours = travelOptions(draft.origin, draft.province).options.find((o) => o.id === draft.transportTo)?.hours ?? 0
  const plan = planTrip({ liked: places, pool: [], capacities: dayCapacities({ days, perDay, travelHours }) })
  return plan.days.map((day) => day.items.map((item) => item.place))
}

function StayFinalBody({ draft, updateDraft, stays, places }) {
  const navigate = useNavigate()
  const reduced = useReducedMotion()
  const { nights } = tripLength(draft)
  const [mode, setMode] = useState(draft.stayMode)
  const [chosen, setChosen] = useState(() => (stays.some((s) => s.id === draft.chosenStayId) ? draft.chosenStayId : null))

  const preview = useMemo(
    () => assignStays({ nights, dayPlaces: roughDayPlaces(draft, places), liked: stays, mode: 'multi' }),
    [nights, draft, places, stays],
  )
  const valid = mode === 'multi' || (mode === 'single' && chosen != null)

  function next() {
    if (!valid) return
    updateDraft({ stayMode: mode, chosenStayId: mode === 'single' ? chosen : null })
    slideNavigate(navigate, '/plan/trip')
  }

  const panelMotion = reduced
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0, transition: { duration: 0 } }, transition: { duration: 0 } }
    : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8, transition: { duration: 0.12 } }, transition: { type: 'spring', stiffness: 380, damping: 32 } }

  return (
    <>
      <div className="flex flex-col gap-5 px-4 pt-2">
        <div className="px-1">
          <h1 className="m-0 text-2xl font-bold">จะพักแบบไหนดี?</h1>
          <p className="m-0 mt-1.5 text-sm leading-relaxed text-[#4A3A30]">คุณชอบที่พักไว้ {stays.length} ที่ · ทริปนี้ {nights} คืน</p>
        </div>

        <div role="radiogroup" aria-label="รูปแบบการพัก" className="flex flex-col gap-3">
          <StayModeTile mode="multi" selected={mode === 'multi'} onSelect={() => setMode('multi')} />
          <StayModeTile mode="single" selected={mode === 'single'} onSelect={() => setMode('single')} />
        </div>

        <div aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            {mode === 'multi' && (
              <motion.div key="multi" {...panelMotion}><StayNightList stays={preview} /></motion.div>
            )}
            {mode === 'single' && (
              <motion.div key="single" {...panelMotion}>
                <p className="m-0 px-1 pb-2 text-[13px] text-[#4A3A30]">เลือกที่พักที่จะพักตลอดทริป</p>
                <div role="radiogroup" aria-label="ที่พัก" className="flex flex-col gap-2">
                  {stays.map((stay) => <StayOption key={stay.id} stay={stay} selected={chosen === stay.id} onSelect={() => setChosen(stay.id)} />)}
                </div>
              </motion.div>
            )}
            {!mode && (
              <motion.p key="none" {...panelMotion} className="m-0 px-1 text-center text-sm text-muted">เลือกรูปแบบการพักก่อน แล้วไปดูแผนเที่ยวได้เลย</motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grow" />
      <div className="sticky bottom-0 mt-4 bg-cream px-4 pb-6 pt-3">
        <button type="button" onClick={next} disabled={!valid} className={PRIMARY_BUTTON}>ไปดูแผนเที่ยว</button>
      </div>
    </>
  )
}

function StayFinalSession({ draft, updateDraft }) {
  const likedStayKey = draft.likedStayIds.join(',')
  const likedKey = draft.likedIds.join(',')
  const [data, setData] = useState(null)

  useEffect(() => {
    let active = true
    Promise.all([getStaysByIds(likedStayKey.split(',').filter(Boolean)), getPlacesByIds(likedKey.split(',').filter(Boolean)).catch(() => [])])
      .then(([stays, places]) => { if (active) setData({ stays, places }) })
      .catch(() => { if (active) setData({ stays: [], places: [] }) })
    return () => { active = false }
  }, [likedStayKey, likedKey])

  if (!data) return <TripLoading label="กำลังโหลดที่พัก…" />
  if (data.stays.length < 2) return <Navigate to="/plan/trip" replace />
  return <StayFinalBody draft={draft} updateDraft={updateDraft} stays={data.stays} places={data.places} />
}

export default function StayFinal() {
  const { draft, updateDraft } = useTripDraft()
  if (draft.likedStayIds.length < 2 || tripLength(draft).nights < 1) return <Navigate to="/plan/trip" replace />
  return (
    <MotionConfig reducedMotion="user">
      <div className="mx-auto flex min-h-svh w-full max-w-[560px] flex-col bg-cream text-ink">
        <AppHeader title="เลือกที่พัก" step="6 / 6" backTo="/plan/stay" />
        <StayFinalSession draft={draft} updateDraft={updateDraft} />
      </div>
    </MotionConfig>
  )
}
