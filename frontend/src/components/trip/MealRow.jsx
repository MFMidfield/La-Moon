import { ArrowLeftRight, Coffee, Dices, Utensils } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { formatBaht } from '../../lib/trip/budget'
import { mealLabel } from '../../lib/trip/meals'
import { mid } from './mealPlan'
import TimeChip from './TimeChip'
import { LegFlag } from './TravelLegRow'

const BADGE = 'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px]'

export function MockBadge() {
  return <span className={`${BADGE} bg-cream text-muted`}>ข้อมูลตัวอย่าง</span>
}

// แถวมื้ออาหารในแผนรายวัน — onEdit ว่าง = อ่านอย่างเดียว
// time = { start, end } (ไม่มี = มื้อนี้ไม่กินเวลา เช่น ข้ามมื้อ); onEditTime ว่าง = แสดงเวลาอย่างเดียว
export default function MealRow({ slot, stayName, onEdit, time, customTime = false, onEditTime, lateSkip = false, flag }) {
  const reduced = useReducedMotion()
  const Icon = slot.meal === 'breakfast' ? Coffee : Utensils
  const restaurant = slot.restaurant
  const feedback = { whileTap: reduced ? undefined : { scale: 0.96 }, transition: reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 28 } }
  const editLabel = restaurant || slot.atStay ? 'สลับร้าน' : 'เลือกร้าน'
  const shownKey = slot.atStay ? 'stay' : restaurant?.id ?? (slot.skipped ? 'skip' : 'none')

  return (
    <div className="flex items-center gap-3 rounded-[22px] bg-white/75 py-2 pl-3 pr-2" data-meal={slot.meal}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FBE3D2] text-brown"><Icon size={18} strokeWidth={2} aria-hidden="true" /></span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <p className="m-0 text-xs font-medium text-brown">มื้อ{mealLabel(slot.meal)}</p>
          {time && <TimeChip start={time.start} end={time.end} label={`มื้อ${mealLabel(slot.meal)}`} custom={customTime} onClick={onEditTime} />}
        </div>
        <motion.div key={shownKey} initial={reduced ? false : { opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={reduced ? { duration: 0 } : { duration: 0.2 }}>
          {lateSkip ? (
            <p className="m-0 text-sm leading-snug text-muted">ถึงปลายทางหลังเวลามื้อนี้ ระบบข้ามให้</p>
          ) : slot.atStay ? (
            <>
              <p className="m-0 text-sm font-semibold leading-snug">{stayName ? `ที่ ${stayName}` : 'ที่ที่พัก'}</p>
              <div className="mt-1 flex flex-wrap items-center gap-1"><span className={`${BADGE} bg-[#E7EFDC] text-[#3F5A2E]`}>อาหารเช้าที่ที่พัก</span><span className="text-[11px] text-muted">รวมในค่าที่พัก</span></div>
            </>
          ) : restaurant ? (
            <>
              <p className="m-0 text-sm font-semibold leading-snug">{restaurant.name}</p>
              <div className="mt-1 flex flex-wrap items-center gap-1">
                {slot.auto && <span className={`${BADGE} bg-[#FBE3D2] text-brown`}><Dices size={11} strokeWidth={2} aria-hidden="true" />ระบบเลือกให้</span>}
                {restaurant.is_mock && <MockBadge />}
                <span className="text-[11px] text-muted">~{formatBaht(mid(restaurant.price_per_person))}/คน{restaurant.opening_hours ? ` · ${restaurant.opening_hours}` : ''}</span>
              </div>
            </>
          ) : (
            <p className="m-0 text-sm leading-snug text-muted">{slot.skipped ? 'ข้ามมื้อนี้' : 'ยังไม่มีร้านแนะนำสำหรับมื้อนี้'}</p>
          )}
        </motion.div>
        {flag && <div className="mt-1"><LegFlag kind={flag} /></div>}
      </div>
      {onEdit && (
        <motion.button {...feedback} type="button" onClick={onEdit} aria-label={`${editLabel} มื้อ${mealLabel(slot.meal)}`} className="flex min-h-11 shrink-0 items-center gap-1 rounded-full px-3 text-xs font-semibold text-brown transition-colors duration-200 hover:bg-cream motion-reduce:transition-none">
          <ArrowLeftRight size={14} strokeWidth={2} aria-hidden="true" />{editLabel}
        </motion.button>
      )}
    </div>
  )
}
