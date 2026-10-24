import { motion, useMotionTemplate, useReducedMotion } from 'framer-motion'

// ข้อยกเว้นเรื่อง gradient: ใช้เฉพาะการ์ด rare / legendary
const SHEEN =
  'linear-gradient(110deg, transparent 36%, #FF9AD5 41%, #FFE58F 46%, #9AF2C4 51%, #8FD3FF 56%, #C7A4FF 60%, transparent 64%)'
const STRENGTH = {
  rare: { sheen: 0.22, glare: 0.35, duration: 3 },
  legendary: { sheen: 0.4, glare: 0.55, duration: 2.4 },
}

// ประกายรุ้งวิ่งผ่านการ์ด + แสงสะท้อนตามตำแหน่งลาก/เมาส์ (glareX/glareY เป็น % ของการ์ด)
export default function HoloOverlay({ rarity, glareX, glareY, active }) {
  const reduce = useReducedMotion()
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.95), rgba(255,255,255,0) 55%)`
  const level = STRENGTH[rarity]
  if (!level) return null

  const loop = active && !reduce

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[32px] mix-blend-multiply"
        style={{ backgroundImage: SHEEN, backgroundSize: '300% 100%', opacity: level.sheen }}
        initial={{ backgroundPosition: loop ? '100% 0%' : '50% 0%' }}
        animate={{ backgroundPosition: loop ? ['100% 0%', '0% 0%'] : '50% 0%' }}
        transition={
          loop ? { duration: level.duration, repeat: Infinity, repeatDelay: 1.2, ease: 'easeInOut' } : { duration: 0 }
        }
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[32px] mix-blend-soft-light"
        style={{ backgroundImage: glare, opacity: level.glare }}
      />
    </>
  )
}
