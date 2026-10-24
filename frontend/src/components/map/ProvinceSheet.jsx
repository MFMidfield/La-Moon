import { useEffect, useEffectEvent, useRef, useState } from 'react'
import { animate, motion, useDragControls, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import { ProvinceCta, ProvinceExtra, ProvinceSummary } from './ProvinceDetails'

const PEEK_HEIGHT = 184

export default function ProvinceSheet({ province, count, places, ready, height, plan }) {
  const isRandom = plan?.randomId === province.id
  const peekHeight = PEEK_HEIGHT + (isRandom ? (plan?.randomError ? 42 : 0) + (plan?.needMore > 0 ? 48 : 0) : 0)
  // ดึงขยายได้ถึง 3/4 ของจอ
  const expandedHeight = Math.max(peekHeight + 80, Math.round(height * 0.75))
  const travel = expandedHeight - peekHeight
  const [expanded, setExpanded] = useState(false)
  const y = useMotionValue(travel)
  const sheetHeight = useTransform(y, value => expandedHeight - value)
  const controls = useDragControls()
  const reducedMotion = useReducedMotion()
  const dragged = useRef(false)
  const clickTimer = useRef(0)
  const resize = useEffectEvent(() => { y.stop(); y.set(expanded ? 0 : travel) })

  useEffect(() => { resize() }, [travel])
  useEffect(() => () => clearTimeout(clickTimer.current), [])

  function snap(open) {
    setExpanded(open)
    y.stop()
    if (reducedMotion) y.set(open ? 0 : travel)
    else animate(y, open ? 0 : travel, { duration: 0.24, ease: [0.22, 1, 0.36, 1] })
  }

  return (
    <motion.div style={{ height: sheetHeight }} className="relative overflow-hidden">
      <motion.section
        aria-labelledby="current-province-title"
        drag="y"
        dragControls={controls}
        dragListener={false}
        dragConstraints={{ top: 0, bottom: travel }}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => { dragged.current = true }}
        onDragEnd={(_, info) => {
          snap(info.velocity.y < -350 || (info.velocity.y <= 350 && y.get() < travel / 2))
          clickTimer.current = setTimeout(() => { dragged.current = false }, 0)
        }}
        style={{ y, height: expandedHeight }}
        className="absolute inset-x-0 bottom-0 flex flex-col rounded-t-[32px] border border-b-0 border-[#EDE5DD] bg-white"
      >
        <div style={{ height: peekHeight }} className="flex shrink-0 flex-col px-4 pb-4">
          <button
            type="button"
            aria-label={expanded ? 'ย่อข้อมูลจังหวัด' : 'ขยายข้อมูลจังหวัด'}
            aria-expanded={expanded}
            aria-controls="province-details"
            onPointerDown={event => { dragged.current = false; controls.start(event) }}
            onClick={() => { if (!dragged.current) snap(!expanded) }}
            className="flex min-h-11 w-full shrink-0 touch-none cursor-grab items-center justify-center rounded-full active:cursor-grabbing focus-visible:outline-2 focus-visible:outline-brown"
          >
            <span aria-hidden="true" className="h-1 w-10 rounded-full bg-[#D9CFC5]" />
          </button>
          <div className="min-h-0 grow">
            <ProvinceSummary province={province} count={count} ready={ready} plan={plan} />
          </div>
          <ProvinceCta province={province} count={count} ready={ready} plan={plan} />
        </div>
        <div id="province-details" aria-hidden={!expanded} inert={!expanded} className="min-h-0 grow overflow-y-auto overscroll-contain border-t border-[#EDE5DD] px-4 pb-5 pt-3">
          <ProvinceExtra province={province} places={places} />
        </div>
      </motion.section>
    </motion.div>
  )
}
