import { useEffect, useId, useState } from 'react'
import { Navigate, useNavigate, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Check, ExternalLink, Info } from 'lucide-react'
import AppHeader from '../components/AppHeader'
import { slideNavigate } from '../components/SlideLink'
import TripOption from '../components/plan/TripOption'
import { longDate } from '../components/plan/transportFormat'
import { travelerCount, useTripDraft } from '../context/TripDraftContext'
import { PROVINCES } from '../data/options'
import { bookingUrl, getTrips } from '../lib/trip/schedules'

const MODES = ['plane', 'train', 'bus']
const TABS = [{ id: 'out', label: 'ขาไป' }, { id: 'back', label: 'ขากลับ' }]
const labelOf = (id) => PROVINCES.find((p) => p.id === id)?.label ?? id

function Tabs({ value, onChange, dates, picked, reduced }) {
  const id = useId()
  return (
    <div role="group" aria-label="ขาไป / ขากลับ" className="grid grid-cols-2 gap-1 rounded-full bg-white p-1">
      {TABS.map((tab) => (
        <motion.button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          aria-pressed={value === tab.id}
          whileTap={reduced ? undefined : { scale: 0.96 }}
          transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }}
          className={`relative isolate flex min-h-14 min-w-0 flex-col items-center justify-center rounded-full px-2 transition-colors duration-200 motion-reduce:transition-none ${value === tab.id ? 'text-brown' : 'text-[#4A3A30]'}`}
        >
          {value === tab.id && <motion.span aria-hidden="true" layoutId={reduced ? undefined : `${id}-tab`} className="absolute inset-0 -z-10 rounded-full bg-peach" transition={{ type: 'spring', duration: reduced ? 0 : 0.25, bounce: 0.12 }} />}
          <span className="flex items-center gap-1.5 text-sm font-semibold">
            {tab.label}
            <span aria-hidden="true" className="flex h-4 w-4 items-center justify-center">
              <span className={`flex h-4 w-4 items-center justify-center rounded-full bg-brown text-white transition-opacity duration-200 motion-reduce:transition-none ${picked[tab.id] ? 'opacity-100' : 'opacity-0'}`}><Check size={11} strokeWidth={3} /></span>
            </span>
          </span>
          <span className="text-xs text-muted">{longDate(dates[tab.id])}</span>
        </motion.button>
      ))}
    </div>
  )
}

function Skeleton({ reduced }) {
  return (
    <div aria-hidden="true" className="flex flex-col gap-3">
      {[0, 1, 2].map((i) => <div key={i} className={`h-[132px] rounded-[24px] bg-white ${reduced ? '' : 'animate-pulse'}`} />)}
    </div>
  )
}

function PickForm({ origin, province, mode }) {
  const { draft, updateDraft } = useTripDraft()
  const navigate = useNavigate()
  const reduced = useReducedMotion()
  const location = useLocation()
  // มาจากแผนรายวัน (เลือก/เปลี่ยนเที่ยว) → กลับไปแผน และเปิดแท็บตามขาที่กด
  const returnTo = location.state?.from === 'trip' ? '/plan/trip' : '/plan/details'
  const [tab, setTab] = useState(location.state?.direction === 'back' ? 'back' : 'out')
  const [attempt, setAttempt] = useState(0)
  const [result, setResult] = useState(null)
  const people = travelerCount(draft)
  const dates = { out: draft.startDate, back: draft.endDate }
  const booking = draft.transportBooking ?? { out: null, back: null }
  const key = `${origin}|${province}|${mode}|${dates.out}|${dates.back}|${attempt}`
  const current = result?.key === key ? result : null

  useEffect(() => {
    let active = true
    Promise.all([
      getTrips({ origin, province, mode, direction: 'out', date: dates.out }),
      getTrips({ origin, province, mode, direction: 'back', date: dates.back }),
    ]).then(
      ([out, back]) => { if (active) setResult({ key, out, back }) },
      () => { if (active) setResult({ key, error: true }) },
    )
    return () => { active = false }
    // key รวมทุกอินพุตแล้ว
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  const data = current?.[tab]
  const [from, to] = tab === 'out' ? [origin, province] : [province, origin]
  const selected = booking[tab]
  const isSelected = (trip) => selected?.code === trip.code && selected?.depart === trip.depart
  const bothPicked = Boolean(booking.out && booking.back)
  const updatedAt = data?.updatedAt ?? data?.route?.updated_at ?? null

  function select(trip) {
    const leg = isSelected(trip)
      ? null
      : { ...trip, routeId: trip.routeId ?? data.route.id, mode, date: dates[tab], from_station: trip.from_station ?? data.route.from_station, to_station: trip.to_station ?? data.route.to_station, transfer: trip.transfer !== undefined ? trip.transfer : data.route.transfer ?? null, origin, province }
    updateDraft((d) => ({ transportBooking: { ...(d.transportBooking ?? { out: null, back: null }), [tab]: leg } }))
  }

  const done = () => slideNavigate(navigate, returnTo, { back: true })

  return (
    <div className="min-h-svh bg-cream text-ink">
      <div className="mx-auto flex min-h-svh w-full max-w-[560px] flex-col lg:pt-4">
        <AppHeader title="เลือกเที่ยวไป-กลับ" crumb={`${labelOf(origin)} ⇄ ${labelOf(province)}`} backTo={returnTo} />
        <main className="flex flex-col gap-3 px-4 pb-[calc(150px+env(safe-area-inset-bottom))] pt-3">
          <Tabs value={tab} onChange={setTab} dates={dates} picked={{ out: Boolean(booking.out), back: Boolean(booking.back) }} reduced={reduced} />

          <p className="m-0 px-1 text-sm font-semibold">{labelOf(from)} → {labelOf(to)}</p>

          {!current ? <Skeleton reduced={reduced} /> : current.error ? (
            <div role="alert" className="rounded-[24px] bg-white p-4 text-sm text-muted">
              โหลดตารางเดินทางไม่สำเร็จ <button type="button" onClick={() => setAttempt((v) => v + 1)} className="min-h-11 px-2 font-semibold text-brown underline underline-offset-4">ลองใหม่</button>
            </div>
          ) : (
            <motion.div key={tab} initial={reduced ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.2 }} className="flex flex-col gap-3">
              {data.trips.length === 0 ? (
                <div className="rounded-[24px] bg-white p-5 text-center">
                  <p className="m-0 text-base font-semibold">ยังไม่มีเที่ยวในวันนี้</p>
                  <p className="mb-0 mt-1 text-sm text-muted">ลองเปลี่ยนวันเดินทาง หรือดูเที่ยวล่าสุดที่เว็บจองได้เลย</p>
                </div>
              ) : data.trips.map((trip) => (
                <TripOption key={`${trip.code}-${trip.depart}`} trip={trip} route={data.route} selected={isSelected(trip)} onSelect={() => select(trip)} />
              ))}

              <p className="m-0 flex items-start gap-1.5 px-1 text-xs leading-relaxed text-muted">
                <Info size={14} strokeWidth={2} aria-hidden="true" className="mt-0.5 shrink-0" />
                {data.isMock
                  ? <span><span className="mr-1.5 inline-block rounded-full bg-[#FBE3D2] px-2 py-0.5 font-semibold text-brown">ข้อมูลตัวอย่าง</span>เวลาและราคาคำนวณจากสูตร ยังไม่ใช่ตารางจริง</span>
                  : <span>ตารางอ้างอิง{updatedAt ? ` ณ ${new Date(updatedAt).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' })}` : ''} ราคาจริงดูที่เว็บจอง</span>}
              </p>

              <motion.a
                href={bookingUrl({ mode, from, to, date: dates[tab], people, fromStation: data.route.from_station, toStation: data.route.to_station })}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={reduced ? undefined : { scale: 0.96 }}
                transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full border-[1.5px] border-[#D9CFC5] bg-white text-sm font-semibold text-ink"
              >
                ไปจองจริง <ExternalLink size={16} strokeWidth={2} aria-hidden="true" />
              </motion.a>
            </motion.div>
          )}
        </main>

        <div className="plan-sticky-bar sticky bottom-0 z-10 mt-auto bg-cream px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3">
          <motion.button type="button" disabled={!bothPicked} onClick={done} whileTap={reduced || !bothPicked ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} className="flex h-14 w-full items-center justify-center rounded-full bg-brown text-base font-semibold text-white transition-colors duration-200 motion-reduce:transition-none disabled:cursor-not-allowed disabled:opacity-40">ใช้เที่ยวนี้</motion.button>
          <button type="button" onClick={done} className="mt-1 flex min-h-11 w-full items-center justify-center text-sm font-semibold text-brown">เลือกทีหลัง</button>
        </div>
      </div>
    </div>
  )
}

export default function TransportPick() {
  const { draft } = useTripDraft()
  const ok = draft.province && draft.origin && draft.tripType === 'overnight' && MODES.includes(draft.transportTo) && draft.startDate && draft.endDate
  if (!ok) return <Navigate to="/plan/details" replace />
  return <PickForm key={`${draft.origin}:${draft.province}:${draft.transportTo}`} origin={draft.origin} province={draft.province} mode={draft.transportTo} />
}
