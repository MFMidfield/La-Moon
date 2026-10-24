import { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import { HOLO_RARITIES } from '../../data/rarity'
import DeckFrame from './DeckFrame'
import { SkeletonCard } from './DeckStates'
import HoloOverlay from './HoloOverlay'
import PlaceCard from './PlaceCard'

const SWIPE_POWER = 110
const OUT_EXTRA = 380

const clamp = (v, min, max) => Math.min(max, Math.max(min, v))

function DeckCard({ ref, place, isFront, enterX, dragX, nextScale, onSwiped, face }) {
  const reduce = useReducedMotion()
  const x = useMotionValue(enterX)
  const px = useMotionValue(50)
  const py = useMotionValue(50)
  const rotate = useTransform(x, [-240, 240], [-16, 16])
  const likeOpacity = useTransform(x, [24, 100], [0, 1])
  const skipOpacity = useTransform(x, [-100, -24], [1, 0])
  const glareX = useTransform([px, x], ([p, v]) => clamp(p + v / 4, -20, 120))
  const tiltY = useTransform([px, x], ([p, v]) => clamp((p - 50) / 7 + v / 30, -10, 10))
  const tiltX = useTransform(py, [0, 100], [6, -6])
  const flying = useRef(false)
  const [gone, setGone] = useState(false)
  const onSwipedRef = useRef(onSwiped)
  const holo = HOLO_RARITIES.includes(place.rarity)

  useEffect(() => {
    onSwipedRef.current = onSwiped
  })

  useEffect(() => {
    if (!isFront) return
    dragX.set(x.get())
    return x.on('change', (v) => dragX.set(v))
  }, [isFront, x, dragX])

  // undo: card comes back from the side it left
  useEffect(() => {
    if (x.get() === 0) return
    const controls = animate(x, 0, { type: 'spring', stiffness: 260, damping: 26 })
    return () => controls.stop()
  }, [x])

  const fly = useCallback(
    (dir, fromDrag = false) => {
      if (flying.current) return
      flying.current = true
      setGone(true)
      animate(x, dir * (window.innerWidth / 2 + OUT_EXTRA), {
        duration: reduce ? 0.2 : fromDrag ? 0.28 : 0.38,
        ease: fromDrag ? 'easeOut' : [0.5, 0, 0.75, 0.4],
        onComplete: () => onSwipedRef.current(dir),
      })
    },
    [x, reduce],
  )

  useImperativeHandle(ref, () => ({ fly, busy: () => flying.current }), [fly])

  function handleDragEnd(_, info) {
    const power = info.offset.x + info.velocity.x * 0.2
    if (Math.abs(power) > SWIPE_POWER) fly(Math.sign(power), true)
    else animate(x, 0, { type: 'spring', stiffness: 320, damping: 24 })
  }

  function handlePointerMove(e) {
    if (!holo || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    px.set(clamp(((e.clientX - r.left) / r.width) * 100, 0, 100))
    py.set(clamp(((e.clientY - r.top) / r.height) * 100, 0, 100))
  }

  function handlePointerLeave() {
    if (!holo) return
    animate(px, 50, { duration: 0.4 })
    animate(py, 50, { duration: 0.4 })
  }

  const style = { x, rotate, scale: isFront ? 1 : nextScale }
  if (holo) Object.assign(style, { rotateX: tiltX, rotateY: tiltY, transformPerspective: 900 })

  return (
    <motion.div
      className={`absolute inset-x-2 bottom-0.5 top-5 rounded-[32px] bg-white p-2.5 ${
        isFront
          ? 'z-[2] cursor-grab touch-pan-y select-none shadow-[0_6px_18px_#5A2E1414] active:cursor-grabbing'
          : 'z-[1]'
      } ${gone ? 'pointer-events-none' : ''}`}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      drag={isFront && !gone ? 'x' : false}
      dragMomentum={false}
      onDragEnd={isFront ? handleDragEnd : undefined}
      onPointerMove={isFront ? handlePointerMove : undefined}
      onPointerLeave={isFront ? handlePointerLeave : undefined}
      role={isFront ? 'group' : undefined}
      aria-label={isFront ? place.name : undefined}
      aria-hidden={isFront ? undefined : true}
    >
      <PlaceCard
        place={place}
        provinceLabel={face.provinceLabel}
        moodTotal={face.moodTotal}
        recommended={face.recommendedId === place.id}
      />
      {holo && <HoloOverlay rarity={place.rarity} glareX={glareX} glareY={py} active={isFront} />}
      {isFront && (
        <>
          <motion.span
            aria-hidden="true"
            className="absolute left-6 top-9 -rotate-12 rounded-full bg-orange px-4 py-1.5 text-lg font-bold text-white"
            style={{ opacity: likeOpacity }}
          >
            อยากไป
          </motion.span>
          <motion.span
            aria-hidden="true"
            className="absolute right-6 top-9 rotate-12 rounded-full border-2 border-muted bg-white px-4 py-1 text-lg font-bold text-muted"
            style={{ opacity: skipOpacity }}
          >
            ข้าม
          </motion.span>
        </>
      )}
    </motion.div>
  )
}

// กองการ์ดปัดได้ — ref: { swipe(dir), busy() }; dir 1 = อยากไป, -1 = ข้าม; places = null → skeleton
export default function SwipeDeck({ ref, places, index, returning, dragX, onSwiped, provinceLabel, moodTotal }) {
  const frontRef = useRef(null)
  const nextScale = useTransform(dragX, (v) => 0.95 + 0.05 * Math.min(Math.abs(v) / 160, 1))

  useImperativeHandle(
    ref,
    () => ({
      swipe: (dir) => frontRef.current?.fly(dir),
      busy: () => frontRef.current?.busy() ?? false,
    }),
    [],
  )

  const front = places?.[index]
  const next = places?.[index + 1]
  const face = { provinceLabel, moodTotal, recommendedId: places?.[0]?.id }
  const outX = typeof window === 'undefined' ? 0 : window.innerWidth / 2 + OUT_EXTRA

  return (
    <DeckFrame remaining={places ? places.length - index : 3} bump={index}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      >
        {!places && <SkeletonCard />}
        {[next, front].filter(Boolean).map((place) => {
          const isFront = place === front
          return (
            <DeckCard
              key={place.id}
              ref={isFront ? frontRef : undefined}
              place={place}
              isFront={isFront}
              enterX={isFront && returning?.id === place.id ? returning.dir * outX : 0}
              dragX={dragX}
              nextScale={nextScale}
              onSwiped={onSwiped}
              face={face}
            />
          )
        })}
      </motion.div>
    </DeckFrame>
  )
}
