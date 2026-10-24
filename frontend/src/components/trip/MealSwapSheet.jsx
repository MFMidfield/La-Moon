import { Dices, X } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import BottomSheet from '../BottomSheet'
import { formatBaht } from '../../lib/trip/budget'
import { mealLabel } from '../../lib/trip/meals'
import CheckPop from './CheckPop'
import { MockBadge } from './MealRow'
import { mealCandidates, mid } from './mealPlan'

const pickRandom = (list) => list[Math.floor(Math.random() * list.length)]

const BADGE = 'inline-flex items-center rounded-full px-2 py-0.5 text-[10px]'

/**
 * sheet สลับร้านของมื้อหนึ่ง — onChange(value): { restaurant: id|null, auto? } หรือ undefined (คืนค่าที่ระบบเลือก)
 * food = ผลของ buildFoodStay
 */
export default function MealSwapSheet({ open, d, meal, dayLabel, food, pool, liked, overridden, onChange, onNotice, onClose }) {
  const reduced = useReducedMotion()
  const feedback = { whileTap: reduced ? undefined : { scale: 0.97 }, transition: reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 28 } }
  const day = food.days[d]
  const slot = day?.meals.find((m) => m.meal === meal)
  const currentId = slot?.restaurant?.id ?? null
  const usedElsewhere = new Set(food.days.flatMap((x, i) => x.meals.filter((m) => !(i === d && m.meal === meal)).map((m) => m.restaurant?.id).filter(Boolean)))
  const candidates = open && day ? mealCandidates({ pool, liked, meal, places: food.dayPlaces[d] ?? [] }) : []

  function pick(restaurant) {
    onChange({ restaurant: restaurant.id, auto: false })
    onNotice(`เปลี่ยนเป็น ${restaurant.name}`)
    onClose()
  }

  function random() {
    const others = candidates.filter((c) => c.restaurant.id !== currentId)
    const fresh = others.filter((c) => !usedElsewhere.has(c.restaurant.id))
    const list = fresh.length ? fresh : others
    if (!list.length) {
      onNotice('ไม่มีร้านอื่นให้สุ่มแล้ว')
      return
    }
    const next = pickRandom(list).restaurant
    onChange({ restaurant: next.id, auto: true })
    onNotice(`สุ่มได้ ${next.name}`)
  }

  function skip() {
    onChange({ restaurant: null })
    onNotice(`ข้ามมื้อ${mealLabel(meal)} ${dayLabel}`)
    onClose()
  }

  return (
    <BottomSheet open={open} onClose={onClose} labelledBy="meal-swap-title">
      <div className="flex items-start justify-between gap-3 px-[22px] pt-4">
        <div className="min-w-0">
          <p className="m-0 text-xs text-muted">{dayLabel}</p>
          <h2 id="meal-swap-title" className="m-0 mt-0.5 text-xl font-bold">เลือกร้านมื้อ{mealLabel(meal)}</h2>
        </div>
        <button type="button" aria-label="ปิด" onClick={onClose} className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-cream"><X size={18} strokeWidth={2} aria-hidden="true" /></button>
      </div>
      <p className="m-0 px-[22px] pt-1 text-xs text-muted">เรียงตามความใกล้ที่เที่ยวของวันนี้</p>

      <div role="radiogroup" aria-labelledby="meal-swap-title" className="mt-3 flex min-h-0 flex-col gap-2 overflow-y-auto px-4 pb-2">
        {candidates.map(({ restaurant, km, liked: isLiked }) => {
          const selected = restaurant.id === currentId
          return (
            <motion.button {...feedback} key={restaurant.id} type="button" role="radio" aria-checked={selected} onClick={() => pick(restaurant)} className={`flex min-h-16 items-center gap-3 rounded-[22px] border-2 px-3 py-2.5 text-left transition-colors duration-200 motion-reduce:transition-none ${selected ? 'border-orange bg-peach' : 'border-transparent bg-cream'}`}>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold leading-snug">{restaurant.name}</span>
                <span className="mt-1 flex flex-wrap items-center gap-1">
                  {isLiked && <span className={`${BADGE} bg-white text-brown`}>ที่คุณชอบ</span>}
                  {usedElsewhere.has(restaurant.id) && <span className={`${BADGE} bg-white text-muted`}>อยู่ในแผนแล้ว</span>}
                  {restaurant.is_mock && <MockBadge />}
                </span>
                <span className="mt-1 block text-[11px] leading-relaxed text-[#4A3A30]">~{formatBaht(mid(restaurant.price_per_person))}/คน{restaurant.opening_hours ? ` · ${restaurant.opening_hours}` : ''}{km != null ? ` · ห่าง ~${km < 10 ? km.toFixed(1) : Math.round(km)} กม.` : ''}</span>
              </span>
              <CheckPop selected={selected} />
            </motion.button>
          )
        })}
        {open && !candidates.length && <p className="m-0 py-6 text-center text-sm text-muted">ยังไม่มีร้านที่เสิร์ฟมื้อนี้ในจังหวัดนี้</p>}
      </div>

      <div className="flex flex-col gap-1 px-4 pb-6 pt-3">
        <motion.button {...feedback} type="button" onClick={random} disabled={candidates.length < 1} className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full border-[1.5px] border-[#D9CFC5] bg-white text-sm font-semibold text-ink disabled:opacity-40"><Dices size={18} strokeWidth={2} aria-hidden="true" />สุ่มร้านใหม่</motion.button>
        <div className="flex items-center justify-center gap-1">
          <motion.button {...feedback} type="button" onClick={skip} className="flex min-h-11 cursor-pointer items-center rounded-full px-4 text-sm font-semibold text-muted">ไม่ต้องการมื้อนี้</motion.button>
          {overridden && <motion.button {...feedback} type="button" onClick={() => { onChange(undefined); onNotice('ให้ระบบเลือกร้านให้ใหม่แล้ว'); onClose() }} className="flex min-h-11 cursor-pointer items-center rounded-full px-4 text-sm font-semibold text-brown">ให้ระบบเลือกให้</motion.button>}
        </div>
      </div>
    </BottomSheet>
  )
}
