import { MapPin } from 'lucide-react'
import { useState } from 'react'
import { HOLO_RARITIES, RARITY } from '../../data/rarity'
import { Sparkle } from '../icons'
import StatBars from './StatBars'

export function FlatMountain({ className = '' }) {
  return (
    <svg viewBox="0 0 220 150" aria-hidden="true" className={className}>
      <path d="M0 150 L60 70 L100 110 L150 50 L220 150 Z" fill="#D9A27E" />
      <path d="M100 110 L150 50 L180 90" fill="#C88A63" />
      <circle cx="170" cy="30" r="16" fill="#F4A36C" />
    </svg>
  )
}

function PinIcon() {
  return (
    <MapPin size={16} strokeWidth={2} className="shrink-0 text-muted" aria-hidden="true" />
  )
}

// หน้าการ์ดสถานที่ (เนื้อหาอย่างเดียว ไม่มี drag) — สูงเต็มกรอบ รูปยืดตามที่เหลือ
export default function PlaceCard({ place, provinceLabel, moodTotal, recommended }) {
  const [broken, setBroken] = useState(false)
  const rarity = RARITY[place.rarity] ?? RARITY.common
  const holo = HOLO_RARITIES.includes(place.rarity)
  const showImage = place.image_url && !broken
  const tags = (place.tags ?? []).slice(0, 3)

  return (
    <div className="flex h-full flex-col">
      <div className="relative min-h-0 grow overflow-hidden rounded-3xl bg-peach">
        {showImage ? (
          <img
            src={place.image_url}
            alt={place.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            draggable={false}
            onError={() => setBroken(true)}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <FlatMountain className="absolute bottom-0 left-1/2 w-[72%] max-w-[340px] -translate-x-1/2" />
        )}

        {recommended && (
          <span className="absolute left-3.5 top-3.5 rounded-full bg-brown px-3 py-[3px] text-xs font-semibold text-white">
            แนะนำ
          </span>
        )}
        <span
          className="absolute right-3.5 top-3.5 flex items-center gap-1 rounded-full px-3 py-[3px] text-xs font-semibold"
          style={{ color: rarity.text, background: rarity.bg }}
        >
          {holo && <Sparkle size={12} fill="currentColor" />}
          {rarity.label}
        </span>

        {showImage && place.image_credit && (
          <span className="absolute bottom-2.5 left-2.5 max-w-[calc(100%-20px)] truncate rounded-full bg-black/45 px-2.5 py-0.5 text-[10px] leading-4 text-white">
            ภาพ: {place.image_credit}
            {place.image_license && ` · ${place.image_license}`}
          </span>
        )}
      </div>

      <div className="flex shrink-0 flex-col gap-2 px-2.5 pb-1.5 pt-3">
        <div className="flex items-center justify-between gap-2">
          <h2 className="m-0 min-w-0 truncate text-2xl font-semibold leading-tight">{place.name}</h2>
          <span className="shrink-0 rounded-full bg-[#E7EFDC] px-2.5 py-[3px] text-xs text-[#3F5A2E]">
            ตรง {place.matchCount ?? 0}/{moodTotal} มู้ด
          </span>
        </div>

        <div className="flex min-w-0 items-center gap-1.5 text-sm text-muted">
          <PinIcon />
          <span className="shrink-0">{provinceLabel}</span>
          {place.best_time && (
            <>
              <span className="shrink-0 text-[#C9BDB2]">·</span>
              <span className="truncate text-[#8F837A]">{place.best_time}</span>
            </>
          )}
        </div>

        <div className="flex h-[26px] gap-1.5 overflow-hidden">
          {tags.map((tag) => (
            <span key={tag} className="min-w-0 truncate rounded-full bg-cream px-3 py-[3px] text-[13px]">
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-1">
          <StatBars stats={place.stats} />
        </div>
      </div>
    </div>
  )
}
