import { ChevronRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { RARITY } from '../../data/rarity'
import PlaceThumb from './PlaceThumb'

const pillClass = 'flex h-9 items-center rounded-full bg-white px-3.5 text-sm font-semibold text-brown'

export default function PlaceRow({ place, number, onBook }) {
  const reduced = useReducedMotion()
  const tap = reduced ? undefined : { scale: 0.96 }
  const rarity = RARITY[place.rarity]

  return (
    <div className="flex items-center gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[13px] font-semibold text-brown">
        {number}
      </span>
      <PlaceThumb src={place.image_url} />
      <div className="flex min-w-0 grow flex-col gap-0.5">
        <div className="flex min-w-0 items-center gap-1.5">
          <span className="truncate text-base font-semibold">{place.name}</span>
          {rarity && (
            <span
              className="shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold"
              style={{ color: rarity.text, background: rarity.bg }}
            >
              {rarity.label}
            </span>
          )}
        </div>
        {place.district && <span className="truncate text-[13px] text-muted">{place.district}</span>}
      </div>
      {place.affiliate_url ? (
        <motion.a whileTap={tap} transition={{ type: 'spring', stiffness: 450, damping: 28 }}
          href={place.affiliate_url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          aria-label={`จองใกล้ ${place.name}`}
          className="flex h-11 shrink-0 items-center"
        >
          <span className={pillClass}>จอง <ChevronRight size={16} strokeWidth={2} aria-hidden="true" /></span>
        </motion.a>
      ) : (
        <motion.button whileTap={tap} transition={{ type: 'spring', stiffness: 450, damping: 28 }}
          type="button"
          onClick={() => onBook(place)}
          aria-label={`จองใกล้ ${place.name}`}
          className="flex h-11 shrink-0 cursor-pointer items-center"
        >
          <span className={pillClass}>จอง <ChevronRight size={16} strokeWidth={2} aria-hidden="true" /></span>
        </motion.button>
      )}
    </div>
  )
}
