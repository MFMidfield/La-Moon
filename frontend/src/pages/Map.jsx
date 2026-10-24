import { lazy, Suspense, useCallback, useState } from 'react'
import AppHeader from '../components/AppHeader'
import ProvinceSearch from '../components/map/ProvinceSearch'
import MapStatus from '../components/map/MapStatus'
import useMapData from '../components/map/useMapData'
import { PROVINCES, REGIONS } from '../data/options'
import { countPlacesByProvince, listAllPlaces } from '../lib/api/places'

const ContinuousMap = lazy(() => import('../components/map/ContinuousMap'))
const EMPTY_COUNTS = {}
const EMPTY_PLACES = []

async function loadMap() {
  const [counts, places] = await Promise.all([countPlacesByProvince(), listAllPlaces()])
  return { counts, places }
}

export default function Map() {
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('')
  const [command, setCommand] = useState(null)
  const { status, data, retry } = useMapData(loadMap)
  const counts = data?.counts ?? EMPTY_COUNTS
  const places = data?.places ?? EMPTY_PLACES
  const available = PROVINCES.filter(province => counts[province.id] > 0)
  const chooseProvince = useCallback(id => {
    setQuery('')
    setRegion('')
    setCommand({ type: 'province', id })
  }, [])
  const showCountry = useCallback(() => {
    setQuery('')
    setRegion('')
    setCommand({ type: 'country' })
  }, [])

  function chooseRegion(id) {
    setQuery('')
    setRegion(id)
    setCommand(id ? { type: 'region', id } : { type: 'country' })
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') { event.preventDefault(); showCountry(); return }
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName) || event.target.isContentEditable) return
    if (['+', '=', '-', '_'].includes(event.key)) {
      event.preventDefault()
      setCommand({ type: 'zoom', factor: event.key === '+' || event.key === '=' ? 1.6 : 1 / 1.6 })
    }
  }

  return (
    <main onKeyDown={handleKeyDown} className="mx-auto flex h-dvh w-full max-w-[960px] flex-col overflow-hidden bg-cream text-ink">
      <h1 className="sr-only">อยากไปจังหวัดไหน?</h1>
      <AppHeader title="อยากไปจังหวัดไหน?" step="1 / 3" backTo="/home" />
      <div className="relative z-20 flex shrink-0 flex-col gap-3 px-4 pt-1">
        <ProvinceSearch query={query} onQueryChange={setQuery} counts={counts} ready={status === 'done'} onChoose={chooseProvince} />
        <div role="group" aria-label="กรองตามภาค" className="-mr-4 flex gap-2 overflow-x-auto pb-1 pr-4">
          {[{ id: '', label: 'ทั้งหมด' }, ...REGIONS].map(item => (
            <button key={item.id} type="button" aria-pressed={region === item.id} onClick={() => chooseRegion(item.id)} className={`flex min-h-11 shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown ${region === item.id ? 'bg-brown font-semibold text-white' : 'bg-white text-ink'}`}>
              {item.color && <span aria-hidden="true" className="size-3 rounded-full" style={{ backgroundColor: item.color }} />}{item.label}
            </button>
          ))}
        </div>
      </div>
      <section aria-label="สำรวจแผนที่" aria-busy={status === 'loading'} className="relative mx-4 mb-3 mt-2 flex min-h-0 grow flex-col overflow-hidden rounded-[32px] bg-white">
        <Suspense fallback={<p role="status" className="m-auto px-4 text-center text-sm text-muted">กำลังวาดแผนที่…</p>}>
          <ContinuousMap counts={counts} places={places} ready={status === 'done'} region={region} query={query} command={command} onChoose={chooseProvince} onCountry={showCountry} randomEnabled={available.length > 0} onRandom={() => chooseProvince(available[Math.floor(Math.random() * available.length)].id)} />
        </Suspense>
        {status !== 'done' && <div className="absolute left-3 right-24 top-3 z-10"><MapStatus status={status} onRetry={retry} /></div>}
      </section>
    </main>
  )
}
