import { lazy, Suspense, useCallback, useState } from 'react'
import SlideLink from '../components/SlideLink'
import ProvinceSearch from '../components/map/ProvinceSearch'
import MapStatus from '../components/map/MapStatus'
import useMapData from '../components/map/useMapData'
import { PROVINCES, REGIONS } from '../data/options'
import { countPlacesByProvince, listAllPlaces } from '../lib/api/places'

const ContinuousMap = lazy(() => import('../components/map/ContinuousMap'))
const EMPTY_COUNTS = {}
const EMPTY_PLACES = []
// ความสูงโดยประมาณของแถบค้นหา + chip ที่ลอยทับ (ปุ่มบนแผนที่เริ่มใต้ระยะนี้)
const TOP_INSET = 136

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
    <main onKeyDown={handleKeyDown} className="relative h-dvh w-full overflow-hidden bg-cream text-ink">
      <h1 className="sr-only">อยากไปจังหวัดไหน?</h1>

      {/* แผนที่เต็มจอ — ส่วนควบคุมลอยทับด้านบน */}
      <section aria-label="สำรวจแผนที่" aria-busy={status === 'loading'} className="absolute inset-0 flex flex-col">
        <Suspense fallback={<p role="status" className="m-auto px-4 text-center text-sm text-muted">กำลังวาดแผนที่…</p>}>
          <ContinuousMap topInset={TOP_INSET} counts={counts} places={places} ready={status === 'done'} region={region} query={query} command={command} onChoose={chooseProvince} onCountry={showCountry} randomEnabled={available.length > 0} onRandom={() => chooseProvince(available[Math.floor(Math.random() * available.length)].id)} />
        </Suspense>
      </section>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-[560px] flex-col gap-2 px-4 pt-[max(12px,env(safe-area-inset-top))]">
          <div className="pointer-events-auto flex items-center gap-2">
            <SlideLink to="/home" back aria-label="ย้อนกลับ" className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F1A17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
            </SlideLink>
            <div className="min-w-0 grow">
              <ProvinceSearch query={query} onQueryChange={setQuery} counts={counts} ready={status === 'done'} onChoose={chooseProvince} />
            </div>
            <div className="shrink-0 rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold text-brown">1 / 3</div>
          </div>
          <div role="group" aria-label="กรองตามภาค" className="pointer-events-auto -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
            {[{ id: '', label: 'ทั้งหมด' }, ...REGIONS].map(item => (
              <button key={item.id} type="button" aria-pressed={region === item.id} onClick={() => chooseRegion(item.id)} className={`flex min-h-11 shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown ${region === item.id ? 'bg-brown font-semibold text-white' : 'bg-white text-ink'}`}>
                {item.color && <span aria-hidden="true" className="size-3 rounded-full" style={{ backgroundColor: item.color }} />}{item.label}
              </button>
            ))}
          </div>
          {status !== 'done' && <div className="pointer-events-auto"><MapStatus status={status} onRetry={retry} /></div>}
        </div>
      </div>
    </main>
  )
}
