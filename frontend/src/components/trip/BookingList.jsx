import { BedDouble, BusFront, ExternalLink, Plane, TrainFront } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { formatBaht } from '../../lib/trip/budget'
import BookingSheet from './BookingSheet'
import CheckPop from './CheckPop'
import { bookingTotal } from './bookingItems'

const MODE_ICON = { plane: Plane, train: TrainFront, bus: BusFront }
const PILL = 'flex min-h-11 items-center rounded-full px-4 text-xs font-semibold transition-colors duration-200 motion-reduce:transition-none'

// "N/M จองแล้ว" + แถบความคืบหน้า (ความกว้างแถบเปลี่ยนใน track ขนาดคงที่ ไม่ดัน layout)
export function BookingProgress({ done, total }) {
  return (
    <div className="flex items-center gap-3">
      <div role="progressbar" aria-label="จองแล้ว" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done} className="h-1.5 flex-1 overflow-hidden rounded-full bg-cream">
        <div className="h-full rounded-full bg-brown transition-[width] duration-300 motion-reduce:transition-none" style={{ width: `${total ? (done / total) * 100 : 0}%` }} />
      </div>
      <span className="shrink-0 text-xs font-semibold tabular-nums text-brown">{done}/{total} จองแล้ว</span>
    </div>
  )
}

export function BookingTotal({ items }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-sm text-[#4A3A30]">รวมที่ต้องจอง (ประมาณ)</span>
      <span className="text-xl font-bold tabular-nums text-brown">{formatBaht(bookingTotal(items))}</span>
    </div>
  )
}

function BookingRow({ item, done, onToggle, onBookStay, feedback }) {
  const Icon = item.kind === 'stay' ? BedDouble : MODE_ICON[item.mode] ?? Plane
  const bookLabel = `จอง ${item.title}`
  const bookBody = <>จอง<ExternalLink size={14} strokeWidth={2} aria-hidden="true" className="ml-1" /></>
  return (
    <li className="rounded-[22px] bg-cream p-3" data-booking={item.key}>
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FBE3D2] text-brown"><Icon size={18} strokeWidth={2} aria-hidden="true" /></span>
        <div className="min-w-0 flex-1">
          <p className="m-0 text-sm font-semibold leading-snug">{item.title}</p>
          {item.dateText && <p className="m-0 mt-0.5 text-xs text-[#4A3A30]">{item.dateText}</p>}
          {item.sub && <p className="m-0 mt-0.5 text-xs text-muted">{item.sub}</p>}
        </div>
        <p className="m-0 shrink-0 text-right text-sm font-semibold tabular-nums text-brown">{item.amount != null ? `~${formatBaht(item.amount)}` : <span className="text-xs font-medium text-muted">ดูราคาที่เว็บจอง</span>}</p>
      </div>
      <div className="mt-2 flex items-center justify-between gap-2">
        {onToggle ? (
          <motion.button {...feedback} type="button" aria-pressed={done} onClick={() => onToggle(item.key)} className={`${PILL} cursor-pointer gap-2 pl-3 ${done ? 'bg-peach text-brown' : 'bg-white text-[#4A3A30]'}`}>
            <CheckPop selected={done} />จองแล้ว
          </motion.button>
        ) : (
          <span className={`flex min-h-11 items-center gap-2 text-xs font-semibold ${done ? 'text-brown' : 'text-muted'}`}><CheckPop selected={done} />{done ? 'จองแล้ว' : 'ยังไม่ได้จอง'}</span>
        )}
        {item.kind === 'stay' && !item.stay.booking_url ? (
          <motion.button {...feedback} type="button" aria-label={bookLabel} onClick={() => onBookStay(item.stay)} className={`${PILL} cursor-pointer bg-white text-brown`}>{bookBody}</motion.button>
        ) : (
          <motion.a {...feedback} href={item.kind === 'stay' ? item.stay.booking_url : item.url} target="_blank" rel="noopener noreferrer sponsored" aria-label={bookLabel} className={`${PILL} bg-white text-brown`}>{bookBody}</motion.a>
        )}
      </div>
    </li>
  )
}

/**
 * รายการสิ่งที่ต้องจอง — booked = { [key]: true }; onToggle ว่าง = อ่านอย่างเดียว (แสดงสถานะ แต่ปุ่ม "จอง" ยังใช้ได้)
 * onStayOpenChange(open) = แจ้งพ่อเมื่อ sheet จองที่พักเปิด/ปิด (ไว้กัน Esc ปิดซ้อน)
 */
export default function BookingList({ items, booked, onToggle, onStayOpenChange }) {
  const reduced = useReducedMotion()
  const feedback = { whileTap: reduced ? undefined : { scale: 0.96 }, transition: reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 28 } }
  const [stay, setStay] = useState(null)
  const open = useCallback(value => { setStay(value); onStayOpenChange?.(Boolean(value)) }, [onStayOpenChange])
  const close = useCallback(() => open(null), [open])
  return (
    <>
      <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
        {items.map(item => <BookingRow key={item.key} item={item} done={Boolean(booked[item.key])} onToggle={onToggle} onBookStay={open} feedback={feedback} />)}
      </ul>
      <BookingSheet open={Boolean(stay)} place={stay ? { name: stay.name, isStay: true } : null} title={stay ? `จองที่พัก ${stay.name}` : undefined} onClose={close} />
    </>
  )
}

// การ์ดในหน้าทริปที่บันทึกแล้ว
export function BookingCard({ items, booked }) {
  const done = items.filter(item => booked[item.key]).length
  return (
    <section aria-labelledby="booking-card-title" className="rounded-[28px] bg-white p-4">
      <h2 id="booking-card-title" className="m-0 text-lg font-bold">สิ่งที่ต้องจองก่อนเดินทาง</h2>
      <div className="mb-3 mt-2"><BookingProgress done={done} total={items.length} /></div>
      <BookingList items={items} booked={booked} />
      <div className="mt-3"><BookingTotal items={items} /></div>
      <p className="mb-0 mt-2 text-xs leading-relaxed text-muted">สถานะ "จองแล้ว" ตามที่ติ๊กไว้ตอนบันทึกทริป</p>
    </section>
  )
}
