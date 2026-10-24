import SlideLink from '../SlideLink'
import { MOODS } from '../../data/options'
import { PROVINCE_INFO } from '../../data/provinceInfo'
import { REGION_BY_ID } from './geometry'

// ชิ้นส่วนข้อมูลจังหวัด ใช้ร่วม sheet (มือถือ) และแผงข้าง (desktop)

export function ProvinceSummary({ province, count, ready }) {
  const region = REGION_BY_ID[province.region]
  return (
    <div aria-live="polite">
      <div className="flex items-center justify-between gap-2">
        <h2 id="current-province-title" className="m-0 truncate text-xl font-semibold">{province.label}</h2>
        <span className="shrink-0 rounded-full px-3 py-1 text-xs text-brown" style={{ backgroundColor: region.color }}>ภาค{region.label}</span>
      </div>
      <p className="mb-0 mt-1 text-xs leading-5 text-muted">{ready ? `${count} ที่เที่ยว${count ? '' : ' · เร็วๆ นี้ ยังไม่มีที่เที่ยว'}` : 'กำลังโหลดที่เที่ยว…'}</p>
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

export function ProvinceCta({ province, count, ready }) {
  if (ready && count > 0) {
    return <SlideLink to={`/map/${province.id}/mood`} className="flex h-14 shrink-0 items-center justify-center rounded-full bg-brown text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown">เลือก{province.label}</SlideLink>
  }
  return <button type="button" disabled className="h-14 shrink-0 rounded-full bg-brown text-base font-semibold text-white opacity-40">เลือก{province.label}</button>
}
