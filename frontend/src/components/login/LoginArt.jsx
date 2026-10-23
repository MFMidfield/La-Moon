import { motion, useReducedMotion } from 'framer-motion'
import { Moon, Sparkle } from '../icons'

const TWINKLE = { scale: [1, 0.6, 1], opacity: [1, 0.5, 1] }
const SWAY = { rotate: [0, 10, 0] }

function Decor({ className, delay, loop, reduce, children }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, delay }}
    >
      <motion.div
        className="flex"
        animate={reduce ? undefined : loop}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

function SideCard({ tone, side, floatDelay, reduce }) {
  return (
    <motion.div
      className="absolute left-1/2 top-14 -ml-[75px] h-[210px] w-[150px]"
      initial={{ x: 0, rotate: 0, opacity: 0 }}
      animate={{ x: side * 62, rotate: side * 12, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 16, delay: 0.25 }}
    >
      <motion.div
        className="h-full rounded-3xl bg-white p-1.5"
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: floatDelay }}
      >
        <div className="h-[140px] rounded-[18px]" style={{ background: tone }} />
      </motion.div>
    </motion.div>
  )
}

export default function LoginArt() {
  const reduce = useReducedMotion()

  return (
    <div className="relative mx-4 mt-2 h-[380px] shrink-0 overflow-hidden rounded-[36px] bg-peach lg:m-0 lg:h-full">
      <div className="absolute left-1/2 top-1/2 h-[380px] w-[358px] -translate-x-1/2 -translate-y-1/2 lg:scale-[1.4]">
        <Decor className="left-[22px] top-5" delay={0.5} loop={SWAY} reduce={reduce}>
          <Moon size={40} fill="#5A2E14" className="-rotate-15" />
        </Decor>
        <Decor className="right-[30px] top-[26px]" delay={0.6} loop={TWINKLE} reduce={reduce}>
          <Sparkle size={22} fill="#E8793A" />
        </Decor>
        <Decor className="right-[58px] top-[58px]" delay={0.7} loop={TWINKLE} reduce={reduce}>
          <Sparkle size={14} fill="#FFFFFF" />
        </Decor>
        <Decor className="bottom-24 left-[34px]" delay={0.8} loop={TWINKLE} reduce={reduce}>
          <Sparkle size={18} fill="#FFFFFF" />
        </Decor>

        <SideCard tone="#E7EFDC" side={-1} floatDelay={0} reduce={reduce} />
        <SideCard tone="#F6E3B8" side={1} floatDelay={1.2} reduce={reduce} />

        <motion.div
          className="absolute left-1/2 top-10 -ml-[82px] h-[232px] w-[164px] rounded-[26px] bg-white p-[7px] shadow-[0_8px_22px_#5A2E141F]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
        >
          <div className="flex h-[156px] items-end overflow-hidden rounded-[20px] bg-[#FBE3D2]">
            <svg width="150" height="100" viewBox="0 0 150 100" aria-hidden="true">
              <circle cx="112" cy="26" r="13" fill="#F4A36C" />
              <path d="M0 100 L44 44 L70 72 L102 34 L150 100 Z" fill="#D9A27E" />
            </svg>
          </div>
          <div className="px-1.5 pt-2">
            <div className="h-2.5 w-[70%] rounded-full bg-[#EDE5DD]" />
            <div className="mt-1.5 h-2 w-[45%] rounded-full bg-cream" />
          </div>
        </motion.div>

        <div className="absolute inset-x-0 bottom-[26px] flex justify-center gap-3.5" aria-hidden="true">
          <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F1A17" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </span>
          <motion.span
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-brown"
            animate={reduce ? undefined : { scale: [1, 1.12, 1, 1.12, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.6, delay: 1 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" />
            </svg>
          </motion.span>
        </div>
      </div>
    </div>
  )
}
