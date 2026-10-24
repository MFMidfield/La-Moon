import { lazy, Suspense, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import { slideNavigate } from '../components/SlideLink'
import ProvinceSearch from '../components/map/ProvinceSearch'
import MapStatus from '../components/map/MapStatus'
import useMapData from '../components/map/useMapData'
import { PROVINCES, REGIONS } from '../data/options'
import { countPlacesByProvince } from '../lib/api/places'

const CountryMap = lazy(() => import('../components/map/CountryMap'))

export default function Map() {
  const navigate = useNavigate()
  const reducedMotion = useReducedMotion()
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('')
  const { status, data, retry } = useMapData(countPlacesByProvince)
  const counts = data ?? {}
  const available = PROVINCES.filter(province => counts[province.id] > 0)

  function chooseProvince(id) {
    if (counts[id] > 0) slideNavigate(navigate, `/map/${id}`)
  }

  function randomProvince() {
    if (available.length) chooseProvince(available[Math.floor(Math.random() * available.length)].id)
  }

  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[560px] flex-col bg-cream text-ink">
      <h1 className="sr-only">อยากไปจังหวัดไหน?</h1>
      <AppHeader title="อยากไปจังหวัดไหน?" step="1 / 3" backTo="/home" />

      <div className="flex flex-col gap-3 px-4 pt-1">
        <ProvinceSearch query={query} onQueryChange={setQuery} counts={counts} ready={status === 'done'} onChoose={chooseProvince} />
        <div role="group" aria-label="กรองตามภาค" className="-mr-4 flex gap-2 overflow-x-auto pb-1 pr-4">
          {[{ id: '', label: 'ทั้งหมด' }, ...REGIONS].map(item => (
            <button
              key={item.id}
              type="button"
              aria-pressed={region === item.id}
              onClick={() => setRegion(item.id)}
              className={`flex min-h-11 shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown ${region === item.id ? 'bg-brown font-semibold text-white' : 'bg-white text-ink'}`}
            >
              {item.color && <span aria-hidden="true" className="size-3 rounded-full" style={{ backgroundColor: item.color }} />}
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <motion.figure
        initial={reducedMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.25 }}
        aria-busy={status === 'loading'}
        className="relative mx-4 mb-6 mt-3.5 min-h-[560px] grow overflow-hidden rounded-[32px] bg-white"
      >
        <Suspense fallback={<p role="status" className="absolute inset-x-4 top-32 text-center text-sm text-muted">กำลังวาดแผนที่…</p>}>
          <CountryMap counts={counts} region={region} query={query} onChoose={chooseProvince} />
        </Suspense>
        <figcaption className="pointer-events-none absolute left-4 top-4 rounded-full bg-cream px-3 py-1 text-[13px] text-[#4A3A30]">แตะจังหวัดเพื่อซูม</figcaption>

        {status !== 'done' && <div className="absolute inset-x-4 top-16"><MapStatus status={status} onRetry={retry} /></div>}
        {status === 'done' && !available.length && <p role="status" className="absolute inset-x-4 top-16 m-0 rounded-3xl bg-cream p-4 text-center text-sm text-muted">ยังไม่มีที่เที่ยวให้เลือก แวะมาใหม่เร็วๆ นี้นะ</p>}

        <button
          type="button"
          onClick={randomProvince}
          disabled={!available.length}
          className="absolute bottom-[88px] right-4 flex h-11 cursor-pointer items-center gap-1.5 rounded-full bg-cream px-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-brown disabled:cursor-default disabled:opacity-40"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" /></svg>
          สุ่มจังหวัด
        </button>

        <ul aria-label="สีภาคบนแผนที่" className="absolute inset-x-4 bottom-4 m-0 flex list-none flex-wrap justify-center gap-x-3 gap-y-1.5 p-0 text-[11px] text-muted">
          {[...REGIONS, { id: 'fog', label: 'เร็วๆ นี้', color: '#EFE7DF' }].map(item => (
            <li key={item.id} className="flex items-center gap-1.5"><span aria-hidden="true" className="size-2.5 rounded-full" style={{ backgroundColor: item.color }} />{item.label}</li>
          ))}
        </ul>
      </motion.figure>
    </main>
  )
}
