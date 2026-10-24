import { ArrowUp, ChevronRight, GripVertical, ListPlus } from 'lucide-react'
import { useRef, useState } from 'react'
import { animate, motion, useDragControls, useMotionValue, useReducedMotion } from 'framer-motion'
import PlaceThumb from './PlaceThumb'
import { RARITY } from '../../data/rarity'

const CARD_H = 140
const PEEK = 30 // ความสูงที่ใบหลังโผล่ใต้ใบหน้า (รวมทั้งกอง)
const SWIPE_DISTANCE = 70
const SWIPE_VELOCITY = 500

// ตำแหน่งของใบตามลำดับในกอง (0 = ใบหน้า) — ใบหลังเอียงสลับ สีไล่ขาว → พีช → ส้มตาม DESIGN.md
const DEPTHS = [
  { x: 0, y: 0, rotate: 0, scale: 1, bg: '#FFFFFF' },
  { x: 6, y: 10, rotate: 2.5, scale: 0.97, bg: '#F9D9C2' },
  { x: -6, y: 19, rotate: -3, scale: 0.94, bg: '#F4A36C' },
  { x: 5, y: 27, rotate: 4, scale: 0.91, bg: '#E8793A' },
]

function DeckCard({ place, depth, count, onSelect, onBook, onCycle, onDrop, onHover, onDragging }) {
  const reduced = useReducedMotion()
  const controls = useDragControls()
  const swipeY = useMotionValue(0)
  const [dragging, setDragging] = useState(false)
  const lastDrag = useRef(0)
  const top = depth === 0
  const shape = DEPTHS[Math.min(depth, DEPTHS.length - 1)]
  const rarity = RARITY[place.rarity] ?? RARITY.common
  const feedback = { whileTap: reduced ? undefined : { scale: 0.96 }, transition: reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 28 } }
  const justDragged = () => Date.now() - lastDrag.current < 250

  // ปุ่มลูกศรขึ้น: ดีดการ์ดขึ้นนิดหนึ่งก่อนสลับไปหลังกอง
  async function sendBack() {
    if (reduced) {
      onCycle(place.id)
      return
    }
    await animate(swipeY, -80, { duration: 0.16, ease: 'easeOut' })
    onCycle(place.id)
    animate(swipeY, 0, { type: 'spring', stiffness: 300, damping: 30 })
  }

  return (
    <motion.div
      initial={false}
      animate={{ x: shape.x, y: shape.y, rotate: shape.rotate, scale: shape.scale, backgroundColor: shape.bg, opacity: depth > 3 ? 0 : 1 }}
      transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 320, damping: 30 }}
      style={{ zIndex: 10 - Math.min(depth, 9), height: CARD_H, pointerEvents: top ? 'auto' : 'none' }}
      className="absolute inset-x-0 top-0 rounded-[24px]"
    >
      <motion.div
        initial={false}
        animate={{ opacity: top ? 1 : 0 }}
        transition={reduced ? { duration: 0 } : { duration: 0.15 }}
        inert={!top}
        className="h-full"
      >
        <motion.div
          drag={top && !reduced}
          dragControls={controls}
          dragListener={false}
          dragMomentum={false}
          dragSnapToOrigin
          onDragStart={() => { setDragging(true); onDragging(true); lastDrag.current = Date.now() }}
          onDrag={(event, info) => onHover(event, info)}
          onDragEnd={(event, info) => { setDragging(false); onDragging(false); lastDrag.current = Date.now(); onDrop(place.id, event, info) }}
          style={{ pointerEvents: dragging ? 'none' : 'auto' }}
          className={`relative h-full rounded-[24px] border ${dragging ? 'border-orange' : 'border-transparent'}`}
        >
          <motion.div
            drag={top && !reduced ? 'y' : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0.5, bottom: 0.05 }}
            dragMomentum={false}
            dragSnapToOrigin
            onDragStart={() => { lastDrag.current = Date.now() }}
            onDragEnd={(event, info) => {
              lastDrag.current = Date.now()
              if (info.offset.y < -SWIPE_DISTANCE || info.velocity.y < -SWIPE_VELOCITY) onCycle(place.id)
            }}
            style={{ y: swipeY }}
            className="flex h-full flex-col justify-between p-3"
          >
            <div className="flex items-start gap-2.5 pr-10">
              <PlaceThumb src={place.image_url} />
              <button type="button" onClick={() => { if (!justDragged()) onSelect(place.id) }} aria-label={`เลือกวันให้ ${place.name}`} className="flex min-h-11 min-w-0 flex-1 cursor-pointer flex-col items-start gap-1 text-left">
                <span className="line-clamp-2 text-sm font-semibold leading-snug">{place.name}</span>
                <span className="rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ color: rarity.text, background: rarity.bg }}>{rarity.label}</span>
              </button>
            </div>
            <div className="flex items-center justify-end gap-1">
              <motion.button {...feedback} type="button" onClick={() => onBook(place)} className="flex min-h-11 cursor-pointer items-center gap-1 rounded-full px-3 text-xs font-semibold text-brown transition-colors duration-200 hover:bg-cream motion-reduce:transition-none">จองใกล้ที่นี่ <ChevronRight size={14} strokeWidth={2} aria-hidden="true" /></motion.button>
              <motion.button {...feedback} type="button" onClick={() => onSelect(place.id)} aria-label={`ใส่ ${place.name} ในแผน`} className="flex min-h-11 cursor-pointer items-center gap-1 rounded-full bg-cream px-3 text-xs font-semibold text-brown"><ListPlus size={16} strokeWidth={2} aria-hidden="true" />ใส่ในแผน</motion.button>
              <motion.button {...feedback} type="button" onClick={sendBack} disabled={count < 2} aria-label="เลื่อนการ์ดใบนี้ไปหลังกอง ดูใบถัดไป" className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-cream text-brown disabled:cursor-default disabled:opacity-30"><ArrowUp size={18} strokeWidth={2} aria-hidden="true" /></motion.button>
            </div>
          </motion.div>
          {/* ปุ่มลากอยู่นอกตัวการ์ดที่ปัดขึ้นได้ แต่ขยับตามกัน */}
          <motion.div style={{ y: swipeY }} className="absolute right-1.5 top-3">
            <button
              type="button"
              aria-label={`ลาก ${place.name} ไปวางในวัน`}
              title="ลากเพื่อย้ายการ์ดไปวัน หรือแตะเพื่อเลือกวัน"
              onPointerDown={(event) => { if (!reduced) controls.start(event) }}
              onClick={() => { if (!justDragged()) onSelect(place.id) }}
              className="flex h-11 w-8 touch-none cursor-grab items-center justify-center rounded-full bg-cream text-muted active:cursor-grabbing"
            >
              <GripVertical size={18} strokeWidth={2} aria-hidden="true" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

/**
 * กองการ์ดสำรองแบบซ้อน: ใบหน้าเต็ม ใบหลัง 1–3 ใบโผล่เอียงสลับ
 * ปัดใบหน้าขึ้น (หรือกดลูกศร) = ส่งไปหลังกอง · ลากที่ไอคอนจุดไปวางในวัน · แตะ "ใส่ในแผน" เลือกวัน
 * onDrop/onHover = handler ลากวางเดียวกับการ์ดในวัน (DayPlan)
 */
export default function SpareDeck({ spare, onSelect, onBook, onCycle, onDrop, onHover }) {
  const [dragging, setDragging] = useState(false)
  return (
    <div className="relative" style={{ height: CARD_H + PEEK, zIndex: dragging ? 40 : 0 }}>
      {spare.map((place, depth) => (
        <DeckCard key={place.id} place={place} depth={depth} count={spare.length} onSelect={onSelect} onBook={onBook} onCycle={onCycle} onDrop={onDrop} onHover={onHover} onDragging={setDragging} />
      ))}
    </div>
  )
}
