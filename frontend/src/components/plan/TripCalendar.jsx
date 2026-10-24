import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const WEEKDAYS = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
const localIso = date => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
const parseLocal = value => new Date(`${value}T12:00:00`)

export default function TripCalendar({ startDate, endDate, tripType, onChange }) {
  const reduced = useReducedMotion()
  const labelId = useId()
  const [month, setMonth] = useState(() => {
    const start = startDate ? parseLocal(startDate) : new Date()
    return new Date(start.getFullYear(), start.getMonth(), 1)
  })
  // วันเริ่มถูกตั้งจากข้างนอก (เช่น ค่าเริ่มต้น "พรุ่งนี้") แล้วอยู่คนละเดือน → พาปฏิทินไปเดือนนั้น (การแตะในปฏิทินอยู่ในเดือนที่เห็นเสมอ)
  const [seenStart, setSeenStart] = useState(startDate)
  if (seenStart !== startDate) {
    setSeenStart(startDate)
    if (startDate) {
      const target = parseLocal(startDate)
      if (target.getFullYear() !== month.getFullYear() || target.getMonth() !== month.getMonth()) setMonth(new Date(target.getFullYear(), target.getMonth(), 1))
    }
  }
  const today = localIso(new Date())
  const year = month.getFullYear()
  const index = month.getMonth()
  const firstWeekday = month.getDay()
  const totalDays = new Date(year, index + 1, 0).getDate()
  const monthKey = `${year}-${index}`
  const canGoBack = localIso(new Date(year, index, 0)) >= today

  function selectDate(value) {
    if (tripType === 'daytrip') return onChange({ startDate: value, endDate: value })
    if (!startDate || endDate || value <= startDate) return onChange({ startDate: value, endDate: null })
    onChange({ startDate, endDate: value })
  }

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-2">
        <motion.button type="button" disabled={!canGoBack} onClick={() => setMonth(new Date(year, index - 1, 1))} aria-label="เดือนก่อนหน้า" whileTap={reduced || !canGoBack ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-brown transition-colors duration-200 motion-reduce:transition-none disabled:opacity-25"><ChevronLeft size={20} strokeWidth={2} aria-hidden="true" /></motion.button>
        <h3 id={labelId} aria-live="polite" className="m-0 text-sm font-semibold">{month.toLocaleDateString('th-TH', { month: 'long', year: 'numeric' })}</h3>
        <motion.button type="button" onClick={() => setMonth(new Date(year, index + 1, 1))} aria-label="เดือนถัดไป" whileTap={reduced ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-brown transition-colors duration-200 motion-reduce:transition-none"><ChevronRight size={20} strokeWidth={2} aria-hidden="true" /></motion.button>
      </div>
      <div aria-hidden="true" className="grid grid-cols-7 text-center text-xs text-muted">
        {WEEKDAYS.map(day => <span key={day} className="py-2">{day}</span>)}
      </div>
      <AnimatePresence initial={false} mode="wait">
        <motion.div key={monthKey} aria-labelledby={labelId} role="group" className="grid grid-cols-7" initial={{ opacity: reduced ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: reduced ? 1 : 0 }} transition={{ duration: reduced ? 0 : 0.12 }}>
          {Array.from({ length: firstWeekday }, (_, i) => <span key={`blank-${i}`} />)}
          {Array.from({ length: totalDays }, (_, i) => {
            const date = new Date(year, index, i + 1, 12)
            const value = localIso(date)
            const endpoint = value === startDate || value === endDate
            const inside = startDate && endDate && value > startDate && value < endDate
            return (
              <motion.button key={value} type="button" disabled={value < today} onClick={() => selectDate(value)} aria-label={`${date.toLocaleDateString('th-TH', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}${value === startDate ? ' วันเริ่มเดินทาง' : value === endDate ? ' วันกลับ' : ''}`} aria-pressed={endpoint || Boolean(inside)} aria-current={value === today ? 'date' : undefined} whileTap={reduced || value < today ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} className={`relative isolate my-0.5 flex min-h-11 min-w-0 items-center justify-center rounded-full text-sm font-medium transition-colors duration-200 motion-reduce:transition-none disabled:cursor-not-allowed disabled:opacity-25 ${endpoint || inside ? 'text-brown' : 'text-ink hover:bg-cream'} ${inside ? 'bg-[#FBE3D2]' : 'bg-transparent'} ${value === today && !endpoint && !inside ? 'underline decoration-[#D9A27E] underline-offset-4' : ''}`}>
                <AnimatePresence initial={false}>{endpoint && <motion.span aria-hidden="true" className="absolute inset-0 -z-10 rounded-full bg-peach ring-1 ring-inset ring-[#D9A27E]" initial={reduced ? false : { scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: reduced ? 1 : 0.6, opacity: 0 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2, bounce: 0.12 }} />}</AnimatePresence>
                <span>{i + 1}</span>
              </motion.button>
            )
          })}
        </motion.div>
      </AnimatePresence>
      <p aria-live="polite" className="mb-0 mt-3 text-center text-xs text-muted">{tripType === 'daytrip' ? 'เลือกวันที่ออกไปเที่ยว' : !startDate || endDate ? 'แตะวันไป แล้วแตะวันกลับ' : 'เลือกวันกลับได้เลย · แตะวันก่อนหน้าเพื่อเริ่มใหม่'}</p>
    </div>
  )
}
