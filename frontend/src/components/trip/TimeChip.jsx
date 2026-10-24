import { Clock } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

// เวลา "09:00–10:30" ของแถว — มี onClick = แตะเพื่อแก้เวลาเริ่ม (พื้นพีช = ผู้ใช้ตั้งเอง)
export default function TimeChip({ start, end, label, custom = false, onClick }) {
  const reduced = useReducedMotion()
  const content = (
    <>
      <Clock size={12} strokeWidth={2} aria-hidden="true" />
      <span className="tabular-nums">{start}–{end}</span>
    </>
  )
  if (!onClick) return <span className="inline-flex h-7 items-center gap-1 rounded-full bg-cream px-2.5 text-xs font-semibold text-brown">{content}</span>
  return (
    <motion.button
      whileTap={reduced ? undefined : { scale: 0.96 }}
      transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 28 }}
      type="button"
      onClick={onClick}
      aria-label={`แก้เวลา ${label} ตอนนี้ ${start} ถึง ${end}`}
      className={`relative inline-flex h-7 cursor-pointer items-center gap-1 rounded-full px-2.5 text-xs font-semibold text-brown transition-colors duration-200 after:absolute after:-inset-y-2 after:inset-x-0 after:content-[''] motion-reduce:transition-none ${custom ? 'bg-peach' : 'bg-cream'}`}
    >
      {content}
    </motion.button>
  )
}
