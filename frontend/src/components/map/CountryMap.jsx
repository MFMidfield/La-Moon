import { useState } from 'react'
import { COUNTRY_PATHS, PROVINCE_BY_ID, REGION_BY_ID } from './geometry'

export default function CountryMap({ counts, region, query, onChoose }) {
  const [hovered, setHovered] = useState(null)
  const [focused, setFocused] = useState(null)
  const active = focused ?? hovered

  return (
    <>
      <svg viewBox="0 0 350 558" role="group" aria-label="แผนที่ประเทศไทย 77 จังหวัด เลือกจังหวัดที่มีที่เที่ยว" className="absolute inset-0 h-full w-full">
        <g stroke="#FFFFFF" strokeWidth="0.9" strokeLinejoin="round">
          {COUNTRY_PATHS.map(({ id, d }) => {
            const province = PROVINCE_BY_ID[id]
            const available = counts[id] > 0
            const matches = (!region || province.region === region) && (!query.trim() || province.label.includes(query.trim()))
            const selected = available && active === id
            return (
              <path
                key={id}
                d={d}
                fill={selected ? '#E8793A' : available ? REGION_BY_ID[province.region].color : '#EFE7DF'}
                stroke={selected ? '#5A2E14' : '#FFFFFF'}
                opacity={selected ? 1 : !matches ? 0.2 : available ? 1 : 0.65}
                vectorEffect="non-scaling-stroke"
                role={available ? 'button' : undefined}
                tabIndex={available ? 0 : undefined}
                aria-label={available ? province.label : undefined}
                onClick={available ? () => onChoose(id) : undefined}
                onKeyDown={available ? event => {
                  if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onChoose(id) }
                } : undefined}
                onPointerEnter={available ? () => setHovered(id) : undefined}
                onPointerLeave={available ? () => setHovered(null) : undefined}
                onFocus={available ? () => setFocused(id) : undefined}
                onBlur={available ? () => setFocused(null) : undefined}
                className={available ? 'cursor-pointer outline-none focus-visible:stroke-[2.5]' : 'cursor-default'}
              >
                <title>{`${province.label}${available ? ` · ${counts[id]} ที่เที่ยว` : ' · เร็วๆ นี้'}`}</title>
              </path>
            )
          })}
        </g>
      </svg>
      {active && counts[active] > 0 && (
        <div aria-live="polite" className="pointer-events-none absolute right-4 top-16 max-w-[200px] rounded-full bg-brown px-3 py-1.5 text-sm font-medium text-white">
          {PROVINCE_BY_ID[active].label}
        </div>
      )}
    </>
  )
}
