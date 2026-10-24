import { BedDouble, Coffee, Route, Star } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { formatBaht } from '../../lib/trip/budget'
import CheckPop from './CheckPop'
import { MockBadge } from './MealRow'
import { mid } from './mealPlan'

const BADGE = 'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px]'

function useFeedback(scale = 0.97) {
  const reduced = useReducedMotion()
  return { reduced, feedback: { whileTap: reduced ? undefined : { scale }, transition: reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 28 } } }
}

const STAY_MODES = {
  multi: { label: 'พักหลายที่', hint: 'ระบบจัดที่พักให้ทีละคืน ใกล้ที่เที่ยวของวันนั้นที่สุด', Icon: Route },
  single: { label: 'พักที่เดียว', hint: 'ปักหลักที่เดียวตลอดทริป ไม่ต้องย้ายกระเป๋า', Icon: BedDouble },
}

// ตัวเลือกใหญ่ "พักหลายที่ / พักที่เดียว" (radio)
export function StayModeTile({ mode, selected, onSelect }) {
  const { feedback } = useFeedback(0.98)
  const { label, hint, Icon } = STAY_MODES[mode]
  return (
    <motion.button {...feedback} type="button" role="radio" aria-checked={selected} onClick={onSelect} className={`flex min-h-28 w-full cursor-pointer items-center gap-4 rounded-[28px] border-2 p-4 text-left transition-colors duration-200 motion-reduce:transition-none ${selected ? 'border-orange bg-peach' : 'border-transparent bg-white'}`}>
      <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-brown transition-colors duration-200 motion-reduce:transition-none ${selected ? 'bg-white' : 'bg-[#FBE3D2]'}`}><Icon size={26} strokeWidth={2} aria-hidden="true" /></span>
      <span className="min-w-0 flex-1">
        <span className="block text-lg font-semibold leading-snug">{label}</span>
        <span className="mt-1 block text-[13px] leading-relaxed text-[#4A3A30]">{hint}</span>
      </span>
      <CheckPop selected={selected} />
    </motion.button>
  )
}

function StayMeta({ stay }) {
  return (
    <>
      <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#4A3A30]">
        <span className="font-semibold text-brown">~{formatBaht(mid(stay.price_per_night))}/คืน</span>
        {stay.rating && <span className="inline-flex items-center gap-0.5"><Star size={12} strokeWidth={2} fill="currentColor" aria-hidden="true" />{stay.rating.score}</span>}
        {stay.area && <span className="text-muted">{stay.area}</span>}
      </span>
      {(stay.is_mock || stay.amenities?.includes('breakfast')) && (
        <span className="mt-1 flex flex-wrap items-center gap-1">
          {stay.amenities?.includes('breakfast') && <span className={`${BADGE} bg-[#E7EFDC] text-[#3F5A2E]`}><Coffee size={10} strokeWidth={2} aria-hidden="true" />มีอาหารเช้า</span>}
          {stay.is_mock && <MockBadge />}
        </span>
      )}
    </>
  )
}

// การ์ดที่พักแบบย่อ เลือกได้ทีละที่ (radio)
export function StayOption({ stay, selected, onSelect }) {
  const { feedback } = useFeedback()
  return (
    <motion.button {...feedback} type="button" role="radio" aria-checked={selected} onClick={onSelect} className={`flex min-h-20 w-full cursor-pointer items-center gap-3 rounded-[24px] border-2 p-3.5 text-left transition-colors duration-200 motion-reduce:transition-none ${selected ? 'border-orange bg-peach' : 'border-transparent bg-white'}`}>
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-semibold leading-snug">{stay.name}</span>
        <StayMeta stay={stay} />
      </span>
      <CheckPop selected={selected} />
    </motion.button>
  )
}

// ตัวอย่างที่พักต่อคืนของโหมดพักหลายที่
export function StayNightList({ stays }) {
  const reduced = useReducedMotion()
  const distinct = new Set(stays.map((stay) => stay?.id)).size
  return (
    <div>
      <p className="m-0 px-1 pb-2 text-[13px] text-[#4A3A30]">ตัวอย่างการจัดที่พัก · ใช้ {distinct} ที่ ในช่วง {stays.length} คืน</p>
      <ul className="m-0 flex list-none flex-col gap-2 p-0">
        {stays.map((stay, night) => (
          <motion.li
            key={night}
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduced ? { duration: 0 } : { delay: night * 0.06, type: 'spring', stiffness: 380, damping: 30 }}
            className="flex items-start gap-3 rounded-[24px] bg-white p-3.5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FBE3D2] text-sm font-semibold text-brown" aria-hidden="true">{night + 1}</span>
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-semibold leading-snug">คืนที่ {night + 1} · {stay?.name ?? 'ยังไม่มีที่พัก'}</span>
              {stay && <StayMeta stay={stay} />}
            </span>
          </motion.li>
        ))}
      </ul>
      <p className="m-0 px-1 pt-3 text-xs leading-relaxed text-muted">ที่พักอาจเปลี่ยนตามแผนเที่ยวจริงในหน้าถัดไป</p>
    </div>
  )
}
