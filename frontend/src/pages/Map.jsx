import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import SlideLink, { slideNavigate } from '../components/SlideLink'
import { Logo, Moon, Sparkle } from '../components/icons'
import { ProvinceCta, ProvinceExtra, ProvinceSummary } from '../components/map/ProvinceDetails'
import useIsDesktop from '../components/map/useIsDesktop'
import ProvinceSearch from '../components/map/ProvinceSearch'
import MapStatus from '../components/map/MapStatus'
import useMapData from '../components/map/useMapData'
import { PROVINCES, REGIONS } from '../data/options'
import { countPlacesByProvince, listAllPlaces } from '../lib/api/places'
import { useTripDraft } from '../context/TripDraftContext'
import { randomizeTrip } from '../lib/trip/random'
import { formatBaht } from '../lib/trip/budget'

const ContinuousMap = lazy(() => import('../components/map/ContinuousMap'))
const EMPTY_COUNTS = {}
const EMPTY_PLACES = []
// มือถือ: ความสูงโดยประมาณของแถบค้นหา + chip ที่ลอยทับ (ปุ่มบนแผนที่เริ่มใต้ระยะนี้)
const TOP_INSET = 136

const BACK_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F1A17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
)

function RegionChips({ region, onChoose, wrap }) {
  return (
    <div role="group" aria-label="กรองตามภาค" className={wrap ? 'flex flex-wrap gap-2' : 'no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1'}>
      {[{ id: '', label: 'ทั้งหมด' }, ...REGIONS].map(item => (
        <button key={item.id} type="button" aria-pressed={region === item.id} onClick={() => onChoose(item.id)} className={`flex min-h-11 shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown ${region === item.id ? 'bg-brown font-semibold text-white' : 'bg-white text-ink'}`}>
          {item.color && <span aria-hidden="true" className="size-3 rounded-full" style={{ backgroundColor: item.color }} />}{item.label}
        </button>
      ))}
    </div>
  )
}

async function loadMap() {
  const [counts, places] = await Promise.all([countPlacesByProvince(), listAllPlaces()])
  return { counts, places }
}

export default function Map() {
  const navigate = useNavigate()
  const { province: routeId } = useParams()
  const { draft, updateDraft } = useTripDraft()
  const reducedMotion = useReducedMotion()
  const activeRequest = useRef(0)
  useEffect(() => () => { activeRequest.current += 1 }, [])
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('')
  const [command, setCommand] = useState(null)
  const [currentId, setCurrentId] = useState(null)
  const [settledId, setSettledId] = useState(null)
  const [rolling, setRolling] = useState(false)
  const [rollVersion, setRollVersion] = useState(0)
  const [randomError, setRandomError] = useState('')
  const [needMore, setNeedMore] = useState(null)
  const isDesktop = useIsDesktop()
  const { status, data, retry } = useMapData(loadMap)
  const counts = data?.counts ?? EMPTY_COUNTS
  const places = data?.places ?? EMPTY_PLACES
  const available = PROVINCES.filter(province => counts[province.id] > 0)
  const current = currentId ? PROVINCES.find(province => province.id === currentId) : null
  const currentPlaces = useMemo(() => places.filter(place => place.province === currentId), [places, currentId])
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

  function selectProvince(id) {
    const keepRandom = draft.mode === 'random' && id === draft.province && routeId === draft.province
    updateDraft(keepRandom ? { province: id } : { province: id, mode: 'pick', deck: null, likedIds: [], swipeKey: null, swipeHistory: [], itineraryKey: null, itinerary: null })
    slideNavigate(navigate, draft.moods.length ? '/plan/details' : '/plan/mood')
  }

  async function reroll(nextDraft = draft) {
    if (rolling) return
    if (!nextDraft.origin) {
      setRandomError('เลือกจังหวัดต้นทางในหน้ารายละเอียดก่อนนะ')
      return
    }
    setRolling(true)
    const request = ++activeRequest.current
    setRandomError('')
    setNeedMore(null)
    try {
      const pool = status === 'done' ? places : await listAllPlaces()
      const today = new Date()
      today.setHours(12, 0, 0, 0)
      const { patch, needMore: extra } = randomizeTrip({ draft: nextDraft, places: pool, today })
      if (!reducedMotion) await new Promise(resolve => setTimeout(resolve, 650))
      if (request !== activeRequest.current) return
      if (!patch) {
        setNeedMore(extra)
        setRandomError(extra ? `งบไม่พอสำหรับทริปนี้ เพิ่มอีก ${formatBaht(extra)}` : 'ยังไม่มีที่เที่ยวตรงมู้ดนี้ ลองเปลี่ยนมู้ดกัน')
        return
      }
      updateDraft({ ...patch, swipeKey: null, swipeHistory: [], itineraryKey: null, itinerary: null, ...(nextDraft.budget !== draft.budget ? { budget: nextDraft.budget } : {}) })
      setSettledId(null)
      setRollVersion(version => version + 1)
      setCommand({ type: 'province', id: patch.province })
      navigate(`/map/${patch.province}`, { replace: true })
    } catch {
      if (request !== activeRequest.current) return
      setRandomError('สุ่มไม่สำเร็จ ลองอีกครั้งนะ')
    } finally {
      if (request === activeRequest.current) setRolling(false)
    }
  }

  const plan = {
    randomId: draft.mode === 'random' && routeId === draft.province && currentId === draft.province ? draft.province : null,
    scrambleReady: settledId === draft.province,
    onSelect: selectProvince,
    onReroll: reroll,
    onRaiseBudget: () => reroll({ ...draft, budget: { ...draft.budget, max: draft.budget.max + (needMore ?? 0) } }),
    rolling,
    rollVersion,
    randomError,
    needMore,
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') { event.preventDefault(); showCountry(); return }
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName) || event.target.isContentEditable) return
    if (['+', '=', '-', '_'].includes(event.key)) {
      event.preventDefault()
      setCommand({ type: 'zoom', factor: event.key === '+' || event.key === '=' ? 1.6 : 1 / 1.6 })
    }
  }

  const search = <ProvinceSearch query={query} onQueryChange={setQuery} counts={counts} ready={status === 'done'} onChoose={chooseProvince} />
  const stepPill = <div className="shrink-0 rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold text-brown">2 / 4</div>

  return (
    <main onKeyDown={handleKeyDown} className="relative h-dvh w-full overflow-hidden bg-cream text-ink lg:flex">
      {isDesktop ? (
        // desktop: แผงข้างซ้าย (ค้นหา, ภาค, ข้อมูลจังหวัด) + แผนที่เต็มพื้นที่ที่เหลือ
        <aside className="flex w-[380px] shrink-0 flex-col gap-4 overflow-y-auto border-r border-[#EDE5DD] p-5">
          <div className="flex items-center gap-2">
            <SlideLink to="/plan/mood" back aria-label="ย้อนกลับ" className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white">{BACK_ICON}</SlideLink>
            <Logo size={22} className="grow text-xl" />
            {stepPill}
          </div>
          <h1 className="m-0 text-[26px] font-bold leading-tight">อยากไปจังหวัดไหน?</h1>
          {search}
          <div className="flex flex-col gap-2">
            <div className="text-xs text-muted">ภาค</div>
            <RegionChips region={region} onChoose={chooseRegion} wrap />
          </div>
          {status !== 'done' && <MapStatus status={status} onRetry={retry} />}
          <section aria-label="ข้อมูลจังหวัด" className="flex min-h-[260px] grow flex-col rounded-[28px] bg-white p-5">
            {current ? (
              <>
                <ProvinceSummary province={current} count={counts[current.id] ?? 0} ready={status === 'done'} plan={plan} />
                <div className="mt-3 min-h-0 grow overflow-y-auto"><ProvinceExtra province={current} places={currentPlaces} /></div>
                <div className="mt-4 flex flex-col"><ProvinceCta province={current} count={counts[current.id] ?? 0} ready={status === 'done'} plan={plan} /></div>
              </>
            ) : (
              <div className="m-auto flex flex-col items-center gap-3 text-center">
                <div className="flex items-end gap-1" aria-hidden="true">
                  <Moon size={34} fill="#E8793A" className="-rotate-12" />
                  <Sparkle size={16} fill="#5A2E14" />
                </div>
                <p className="m-0 text-sm leading-relaxed text-muted">แตะจังหวัดบนแผนที่<br />หรือซูมเข้าไปแล้วเลื่อนให้จังหวัดอยู่ตรงเป้า</p>
              </div>
            )}
          </section>
        </aside>
      ) : (
        <h1 className="sr-only">อยากไปจังหวัดไหน?</h1>
      )}

      {/* มือถือ: แผนที่เต็มจอ ส่วนควบคุมลอยทับ / desktop: แผนที่ฝั่งขวา */}
      <section aria-label="สำรวจแผนที่" aria-busy={status === 'loading'} className="absolute inset-0 flex flex-col lg:relative lg:inset-auto lg:min-w-0 lg:grow">
        <Suspense fallback={<p role="status" className="m-auto px-4 text-center text-sm text-muted">กำลังวาดแผนที่…</p>}>
          <ContinuousMap topInset={isDesktop ? 16 : TOP_INSET} showSheet={!isDesktop} onCurrentChange={setCurrentId} onSettled={setSettledId} plan={plan} counts={counts} places={places} ready={status === 'done'} region={region} query={query} command={command} onChoose={chooseProvince} onCountry={showCountry} randomEnabled={available.length > 0} onRandom={() => chooseProvince(available[Math.floor(Math.random() * available.length)].id)} />
        </Suspense>
      </section>

      {!isDesktop && (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20">
          <div className="mx-auto flex max-w-[560px] flex-col gap-2 px-4 pt-[max(12px,env(safe-area-inset-top))]">
            <div className="pointer-events-auto flex items-center gap-2">
              <SlideLink to="/plan/mood" back aria-label="ย้อนกลับ" className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white">{BACK_ICON}</SlideLink>
              <div className="min-w-0 grow">{search}</div>
              {stepPill}
            </div>
            <div className="pointer-events-auto"><RegionChips region={region} onChoose={chooseRegion} /></div>
            {status !== 'done' && <div className="pointer-events-auto"><MapStatus status={status} onRetry={retry} /></div>}
          </div>
        </div>
      )}
    </main>
  )
}
