import { ChevronRight } from 'lucide-react'
import SlideLink from '../SlideLink'
import { Moon } from '../icons'
import { MOODS, PROVINCES } from '../../data/options'
import { normalizeDays, thaiDate } from '../trip/itinerary'

const provinceLabel = (id) => PROVINCES.find((p) => p.id === id)?.label ?? id
const moodLabel = (id) => MOODS.find((m) => m.id === id)?.label ?? id

function TripRow({ trip }) {
  const count = normalizeDays(trip.days ?? []).reduce((sum, day) => sum + day.items.length, 0)
  const today = new Date()
  const start = trip.start_date ? new Date(`${trip.start_date}T12:00:00`) : null
  const countdown = start ? Math.round((Date.UTC(start.getFullYear(), start.getMonth(), start.getDate()) - Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())) / 86400000) : 0
  const moods = (trip.moods ?? []).slice(0, 2).map(moodLabel)
  const meta = [`${count} ที่`, ...moods].join(' · ')

  return (
    <SlideLink to={`/trips/${trip.id}`} className="flex min-h-[68px] items-center gap-3 rounded-[24px] bg-white px-3.5 py-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FBE3D2]">
        <Moon size={20} fill="#E8793A" />
      </span>
      <span className="flex min-w-0 grow flex-col">
        <span className="flex flex-wrap items-center gap-2 text-base font-semibold">{provinceLabel(trip.province)}{countdown > 0 && <span className="rounded-full bg-peach px-2 py-0.5 text-[11px] text-brown">อีก {countdown} วัน</span>}</span>
        {trip.start_date && <span className="mt-0.5 text-[13px] text-brown">{thaiDate(trip.start_date)}{trip.end_date && trip.end_date !== trip.start_date ? ` – ${thaiDate(trip.end_date)}` : ''}</span>}
        <span className="truncate text-[13px] text-muted">{meta}</span>
      </span>
      <ChevronRight size={18} strokeWidth={2} className="shrink-0 text-muted" aria-hidden="true" />
    </SlideLink>
  )
}

// ทริปของฉัน: loading / error / ว่าง / รายการ
export default function TripList({ status, trips }) {
  let body
  if (status === 'loading') {
    body = [0, 1].map((i) => <div key={i} className="h-[68px] animate-pulse motion-reduce:animate-none rounded-[24px] bg-white/70" aria-hidden="true" />)
  } else if (status === 'error') {
    body = (
      <p role="alert" className="m-0 px-1.5 text-[13px] text-[#C0392B] lg:col-span-2">
        โหลดทริปไม่สำเร็จ ลองรีเฟรชหน้าอีกครั้ง
      </p>
    )
  } else if (!trips.length) {
    body = (
      <div className="rounded-[24px] bg-white px-5 py-5 text-center text-sm leading-[1.6] text-[#4A3A30] lg:col-span-2 lg:py-10">
        ยังไม่มีทริปเลย ลองเริ่มวางทริปแล้วปัดการ์ด
        <br />
        ทริปแรกของคุณจะมาอยู่ตรงนี้
      </div>
    )
  } else {
    body = trips.map((trip) => <TripRow key={trip.id} trip={trip} />)
  }

  return (
    <section className="mt-8 lg:col-start-1 lg:row-span-2 lg:row-start-3 lg:mt-5">
      <h2 className="m-0 px-[22px] text-[22px] font-bold lg:px-0">ทริปของฉัน</h2>
      <div className="mx-4 mt-3 flex flex-col gap-2.5 lg:mx-0 lg:mt-4 lg:grid lg:grid-cols-2 lg:gap-4">{body}</div>
    </section>
  )
}
