import { motion, useReducedMotion } from 'framer-motion'
import { Moon, Sparkle } from '../icons'
import Sticker from '../home/Sticker'
import PersonalityArt from './PersonalityArt'
import { MOODS } from '../../data/options'

const moodLabel = (id) => MOODS.find((m) => m.id === id)?.label ?? id

function Bar({ label, percent, index, reduce }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-24 shrink-0 truncate text-sm lg:text-[15px]">{label}</div>
      <div className="h-2.5 grow overflow-hidden rounded-full bg-white lg:bg-cream">
        <motion.div
          className="h-full rounded-full bg-brown"
          initial={reduce ? false : { width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.35 + index * 0.1 }}
        />
      </div>
      <div className="w-10 shrink-0 text-right text-sm font-semibold text-brown">{percent}%</div>
    </div>
  )
}

// การ์ดพีชผลบุคลิก: ภาพ + ชื่อ + สัดส่วนมู้ด + คำอธิบาย + จังหวัดที่เหมาะ
export default function PersonalityCard({ result, personality, provinces }) {
  const reduce = useReducedMotion()

  return (
    <motion.section
      className="relative mx-4 overflow-hidden rounded-[36px] bg-peach px-[22px] pb-7 pt-7 lg:mx-0 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-stretch lg:gap-6 lg:overflow-visible lg:rounded-none lg:bg-transparent lg:p-0"
      initial={reduce ? false : { opacity: 0, scale: 0.9, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
    >
      <div className="contents lg:relative lg:flex lg:flex-col lg:justify-center lg:overflow-hidden lg:rounded-[40px] lg:bg-peach lg:px-8 lg:py-12">
        <Sticker className="left-6 top-6" delay={0.3} loop="sway">
          <Moon size={32} fill="#5A2E14" className="-rotate-15" />
        </Sticker>
        <Sticker className="right-7 top-7" delay={0.4}>
          <Sparkle size={22} fill="#E8793A" />
        </Sticker>
        <Sticker className="right-14 top-[120px]" delay={0.5}>
          <Sparkle size={14} fill="#FFFFFF" />
        </Sticker>
        <Sticker className="left-10 top-[132px]" delay={0.6}>
          <Sparkle size={16} fill="#FFFFFF" />
        </Sticker>

        <PersonalityArt mood={result.id} color={personality.color} />

        <div className="relative mt-5 text-center">
          <div className="text-sm text-[#4A3A30]">บุคลิกการเที่ยวของคุณ</div>
          <h1 className="m-0 mt-1 text-[28px] font-bold leading-[1.25] lg:text-4xl">คุณคือ “{personality.title}”</h1>
        </div>
      </div>

      <div className="contents lg:flex lg:flex-col lg:justify-center lg:rounded-[40px] lg:bg-white lg:px-10 lg:py-10">
        <h2 className="m-0 mb-5 hidden text-xl font-bold lg:block">สัดส่วนมู้ดของคุณ</h2>

        <div className="relative mt-5 flex flex-col gap-2.5 lg:mt-0 lg:gap-4">
          {result.breakdown.map((b, i) => (
            <Bar key={b.mood} label={moodLabel(b.mood)} percent={b.percent} index={i} reduce={reduce} />
          ))}
        </div>

        <p className="relative m-0 mt-5 text-center text-[15px] leading-[1.6] text-[#4A3A30] lg:mt-8 lg:text-left lg:text-base lg:leading-[1.7]">{personality.description}</p>

        {provinces.length > 0 && (
          <div className="relative mt-5 rounded-[24px] bg-white px-4 py-3 text-center text-[15px] lg:mt-8 lg:bg-cream lg:text-left">
            <span className="text-muted">จังหวัดที่เหมาะ: </span>
            <span className="font-semibold text-brown">{provinces.join(' · ')}</span>
          </div>
        )}
      </div>
    </motion.section>
  )
}
