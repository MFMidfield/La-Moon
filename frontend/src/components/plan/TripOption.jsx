import { ArrowRight, Bus } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import CheckPop from '../trip/CheckPop'
import { formatBaht } from '../../lib/trip/budget'
import { formatDuration, tripMinutes } from './transportFormat'

// การ์ดหนึ่งเที่ยว: แตะเลือก/แตะซ้ำเพื่อยกเลิก (ขอบ 1px โปร่งใสตลอด ไม่ขยับ layout)
export default function TripOption({ trip, route, selected, onSelect }) {
  const reduced = useReducedMotion()
  const { min, max } = trip.price_thb ?? {}
  const price = min == null ? null : min === max ? formatBaht(min) : `${formatBaht(min)}–${formatBaht(max)}`
  const transfer = route?.transfer
  const detail = [trip.class, trip.note].filter(Boolean).join(' · ')

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      whileTap={reduced ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }}
      className={`flex w-full flex-col gap-2 rounded-[24px] border p-4 text-left transition-colors duration-200 motion-reduce:transition-none ${selected ? 'border-[#D9A27E] bg-peach' : 'border-transparent bg-white'}`}
    >
      <span className="flex items-start justify-between gap-3">
        <span className="flex min-w-0 flex-col">
          <span className="flex items-center gap-2 text-[22px] font-bold leading-tight">
            {trip.depart}
            <ArrowRight size={18} strokeWidth={2} aria-hidden="true" className="text-brown" />
            {trip.arrive}
            {trip.arrive_next_day && <span className="rounded-full bg-[#FBE3D2] px-2 py-0.5 text-xs font-semibold text-brown">+1</span>}
          </span>
          <span className="mt-0.5 text-xs text-muted">ใช้เวลา {formatDuration(tripMinutes(trip))}</span>
        </span>
        <CheckPop selected={selected} />
      </span>

      <span className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-sm">
        <span className="font-medium">{trip.operator}<span className="font-normal text-muted"> · {trip.code}</span></span>
        {price && <span className="font-semibold text-brown">{price}<span className="text-xs font-normal text-muted">/คน</span></span>}
      </span>

      {detail && <span className="text-xs text-[#4A3A30]">{detail}</span>}
      {route?.from_station && <span className="text-xs text-muted">{route.from_station} → {route.to_station}</span>}
      {transfer && (
        <span className="flex items-start gap-1.5 rounded-[16px] bg-cream px-3 py-2 text-xs text-[#4A3A30]">
          <Bus size={14} strokeWidth={2} aria-hidden="true" className="mt-0.5 shrink-0 text-brown" />
          <span>{transfer.to_city_minutes ? `ต่อรถเข้าตัวเมืองอีก ~${transfer.to_city_minutes} นาที` : 'ต้องต่อรถ'}{transfer.note ? ` · ${transfer.note}` : ''}</span>
        </span>
      )}
    </motion.button>
  )
}
