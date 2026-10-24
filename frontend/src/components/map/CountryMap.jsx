import { memo } from 'react'
import { COUNTRY_PATHS, PROVINCE_BY_ID, REGION_BY_ID } from './geometry'

function CountryMap({ counts, region, query, onChoose }) {
  return (
    <g stroke="#FFFFFF" strokeWidth="0.9" strokeLinejoin="round">
      {COUNTRY_PATHS.map(({ id, d }) => {
        const province = PROVINCE_BY_ID[id]
        const available = counts[id] > 0
        const matches = (!region || province.region === region) && (!query.trim() || province.label.includes(query.trim()))
        return (
          <path
            key={id}
            d={d}
            fill={available ? REGION_BY_ID[province.region].color : '#EFE7DF'}
            opacity={!matches ? 0.2 : available ? 1 : 0.65}
            vectorEffect="non-scaling-stroke"
            role={available ? 'button' : undefined}
            tabIndex={available ? 0 : undefined}
            aria-label={available ? province.label : undefined}
            onClick={available ? event => { event.stopPropagation(); onChoose(id) } : undefined}
            onKeyDown={available ? event => {
              if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.stopPropagation(); onChoose(id) }
            } : undefined}
            className={`transition-colors duration-200 ${available ? 'cursor-pointer outline-none focus-visible:stroke-brown focus-visible:stroke-[2.5]' : 'cursor-default'}`}
          >
            <title>{`${province.label} · ${available ? `${counts[id]} ที่เที่ยว` : 'เร็วๆ นี้'}`}</title>
          </path>
        )
      })}
    </g>
  )
}

export default memo(CountryMap)
