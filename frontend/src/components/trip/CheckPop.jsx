import { Check } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

// วงกลมติ๊กถูก ขนาดคงที่ (ไม่ดัน layout) — เลือกแล้ว: พื้นน้ำตาล + เด้งเข้า
export default function CheckPop({ selected, className = '' }) {
  const reduced = useReducedMotion()
  return (
    <span aria-hidden="true" className={`relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-[1.5px] transition-colors duration-200 motion-reduce:transition-none ${selected ? 'border-brown' : 'border-[#D9CFC5]'} ${className}`}>
      <AnimatePresence initial={false}>
        {selected && (
          <motion.span
            key="check"
            className="absolute inset-[-1.5px] flex items-center justify-center rounded-full bg-brown text-white"
            initial={reduced ? false : { scale: 0 }}
            animate={{ scale: 1 }}
            exit={reduced ? { opacity: 0, transition: { duration: 0 } } : { scale: 0, transition: { duration: 0.12 } }}
            transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 520, damping: 22 }}
          >
            <Check size={14} strokeWidth={3} />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}
