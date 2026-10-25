import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import { Moon, Sparkle } from '../icons'
import { LANDING_DECK, LANDING_SIDE } from '../../data/landingPlaces'

// รูปสถานที่จริง: สีพื้นระหว่างโหลด/โหลดไม่ขึ้น + เครดิตตัวเล็ก (รูป CC ต้องให้เครดิต)
function PlacePhoto({ place, className = '' }) {
  const [broken, setBroken] = useState(false)
  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`} style={{ background: place.tone }}>
      {!broken && <img src={place.image} alt={place.name} loading="lazy" decoding="async" draggable={false} referrerPolicy="no-referrer" onError={() => setBroken(true)} className="absolute inset-0 h-full w-full select-none object-cover" />}
      {!broken && <span className="absolute bottom-2 left-2 max-w-[calc(100%-16px)] truncate rounded-full bg-ink/55 px-2 py-0.5 text-[9px] leading-4 text-white">ภาพ: {place.credit}</span>}
    </div>
  )
}

const DECK = LANDING_DECK

const SWIPE_OUT = 480
const RESUME_DELAY = 4000

function Decor({ className, delay, loop, reduce, children }) {
  return (
    <motion.div
      className={`absolute z-[2] ${className}`}
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

const TWINKLE = { scale: [1, 0.6, 1], opacity: [1, 0.5, 1] }
const SWAY = { rotate: [0, 10, 0] }

function SideCard({ place, side, floatDelay, reduce, children }) {
  return (
    <motion.div
      className="absolute left-1/2 top-[30px] -ml-[125px] h-[360px] w-[250px]"
      initial={{ x: 0, rotate: 0, opacity: 0 }}
      animate={{ x: side * 74, rotate: side * 14, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 16, delay: 0.25 }}
    >
      <motion.div
        className="relative h-full rounded-[30px] bg-white p-2 shadow-[0_4px_14px_#5A2E1410]"
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: floatDelay }}
      >
        <PlacePhoto place={place} className="h-[250px]" />
        <div className="px-2 pt-2.5">
          <div className="truncate text-[17px] font-semibold">{place.name}</div>
          <div className="text-[13px] text-muted">{place.province}</div>
        </div>
        {children}
      </motion.div>
    </motion.div>
  )
}

function CardFace({ place }) {
  return (
    <>
      <div className="relative h-[270px]">
        <PlacePhoto place={place} className="h-full" />
        <span className="absolute left-3.5 top-3.5 rounded-full bg-brown px-3 py-[3px] text-xs font-semibold text-white">
          แนะนำ
        </span>
      </div>
      <div className="flex flex-col gap-1.5 px-2 pt-3">
        <div className="flex items-center justify-between">
          <div className="min-w-0 truncate text-xl font-semibold">{place.name}</div>
          <span className="rounded-full bg-[#E7EFDC] px-2 py-0.5 text-[11px] text-[#3F5A2E]">ตรงมู้ด</span>
        </div>
        <div className="text-[13px] text-muted">{place.meta}</div>
      </div>
    </>
  )
}

const FRONT_CARD = 'absolute left-1/2 top-2.5 -ml-[130px] h-[390px] w-[260px] rounded-[32px] bg-white p-2.5'

function SwipeCard({ place, auto, demoDir, entry, hintX, onHold, onRelease, onSwiped }) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-18, 18])
  const likeOpacity = useTransform(x, [20, 90], [0, 1])
  const skipOpacity = useTransform(x, [-90, -20], [1, 0])

  useEffect(() => {
    hintX.set(0)
    return x.on('change', (v) => hintX.set(v))
  }, [x, hintX])

  // demo: peek toward one side, hold, then fly out
  useEffect(() => {
    if (!auto) return
    let controls
    const timer = setTimeout(() => {
      controls = animate(x, [x.get(), demoDir * 70, demoDir * 70, demoDir * SWIPE_OUT], {
        duration: 1.6,
        times: [0, 0.35, 0.65, 1],
        ease: ['easeOut', 'linear', 'easeIn'],
        onComplete: onSwiped,
      })
    }, 1800)
    return () => {
      clearTimeout(timer)
      controls?.stop()
    }
  }, [auto, demoDir, onSwiped, x])

  function handleDragEnd(_, info) {
    onRelease()
    const power = info.offset.x + info.velocity.x * 0.2
    if (Math.abs(power) > 100) {
      animate(x, Math.sign(power) * SWIPE_OUT, { duration: 0.3, ease: 'easeIn', onComplete: onSwiped })
    } else {
      animate(x, 0, { type: 'spring', stiffness: 300, damping: 25 })
    }
  }

  return (
    <motion.div
      className={`${FRONT_CARD} z-[1] cursor-grab touch-pan-y select-none shadow-[0_10px_28px_#5A2E1422] active:cursor-grabbing`}
      style={{ x, rotate }}
      initial={entry ? { opacity: 0, y: 40 } : { scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: entry ? 0.1 : 0 }}
      drag="x"
      dragMomentum={false}
      onPointerDown={onHold}
      onPointerUp={onRelease}
      onPointerCancel={onRelease}
      onDragEnd={handleDragEnd}
    >
      <CardFace place={place} />
      <motion.span
        className="absolute left-[18px] top-5 -rotate-10 rounded-full bg-orange px-3 py-1 text-sm font-bold text-white"
        style={{ opacity: likeOpacity }}
      >
        อยากไป
      </motion.span>
      <motion.span
        className="absolute right-[18px] top-5 rotate-10 rounded-full border-2 border-muted bg-white px-3 py-0.5 text-sm font-bold text-muted"
        style={{ opacity: skipOpacity }}
      >
        ข้าม
      </motion.span>
    </motion.div>
  )
}

export default function CardStack() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [swiped, setSwiped] = useState(false)
  const [paused, setPaused] = useState(false)
  const resumeTimer = useRef()
  const hintX = useMotionValue(0)
  const skipScale = useTransform(hintX, [-100, 0], [1.15, 1])
  const likeScale = useTransform(hintX, [0, 100], [1, 1.15])

  const hold = useCallback(() => {
    clearTimeout(resumeTimer.current)
    setPaused(true)
  }, [])

  const release = useCallback(() => {
    clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_DELAY)
  }, [])

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % DECK.length)
    setSwiped(true)
  }, [])

  useEffect(() => () => clearTimeout(resumeTimer.current), [])

  const place = DECK[index]
  const upcoming = DECK[(index + 1) % DECK.length]

  return (
    <div className="relative mx-auto h-[470px] w-full max-w-[390px] shrink-0">
      <Decor className="left-3.5 top-0" delay={0.5} loop={SWAY} reduce={reduce}>
        <Moon size={38} fill="#F4A36C" className="-rotate-18" />
      </Decor>
      <Decor className="right-[22px] top-1" delay={0.6} loop={TWINKLE} reduce={reduce}>
        <Sparkle size={26} fill="#E8793A" />
      </Decor>
      <Decor className="right-[50px] top-10" delay={0.7} loop={TWINKLE} reduce={reduce}>
        <Sparkle size={18} fill="#5A2E14" />
      </Decor>
      <Decor className="left-[26px] top-[380px]" delay={0.8} loop={TWINKLE} reduce={reduce}>
        <Sparkle size={20} fill="#E8793A" />
      </Decor>
      <Decor className="right-4 top-[350px]" delay={0.9} loop={SWAY} reduce={reduce}>
        <Moon size={32} fill="#5A2E14" className="rotate-20" />
      </Decor>

      <SideCard place={LANDING_SIDE[0]} side={-1} floatDelay={0} reduce={reduce}>
        <span className="absolute right-[18px] top-5 rotate-10 rounded-full border-2 border-muted bg-white px-3 py-0.5 text-sm font-bold text-muted">
          ข้าม
        </span>
      </SideCard>
      <SideCard place={LANDING_SIDE[1]} side={1} floatDelay={1.2} reduce={reduce}>
        <span className="absolute left-[18px] top-5 -rotate-10 rounded-full bg-orange px-3 py-1 text-sm font-bold text-white">
          อยากไป
        </span>
      </SideCard>

      <motion.div
        key={upcoming.name}
        className={`${FRONT_CARD} shadow-[0_4px_14px_#5A2E1410]`}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: swiped ? 0 : 0.4 }}
        aria-hidden="true"
      >
        <CardFace place={upcoming} />
      </motion.div>

      <SwipeCard
        key={place.name}
        place={place}
        auto={!reduce && !paused}
        demoDir={index % 2 === 0 ? 1 : -1}
        entry={!swiped}
        hintX={hintX}
        onHold={hold}
        onRelease={release}
        onSwiped={next}
      />

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-[18px]">
        <motion.div className="flex items-center gap-1.5 text-[13px] text-muted" style={{ scale: skipScale }}>
          <ArrowLeft size={18} strokeWidth={2} aria-hidden="true" />
          ซ้าย ข้าม
        </motion.div>
        <div className="h-1.5 w-1.5 rounded-full bg-[#D9CFC5]" />
        <motion.div className="flex items-center gap-1.5 text-[13px] font-semibold text-brown" style={{ scale: likeScale }}>
          ขวา อยากไป
          <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
        </motion.div>
      </div>
    </div>
  )
}
