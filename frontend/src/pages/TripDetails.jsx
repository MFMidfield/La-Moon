import { useEffect, useMemo, useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import AppHeader from '../components/AppHeader'
import { slideNavigate } from '../components/SlideLink'
import OriginPicker from '../components/plan/OriginPicker'
import ScrambleText from '../components/plan/ScrambleText'
import DetailCard from '../components/plan/DetailCard'
import TripCalendar from '../components/plan/TripCalendar'
import { useAuth } from '../context/AuthContext'
import { tripLength, travelerCount, useTripDraft } from '../context/TripDraftContext'
import { PROVINCES } from '../data/options'
import { PACES, TRANSPORT_LOCAL, TRANSPORT_TO } from '../data/travel'
import { listPlaces } from '../lib/api/places'
import { updateHomeProvince } from '../lib/api/profile'
import { cheaperAlternatives, estimateTrip, formatBaht } from '../lib/trip/budget'
import { randomizeTrip } from '../lib/trip/random'
import { seasonWarnings } from '../lib/trip/season'
import { formatHours, travelOptions } from '../lib/trip/travel'

const TRANSPORT_ICONS = { plane: '✈️', train: '🚆', bus: '🚌', car: '🚙' }
const LOCAL_ICONS = { rental_car: '🚗', motorbike: '🛵', public: '🚕', tour: '⛵' }
const localIso = date => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
const addDate = (value, amount) => { const date = new Date(`${value}T12:00:00`); date.setDate(date.getDate() + amount); return localIso(date) }
const shortDate = value => value ? new Date(`${value}T12:00:00`).toLocaleDateString('th-TH', { day: 'numeric', month: 'short' }) : 'เลือกวัน'

function DetailsForm() {
  const { draft, updateDraft } = useTripDraft()
  const { user, profile, refreshProfile } = useAuth()
  const navigate = useNavigate()
  const reduced = useReducedMotion()
  const [placesResult, setPlacesResult] = useState(null)
  const [attempt, setAttempt] = useState(0)
  const [originSaving, setOriginSaving] = useState(false)
  const [originNotice, setOriginNotice] = useState('')
  const [rolling, setRolling] = useState(false)
  const [randomError, setRandomError] = useState('')
  const [rollVersion, setRollVersion] = useState(0)
  const defaulted = useRef(false)
  const saveSequence = useRef(0)
  const origin = draft.origin ?? profile?.home_province ?? null
  const province = draft.province
  const provinceLabel = PROVINCES.find(p => p.id === province)?.label ?? province
  const random = draft.mode === 'random'
  const travel = useMemo(() => travelOptions(origin, province), [origin, province])
  const transportTo = origin && !travel.sameProvince
    ? travel.options.find(o => o.id === draft.transportTo && o.available)?.id ?? travel.options.find(o => o.available)?.id ?? null
    : null
  const transportLocal = draft.transportLocal ?? 'public'
  const { days, nights } = tripLength(draft)
  const people = travelerCount(draft)
  const requestKey = `${province}:${attempt}`
  const currentPlaces = placesResult?.key === requestKey ? placesResult : null
  const places = currentPlaces?.places ?? []
  const estimateInput = { origin, province, transportTo, transportLocal, budget: draft.budget, people, days, nights, places: [] }
  const estimate = estimateTrip(estimateInput)
  const alternatives = estimate.over ? cheaperAlternatives(estimateInput) : []
  const warnings = seasonWarnings(places, draft.startDate, draft.endDate)
  const datesValid = Boolean(draft.startDate && draft.startDate >= localIso(new Date()) && draft.endDate && (draft.tripType === 'daytrip' ? draft.endDate === draft.startDate : draft.endDate > draft.startDate))
  const canContinue = Boolean(origin && datesValid && (travel.sameProvince || transportTo))

  useEffect(() => {
    let active = true
    listPlaces({ province }).then(
      loaded => { if (active) setPlacesResult({ key: requestKey, places: loaded }) },
      () => { if (active) setPlacesResult({ key: requestKey, error: true }) },
    )
    return () => { active = false }
  }, [province, requestKey])

  useEffect(() => {
    if (!origin) return
    const patch = {}
    if (draft.origin !== origin) patch.origin = origin
    if (draft.transportTo !== transportTo) patch.transportTo = transportTo
    if (draft.transportLocal !== transportLocal) patch.transportLocal = transportLocal
    if (!defaulted.current) {
      defaulted.current = true
      if (!random && !draft.startDate) patch.tripType = travel.dayTripSuggested ? 'daytrip' : 'overnight'
    }
    if (Object.keys(patch).length) updateDraft(patch)
  }, [origin, draft.origin, draft.transportTo, draft.transportLocal, draft.startDate, random, travel.dayTripSuggested, transportTo, transportLocal, updateDraft])

  async function changeOrigin(id) {
    const sequence = ++saveSequence.current
    setOriginSaving(true)
    setOriginNotice('')
    updateDraft({ origin: id })
    try {
      if (user) { await updateHomeProvince(user.id, id); await refreshProfile() }
      if (sequence !== saveSequence.current) return
      updateDraft({ origin: id })
    } catch {
      if (sequence === saveSequence.current) setOriginNotice('ใช้ต้นทางนี้กับทริปแล้ว แต่ยังจำลงโปรไฟล์ไม่ได้')
    } finally {
      if (sequence === saveSequence.current) setOriginSaving(false)
    }
  }

  function toggleLock(key) {
    if (key === 'dates' && !draft.locked.includes('dates') && !datesValid) {
      setRandomError('เลือกวันไปและวันกลับให้ครบก่อนล็อกวันเดินทาง')
      return
    }
    updateDraft(current => ({ locked: current.locked.includes(key) ? current.locked.filter(k => k !== key) : [...current.locked, key] }))
  }

  function changeType(type) {
    updateDraft({ tripType: type, endDate: !draft.startDate ? null : type === 'daytrip' ? draft.startDate : draft.endDate && draft.endDate > draft.startDate ? draft.endDate : addDate(draft.startDate, 1) })
  }

  async function reroll() {
    if (rolling || !origin) return
    if (draft.locked.includes('dates') && !datesValid) {
      setRandomError('เลือกวันไปและวันกลับให้ครบ หรือปลดล็อกวันเดินทางก่อนสุ่ม')
      return
    }
    setRolling(true)
    setRandomError('')
    try {
      const loaded = currentPlaces?.places ?? await listPlaces({ province })
      const now = new Date()
      now.setHours(12, 0, 0, 0)
      const result = randomizeTrip({ draft: { ...draft, origin, locked: [...new Set([...draft.locked, 'province'])] }, places: loaded, today: now })
      if (!result.patch) {
        setRandomError(result.needMore ? `งบยังไม่พอ ลองเพิ่มอีก ${formatBaht(result.needMore)} หรือลองปลดล็อกบางตัวเลือก` : 'ยังไม่มีที่เที่ยวตรงมู้ดในจังหวัดนี้ ลองเปลี่ยนมู้ด')
        return
      }
      updateDraft({ ...result.patch, swipeKey: null, swipeHistory: [], itineraryKey: null, itinerary: null })
      setRollVersion(version => version + 1)
    } catch {
      setRandomError('สุ่มไม่สำเร็จ ลองอีกครั้งได้เลย')
    } finally {
      setRolling(false)
    }
  }

  function applyAlternative({ patch }) {
    if (patch.nights != null) {
      if (!draft.endDate) return
      updateDraft({ endDate: addDate(draft.endDate, -1), tripType: patch.nights === 0 ? 'daytrip' : 'overnight' })
    } else updateDraft(patch)
  }

  function valueText(text, index = 0, className = '') {
    return random ? <ScrambleText key={index} text={text} delay={index * 90} className={className} /> : <span className={className}>{text}</span>
  }
  const cardProps = { random, locked: draft.locked, onToggleLock: toggleLock }
  const transportLabel = travel.sameProvince && origin ? 'เที่ยวในจังหวัด' : TRANSPORT_TO.find(t => t.id === transportTo)?.label
  const localLabel = TRANSPORT_LOCAL.find(t => t.id === transportLocal)?.label
  const pace = PACES.find(p => p.id === draft.pace) ?? PACES[1]

  return (
    <div className="min-h-svh bg-cream text-ink">
      <div className="mx-auto flex min-h-svh w-full max-w-[560px] flex-col lg:pt-4">
        <AppHeader crumb={provinceLabel} title="รายละเอียดทริป" step="3 / 4" backTo={`/map/${province}`} right={random ? <motion.button type="button" disabled={rolling || !origin} onClick={reroll} aria-label="สุ่มรายละเอียดทริปใหม่" animate={reduced ? undefined : { rotate: rolling ? 180 : 0 }} transition={{ duration: 0.4 }} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-xl disabled:opacity-40">🎲</motion.button> : undefined} />
        <main className="flex flex-col gap-3 px-4 pb-5 pt-3">
          <div className="px-1 pb-1">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              {random && <span className="rounded-full bg-[#FBE3D2] px-2.5 py-1 text-xs font-semibold text-brown">🎲 ทริปที่สุ่มได้</span>}
              <h1 className="m-0 text-[26px] font-bold">{valueText(provinceLabel, 0)}</h1>
              {random && <button type="button" onClick={() => toggleLock('province')} aria-label={`${draft.locked.includes('province') ? 'ปลดล็อก' : 'ล็อก'}จังหวัดสำหรับการสุ่มบนแผนที่`} aria-pressed={draft.locked.includes('province')} className={`flex h-11 w-11 items-center justify-center rounded-full ${draft.locked.includes('province') ? 'bg-peach' : 'bg-white'}`}>{draft.locked.includes('province') ? '🔒' : '🔓'}</button>}
            </div>
            <p className="m-0 text-sm text-muted">{random ? 'ปรับให้เป็นทริปของคุณ' : 'เติมรายละเอียด แล้วไปเลือกที่เที่ยวกัน'}</p>
            {randomError && <p role="alert" className="mb-0 mt-3 rounded-[20px] bg-[#FBE3D2] p-3 text-sm text-brown">{randomError}</p>}
          </div>

          <DetailCard title="ต้นทาง" icon="📍">
            {random && origin && <p className="mb-3 mt-0 text-sm font-semibold text-brown">{valueText(PROVINCES.find(p => p.id === origin)?.label ?? origin, 1)}</p>}
            <OriginPicker value={origin} onChange={changeOrigin} />
            {originSaving && <p role="status" className="mb-0 mt-2 text-xs text-muted">กำลังจำต้นทางให้…</p>}
            {originNotice && <p role="status" className="mb-0 mt-2 text-xs text-muted">{originNotice}</p>}
          </DetailCard>

          <DetailCard title="ไปยังไง" icon="🧳" lockKey="transportTo" {...cardProps}>
            {!origin ? <p className="m-0 text-sm text-muted">เลือกต้นทางก่อน แล้วเราจะหาวิธีเดินทางให้</p> : travel.sameProvince ? <span className="inline-flex min-h-10 items-center rounded-full bg-peach px-4 text-sm font-semibold text-brown">{valueText('เที่ยวในจังหวัด', 2)}</span> : <>
              {random && transportLabel && <p className="mb-3 mt-0 text-sm font-semibold text-brown">{valueText(transportLabel, 2)}</p>}
              <div className="grid grid-cols-2 gap-2">
                {travel.options.map(option => {
                  const active = transportTo === option.id
                  const label = TRANSPORT_TO.find(t => t.id === option.id)?.label
                  return <button type="button" key={option.id} disabled={!option.available} onClick={() => updateDraft({ transportTo: option.id })} aria-pressed={active} className={`relative flex min-h-[150px] flex-col items-start gap-1 rounded-[22px] border p-3 text-left disabled:cursor-not-allowed disabled:opacity-35 ${active ? 'border-[#D9A27E] bg-peach' : 'border-transparent bg-cream'}`}>
                    <span aria-hidden="true" className="mb-1 text-2xl">{TRANSPORT_ICONS[option.id]}</span>
                    {active && <span aria-hidden="true" className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-brown text-xs text-white">✓</span>}
                    <span className="text-sm font-semibold">{label}</span>
                    <span className="text-xs text-[#4A3A30]">{formatHours(option.hours)}</span>
                    <span className="text-xs text-[#4A3A30]">{formatBaht(option.cost.min)}–{formatBaht(option.cost.max)}/{option.perVehicle ? 'คัน' : 'คน'}</span>
                    {option.note && <span className="mt-1 text-[11px] text-muted">{option.note}</span>}
                    {!option.available && <span className="text-[11px]">ยังไม่มีเส้นทางนี้</span>}
                  </button>
                })}
              </div>
              <p className="mb-0 mt-2 text-[11px] text-muted">เวลาและราคาโดยประมาณต่อเที่ยว</p>
            </>}
          </DetailCard>

          <DetailCard title="เที่ยวในพื้นที่" icon="🛵" lockKey="transportLocal" {...cardProps}>
            {random && <p className="mb-3 mt-0 text-sm font-semibold text-brown">{valueText(localLabel, 3)}</p>}
            <div className="flex flex-wrap gap-2">{TRANSPORT_LOCAL.map(mode => <button type="button" key={mode.id} onClick={() => updateDraft({ transportLocal: mode.id })} aria-pressed={transportLocal === mode.id} className={`min-h-11 rounded-full px-3.5 text-sm ${transportLocal === mode.id ? 'bg-peach font-semibold text-brown' : 'bg-cream text-[#4A3A30]'}`}><span aria-hidden="true">{LOCAL_ICONS[mode.id]} </span>{mode.label}{transportLocal === mode.id ? ' ✓' : ''}</button>)}</div>
          </DetailCard>

          <DetailCard title="วันเดินทาง" icon="🗓️" lockKey="dates" {...cardProps}>
            <div className="mb-4 grid grid-cols-2 gap-1 rounded-full bg-cream p-1">{[{ id: 'daytrip', label: 'ไปกลับวันเดียว' }, { id: 'overnight', label: 'ค้างคืน' }].map(type => <button key={type.id} type="button" aria-pressed={draft.tripType === type.id} onClick={() => changeType(type.id)} className={`min-h-11 rounded-full px-2 text-sm ${draft.tripType === type.id ? 'bg-peach font-semibold text-brown' : 'text-muted'}`}>{type.label}</button>)}</div>
            <div className="mb-3 flex items-center justify-between gap-2 rounded-[20px] bg-cream px-4 py-3">
              <span className="text-sm font-medium">{valueText(`${shortDate(draft.startDate)}${draft.tripType === 'overnight' ? ` – ${shortDate(draft.endDate)}` : ''}`, 4)}</span>
              {datesValid && <span className="shrink-0 text-xs text-brown">{valueText(`${days} วัน ${nights} คืน`, 5)}</span>}
            </div>
            <TripCalendar key={`${draft.province}:${rollVersion}`} startDate={draft.startDate} endDate={draft.endDate} tripType={draft.tripType} onChange={patch => updateDraft(patch)} />
            {draft.startDate && draft.startDate < localIso(new Date()) && <p role="alert" className="mb-0 mt-2 text-xs text-brown">วันเดินทางผ่านไปแล้ว เลือกวันใหม่ได้เลย</p>}
          </DetailCard>

          <DetailCard title="จังหวะ" icon="🌿" lockKey="pace" {...cardProps}>
            {random && <p className="mb-3 mt-0 text-sm font-semibold text-brown">{valueText(`${pace.label} · ${pace.perDay} ที่/วัน`, 6)}</p>}
            <div className="grid grid-cols-3 gap-1 rounded-[24px] bg-cream p-1">{PACES.map(item => <button key={item.id} type="button" onClick={() => updateDraft({ pace: item.id })} aria-pressed={draft.pace === item.id} className={`min-h-16 rounded-[21px] px-1 py-2 ${draft.pace === item.id ? 'bg-peach font-semibold text-brown' : 'text-[#4A3A30]'}`}><span className="block text-sm">{item.label}</span><span className="block text-xs font-normal">{item.perDay} ที่/วัน</span></button>)}</div>
          </DetailCard>

          <DetailCard title="งบประมาณทริป" icon="🪙">
            <div aria-live="polite" aria-atomic="true">
              <p className="m-0 text-[28px] font-bold text-brown">{formatBaht(estimate.total)}<span className="ml-2 text-xs font-normal text-muted">ทั้งทริป · {people} คน</span></p>
              <p className="mb-3 mt-0.5 text-xs text-muted">{formatBaht(estimate.perPerson)}/คน · งบ {formatBaht(estimate.budget)}</p>
              <div role="meter" aria-label="งบประมาณที่ใช้" aria-valuemin={0} aria-valuemax={Math.max(estimate.budget, estimate.total)} aria-valuenow={estimate.total} aria-valuetext={`${formatBaht(estimate.total)} จากงบ ${formatBaht(estimate.budget)}`} className="mb-4 h-2.5 overflow-hidden rounded-full bg-cream"><motion.div initial={false} animate={{ width: `${Math.min(100, estimate.total / Math.max(1, estimate.budget) * 100)}%` }} transition={{ duration: reduced ? 0 : 0.3 }} className={`h-full rounded-full ${estimate.over ? 'bg-orange' : 'bg-[#8BAA6E]'}`} /></div>
              <dl className="m-0 flex flex-col gap-2 text-sm">{[['เดินทาง', estimate.transport], ['ที่พัก', estimate.stay], ['อาหาร', estimate.food], ['เที่ยวในพื้นที่', estimate.local]].map(([label, cost]) => <div key={label} className="flex items-center justify-between"><dt className="text-muted">{label}</dt><dd className="m-0 font-medium">{formatBaht(cost)}</dd></div>)}</dl>
            </div>
            {estimate.over > 0 && <div className="mt-4 rounded-[20px] bg-[#FBE3D2] p-3"><p className="mb-2 mt-0 text-sm font-semibold text-brown">เกินงบ {formatBaht(estimate.over)} · ลองปรับดู</p><div className="flex flex-wrap gap-2">{alternatives.filter(alt => alt.patch.nights == null || datesValid).map(alt => <button key={alt.id} type="button" onClick={() => applyAlternative(alt)} className="min-h-11 rounded-full bg-white px-3 text-xs text-brown">{alt.label} · ลด {formatBaht(alt.saves)}</button>)}</div></div>}
            <p className="mb-0 mt-3 text-[11px] leading-relaxed text-muted">ประมาณการเบื้องต้น ยังไม่รวมค่าเข้าสถานที่ ราคาอาจเปลี่ยนตามวันเดินทาง</p>
          </DetailCard>

          {currentPlaces?.error && <div role="status" className="rounded-[22px] bg-white p-4 text-sm text-muted">ยังโหลดข้อมูลฤดูกาลไม่ได้ <button type="button" onClick={() => setAttempt(value => value + 1)} className="min-h-11 px-2 font-semibold text-brown underline underline-offset-4">ลองใหม่</button></div>}
          {warnings.length > 0 && <aside aria-label="ข้อควรรู้ก่อนเดินทาง" className="flex flex-col gap-2 rounded-[24px] bg-[#FBE3D2] p-4"><h2 className="m-0 text-sm font-semibold text-brown">☀️ ก่อนออกเดินทาง</h2>{warnings.map(warning => <p key={warning.placeId} className="m-0 text-xs leading-relaxed text-[#4A3A30]">{warning.message}</p>)}</aside>}
        </main>

        <div className="sticky bottom-0 mt-auto bg-cream px-4 pb-[max(20px,env(safe-area-inset-bottom))] pt-3">
          <button type="button" disabled={!canContinue} onClick={() => { updateDraft({ origin, transportTo, transportLocal }); slideNavigate(navigate, '/plan/swipe') }} className="flex h-14 w-full items-center justify-center rounded-full bg-brown text-base font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">ไปปัดการ์ด <span aria-hidden="true" className="ml-2">→</span></button>
        </div>
      </div>
    </div>
  )
}

export default function TripDetails() {
  const { draft } = useTripDraft()
  if (!draft.province) return <Navigate to="/map" replace />
  if (!draft.moods.length) return <Navigate to="/plan/mood" replace />
  return <DetailsForm key={draft.province} />
}
