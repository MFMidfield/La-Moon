import { ArrowDown, ArrowUp, ChevronRight, Cloud, Dices, GripVertical, X } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'
import { motion, useDragControls, useReducedMotion } from 'framer-motion'
import BottomSheet from '../BottomSheet'
import BookingSheet from './BookingSheet'
import PlaceThumb from './PlaceThumb'
import { RARITY } from '../../data/rarity'
import { SLOTS } from '../../data/travel'
import { addDays, dayNarrative, thaiDate } from './itinerary'
import TransitRoute, { TransitDayTotal } from './TransitRoute'

function PlanCard({ item, index, editable, onSelect, onRemove, onSwap, onBook, onDrop, onHover, canSwap, spareCard = false }) {
  const controls = useDragControls()
  const reduced = useReducedMotion()
  const feedback = { whileTap: reduced ? undefined : { scale: 0.96 }, transition: reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 28 } }
  const [dragging, setDragging] = useState(false)
  const lastDrag = useRef(0)
  const place = item.place
  const rarity = RARITY[place.rarity] ?? RARITY.common
  return (
    <motion.div
      layout={!reduced}
      drag={editable && !reduced}
      dragListener={false}
      dragControls={controls}
      dragMomentum={false}
      dragSnapToOrigin
      onDragStart={() => { setDragging(true); lastDrag.current = Date.now() }}
      onDrag={(event, info) => onHover?.(event, info)}
      onDragEnd={(event, info) => { setDragging(false); lastDrag.current = Date.now(); onDrop?.(place.id, event, info) }}
      style={{ zIndex: dragging ? 40 : 0, position: 'relative', pointerEvents: dragging ? 'none' : 'auto' }}
      data-plan-index={index}
      className={`rounded-[24px] border bg-white p-3 ${dragging ? 'border-orange' : 'border-transparent'}`}
    >
      <div className="flex items-start gap-2.5">
        <motion.button {...feedback} type="button" onClick={() => { if (Date.now() - lastDrag.current > 250) (editable ? onSelect(place.id) : onBook(place)) }} aria-label={editable ? `ย้าย ${place.name}` : `ดูการจองใกล้ ${place.name}`} className="flex min-w-0 flex-1 items-center gap-3 text-left">
          <PlaceThumb src={place.image_url} />
          <span className="flex min-w-0 flex-col gap-1">
            <span className="text-sm font-semibold leading-snug">{place.name}</span>
            <span className="flex flex-wrap items-center gap-1"><span className="rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ color: rarity.text, background: rarity.bg }}>{rarity.label}</span>{item.auto && <span className="inline-flex items-center gap-1 rounded-full bg-[#FBE3D2] px-2 py-0.5 text-[10px] text-brown"><Dices size={11} strokeWidth={2} aria-hidden="true" />ระบบเลือกให้</span>}</span>
          </span>
        </motion.button>
        {editable && <motion.button {...feedback} type="button" aria-label={`ลาก ${place.name}`} title="ลากเพื่อย้ายการ์ด หรือแตะชื่อเพื่อเลือกวัน" onPointerDown={event => { if (!reduced) controls.start(event) }} onClick={() => { if (Date.now() - lastDrag.current > 250) onSelect(place.id) }} className="flex h-11 w-8 shrink-0 touch-none cursor-grab items-center justify-center rounded-full bg-cream text-lg text-muted active:cursor-grabbing"><GripVertical size={18} strokeWidth={2} aria-hidden="true" /></motion.button>}
      </div>
      <div className="mt-2 flex items-center justify-end gap-1">
        <motion.button {...feedback} type="button" onClick={() => onBook(place)} className="flex min-h-11 items-center gap-1 rounded-full px-3 text-xs font-semibold text-brown transition-colors duration-200 hover:bg-cream">จองใกล้ที่นี่ <ChevronRight size={14} strokeWidth={2} aria-hidden="true" /></motion.button>
        {editable && !spareCard && <><motion.button {...feedback} type="button" onClick={() => onSwap(place.id)} disabled={!canSwap} aria-label={`สุ่มแทน ${place.name}`} className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-brown transition-colors duration-200 disabled:opacity-30"><Dices size={18} strokeWidth={2} aria-hidden="true" /></motion.button><motion.button {...feedback} type="button" onClick={() => onRemove(place.id)} aria-label={`เก็บ ${place.name} ไว้กองสำรอง`} className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-muted transition-colors duration-200"><X size={18} strokeWidth={2} aria-hidden="true" /></motion.button></>}
      </div>
    </motion.div>
  )
}

function dropTarget(event, info) {
  const x = Number.isFinite(event.clientX) ? event.clientX : info.point.x - window.scrollX
  const y = Number.isFinite(event.clientY) ? event.clientY : info.point.y - window.scrollY
  const elements = document.elementsFromPoint(x, y)
  const zone = elements.map(el => el.closest('[data-plan-zone]')).find(Boolean)
  if (!zone) return null
  const card = elements.map(el => el.closest('[data-plan-index]')).find(el => el && zone.contains(el))
  const rect = card?.getBoundingClientRect()
  return { zone: zone.dataset.planZone, index: card ? Number(card.dataset.planIndex) + (y > rect.top + rect.height / 2 ? 1 : 0) : Infinity, y }
}

export default function DayPlan({ days, spare = [], capacities = [], startDate, onMove, onSwap, canSwap = false, transit }) {
  const reduced = useReducedMotion()
  const feedback = { whileTap: reduced ? undefined : { scale: 0.96 }, transition: reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 28 } }
  const editable = Boolean(onMove)
  const [selected, setSelected] = useState(null)
  const [hovered, setHovered] = useState(null)
  const [booking, setBooking] = useState(null)
  const closeMove = useCallback(() => setSelected(null), [])
  const closeBooking = useCallback(() => setBooking(null), [])
  const allItems = [...days.flatMap(day => day.items), ...spare.map(place => ({ place }))]
  const selectedPlace = allItems.find(item => item.place.id === selected)?.place
  const source = days.findIndex(day => day.items.some(item => item.place.id === selected))
  const sourceIndex = source >= 0 ? days[source].items.findIndex(item => item.place.id === selected) : spare.findIndex(place => place.id === selected)
  const sourceLength = source >= 0 ? days[source].items.length : spare.length

  function moveSelected(target, at) {
    onMove(selected, target, at)
    setSelected(null)
  }

  function hover(event, info) {
    const target = dropTarget(event, info)
    setHovered(target?.zone ?? null)
    const y = Number.isFinite(event.clientY) ? event.clientY : info.point.y - window.scrollY
    if (y < 100) window.scrollBy(0, -12)
    else if (y > window.innerHeight - 100) window.scrollBy(0, 12)
  }

  function drop(id, event, info) {
    const target = dropTarget(event, info)
    setHovered(null)
    if (target) onMove(id, target.zone, target.index)
  }

  const cardProps = { editable, onSelect: setSelected, onRemove: id => onMove(id, 'spare'), onSwap, onBook: setBooking, onDrop: drop, onHover: hover, canSwap }

  return (
    <>
      <div className="flex flex-col gap-5">
        {editable && <p className="m-0 px-1 text-xs leading-relaxed text-muted">ลากที่ไอคอนจุดเพื่อจัดการ์ด · แตะชื่อเพื่อย้ายวัน</p>}
        {transit?.loading && <p role="status" className="m-0 px-1 text-xs text-muted">กำลังคำนวณเส้นทางรถไฟฟ้า/เรือ…</p>}
        {transit?.error && <div role="status" className="rounded-[22px] bg-white px-4 py-2 text-xs text-muted">ยังโหลดข้อมูลเส้นทางไม่ได้ <motion.button {...feedback} type="button" onClick={transit.retry} className="min-h-11 rounded-full px-2 font-semibold text-brown transition-colors hover:bg-cream motion-reduce:transition-none">ลองใหม่</motion.button></div>}
        {days.map((day, d) => (
          <section key={d} data-plan-zone={d} aria-label={`วันที่ ${d + 1}`} className={`rounded-[28px] border-2 p-3 transition-colors ${hovered === String(d) ? 'border-orange bg-peach/50' : 'border-transparent bg-[#EDE5DD]/50'}`}>
            <div className="flex items-center justify-between gap-2 px-1"><h2 className="m-0 text-lg font-bold">วันที่ {d + 1}{startDate ? ` · ${thaiDate(addDays(startDate, d), { weekday: 'short', day: 'numeric', month: 'short' })}` : ''}</h2><span className="shrink-0 text-xs text-muted">{day.items.length} ที่</span></div>
            <p className="mb-3 mt-2 px-1 text-xs leading-relaxed text-muted">{dayNarrative(day.items)}</p>
            <div className="flex flex-col gap-2">
              {day.items.map((item, i) => <div key={item.place.id}>{i > 0 && transit?.days?.[d]?.routes[i - 1] && <TransitRoute route={transit.days[d].routes[i - 1]} fromName={day.items[i - 1].place.name} toName={item.place.name} />}<p className="mb-1 ml-2 mt-2 text-xs font-medium text-brown">{SLOTS.find(slot => slot.id === item.slot)?.label ?? 'ระหว่างวัน'}</p><PlanCard item={item} index={i} {...cardProps} /></div>)}
              {Array.from({ length: Math.max(day.items.length ? 0 : 1, (capacities[d] ?? 0) - day.items.length) }, (_, i) => <div key={`free-${i}`} className="flex min-h-20 items-center justify-center gap-2 rounded-[22px] border border-dashed border-[#C9BDB2] px-4 py-3 text-sm text-muted"><Cloud size={18} strokeWidth={2} aria-hidden="true" /> เวลาอิสระ</div>)}
            </div>
            {transit?.days?.[d] && <TransitDayTotal total={transit.days[d].total} hasRoutes={transit.days[d].routes.length > 0} />}
          </section>
        ))}
        {editable && <section data-plan-zone="spare" aria-label="กองการ์ดสำรอง" className={`rounded-[28px] border-2 p-3 ${hovered === 'spare' ? 'border-orange bg-peach/50' : 'border-dashed border-[#D9CFC5]'}`}>
          <div className="mb-3 flex items-center justify-between px-1"><h2 className="m-0 text-lg font-bold">กองการ์ดสำรอง</h2><span className="rounded-full bg-white px-2.5 py-1 text-xs text-muted">{spare.length} ใบ</span></div>
          <div className="flex flex-col gap-2">{spare.map((place, i) => <PlanCard key={place.id} item={{ place, auto: false }} index={i} {...cardProps} spareCard />)}{!spare.length && <p className="m-0 flex min-h-24 items-center justify-center text-sm text-muted">ลากการ์ดมาเก็บไว้ตรงนี้</p>}</div>
        </section>}
      </div>
      <BottomSheet open={Boolean(selectedPlace)} onClose={closeMove} labelledBy="move-card-title">
        <div className="overflow-y-auto p-5"><div className="flex items-start justify-between gap-2"><div><p className="m-0 text-xs text-muted">{selectedPlace?.name}</p><h2 id="move-card-title" className="mt-1 text-xl font-bold">ย้ายการ์ดไปที่ไหน?</h2></div><motion.button {...feedback} type="button" onClick={closeMove} aria-label="ปิด" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-ink"><X size={18} strokeWidth={2} aria-hidden="true" /></motion.button></div>
          <div className="flex flex-col gap-2">{days.map((day, d) => <motion.button {...feedback} key={d} type="button" onClick={() => moveSelected(d)} className={`min-h-12 rounded-[20px] px-4 text-left text-sm transition-colors duration-200 ${source === d ? 'bg-peach' : 'bg-cream'}`}>วันที่ {d + 1}{startDate ? ` · ${thaiDate(addDays(startDate, d))}` : ''}<span className="float-right text-muted">{day.items.length} ที่</span></motion.button>)}<motion.button {...feedback} type="button" onClick={() => moveSelected('spare')} className="min-h-12 rounded-[20px] bg-cream px-4 text-left text-sm">กองการ์ดสำรอง</motion.button></div>
          <div className="mt-3 flex gap-2"><motion.button {...feedback} type="button" disabled={sourceIndex <= 0} onClick={() => moveSelected(source >= 0 ? source : 'spare', sourceIndex - 1)} className="flex min-h-11 flex-1 items-center justify-center gap-1 rounded-full border border-[#D9CFC5] text-sm disabled:opacity-30"><ArrowUp size={16} strokeWidth={2} aria-hidden="true" />ขึ้นหนึ่งใบ</motion.button><motion.button {...feedback} type="button" disabled={sourceIndex >= sourceLength - 1} onClick={() => moveSelected(source >= 0 ? source : 'spare', sourceIndex + 2)} className="flex min-h-11 flex-1 items-center justify-center gap-1 rounded-full border border-[#D9CFC5] text-sm disabled:opacity-30"><ArrowDown size={16} strokeWidth={2} aria-hidden="true" />ลงหนึ่งใบ</motion.button></div>
        </div>
      </BottomSheet>
      <BookingSheet open={Boolean(booking)} place={booking} onClose={closeBooking} />
    </>
  )
}
