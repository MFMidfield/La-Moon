import { lazy, Suspense, useCallback } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Navigate, useParams } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import SlideLink from '../components/SlideLink'
import MapStatus from '../components/map/MapStatus'
import useMapData from '../components/map/useMapData'
import { MOODS, PROVINCES, REGIONS } from '../data/options'
import { PROVINCE_INFO } from '../data/provinceInfo'
import { listPlaces } from '../lib/api/places'

const ProvinceMap = lazy(() => import('../components/map/ProvinceMap'))

function ProvinceContent({ province }) {
  const reducedMotion = useReducedMotion()
  const load = useCallback(() => listPlaces({ province: province.id }), [province.id])
  const { status, data: places, retry } = useMapData(load)
  const region = REGIONS.find(region => region.id === province.region)

  if (status === 'done' && !places.length) return <Navigate to="/map" replace />

  const moodCounts = new Map()
  for (const place of places ?? []) {
    for (const mood of new Set(place.moods ?? [])) moodCounts.set(mood, (moodCounts.get(mood) ?? 0) + 1)
  }
  const topMoods = MOODS.filter(mood => moodCounts.has(mood.id))
    .sort((a, b) => moodCounts.get(b.id) - moodCounts.get(a.id))
    .slice(0, 3)

  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[560px] flex-col bg-cream text-ink">
      <AppHeader crumb={`ประเทศไทย › ภาค${region.label}`} title={province.label} step="1 / 3" backTo="/map" />

      {status !== 'done' ? (
        <div className="mx-4 mt-1 flex min-h-[462px] items-center justify-center rounded-[32px] bg-white p-5"><MapStatus status={status} onRetry={retry} /></div>
      ) : (
        <>
          <Suspense fallback={<div className="mx-4 mt-1 flex h-[462px] items-center justify-center rounded-[32px] bg-white"><MapStatus status="loading" /></div>}>
            <ProvinceMap province={province} places={places} />
          </Suspense>
          <motion.section
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.25 }}
            aria-labelledby="province-title"
            className="mx-4 mb-6 mt-3 flex grow flex-col gap-2.5 rounded-[32px] bg-white p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h1 id="province-title" className="m-0 text-2xl font-semibold">{province.label}</h1>
              <span className="shrink-0 rounded-full px-3 py-1 text-[13px] text-brown" style={{ backgroundColor: region.color }}>ภาค{region.label}</span>
            </div>
            {PROVINCE_INFO[province.id]?.tagline && <p className="m-0 text-sm leading-relaxed text-muted">{PROVINCE_INFO[province.id].tagline}</p>}
            <div className="flex flex-wrap gap-1.5">
              {topMoods.map(mood => <span key={mood.id} className="rounded-full bg-cream px-3 py-1 text-[13px]">{mood.label}</span>)}
              <span className="rounded-full bg-cream px-3 py-1 text-[13px]">{places.length} ที่เที่ยว</span>
            </div>
            <div className="min-h-2 grow" />
            <SlideLink to={`/map/${province.id}/mood`} className="flex h-14 w-full items-center justify-center rounded-full bg-brown px-4 text-center text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown">
              เลือก{province.label}
            </SlideLink>
          </motion.section>
        </>
      )}
    </main>
  )
}

export default function Province() {
  const { province: id } = useParams()
  const province = PROVINCES.find(province => province.id === id)
  if (!province) return <Navigate to="/map" replace />
  return <ProvinceContent key={id} province={province} />
}
