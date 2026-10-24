import { useEffect, useEffectEvent, useRef, useState } from 'react'
import { animate, motion, useDragControls, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import SlideLink from '../SlideLink'
import { MOODS } from '../../data/options'
import { PROVINCE_INFO } from '../../data/provinceInfo'
import { REGION_BY_ID } from './geometry'

const PEEK_HEIGHT = 184

export default function ProvinceSheet({ province, count, places, ready, height }) {
  const expandedHeight = Math.max(PEEK_HEIGHT + 80, Math.min(390, height * 0.58))
  const travel = expandedHeight - PEEK_HEIGHT
  const [expanded, setExpanded] = useState(false)
  const y = useMotionValue(travel)
  const sheetHeight = useTransform(y, value => expandedHeight - value)
  const controls = useDragControls()
  const reducedMotion = useReducedMotion()
  const dragged = useRef(false)
  const clickTimer = useRef(0)
  const region = REGION_BY_ID[province.region]
  const moodCounts = new Map()
  for (const place of places) for (const mood of new Set(place.moods ?? [])) moodCounts.set(mood, (moodCounts.get(mood) ?? 0) + 1)
  const moods = MOODS.filter(mood => moodCounts.has(mood.id)).sort((a, b) => moodCounts.get(b.id) - moodCounts.get(a.id)).slice(0, 3)
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
        <div className="flex h-[184px] shrink-0 flex-col px-4 pb-4">
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
          <div aria-live="polite" className="min-h-0 grow">
            <div className="flex items-center justify-between gap-2">
              <h2 id="current-province-title" className="m-0 truncate text-xl font-semibold">{province.label}</h2>
              <span className="shrink-0 rounded-full px-3 py-1 text-xs text-brown" style={{ backgroundColor: region.color }}>ภาค{region.label}</span>
            </div>
            <p className="mb-0 mt-1 text-xs leading-5 text-muted">{ready ? `${count} ที่เที่ยว${count ? '' : ' · เร็วๆ นี้ ยังไม่มีที่เที่ยว'}` : 'กำลังโหลดที่เที่ยว…'}</p>
          </div>
          {ready && count > 0 ? (
            <SlideLink to={`/map/${province.id}/mood`} className="flex h-14 shrink-0 items-center justify-center rounded-full bg-brown text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown">เลือก{province.label}</SlideLink>
          ) : (
            <button type="button" disabled className="h-14 shrink-0 rounded-full bg-brown text-base font-semibold text-white opacity-40">เลือก{province.label}</button>
          )}
        </div>
        <div id="province-details" aria-hidden={!expanded} inert={!expanded} className="min-h-0 grow overflow-y-auto overscroll-contain border-t border-[#EDE5DD] px-4 pb-5 pt-3">
          {PROVINCE_INFO[province.id]?.tagline && <p className="m-0 text-sm leading-relaxed text-muted">{PROVINCE_INFO[province.id].tagline}</p>}
          <div className="mt-2 flex flex-wrap gap-1.5">
            {moods.map(mood => <span key={mood.id} className="rounded-full bg-cream px-3 py-1 text-xs">{mood.label}</span>)}
          </div>
          {places.length > 0 && <ul aria-label={`ที่เที่ยวใน${province.label}`} className="mb-0 mt-3 list-none space-y-2 p-0 text-sm text-ink">{places.map(place => <li key={place.id}>{place.name}</li>)}</ul>}
        </div>
      </motion.section>
    </motion.div>
  )
}
