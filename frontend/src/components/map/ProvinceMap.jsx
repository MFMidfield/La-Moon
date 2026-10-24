import { useMemo, useState } from 'react'
import SlideLink from '../SlideLink'
import { provinceGeometry } from './geometry'

export default function ProvinceMap({ province, places }) {
  const [activeId, setActiveId] = useState(null)
  const geometry = useMemo(() => provinceGeometry(province.id, places), [province.id, places])
  const active = geometry.pins.find(pin => pin.id === activeId)
  const missingCoordinates = places.length - geometry.pins.length

  return (
    <div className="relative mx-4 mt-1 h-[462px] shrink-0 overflow-hidden rounded-[32px] bg-white">
      <svg viewBox="0 0 350 462" role="group" aria-label={`แผนที่จังหวัด${province.label} พร้อมหมุดที่เที่ยว`} className="h-full w-full">
        <g fill="#EFE7DF" stroke="#FFFFFF" strokeWidth="0.9" strokeLinejoin="round" aria-hidden="true">
          {geometry.neighbours.map(neighbour => <path key={neighbour.id} d={neighbour.d} vectorEffect="non-scaling-stroke" />)}
        </g>
        <path d={geometry.selectedPath} fill="#F9D9C2" stroke="#E8793A" strokeWidth="2.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" aria-hidden="true" />
        {geometry.pins.map(pin => (
          <g
            key={pin.id}
            transform={`translate(${pin.point[0]}, ${pin.point[1]})`}
            role="button"
            tabIndex={0}
            aria-label={pin.name}
            aria-pressed={activeId === pin.id}
            onClick={() => setActiveId(pin.id)}
            onFocus={() => setActiveId(pin.id)}
            onKeyDown={event => {
              if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActiveId(pin.id) }
              if (event.key === 'Escape') setActiveId(null)
            }}
            className="group cursor-pointer outline-none"
          >
            <title>{pin.name}</title>
            <circle r="22" fill="transparent" />
            <circle r={activeId === pin.id ? 10 : 8} fill="#5A2E14" stroke="#FFFFFF" strokeWidth="2.5" className="group-focus-visible:stroke-orange group-focus-visible:stroke-[4]" />
          </g>
        ))}
      </svg>
      <SlideLink to="/map" back className="absolute left-4 top-4 flex min-h-11 items-center gap-1.5 rounded-full bg-cream px-3.5 text-sm font-medium text-ink focus-visible:outline-2 focus-visible:outline-brown">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" /></svg>
        ดูทั้งประเทศ
      </SlideLink>
      <div className="pointer-events-none absolute inset-x-4 bottom-4 flex flex-col items-center gap-1.5" aria-live="polite">
        {active && <p className="m-0 max-w-full rounded-2xl bg-brown px-4 py-2 text-center text-sm font-medium text-white">{active.name}</p>}
        <p className="m-0 rounded-full bg-white px-3 py-1 text-center text-xs text-muted">
          {geometry.pins.length ? 'แตะหมุดเพื่อดูชื่อที่เที่ยว' : 'ยังไม่มีพิกัดที่เที่ยวบนแผนที่'}
          {missingCoordinates > 0 && geometry.pins.length > 0 ? ` · อีก ${missingCoordinates} ที่ยังไม่มีพิกัด` : ''}
        </p>
      </div>
    </div>
  )
}
