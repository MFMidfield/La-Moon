import { motion, useReducedMotion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Moon, Sparkle } from '../components/icons'
import SlideLink from '../components/SlideLink'
import { MOODS } from '../data/options'

const TWINKLE = { scale: [1, 0.6, 1], opacity: [1, 0.5, 1] }
const SWAY = { rotate: [0, 10, 0] }

// ดาว/พระจันทร์พุ่งออกจากกลางกล่อง (from = ระยะจากจุดวางไปหากลาง)
function Burst({ className, from, delay, loop, reduce, children }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0, x: from[0], y: from[1] }}
      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      transition={{ type: 'spring', stiffness: 140, damping: 14, delay }}
    >
      <motion.div
        className="flex"
        animate={reduce ? undefined : loop}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.8 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

function MiniCard({ tone, side }) {
  return (
    <motion.div
      className="absolute left-1/2 top-[58px] -ml-[55px] h-[150px] w-[110px] rounded-[22px] bg-white p-1.5"
      initial={{ x: 0, rotate: 0, opacity: 0 }}
      animate={{ x: side * 72, rotate: side * 12, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 15, delay: 0.35 }}
    >
      <div className="h-[100px] rounded-2xl" style={{ background: tone }} />
    </motion.div>
  )
}

function WelcomeArt({ avatarUrl, name }) {
  const reduce = useReducedMotion()

  return (
    <div className="relative mx-4 mt-6 h-[300px] shrink-0 overflow-hidden rounded-[36px] bg-peach">
      <div className="absolute left-1/2 top-0 h-[300px] w-[358px] -translate-x-1/2">
        <Burst className="left-6 top-[22px]" from={[140, 110]} delay={0.5} loop={SWAY} reduce={reduce}>
          <Moon size={36} fill="#5A2E14" className="-rotate-15" />
        </Burst>
        <Burst className="right-[34px] top-[30px]" from={[-120, 110]} delay={0.55} loop={TWINKLE} reduce={reduce}>
          <Sparkle size={22} fill="#E8793A" />
        </Burst>
        <Burst className="right-[70px] top-[74px]" from={[-100, 70]} delay={0.6} loop={TWINKLE} reduce={reduce}>
          <Sparkle size={14} fill="#FFFFFF" />
        </Burst>
        <Burst className="bottom-10 left-10" from={[130, -90]} delay={0.65} loop={TWINKLE} reduce={reduce}>
          <Sparkle size={18} fill="#FFFFFF" />
        </Burst>
        <Burst className="bottom-9 right-[30px]" from={[-120, -90]} delay={0.7} loop={SWAY} reduce={reduce}>
          <Moon size={26} fill="#E8793A" className="rotate-15" />
        </Burst>

        <MiniCard tone="#E7EFDC" side={-1} />
        <MiniCard tone="#F6E3B8" side={1} />

        <motion.div
          className="absolute left-1/2 top-[84px] -ml-12 h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-[#FBE3D2]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.1 }}
        >
          {avatarUrl ? (
            <img src={avatarUrl} alt="" referrerPolicy="no-referrer" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-brown">
              {name.charAt(0)}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default function Welcome() {
  const { profile } = useAuth()
  const location = useLocation()
  const moods = MOODS.filter((m) => profile.favorite_moods?.includes(m.id))

  return (
    <div className="flex min-h-svh flex-col bg-cream text-ink">
      <div className="mx-auto flex w-full max-w-[440px] grow flex-col lg:grow-0 lg:py-16">
        <WelcomeArt avatarUrl={profile.avatar_url} name={profile.display_name} />

        <div className="flex flex-col items-center gap-2 px-[22px] pt-7 text-center">
          <div className="text-base text-[#4A3A30]">สวัสดี {profile.display_name}</div>
          <h1 className="m-0 text-[28px] font-bold leading-[1.25]">ยินดีต้อนรับสู่ LaMoon</h1>
          <p className="m-0 text-[15px] leading-[1.6] text-[#4A3A30]">
            โปรไฟล์พร้อมแล้ว เราจะคัดการ์ดตามมู้ดที่คุณชอบ
          </p>
          {moods.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {moods.map((mood, i) => (
                <motion.span
                  key={mood.id}
                  className="flex h-9 items-center gap-1.5 rounded-full bg-brown px-3.5 text-sm font-semibold text-white"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {mood.label}
                </motion.span>
              ))}
            </div>
          )}
        </div>

        <div className="grow lg:hidden" />

        <div className="px-4 pb-7 pt-8 lg:pb-0">
          <SlideLink
            to={location.state?.from ?? '/home'}
            replace
            className="flex h-14 items-center justify-center rounded-full bg-brown text-base font-semibold text-white"
          >
            เริ่มปัดการ์ดเลย
          </SlideLink>
        </div>
      </div>
    </div>
  )
}
