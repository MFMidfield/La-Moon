import { BedDouble, ChevronRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { formatBaht } from '../../lib/trip/budget'
import { MockBadge } from './MealRow'
import { mid } from './mealPlan'

const PILL = 'flex h-9 items-center rounded-full bg-white px-3.5 text-sm font-semibold text-brown'

// แถว "คืนนี้" ท้ายวัน — มี booking_url เปิดลิงก์, ไม่มีเปิด BookingSheet (mock)
export default function StayRow({ stay, onBook }) {
  const reduced = useReducedMotion()
  const feedback = { whileTap: reduced ? undefined : { scale: 0.96 }, transition: reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 28 } }
  return (
    <div className="flex items-center gap-3 rounded-[22px] bg-[#FBE3D2] py-2 pl-3 pr-2">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brown"><BedDouble size={18} strokeWidth={2} aria-hidden="true" /></span>
      <div className="min-w-0 flex-1">
        <p className="m-0 text-xs font-medium text-brown">คืนนี้</p>
        <p className="m-0 text-sm font-semibold leading-snug">{stay.name}</p>
        <div className="mt-1 flex flex-wrap items-center gap-1">
          {stay.is_mock && <MockBadge />}
          <span className="text-[11px] text-[#4A3A30]">~{formatBaht(mid(stay.price_per_night))}/คืน{stay.area ? ` · ${stay.area}` : ''}</span>
        </div>
      </div>
      {stay.booking_url ? (
        <motion.a {...feedback} href={stay.booking_url} target="_blank" rel="noopener noreferrer sponsored" aria-label={`จอง ${stay.name}`} className="flex h-11 shrink-0 items-center"><span className={PILL}>จอง <ChevronRight size={16} strokeWidth={2} aria-hidden="true" /></span></motion.a>
      ) : (
        <motion.button {...feedback} type="button" onClick={() => onBook(stay)} aria-label={`จอง ${stay.name}`} className="flex h-11 shrink-0 cursor-pointer items-center"><span className={PILL}>จอง <ChevronRight size={16} strokeWidth={2} aria-hidden="true" /></span></motion.button>
      )}
    </div>
  )
}
