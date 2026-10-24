import { useCallback, useEffect, useEffectEvent, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import CountryMap from './CountryMap'
import PlacePins from './PlacePins'
import ProvinceSheet from './ProvinceSheet'
import createMapCamera from './createMapCamera'
import { FEATURE_BY_ID, MAP_HEIGHT, MAP_WIDTH, PATH_BY_ID, PROVINCE_BY_ID, projectPlaces } from './geometry'

const EMPTY_PLACES = []
// เป้าหลุดจังหวัดแป๊บเดียว (รอยต่อ/ขอบทะเล) ยังไม่ซ่อน sheet กันกระพริบ
const SHEET_HIDE_DELAY = 250

export default function ContinuousMap({ topInset = 12, showSheet = true, onCurrentChange, onSettled, plan, counts, places, ready, region, query, command, onChoose, onCountry, randomEnabled, onRandom }) {
  const svg = useRef(null)
  const world = useRef(null)
  const container = useRef(null)
  const camera = useRef(null)
  const internalRoute = useRef(null)
  const [view, setView] = useState({ id: null, zoomed: false, pinsVisible: false, ready: false })
  const [height, setHeight] = useState(640)
  const [pin, setPin] = useState(null)
  const [sheetId, setSheetId] = useState(null)
  const { province: routeId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const reducedMotion = useReducedMotion()
  const pins = useMemo(() => projectPlaces(places), [places])
  const placesByProvince = useMemo(() => {
    const groups = new Map()
    for (const place of places) {
      if (!groups.has(place.province)) groups.set(place.province, [])
      groups.get(place.province).push(place)
    }
    return groups
  }, [places])
  const publish = useEffectEvent(id => {
    const path = id ? `/map/${id}` : '/map'
    if (location.pathname !== path) { internalRoute.current = path; navigate(path, { replace: true }) }
    onSettled?.(id)
  })

  useEffect(() => {
    const controller = createMapCamera({
      svg: svg.current,
      world: world.current,
      reducedMotion: false,
      onView: next => setView(previous => previous.id === next.id && previous.zoomed === next.zoomed && previous.pinsVisible === next.pinsVisible && previous.ready === next.ready ? previous : next),
      onSettled: id => publish(id),
    })
    camera.current = controller
    const observer = new ResizeObserver(entries => setHeight(entries[0].contentRect.height))
    observer.observe(container.current)
    return () => { observer.disconnect(); controller.destroy(); camera.current = null }
  }, [])

  useEffect(() => { camera.current?.setReducedMotion(Boolean(reducedMotion)) }, [reducedMotion])
  useEffect(() => { camera.current?.refresh() }, [pins])
  useEffect(() => {
    const path = routeId ? `/map/${routeId}` : '/map'
    if (internalRoute.current === path) { internalRoute.current = null; return }
    if (FEATURE_BY_ID.has(routeId)) camera.current?.focusProvince(routeId)
    else camera.current?.reset(false)
  }, [routeId])
  useEffect(() => {
    if (!command) return
    if (command.type === 'province') camera.current?.focusProvince(command.id)
    else if (command.type === 'region') camera.current?.focusRegion(command.id)
    else if (command.type === 'zoom') camera.current?.zoomBy(command.factor)
    else camera.current?.reset()
  }, [command])

  const reportCurrent = useEffectEvent(id => onCurrentChange?.(id))
  useEffect(() => {
    const timer = setTimeout(() => {
      setSheetId(view.id)
      reportCurrent(view.id)
    }, view.id ? 0 : SHEET_HIDE_DELAY)
    return () => clearTimeout(timer)
  }, [view.id])

  const choosePin = useCallback(value => setPin(value), [])
  const province = view.id ? PROVINCE_BY_ID[view.id] : null
  const sheetProvince = showSheet && sheetId ? PROVINCE_BY_ID[sheetId] : null
  const activePin = view.pinsVisible ? pin : null
  const buttonClass = 'flex size-11 cursor-pointer items-center justify-center rounded-full bg-white text-ink focus-visible:outline-2 focus-visible:outline-brown'

  return (
    <div ref={container} className="relative flex min-h-0 grow flex-col overflow-hidden">
      <div className="relative min-h-0 grow overflow-hidden bg-cream">
        <svg
          ref={svg}
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          role="group"
          tabIndex={0}
          aria-label="แผนที่ประเทศไทย ลากเพื่อเลื่อน จีบสองนิ้วเพื่อซูม ใช้ปุ่มบวกหรือลบเพื่อซูม กด Escape เพื่อดูทั้งประเทศ"
          className="absolute inset-0 h-full w-full touch-none outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brown"
          style={{ touchAction: 'none', opacity: view.ready ? 1 : 0 }}
        >
          <g ref={world}>
            <CountryMap counts={counts} region={region} query={query} onChoose={onChoose} />
            {province && <path d={PATH_BY_ID.get(province.id)} fill={counts[province.id] > 0 ? '#F9D9C2' : '#EFE7DF'} opacity={counts[province.id] > 0 ? 1 : 0.65} stroke="#E8793A" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinejoin="round" pointerEvents="none" aria-hidden="true" />}
            <PlacePins pins={pins} onChoose={choosePin} />
          </g>
        </svg>
        {view.zoomed && <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/70 text-2xl text-brown">⊕</div>}
        <div className="absolute right-3 flex flex-col items-center gap-2" style={{ top: topInset }}>
          <button type="button" onClick={() => camera.current?.zoomBy(1.6)} aria-label="ซูมเข้า" className={buttonClass}><span aria-hidden="true" className="text-2xl">+</span></button>
          <button type="button" onClick={() => camera.current?.zoomBy(1 / 1.6)} aria-label="ซูมออก" className={buttonClass}><span aria-hidden="true" className="text-2xl">−</span></button>
          <button type="button" onClick={onCountry} aria-label="ดูทั้งประเทศ" className={`${buttonClass} text-center text-[10px] font-medium leading-3.5`}><span>ทั้ง<br />ประเทศ</span></button>
        </div>
        {activePin && <div role="status" style={{ top: topInset }} className="absolute left-3 flex max-w-[calc(100%-100px)] items-center gap-2 rounded-2xl bg-brown py-2 pl-3 text-sm text-white"><span>{activePin.name}</span><button type="button" aria-label="ปิดชื่อที่เที่ยว" onClick={() => setPin(null)} className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full">×</button></div>}
        {showSheet && !province && <p role="status" className="pointer-events-none absolute inset-x-3 bottom-[68px] m-0 text-center"><span className="inline-block rounded-full bg-white px-3 py-2 text-xs text-muted">{view.zoomed ? 'เลื่อนแผนที่ให้จังหวัดอยู่ตรงเป้า' : 'แตะจังหวัดหรือซูมเข้าไปสำรวจ'}</span></p>}
        <div className={`transition-opacity duration-200 ${sheetProvince ? 'pointer-events-none opacity-0' : 'opacity-100'}`} aria-hidden={Boolean(sheetProvince)}>
          <span className="pointer-events-none absolute bottom-5 left-3 rounded-full bg-white/80 px-2 py-1 text-[10px] text-muted">สีอ่อน = เร็วๆ นี้</span>
          <button type="button" disabled={!randomEnabled} tabIndex={sheetProvince ? -1 : undefined} onClick={onRandom} className="absolute bottom-[max(12px,env(safe-area-inset-bottom))] right-3 min-h-11 cursor-pointer rounded-full bg-white px-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-brown disabled:cursor-default disabled:opacity-40">สุ่มจังหวัด</button>
        </div>
      </div>
      {/* sheet ทับขอบล่างของแผนที่ — แผนที่สูงคงที่ ไม่ resize ตอน sheet เข้า/ออก/ดึง */}
      <AnimatePresence>
        {sheetProvince && (
          <motion.div
            key="province-sheet"
            className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[560px]"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 320, damping: 34 }}
          >
            <ProvinceSheet province={sheetProvince} count={counts[sheetProvince.id] ?? 0} places={placesByProvince.get(sheetProvince.id) ?? EMPTY_PLACES} ready={ready} height={height} plan={plan} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
