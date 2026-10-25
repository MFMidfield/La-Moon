import { X } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'
import BottomSheet from '../BottomSheet'
import BookingList, { BookingProgress, BookingTotal } from './BookingList'
import { PRIMARY_BUTTON } from './styles'

// ก่อนบันทึกทริป: เช็กลิสต์สิ่งที่ต้องจอง (บันทึกได้แม้ยังจองไม่ครบ)
export default function BookingSaveSheet({ open, items, booked, onToggle, onSave, saving, error, onClose }) {
  const reduced = useReducedMotion()
  const stayOpen = useRef(false)
  const done = items.filter(item => booked[item.key]).length
  useEffect(() => { if (!open) stayOpen.current = false }, [open])
  const markStay = useCallback(value => { stayOpen.current = value }, [])
  const close = useCallback(() => { if (!stayOpen.current && !saving) onClose() }, [onClose, saving])
  return (
    <BottomSheet open={open} onClose={close} labelledBy="booking-list-title">
      <div className="shrink-0 px-[22px] pt-4">
        <div className="flex items-start justify-between gap-3">
          <h2 id="booking-list-title" className="m-0 min-w-0 text-xl font-bold">สิ่งที่ต้องจองก่อนเดินทาง</h2>
          <motion.button whileTap={reduced ? undefined : { scale: 0.96 }} type="button" aria-label="ปิด" onClick={close} className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-cream"><X size={18} strokeWidth={2} aria-hidden="true" /></motion.button>
        </div>
        <div className="mt-2"><BookingProgress done={done} total={items.length} /></div>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-2 pt-3">
        <BookingList items={items} booked={booked} onToggle={onToggle} onStayOpenChange={markStay} />
      </div>
      <div className="shrink-0 px-4 pb-7 pt-3 lg:pb-5">
        <BookingTotal items={items} />
        {error && <p role="alert" className="mb-0 mt-3 text-center text-sm text-[#9B432A]">{error}</p>}
        <button type="button" onClick={onSave} disabled={saving} className={`${PRIMARY_BUTTON} mt-3`}>{saving ? 'กำลังบันทึก…' : 'บันทึกทริป'}</button>
        <p className="mb-0 mt-2 text-center text-xs text-muted">จองทีหลังได้ในหน้าทริป</p>
      </div>
    </BottomSheet>
  )
}
