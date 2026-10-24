import { motion, useReducedMotion } from 'framer-motion'
import ScrambleText from '../plan/ScrambleText'
import { MOODS, REGIONS } from '../../data/options'
import { PROVINCE_INFO } from '../../data/provinceInfo'

const REGION_BY_ID = Object.fromEntries(REGIONS.map(region => [region.id, region]))

// ชิ้นส่วนข้อมูลจังหวัด ใช้ร่วม sheet (มือถือ) และแผงข้าง (desktop)

export function ProvinceSummary({ province, count, ready, plan }) {
  const region = REGION_BY_ID[province.region]
  const isRandom = plan?.randomId === province.id
  return (
    <div aria-live="polite">
      <div className="flex items-center justify-between gap-2">
        <h2 id="current-province-title" className="m-0 min-w-0 text-xl font-semibold">
          {isRandom ? <ScrambleText key={`${province.id}-${plan.rollVersion}`} text={province.label} play={plan.scrambleReady} /> : province.label}
        </h2>
        <span className="shrink-0 rounded-full px-3 py-1 text-xs text-brown" style={{ backgroundColor: region.color }}>ภาค{region.label}</span>
      </div>
      <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs leading-5 text-muted">
        {isRandom && <span className="rounded-full bg-peach px-2 text-brown">🎲 สุ่มให้แล้ว</span>}
        <span>{ready ? `${count} ที่เที่ยว${count ? '' : ' · เร็วๆ นี้ ยังไม่มีที่เที่ยว'}` : 'กำลังโหลดที่เที่ยว…'}</span>
      </div>
    </div>
  )
}

export function ProvinceExtra({ province, places }) {
  const moodCounts = new Map()
  for (const place of places) for (const mood of new Set(place.moods ?? [])) moodCounts.set(mood, (moodCounts.get(mood) ?? 0) + 1)
  const moods = MOODS.filter(mood => moodCounts.has(mood.id)).sort((a, b) => moodCounts.get(b.id) - moodCounts.get(a.id)).slice(0, 3)

  return (
    <>
      {PROVINCE_INFO[province.id]?.tagline && <p className="m-0 text-sm leading-relaxed text-muted">{PROVINCE_INFO[province.id].tagline}</p>}
      {moods.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {moods.map(mood => <span key={mood.id} className="rounded-full bg-cream px-3 py-1 text-xs">{mood.label}</span>)}
        </div>
      )}
      {places.length > 0 && <ul aria-label={`ที่เที่ยวใน${province.label}`} className="mb-0 mt-3 list-none space-y-2 p-0 text-sm text-ink">{places.map(place => <li key={place.id}>{place.name}</li>)}</ul>}
    </>
  )
}

export function ProvinceCta({ province, count, ready, plan }) {
  const reduced = useReducedMotion()
  const isRandom = plan?.randomId === province.id
  return (
    <div className="flex flex-col gap-1.5">
      <button type="button" disabled={!ready || count < 1 || plan?.rolling} onClick={() => plan?.onSelect(province.id)} className="flex h-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-brown text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown disabled:cursor-default disabled:opacity-40">{isRandom ? 'ไปต่อ' : `เลือก${province.label}`}</button>
      {isRandom && <button type="button" onClick={() => plan.onReroll()} disabled={plan.rolling} className="flex min-h-11 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-cream px-4 text-sm font-semibold text-brown disabled:opacity-50"><motion.span aria-hidden="true" animate={plan.rolling && !reduced ? { rotate: [0, -20, 20, 360] } : { rotate: 0 }} transition={{ duration: 0.65 }}>🎲</motion.span>{plan.rolling ? 'กำลังสุ่ม…' : 'สุ่มใหม่'}</button>}
      {isRandom && plan?.randomError && <p role="alert" className="m-0 text-center text-xs leading-relaxed text-muted">{plan.randomError}</p>}
      {isRandom && plan?.needMore > 0 && <button type="button" disabled={plan.rolling} onClick={plan.onRaiseBudget} className="min-h-11 cursor-pointer rounded-full border border-[#D9CFC5] bg-white px-3 text-sm font-semibold text-brown">เพิ่มงบแล้วสุ่มใหม่</button>}
    </div>
  )
}
