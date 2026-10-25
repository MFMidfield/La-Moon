import { motion, useReducedMotion } from 'framer-motion'
import SlideLink from '../SlideLink'
import { Moon, Sparkle } from '../icons'
import Sticker from './Sticker'
import { useTripDraft } from '../../context/TripDraftContext'

const CARDS = [
  { tone: '#E7EFDC', rotate: -14, x: -58, y: 10 },
  { tone: '#F6E3B8', rotate: 12, x: 58, y: 10 },
  { tone: '#FBE3D2', rotate: 0, x: 0, y: 0 },
]

function MiniCard({ tone, rotate, x, y, reduce }) {
  return (
    <motion.div
      className="absolute left-1/2 top-3 -ml-[38px] h-[100px] w-[76px] rounded-[18px] bg-white p-1"
      initial={reduce ? false : { x: 0, y: 20, rotate: 0, opacity: 0 }}
      animate={{ x, y, rotate, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 140, damping: 15, delay: 0.15 }}
    >
      <div className="flex h-[66px] items-end justify-center overflow-hidden rounded-[14px]" style={{ background: tone }}>
        <svg width="68" height="40" viewBox="0 0 68 40" aria-hidden="true">
          <circle cx="50" cy="12" r="6" fill="#F4A36C" />
          <path d="M0 40 L20 16 L32 30 L46 12 L68 40 Z" fill="#D9A27E" />
          <path d="M32 30 L46 12 L56 26" fill="#C88A63" />
        </svg>
      </div>
      <div className="mx-1 mt-1.5 h-1.5 w-10 rounded-full bg-[#EDE5DD]" />
      <div className="mx-1 mt-1 h-1.5 w-6 rounded-full bg-[#EDE5DD]" />
    </motion.div>
  )
}

// กล่องพีช "วันนี้อยากไปไหน?" + ปุ่มหลักไปแผนที่
export default function StartBox() {
  const reduce = useReducedMotion()
  const { resetDraft } = useTripDraft()

  return (
    <section className="relative mx-4 mt-4 overflow-hidden rounded-[36px] bg-peach px-5 pb-5 pt-4 lg:col-start-2 lg:row-start-3 lg:mx-0 lg:mt-5">
      <div className="relative mx-auto h-[128px] max-w-[300px]" aria-hidden="true">
        {CARDS.map((c) => (
          <MiniCard key={c.tone} {...c} reduce={reduce} />
        ))}
      </div>

      <Sticker className="left-5 top-5" delay={0.4} loop="sway">
        <Moon size={30} fill="#5A2E14" className="-rotate-15" />
      </Sticker>
      <Sticker className="right-6 top-4" delay={0.5}>
        <Sparkle size={22} fill="#E8793A" />
      </Sticker>
      <Sticker className="right-[52px] top-[52px]" delay={0.6}>
        <Sparkle size={13} fill="#FFFFFF" />
      </Sticker>
      <Sticker className="left-9 top-[92px]" delay={0.7}>
        <Sparkle size={14} fill="#FFFFFF" />
      </Sticker>

      <div className="relative flex flex-col items-center gap-1 pt-3 text-center">
        <h2 className="m-0 text-2xl font-bold">วันนี้อยากไปไหน?</h2>
        <p className="m-0 text-sm leading-[1.6] text-[#4A3A30]">บอกมู้ด สุ่มทริป แล้วปัดการ์ดหาที่ที่ใช่</p>
      </div>

      <SlideLink
        to="/plan/mood"
        onClick={() => resetDraft()}
        className="relative mt-4 flex h-14 items-center justify-center rounded-full bg-brown text-base font-semibold text-white"
      >
        เริ่มวางทริป
      </SlideLink>
    </section>
  )
}
