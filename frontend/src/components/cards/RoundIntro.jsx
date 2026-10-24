import { Bookmark } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Sparkle } from '../icons'

const AUTO_START_MS = 2400

// ช่วงเปลี่ยนรอบ: "รอบสอง · ตัดสินใจการ์ดที่เก็บไว้ N ใบ" — เริ่มเองใน ~2.4 วิ (ปิดเมื่อลดการเคลื่อนไหว) หรือกดปุ่ม
export default function RoundIntro({ count, noun = 'ใบ', onStart }) {
  const reduce = useReducedMotion()
  const startRef = useRef(onStart)

  useEffect(() => {
    startRef.current = onStart
  })

  useEffect(() => {
    if (reduce) return
    const id = setTimeout(() => startRef.current(), AUTO_START_MS)
    return () => clearTimeout(id)
  }, [reduce])

  const spring = reduce ? { duration: 0 } : { type: 'spring', stiffness: 220, damping: 18 }
  const fade = (delay) => (reduce ? { duration: 0 } : { duration: 0.35, delay, ease: 'easeOut' })

  return (
    <div role="status" className="flex min-h-0 flex-1 flex-col items-center justify-center gap-2 px-[22px] py-8 text-center">
      <div className="relative mb-4 h-28 w-28">
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-peach"
          initial={reduce ? false : { scale: 0 }}
          animate={{ scale: 1 }}
          transition={spring}
        />
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center"
          initial={reduce ? false : { scale: 0, rotate: -40, y: 36 }}
          animate={{ scale: 1, rotate: 0, y: 0 }}
          transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 240, damping: 16, delay: 0.12 }}
        >
          <Bookmark size={46} strokeWidth={2} fill="#5A2E14" className="text-brown" />
        </motion.span>
        <motion.span
          aria-hidden="true"
          className="absolute -right-1 top-1"
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 14, delay: 0.4 }}
        >
          <Sparkle size={22} fill="#E8793A" />
        </motion.span>
      </div>

      <motion.h2
        className="m-0 text-[22px] font-bold"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fade(0.15)}
      >
        รอบสอง
      </motion.h2>
      <motion.p
        className="m-0 text-[15px] leading-[1.6] text-[#4A3A30]"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fade(0.28)}
      >
        ตัดสินใจการ์ดที่เก็บไว้ {count} {noun}
        <br />
        ปัดขวาถ้าชอบ ปัดซ้ายถ้าข้าม
      </motion.p>

      <motion.div
        className="mt-5 w-full"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fade(0.42)}
      >
        <motion.button
          type="button"
          onClick={onStart}
          whileTap={reduce ? undefined : { scale: 0.96 }}
          transition={{ type: 'spring', duration: reduce ? 0 : 0.2 }}
          className="relative flex h-14 w-full cursor-pointer items-center justify-center overflow-hidden rounded-full bg-brown text-base font-semibold text-white"
        >
          เริ่มรอบสอง
          {!reduce && (
            <motion.span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1 origin-left bg-white/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: AUTO_START_MS / 1000, ease: 'linear' }}
            />
          )}
        </motion.button>
      </motion.div>
    </div>
  )
}
