import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

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
        <button type="button" disabled={!canGoBack} onClick={() => setMonth(new Date(year, index - 1, 1))} aria-label="เดือนก่อนหน้า" className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-xl text-brown disabled:opacity-25">‹</button>
        <h3 id={labelId} aria-live="polite" className="m-0 text-sm font-semibold">{month.toLocaleDateString('th-TH', { month: 'long', year: 'numeric' })}</h3>
        <button type="button" onClick={() => setMonth(new Date(year, index + 1, 1))} aria-label="เดือนถัดไป" className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-xl text-brown">›</button>
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
              <button key={value} type="button" disabled={value < today} onClick={() => selectDate(value)} aria-label={`${date.toLocaleDateString('th-TH', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}${value === startDate ? ' วันเริ่มเดินทาง' : value === endDate ? ' วันกลับ' : ''}`} aria-pressed={endpoint || Boolean(inside)} aria-current={value === today ? 'date' : undefined} className={`relative my-0.5 flex min-h-11 min-w-0 items-center justify-center rounded-full text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-25 ${endpoint ? 'bg-peach font-bold text-brown ring-1 ring-inset ring-[#D9A27E]' : inside ? 'bg-[#FBE3D2] text-brown' : 'text-ink hover:bg-cream'} ${value === today && !endpoint && !inside ? 'font-bold underline decoration-[#D9A27E] underline-offset-4' : ''}`}>
                {i + 1}
              </button>
            )
          })}
        </motion.div>
      </AnimatePresence>
      <p aria-live="polite" className="mb-0 mt-3 text-center text-xs text-muted">{tripType === 'daytrip' ? 'เลือกวันที่ออกไปเที่ยว' : !startDate || endDate ? 'แตะวันไป แล้วแตะวันกลับ' : 'เลือกวันกลับได้เลย · แตะวันก่อนหน้าเพื่อเริ่มใหม่'}</p>
    </div>
  )
}
