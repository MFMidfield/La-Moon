import { motion } from 'framer-motion'
import Sticker from '../home/Sticker'
import { Moon, Sparkle } from '../icons'

// สูงเท่าที่เหลือจาก header + ปุ่มล่าง (≈236px) แต่ไม่เตี้ย/สูงเกินไป
const DECK_HEIGHT = 'h-[clamp(440px,calc(100svh_-_236px),660px)]'

function BackCard({ className, rotate, show, bump }) {
  return (
    <motion.div
      key={bump}
      aria-hidden="true"
      className={`absolute rounded-[32px] ${className}`}
      initial={{ rotate: rotate * 1.4, scale: 0.97, opacity: show ? 1 : 0 }}
      animate={{ rotate, scale: 1, opacity: show ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    />
  )
}

// กรอบกองการ์ด: ใบหลังส้ม −7°, ใบกลางพีช +5° (ซ่อนเมื่อการ์ดเหลือน้อย) + สติกเกอร์
export default function DeckFrame({ remaining = 3, bump = 0, children }) {
  return (
    <div className={`relative mx-4 mt-2.5 shrink-0 ${DECK_HEIGHT}`}>
      <BackCard className="inset-x-3.5 bottom-1.5 top-[26px] bg-orange" rotate={-7} show={remaining >= 3} bump={bump} />
      <BackCard className="inset-x-2.5 bottom-1 top-[22px] bg-peach" rotate={5} show={remaining >= 2} bump={bump} />

      {children}

      <Sticker className="-right-1.5 -top-1 z-[3]" delay={0.4} loop="sway">
        <Moon size={34} fill="#5A2E14" className="rotate-[18deg]" />
      </Sticker>
      <Sticker className="-left-1 top-[30px] z-[3]" delay={0.5}>
        <Sparkle size={22} fill="#E8793A" />
      </Sticker>
      <Sticker className="bottom-[120px] right-0.5 z-[3]" delay={0.6}>
        <Sparkle size={16} fill="#E8793A" />
      </Sticker>
    </div>
  )
}
