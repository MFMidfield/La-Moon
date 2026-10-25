import { useEffect, useMemo, useRef, useState } from 'react'
import { Navigate, useNavigate, useNavigationType } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Bike, BusFront, CalendarDays, Car, CarFront, CarTaxiFront, Check, ChevronRight, Coins, Dices, Luggage, MapPin, Plane, Sailboat, Sun, Ticket, TrainFront } from 'lucide-react'
import AppHeader from '../components/AppHeader'
import { slideNavigate } from '../components/SlideLink'
import OriginPicker from '../components/plan/OriginPicker'
import ScrambleText from '../components/plan/ScrambleText'
import DetailCard from '../components/plan/DetailCard'
import TripCalendar from '../components/plan/TripCalendar'
import { createRollReveal } from '../components/plan/rollReveal'
import { arrivalText, legTimes, priceMid } from '../components/plan/transportFormat'
import { useAuth } from '../context/AuthContext'
import { tripLength, travelerCount, useTripDraft } from '../context/TripDraftContext'
import { PROVINCES } from '../data/options'
import { BKK_TRANSIT_PROVINCES, FEATURES, TRANSPORT_LOCAL, TRANSPORT_TO } from '../data/travel'
import { listPlaces } from '../lib/api/places'
import { updateHomeProvince } from '../lib/api/profile'
import { cheaperAlternatives, estimateTrip, formatBaht } from '../lib/trip/budget'
import { randomizeTrip } from '../lib/trip/random'
import { seasonWarnings } from '../lib/trip/season'
import { formatHours, travelOptions } from '../lib/trip/travel'

const TRANSPORT_ICONS = { plane: Plane, train: TrainFront, bus: BusFront, car: Car }
const LOCAL_ICONS = { own_car: Car, transit: TrainFront, rental_car: CarFront, motorbike: Bike, public: CarTaxiFront, tour: Sailboat }
const localIso = date => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
const addDate = (value, amount) => { const date = new Date(`${value}T12:00:00`); date.setDate(date.getDate() + amount); return localIso(date) }
const tomorrowIso = () => addDate(localIso(new Date()), 1)
const shortDate = value => value ? new Date(`${value}T12:00:00`).toLocaleDateString('th-TH', { day: 'numeric', month: 'short' }) : 'เลือกวัน'

function SelectionCheck({ selected, reduced }) {
  return <AnimatePresence initial={false}>{selected && <motion.span aria-hidden="true" initial={reduced ? false : { scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: reduced ? 1 : 0.6, opacity: 0 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2, bounce: 0.2 }} className="flex h-5 w-5 items-center justify-center rounded-full bg-brown text-white"><Check size={13} strokeWidth={2} /></motion.span>}</AnimatePresence>
}

// แถบเลือก 2 ช่อง: พื้นพีชเลื่อนแนวนอนในรางของตัวเอง (ไม่ใช้ layoutId — การ์ดด้านบนเปลี่ยนความสูงแล้วแถบไม่ลอยข้ามจอ)
function DetailsSegments({ label, value, options, onChange, reduced }) {
  const index = Math.max(0, options.findIndex(option => option.id === value))
  return <div role="group" aria-label={label} className="relative isolate mb-4 grid grid-cols-2 gap-1 rounded-full bg-cream p-1">
    <motion.span aria-hidden="true" className="absolute inset-y-1 left-1 -z-10 w-[calc(50%-6px)] rounded-full bg-peach" initial={false} animate={{ x: index === 0 ? '0%' : 'calc(100% + 4px)' }} transition={reduced ? { duration: 0 } : { type: 'spring', duration: 0.3, bounce: 0.12 }} />
    {options.map(option => <motion.button key={option.id} type="button" onClick={() => onChange(option.id)} aria-pressed={value === option.id} whileTap={reduced ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} className={`min-h-11 min-w-0 rounded-full px-2 text-sm font-semibold transition-colors duration-200 motion-reduce:transition-none ${value === option.id ? 'text-brown' : 'text-[#4A3A30]'}`}>
      <span className="block">{option.label}</span>
    </motion.button>)}
  </div>
}

// การ์ดที่โผล่/หายตามรูปแบบทริป: ยืด-หดความสูงแทนการกระโดด (marginTop ชดเชย gap-3 ของรายการ)
function Collapse({ show, reduced, children }) {
  return <AnimatePresence initial={false}>
    {show && <motion.div key="content" className="overflow-hidden" initial={reduced ? false : { height: 0, opacity: 0, marginTop: -12 }} animate={{ height: 'auto', opacity: 1, marginTop: 0 }} exit={reduced ? { opacity: 0, transition: { duration: 0 } } : { height: 0, opacity: 0, marginTop: -12 }} transition={{ type: 'spring', duration: 0.35, bounce: 0 }}>{children}</motion.div>}
  </AnimatePresence>
}

function DetailsForm() {
  const { draft, updateDraft } = useTripDraft()
  const { user, profile, refreshProfile } = useAuth()
  const navigate = useNavigate()
  const navigationType = useNavigationType()
  const [entryRollId] = useState(draft.rollId)
  const reduced = useReducedMotion()
  const [placesResult, setPlacesResult] = useState(null)
  const [attempt, setAttempt] = useState(0)
  const [originSaving, setOriginSaving] = useState(false)
  const [originNotice, setOriginNotice] = useState('')
  const [rolling, setRolling] = useState(false)
  const [randomError, setRandomError] = useState('')
  const defaulted = useRef(false)
  const saveSequence = useRef(0)
  const origin = draft.origin ?? profile?.home_province ?? null
  const province = draft.province
  const provinceLabel = PROVINCES.find(p => p.id === province)?.label ?? province
  const random = draft.mode === 'random'
  const travel = useMemo(() => travelOptions(origin, province), [origin, province])
  const overnight = draft.tripType === 'overnight'
  const showIntercity = FEATURES.intercityTransport && overnight
  const transportTo = showIntercity && origin && !travel.sameProvince
    ? travel.options.find(o => o.id === draft.transportTo && o.available)?.id ?? travel.options.find(o => o.available)?.id ?? null
    : null
  const supportsTransit = BKK_TRANSIT_PROVINCES.includes(province)
  const localAll = TRANSPORT_LOCAL.filter(mode => mode.id !== 'transit' || supportsTransit)
  const driving = transportTo === 'car'
  // รถส่วนตัวขึ้นเฉพาะตอนขับรถไปเอง (มีตัวเลือกเดียว) — ไม่งั้นไม่มีรถส่วนตัว รายการจึงไม่เปลี่ยนตอนสลับวันเดียว/ค้างคืน
  const localOptions = driving ? localAll.filter(mode => mode.id === 'own_car') : localAll.filter(mode => mode.id !== 'own_car')
  const fallbackLocal = driving ? 'own_car' : supportsTransit ? 'transit' : 'public'
  const transportLocal = localOptions.find(mode => mode.id === draft.transportLocal)?.id ?? fallbackLocal
  const { days, nights } = tripLength(draft)
  const people = travelerCount(draft)
  const requestKey = `${province}:${attempt}`
  const currentPlaces = placesResult?.key === requestKey ? placesResult : null
  const places = currentPlaces?.places ?? []
  const estimateInput = { origin, province, transportTo, transportLocal, budget: draft.budget, people, days, nights, places: [] }
  const baseEstimate = estimateTrip(estimateInput)
  const booking = draft.transportBooking ?? { out: null, back: null }
  const legOk = (leg, date) => leg && leg.mode === transportTo && leg.date === date && leg.origin === origin && leg.province === province ? leg : null
  const validOut = legOk(booking.out, draft.startDate)
  const validBack = legOk(booking.back, draft.endDate)
  const bookedCost = validOut && validBack ? Math.round((priceMid(validOut.price_thb) + priceMid(validBack.price_thb)) * people) : null
  const bookedTotal = bookedCost == null ? baseEstimate.total : baseEstimate.total - baseEstimate.transport + bookedCost
  const estimate = bookedCost == null ? baseEstimate : { ...baseEstimate, transport: bookedCost, total: bookedTotal, perPerson: Math.round(bookedTotal / people), over: Math.max(0, bookedTotal - baseEstimate.budget) }
  const alternatives = estimate.over ? cheaperAlternatives(estimateInput).filter(alt => showIntercity || !alt.id.startsWith('to:')) : []
  const bookingOpen = Boolean(draft.startDate && draft.endDate)
  const warnings = seasonWarnings(places, draft.startDate, draft.endDate)
  const datesValid = Boolean(draft.startDate && draft.startDate >= localIso(new Date()) && draft.endDate && (draft.tripType === 'daytrip' ? draft.endDate === draft.startDate : draft.endDate > draft.startDate))
  const canContinue = Boolean(origin && datesValid && (!showIntercity || travel.sameProvince || transportTo))

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
    if (draft.transportTo !== transportTo || (booking.out ?? null) !== validOut || (booking.back ?? null) !== validBack) patch.transportBooking = { out: draft.transportTo !== transportTo ? null : validOut, back: draft.transportTo !== transportTo ? null : validBack }
    if (!defaulted.current) {
      defaulted.current = true
      if (!random && !draft.startDate) patch.tripType = travel.dayTripSuggested ? 'daytrip' : 'overnight'
      // ค่าเริ่มต้น "พรุ่งนี้" เฉพาะยังไม่มีวัน/วันผ่านไปแล้ว — กลับมาหน้านี้วันที่เลือกไว้ต้องอยู่
      const noDate = !draft.startDate || draft.startDate < localIso(new Date())
      if (noDate && travel.sameProvince && (patch.tripType ?? draft.tripType) === 'daytrip') Object.assign(patch, { startDate: tomorrowIso(), endDate: tomorrowIso() })
    }
    if (Object.keys(patch).length) updateDraft(patch)
  }, [origin, draft.origin, draft.transportTo, draft.transportLocal, draft.startDate, draft.tripType, random, travel.dayTripSuggested, travel.sameProvince, transportTo, transportLocal, booking.out, booking.back, validOut, validBack, updateDraft])

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

  function selectTransport(id) {
    if (id === transportTo) return
    updateDraft({ transportTo: id, transportBooking: { out: null, back: null } })
  }

  function changeType(type) {
    if (type === 'daytrip' && !draft.startDate && travel.sameProvince) return updateDraft({ tripType: type, startDate: tomorrowIso(), endDate: tomorrowIso() })
    updateDraft({ tripType: type, endDate: !draft.startDate ? null : type === 'daytrip' ? draft.startDate : draft.endDate && draft.endDate > draft.startDate ? draft.endDate : addDate(draft.startDate, 1) })
  }

  async function reroll() {
    if (rolling || !origin) return
    setRolling(true)
    setRandomError('')
    try {
      const loaded = currentPlaces?.places ?? await listPlaces({ province })
      const now = new Date()
      now.setHours(12, 0, 0, 0)
      const result = randomizeTrip({ draft: { ...draft, origin, locked: ['province'] }, places: loaded, today: now })
      if (!result.patch) {
        setRandomError(result.needMore ? `งบยังไม่พอ ลองเพิ่มอีก ${formatBaht(result.needMore)} หรือลองเปลี่ยนมู้ด` : 'ยังไม่มีที่เที่ยวตรงมู้ดในจังหวัดนี้ ลองเปลี่ยนมู้ด')
        return
      }
      const dayTripHere = result.patch.tripType === 'daytrip' && travelOptions(origin, result.patch.province).sameProvince
      updateDraft({ ...result.patch, ...(dayTripHere ? { startDate: tomorrowIso(), endDate: tomorrowIso() } : {}), ...createRollReveal(), swipeKey: null, swipeHistory: [], itineraryKey: null, itinerary: null })
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
    return random ? <ScrambleText key={`${draft.rollId}:${index}:${text}`} revealKey={`details-${index}`} text={text} play={navigationType !== 'POP' || draft.rollId !== entryRollId} delay={index * 90} className={className} /> : <span className={className}>{text}</span>
  }
  const transportLabel = travel.sameProvince && origin ? 'เที่ยวในจังหวัด' : TRANSPORT_TO.find(t => t.id === transportTo)?.label
  const localLabel = TRANSPORT_LOCAL.find(t => t.id === transportLocal)?.label

  return (
    <div className="min-h-svh bg-cream text-ink">
      <div className="mx-auto flex min-h-svh w-full max-w-[560px] flex-col lg:pt-4">
        <AppHeader crumb={provinceLabel} title="รายละเอียดทริป" step="3 / 4" backTo={`/map/${province}`} right={random ? <motion.button type="button" disabled={rolling || !origin} onClick={reroll} aria-label="สุ่มรายละเอียดทริปใหม่" whileTap={reduced ? undefined : { scale: 0.96 }} animate={reduced ? undefined : { rotate: rolling ? 180 : 0 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.25 }} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brown transition-colors duration-200 motion-reduce:transition-none disabled:opacity-40"><Dices size={22} strokeWidth={2} aria-hidden="true" /></motion.button> : undefined} />
        <main className="flex flex-col gap-3 px-4 pb-[calc(112px+env(safe-area-inset-bottom))] pt-3">
          <div className="px-1 pb-1">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              {random && <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FBE3D2] px-2.5 py-1 text-xs font-semibold text-brown"><Dices size={14} strokeWidth={2} aria-hidden="true" />ทริปที่สุ่มได้</span>}
              <h1 className="m-0 text-[26px] font-bold">{valueText(provinceLabel, 0)}</h1>
            </div>
            <p className="m-0 text-sm text-muted">{random ? 'ปรับให้เป็นทริปของคุณ' : 'เติมรายละเอียด แล้วไปเลือกที่เที่ยวกัน'}</p>
            {randomError && <p role="alert" className="mb-0 mt-3 rounded-[20px] bg-[#FBE3D2] p-3 text-sm text-brown">{randomError}</p>}
          </div>

          <DetailCard title="ต้นทาง" icon={<MapPin size={19} strokeWidth={2} />}>
            {random && origin && <p className="mb-3 mt-0 text-sm font-semibold text-brown">{valueText(PROVINCES.find(p => p.id === origin)?.label ?? origin, 1)}</p>}
            <OriginPicker value={origin} onChange={changeOrigin} />
            {originSaving && <p role="status" className="mb-0 mt-2 text-xs text-muted">กำลังจำต้นทางให้…</p>}
            {originNotice && <p role="status" className="mb-0 mt-2 text-xs text-muted">{originNotice}</p>}
          </DetailCard>

          <Collapse show={showIntercity} reduced={reduced}><DetailCard title="ไปยังไง" icon={<Luggage size={19} strokeWidth={2} />}>
            {!origin ? <p className="m-0 flex items-center gap-2 rounded-[20px] bg-cream px-4 py-3 text-sm text-[#4A3A30]"><MapPin size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-brown" />เลือกต้นทางก่อน แล้วจะแสดงวิธีเดินทาง</p> : travel.sameProvince ? <span className="inline-flex min-h-10 items-center rounded-full bg-peach px-4 text-sm font-semibold text-brown">{valueText('เที่ยวในจังหวัด', 2)}</span> : <>
              {random && transportLabel && <p className="mb-3 mt-0 text-sm font-semibold text-brown">{valueText(transportLabel, 2)}</p>}
              <div className="grid grid-cols-2 gap-2">
                {travel.options.map(option => {
                  const active = transportTo === option.id
                  const label = TRANSPORT_TO.find(t => t.id === option.id)?.label
                  const Icon = TRANSPORT_ICONS[option.id]
                  return <motion.button type="button" key={option.id} disabled={!option.available} onClick={() => selectTransport(option.id)} aria-pressed={active} whileTap={reduced || !option.available ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} className={`relative flex min-h-[150px] min-w-0 flex-col items-start gap-1 rounded-[22px] border p-3 text-left transition-colors duration-200 motion-reduce:transition-none disabled:cursor-not-allowed disabled:opacity-35 ${active ? 'border-[#D9A27E] bg-peach' : 'border-transparent bg-cream'}`}>
                    <Icon aria-hidden="true" size={24} strokeWidth={2} className="mb-1 text-brown" />
                    <span className="absolute right-3 top-3 h-5 w-5"><SelectionCheck selected={active} reduced={reduced} /></span>
                    <span className="text-sm font-semibold">{label}</span>
                    <span className="text-xs text-[#4A3A30]">{formatHours(option.hours)}</span>
                    <span className="text-xs text-[#4A3A30]">{formatBaht(option.cost.min)}–{formatBaht(option.cost.max)}/{option.perVehicle ? 'คัน' : 'คน'}</span>
                    {option.note && <span className="mt-1 text-[11px] text-muted">{option.note}</span>}
                    {!option.available && <span className="text-[11px]">ยังไม่มีเส้นทางนี้</span>}
                  </motion.button>
                })}
              </div>
              <p className="mb-0 mt-2 text-[11px] text-muted">เวลาและราคาโดยประมาณต่อเที่ยว</p>
              {transportTo && <div className="mt-3 min-h-[76px]">
                {transportTo === 'car' ? <div className="flex min-h-[76px] items-center justify-between gap-3 rounded-[22px] bg-cream px-4 py-3">
                  <div className="min-w-0">
                    <label htmlFor="car-depart" className="block text-sm font-semibold">ออกเดินทาง</label>
                    <p className="m-0 mt-0.5 text-xs text-[#4A3A30]">ถึงประมาณ {arrivalText(draft.carDepart || '06:00', travel.options.find(o => o.id === 'car')?.hours ?? 0)}</p>
                  </div>
                  <input id="car-depart" type="time" value={draft.carDepart || '06:00'} onChange={e => e.target.value && updateDraft({ carDepart: e.target.value })} className="h-11 w-[120px] shrink-0 rounded-full border-0 bg-white px-4 text-center text-sm font-semibold text-ink outline-none focus-visible:ring-2 focus-visible:ring-brown" />
                </div> : <motion.button type="button" disabled={!bookingOpen} onClick={() => slideNavigate(navigate, '/plan/transport')} whileTap={reduced || !bookingOpen ? undefined : { scale: 0.98 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} className="flex min-h-[76px] w-full items-center gap-3 rounded-[22px] bg-cream px-4 py-3 text-left transition-colors duration-200 motion-reduce:transition-none disabled:cursor-not-allowed disabled:opacity-60">
                  <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brown"><Ticket size={18} strokeWidth={2} /></span>
                  <span className="flex min-w-0 grow flex-col">
                    <span className="text-sm font-semibold">เลือกเที่ยวไป-กลับ</span>
                    {bookingOpen ? <>
                      <span className={`truncate text-xs ${validOut ? 'text-brown' : 'text-muted'}`}>ไป {validOut ? `${validOut.code} ${legTimes(validOut)}` : 'ยังไม่ได้เลือก'}</span>
                      <span className={`truncate text-xs ${validBack ? 'text-brown' : 'text-muted'}`}>กลับ {validBack ? `${validBack.code} ${legTimes(validBack)}` : 'ยังไม่ได้เลือก'}</span>
                    </> : <span className="text-xs text-muted">เลือกวันเดินทางก่อน</span>}
                  </span>
                  <ChevronRight size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-muted" />
                </motion.button>}
              </div>}
            </>}
          </DetailCard></Collapse>

          <DetailCard title="เที่ยวในพื้นที่" icon={<Bike size={19} strokeWidth={2} />}>
            {random && <p className="mb-3 mt-0 text-sm font-semibold text-brown">{valueText(localLabel, 3)}</p>}
            <div className={`grid gap-2 ${localOptions.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>{localOptions.map(mode => {
              const Icon = LOCAL_ICONS[mode.id]
              const active = transportLocal === mode.id
              return <motion.button type="button" key={mode.id} onClick={() => updateDraft({ transportLocal: mode.id })} aria-pressed={active} whileTap={reduced ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} className={`flex h-16 min-w-0 items-center gap-1.5 rounded-[22px] px-2 text-left text-[13px] font-medium transition-colors duration-200 motion-reduce:transition-none ${active ? 'bg-peach text-brown' : 'bg-cream text-[#4A3A30]'}`}><Icon size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="min-w-0 flex-1 leading-snug">{mode.label}</span><span className="h-5 w-5 shrink-0"><SelectionCheck selected={active} reduced={reduced} /></span></motion.button>
            })}</div>
            {driving && <p className="mb-0 mt-2 text-[11px] text-muted">ขับรถไปเอง ใช้รถคันเดิมเที่ยวต่อในพื้นที่</p>}
          </DetailCard>

          <DetailCard title="วันเดินทาง" icon={<CalendarDays size={19} strokeWidth={2} />}>
            <DetailsSegments label="รูปแบบวันเดินทาง" value={draft.tripType} options={[{ id: 'daytrip', label: 'ไปกลับวันเดียว' }, { id: 'overnight', label: 'ค้างคืน' }]} onChange={changeType} reduced={reduced} />
            <div className="mb-3 flex items-center justify-between gap-2 rounded-[20px] bg-cream px-4 py-3">
              <span className="text-sm font-medium">{valueText(`${shortDate(draft.startDate)}${draft.tripType === 'overnight' ? ` – ${shortDate(draft.endDate)}` : ''}`, 4)}</span>
              {datesValid && <span className="shrink-0 text-xs text-brown">{valueText(`${days} วัน ${nights} คืน`, 5)}</span>}
            </div>
            <TripCalendar key={`${draft.province}:${draft.rollId}`} startDate={draft.startDate} endDate={draft.endDate} tripType={draft.tripType} onChange={patch => updateDraft(patch)} />
            {draft.startDate && draft.startDate < localIso(new Date()) && <p role="alert" className="mb-0 mt-2 text-xs text-brown">วันเดินทางผ่านไปแล้ว เลือกวันใหม่ได้เลย</p>}
          </DetailCard>

          <DetailCard title="งบประมาณทริป" icon={<Coins size={19} strokeWidth={2} />}>
            <div aria-live="polite" aria-atomic="true">
              <p className="m-0 text-[28px] font-bold text-brown">{formatBaht(estimate.total)}<span className="ml-2 text-xs font-normal text-muted">ทั้งทริป · {people} คน</span></p>
              <p className="mb-3 mt-0.5 text-xs text-muted">{formatBaht(estimate.perPerson)}/คน · งบ {formatBaht(estimate.budget)}</p>
              <div role="meter" aria-label="งบประมาณที่ใช้" aria-valuemin={0} aria-valuemax={Math.max(estimate.budget, estimate.total)} aria-valuenow={estimate.total} aria-valuetext={`${formatBaht(estimate.total)} จากงบ ${formatBaht(estimate.budget)}`} className="mb-4 h-2.5 overflow-hidden rounded-full bg-cream"><motion.div initial={false} animate={{ width: `${Math.min(100, estimate.total / Math.max(1, estimate.budget) * 100)}%` }} transition={{ duration: reduced ? 0 : 0.3 }} className={`h-full rounded-full ${estimate.over ? 'bg-orange' : 'bg-[#8BAA6E]'}`} /></div>
              <dl className="m-0 flex flex-col gap-2 text-sm">{[['เดินทาง', estimate.transport], ['ที่พัก', estimate.stay], ['อาหาร', estimate.food], ['เที่ยวในพื้นที่', estimate.local]].map(([label, cost]) => <div key={label} className="flex items-center justify-between"><dt className="text-muted">{label}{label === 'เดินทาง' && bookedCost != null && <span className="ml-1.5 text-[11px]">ตามเที่ยวที่เลือก</span>}</dt><dd className="m-0 font-medium">{formatBaht(cost)}</dd></div>)}</dl>
            </div>
            {estimate.over > 0 && <div className="mt-4 rounded-[20px] bg-[#FBE3D2] p-3"><p className="mb-2 mt-0 text-sm font-semibold text-brown">เกินงบ {formatBaht(estimate.over)} · ลองปรับดู</p><div className="flex flex-wrap gap-2">{alternatives.filter(alt => alt.patch.nights == null || datesValid).map(alt => <motion.button key={alt.id} type="button" onClick={() => applyAlternative(alt)} whileTap={reduced ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} className="min-h-11 rounded-full bg-white px-3 text-xs text-brown transition-colors duration-200 motion-reduce:transition-none">{alt.label} · ลด {formatBaht(alt.saves)}</motion.button>)}</div></div>}
            <p className="mb-0 mt-3 text-[11px] leading-relaxed text-muted">ประมาณการเบื้องต้น ยังไม่รวมค่าเข้าสถานที่ ราคาอาจเปลี่ยนตามวันเดินทาง</p>
          </DetailCard>

          {currentPlaces?.error && <div role="status" className="rounded-[22px] bg-white p-4 text-sm text-muted">ยังโหลดข้อมูลฤดูกาลไม่ได้ <button type="button" onClick={() => setAttempt(value => value + 1)} className="min-h-11 px-2 font-semibold text-brown underline underline-offset-4">ลองใหม่</button></div>}
          {warnings.length > 0 && <aside aria-label="ข้อควรรู้ก่อนเดินทาง" className="flex flex-col gap-2 rounded-[24px] bg-[#FBE3D2] p-4"><h2 className="m-0 flex items-center gap-2 text-sm font-semibold text-brown"><Sun size={18} strokeWidth={2} aria-hidden="true" />ก่อนออกเดินทาง</h2>{warnings.map(warning => <p key={warning.placeId} className="m-0 text-xs leading-relaxed text-[#4A3A30]">{warning.message}</p>)}</aside>}
        </main>

        <div className="plan-sticky-bar sticky bottom-0 z-10 mt-auto bg-cream px-4 pb-[max(20px,env(safe-area-inset-bottom))] pt-3">
          <motion.button type="button" disabled={!canContinue} whileTap={reduced || !canContinue ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} onClick={() => { updateDraft({ origin, transportTo, transportLocal }); slideNavigate(navigate, '/plan/swipe') }} className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brown text-base font-semibold text-white transition-colors duration-200 motion-reduce:transition-none disabled:cursor-not-allowed disabled:opacity-40">ไปปัดการ์ด <ArrowRight aria-hidden="true" size={18} strokeWidth={2} /></motion.button>
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
