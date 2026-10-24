import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'

function Stepper({ label, value, min, max, onChange }) {
  const reduced = useReducedMotion()
  const [direction, setDirection] = useState(1)

  function step(nextDirection) {
    setDirection(nextDirection)
    onChange(value + nextDirection)
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm font-medium">{label}</span>
      <div className="flex items-center gap-2">
        <motion.button type="button" aria-label={`ลด${label}`} disabled={value <= min} onClick={() => step(-1)} whileTap={reduced ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: 0.22, bounce: 0.2 }} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-cream text-brown transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-35"><Minus size={20} strokeWidth={2} aria-hidden="true" /></motion.button>
        <span aria-live="polite" aria-atomic="true" className="relative grid h-7 w-7 items-center overflow-hidden text-center text-lg font-semibold tabular-nums">
          <span className="sr-only">{value}</span>
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            <motion.span key={value} aria-hidden="true" custom={direction} variants={{ enter: dir => ({ y: reduced ? 0 : dir * 14, opacity: reduced ? 1 : 0 }), exit: dir => ({ y: reduced ? 0 : dir * -14, opacity: reduced ? 1 : 0 }) }} initial="enter" animate={{ y: 0, opacity: 1 }} exit="exit" transition={{ type: 'spring', duration: reduced ? 0 : 0.22, bounce: 0.1 }} className="col-start-1 row-start-1 block w-7">{value}</motion.span>
          </AnimatePresence>
        </span>
        <motion.button type="button" aria-label={`เพิ่ม${label}`} disabled={value >= max} onClick={() => step(1)} whileTap={reduced ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: 0.22, bounce: 0.2 }} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-peach text-brown transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-35"><Plus size={20} strokeWidth={2} aria-hidden="true" /></motion.button>
      </div>
    </div>
  )
}

export default function TravelersPicker({ value, onChange }) {
  return (
    <section className="flex flex-col gap-3 rounded-[28px] bg-white p-[18px]" aria-labelledby="travelers-title">
      <h2 id="travelers-title" className="m-0 text-base font-semibold">ไปกันกี่คน?</h2>
      <Stepper label="ผู้ใหญ่" value={value.adults} min={1} max={10} onChange={adults => onChange({ ...value, adults })} />
      <Stepper label="เด็ก" value={value.children} min={0} max={10} onChange={children => onChange({ ...value, children })} />
    </section>
  )
}
