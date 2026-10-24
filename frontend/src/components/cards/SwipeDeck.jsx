import { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import { HOLO_RARITIES } from '../../data/rarity'
import DeckFrame from './DeckFrame'
import { SkeletonCard } from './DeckStates'
import HoloOverlay from './HoloOverlay'

const SWIPE_POWER = 110
const SAVE_POWER = 90
const OUT_EXTRA = 380

const clamp = (v, min, max) => Math.min(max, Math.max(min, v))
const outX = () => (typeof window === 'undefined' ? 0 : window.innerWidth / 2 + OUT_EXTRA)
const outY = () => (typeof window === 'undefined' ? 0 : window.innerHeight * 0.8 + 120)

function DeckCard({ ref, isFront, enter, dragX, dragY, nextScale, onSwiped, canSave, rarity, label, likeLabel, children }) {
  const reduce = useReducedMotion()
  const x = useMotionValue(reduce ? 0 : enter.x)
  const y = useMotionValue(reduce ? 0 : enter.y)
  const px = useMotionValue(50)
  const py = useMotionValue(50)
  const rotate = useTransform(x, [-240, 240], [-16, 16])
  const likeOpacity = useTransform(x, [24, 100], [0, 1])
  const skipOpacity = useTransform(x, [-100, -24], [1, 0])
  const saveOpacity = useTransform(y, [-100, -24], [1, 0])
  const glareX = useTransform([px, x], ([p, v]) => clamp(p + v / 4, -20, 120))
  const tiltY = useTransform([px, x], ([p, v]) => clamp((p - 50) / 7 + v / 30, -10, 10))
  const tiltX = useTransform(py, [0, 100], [6, -6])
  const flying = useRef(false)
  const [gone, setGone] = useState(false)
  const onSwipedRef = useRef(onSwiped)
  const holo = HOLO_RARITIES.includes(rarity)

  useEffect(() => {
    onSwipedRef.current = onSwiped
  })

  useEffect(() => {
    if (!isFront) return
    dragX.set(x.get())
    dragY.set(y.get())
    const offX = x.on('change', (v) => dragX.set(v))
    const offY = y.on('change', (v) => dragY.set(v))
    return () => {
      offX()
      offY()
    }
  }, [isFront, x, y, dragX, dragY])

  // undo: การ์ดกลับมาจากด้านที่บินออกไป
  useEffect(() => {
    if (x.get() === 0 && y.get() === 0) return
    if (reduce) {
      x.set(0)
      y.set(0)
      return
    }
    const spring = { type: 'spring', stiffness: 260, damping: 26 }
    const controls = [animate(x, 0, spring), animate(y, 0, spring)]
    return () => controls.forEach((c) => c.stop())
  }, [x, y, reduce])

  const fly = useCallback(
    (dir, fromDrag = false) => {
      if (flying.current) return
      if (dir === 'up' && !canSave) return
      flying.current = true
      setGone(true)
      if (reduce) {
        x.set(0)
        y.set(0)
        onSwipedRef.current(dir)
        return
      }
      const options = {
        duration: fromDrag ? 0.28 : 0.38,
        ease: fromDrag ? 'easeOut' : [0.5, 0, 0.75, 0.4],
        onComplete: () => onSwipedRef.current(dir),
      }
      if (dir === 'up') animate(y, -outY(), options)
      else animate(x, (dir === 'right' ? 1 : -1) * outX(), options)
    },
    [x, y, reduce, canSave],
  )

  useImperativeHandle(ref, () => ({ fly, busy: () => flying.current }), [fly])

  function snapBack() {
    if (reduce) {
      x.set(0)
      y.set(0)
      return
    }
    const spring = { type: 'spring', stiffness: 320, damping: 24 }
    animate(x, 0, spring)
    animate(y, 0, spring)
  }

  function handleDragEnd(_, info) {
    const powerX = info.offset.x + info.velocity.x * 0.2
    const powerUp = -(info.offset.y + info.velocity.y * 0.2)
    if (canSave && powerUp > SAVE_POWER && powerUp > Math.abs(powerX)) fly('up', true)
    else if (Math.abs(powerX) > SWIPE_POWER) fly(powerX > 0 ? 'right' : 'left', true)
    else snapBack()
  }

  function handlePointerMove(e) {
    if (reduce || !holo || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    px.set(clamp(((e.clientX - r.left) / r.width) * 100, 0, 100))
    py.set(clamp(((e.clientY - r.top) / r.height) * 100, 0, 100))
  }

  function handlePointerLeave() {
    if (reduce || !holo) return
    animate(px, 50, { duration: 0.4 })
    animate(py, 50, { duration: 0.4 })
  }

  const style = { x, y, rotate: reduce ? 0 : rotate, scale: reduce || isFront ? 1 : nextScale }
  if (holo && !reduce) Object.assign(style, { rotateX: tiltX, rotateY: tiltY, transformPerspective: 900 })

  return (
    <motion.div
      className={`absolute inset-x-2 bottom-0.5 top-5 overflow-hidden rounded-[32px] bg-white p-2.5 ${
        isFront ? 'z-[2] cursor-grab select-none shadow-[0_6px_18px_#5A2E1414] active:cursor-grabbing' : 'z-[1]'
      } ${gone ? 'pointer-events-none' : ''}`}
      style={style}
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduce ? 0 : 0.25 }}
      drag={isFront && !gone ? (canSave ? true : 'x') : false}
      dragDirectionLock
      dragMomentum={false}
      onDragEnd={isFront ? handleDragEnd : undefined}
      onPointerMove={isFront ? handlePointerMove : undefined}
      onPointerLeave={isFront ? handlePointerLeave : undefined}
      role={isFront ? 'group' : undefined}
      aria-label={isFront ? label : undefined}
      aria-hidden={isFront ? undefined : true}
    >
      {children}
      {holo && <HoloOverlay rarity={rarity} glareX={glareX} glareY={py} active={isFront} />}
      {isFront && (
        <>
          <motion.span
            aria-hidden="true"
            className="absolute left-6 top-9 -rotate-12 rounded-full bg-orange px-4 py-1.5 text-lg font-bold text-white"
            style={{ opacity: likeOpacity }}
          >
            {likeLabel}
          </motion.span>
          <motion.span
            aria-hidden="true"
            className="absolute right-6 top-9 rotate-12 rounded-full border-2 border-muted bg-white px-4 py-1 text-lg font-bold text-muted"
            style={{ opacity: skipOpacity }}
          >
            ข้าม
          </motion.span>
          {canSave && (
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-9 flex justify-center">
              <motion.span
                className="rounded-full bg-brown px-4 py-1.5 text-lg font-bold text-white"
                style={{ opacity: saveOpacity }}
              >
                เก็บไว้ก่อน
              </motion.span>
            </div>
          )}
        </>
      )}
    </motion.div>
  )
}

/**
 * กองการ์ดปัดได้ (ใช้ได้กับการ์ดทุกชนิด ผ่าน renderCard) — ref: { swipe(dir), busy() }
 * dir = 'right' (ชอบ) | 'left' (ข้าม) | 'up' (เก็บไว้ก่อน, เฉพาะ canSave) ; items = null → skeleton
 * renderCard(item) คืนเนื้อการ์ดสูงเต็มกรอบ ; holoOf(item) → rarity (rare/legendary = holo) ; labelOf(item) → aria-label
 * returning = { id, dir } → การ์ดใบนั้นกลับเข้ามาจากด้านที่ออกไป (undo)
 */
export default function SwipeDeck({
  ref,
  items,
  index,
  roundKey = 1,
  returning,
  dragX,
  dragY,
  onSwiped,
  renderCard,
  canSave = false,
  holoOf,
  labelOf,
  loadingLabel,
  likeLabel = 'อยากไป',
}) {
  const reduce = useReducedMotion()
  const frontRef = useRef(null)
  const nextScale = useTransform([dragX, dragY], ([dx, dy]) => 0.95 + 0.05 * Math.min(Math.max(Math.abs(dx), Math.abs(dy)) / 160, 1))

  useImperativeHandle(
    ref,
    () => ({
      swipe: (dir) => frontRef.current?.fly(dir),
      busy: () => frontRef.current?.busy() ?? false,
    }),
    [],
  )

  const front = items?.[index]
  const next = items?.[index + 1]

  return (
    <DeckFrame remaining={items ? items.length - index : 3} bump={`${roundKey}:${index}`}>
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 200, damping: 22 }}
      >
        {!items && <SkeletonCard label={loadingLabel} />}
        {[next, front].filter(Boolean).map((item) => {
          const isFront = item === front
          const back = isFront && returning?.id === item.id ? returning.dir : null
          return (
            <DeckCard
              key={`${roundKey}:${item.id}`}
              ref={isFront ? frontRef : undefined}
              isFront={isFront}
              enter={{
                x: back === 'right' ? outX() : back === 'left' ? -outX() : 0,
                y: back === 'up' ? -outY() : 0,
              }}
              dragX={dragX}
              dragY={dragY}
              nextScale={nextScale}
              onSwiped={onSwiped}
              canSave={canSave}
              rarity={holoOf?.(item)}
              label={labelOf?.(item)}
              likeLabel={likeLabel}
            >
              {renderCard(item)}
            </DeckCard>
          )
        })}
      </motion.div>
    </DeckFrame>
  )
}
