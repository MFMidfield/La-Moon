import { ArrowDown, ArrowUp, ChevronRight, Dices, GripVertical, Car, Minus, Plus, X } from 'lucide-react'
import { useCallback, useMemo, useRef, useState } from 'react'
import { motion, useDragControls, useReducedMotion } from 'framer-motion'
import BottomSheet from '../BottomSheet'
import BookingSheet from './BookingSheet'
import PlaceThumb from './PlaceThumb'
import MealRow from './MealRow'
import StayRow from './StayRow'
import SpareDeck from './SpareDeck'
import TimeChip from './TimeChip'
import { dayRows, mealKey, placeKey } from './mealPlan'
import { formatTravel, scheduleTrip, stepTime, timeKey } from './dayTimes'
import { RARITY } from '../../data/rarity'
import { mealLabel } from '../../lib/trip/meals'
import { addDays, dayNarrative, thaiDate } from './itinerary'
import { PRIMARY_BUTTON, TEXT_LINK } from './styles'
import TransitRoute, { TransitDayTotal } from './TransitRoute'

const NO_OVERRIDES = {}

function PlanCard({ item, index, editable, time, customTime, onEditTime, onSelect, onRemove, onSwap, onBook, canBook, onDrop, onHover, canSwap }) {
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
      {time && <div className="mb-2"><TimeChip start={time.start} end={time.end} label={place.name} custom={customTime} onClick={onEditTime} /></div>}
      <div className="flex items-start gap-2.5">
        <motion.button {...feedback} type="button" onClick={() => { if (Date.now() - lastDrag.current > 250) (editable ? onSelect(place.id) : canBook && onBook(place)) }} aria-label={editable ? `ย้าย ${place.name}` : `ดูการจองใกล้ ${place.name}`} className="flex min-w-0 flex-1 items-center gap-3 text-left">
          <PlaceThumb src={place.image_url} />
          <span className="flex min-w-0 flex-col gap-1">
            <span className="text-sm font-semibold leading-snug">{place.name}</span>
            <span className="flex flex-wrap items-center gap-1"><span className="rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ color: rarity.text, background: rarity.bg }}>{rarity.label}</span></span>
          </span>
        </motion.button>
        {editable && <motion.button {...feedback} type="button" aria-label={`ลาก ${place.name}`} title="ลากเพื่อย้ายการ์ด หรือแตะชื่อเพื่อเลือกวัน" onPointerDown={event => { if (!reduced) controls.start(event) }} onClick={() => { if (Date.now() - lastDrag.current > 250) onSelect(place.id) }} className="flex h-11 w-8 shrink-0 touch-none cursor-grab items-center justify-center rounded-full bg-cream text-lg text-muted active:cursor-grabbing"><GripVertical size={18} strokeWidth={2} aria-hidden="true" /></motion.button>}
      </div>
      <div className="mt-2 flex items-center justify-end gap-1">
        {canBook && <motion.button {...feedback} type="button" onClick={() => onBook(place)} className="flex min-h-11 items-center gap-1 rounded-full px-3 text-xs font-semibold text-brown transition-colors duration-200 hover:bg-cream">จองใกล้ที่นี่ <ChevronRight size={14} strokeWidth={2} aria-hidden="true" /></motion.button>}
        {editable && <><motion.button {...feedback} type="button" onClick={() => onSwap(place.id)} disabled={!canSwap} aria-label={`สุ่มแทน ${place.name}`} className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-brown transition-colors duration-200 disabled:opacity-30"><Dices size={18} strokeWidth={2} aria-hidden="true" /></motion.button><motion.button {...feedback} type="button" onClick={() => onRemove(place.id)} aria-label={`เก็บ ${place.name} ไว้กองสำรอง`} className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-muted transition-colors duration-200"><X size={18} strokeWidth={2} aria-hidden="true" /></motion.button></>}
      </div>
    </motion.div>
  )
}

// เวลาเดินทางระหว่างแถว (จากพิกัด)
function TravelLine({ minutes }) {
  return <p className="m-0 mb-1.5 mt-0.5 flex items-center gap-1.5 pl-4 text-[11px] text-muted"><Car size={12} strokeWidth={2} aria-hidden="true" />เดินทาง {formatTravel(minutes)}</p>
}

// แผ่นแก้เวลาเริ่มของแถวหนึ่ง — เวลาถัดไปเลื่อนตามอัตโนมัติ
function TimeSheet({ edit, dayLabel, onApply, onAuto, onClose }) {
  const reduced = useReducedMotion()
  const feedback = { whileTap: reduced ? undefined : { scale: 0.96 }, transition: reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 28 } }
  const [value, setValue] = useState(edit.start)
  return (
    <>
      <div className="flex items-start justify-between gap-3 px-[22px] pt-4">
        <div className="min-w-0">
          <p className="m-0 truncate text-xs text-muted">{dayLabel} · {edit.label}</p>
          <h2 id="time-edit-title" className="m-0 mt-0.5 text-xl font-bold">เริ่มกี่โมง?</h2>
        </div>
        <button type="button" aria-label="ปิด" onClick={onClose} className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-cream"><X size={18} strokeWidth={2} aria-hidden="true" /></button>
      </div>
      <div className="flex flex-col gap-3 overflow-y-auto px-4 pb-7 pt-4 lg:pb-5">
        <input
          type="time"
          step={300}
          value={value}
          onChange={event => { if (event.target.value) setValue(event.target.value) }}
          aria-label="เวลาเริ่ม"
          className="h-14 w-full min-w-0 appearance-none rounded-full bg-cream px-4 text-center text-2xl font-bold tabular-nums text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown"
        />
        <div className="flex gap-2">
          <motion.button {...feedback} type="button" onClick={() => setValue(previous => stepTime(previous, -15))} className="flex min-h-11 flex-1 cursor-pointer items-center justify-center gap-1 rounded-full border-[1.5px] border-[#D9CFC5] bg-white text-sm font-semibold"><Minus size={16} strokeWidth={2} aria-hidden="true" />15 นาที</motion.button>
          <motion.button {...feedback} type="button" onClick={() => setValue(previous => stepTime(previous, 15))} className="flex min-h-11 flex-1 cursor-pointer items-center justify-center gap-1 rounded-full border-[1.5px] border-[#D9CFC5] bg-white text-sm font-semibold"><Plus size={16} strokeWidth={2} aria-hidden="true" />15 นาที</motion.button>
        </div>
        <p className="m-0 px-1 text-center text-xs leading-relaxed text-muted">รายการถัดไปจะเลื่อนตาม · ถ้าเร็วกว่าเวลาที่เดินทางถึงจริง ระบบจะใช้เวลาที่ถึงจริง</p>
        <button type="button" onClick={() => onApply(value)} className={PRIMARY_BUTTON}>ตกลง</button>
        <button type="button" onClick={onAuto} disabled={!edit.custom} className={`${TEXT_LINK} cursor-pointer disabled:cursor-default disabled:opacity-40`}>ใช้เวลาอัตโนมัติ</button>
      </div>
    </>
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

/**
 * แผนรายวัน — แต่ละแถวมีเวลา (scheduleTrip) และเวลาเดินทางระหว่างแถว
 * แก้ได้เมื่อมี onMove; timeOverrides = { 'd:key': 'HH:MM' }, onTimeChange(fullKey, value|undefined), onResetTimes(d)
 * อ่านอย่างเดียว (ไม่มี onMove): ใช้ start ที่บันทึกใน items/meals ถ้ามี ไม่มีก็คำนวณใหม่
 */
// canBook = false (ทริปวันเดียว) → ไม่มีปุ่มจองที่พักใกล้สถานที่
export default function DayPlan({ days, spare = [], canBook = true, startDate, onMove, onCycleSpare, onSwap, canSwap = false, transit, onEditMeal, timeOverrides = NO_OVERRIDES, onTimeChange, onResetTimes }) {
  const reduced = useReducedMotion()
  const feedback = { whileTap: reduced ? undefined : { scale: 0.96 }, transition: reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 28 } }
  const editable = Boolean(onMove)
  const [selected, setSelected] = useState(null)
  const [hovered, setHovered] = useState(null)
  const [booking, setBooking] = useState(null)
  const [timeEdit, setTimeEdit] = useState(null)
  const closeMove = useCallback(() => setSelected(null), [])
  const closeBooking = useCallback(() => setBooking(null), [])
  const closeTime = useCallback(() => setTimeEdit(null), [])
  const schedule = useMemo(() => scheduleTrip(days, { overrides: timeOverrides, saved: !editable }), [days, timeOverrides, editable])
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

  function openTime(d, key, label) {
    const time = schedule[d]?.times[key]
    if (time) setTimeEdit({ d, key, label, start: time.start, custom: Boolean(timeOverrides[timeKey(d, key)]) })
  }

  function applyTime(value) {
    onTimeChange(timeKey(timeEdit.d, timeEdit.key), value)
    setTimeEdit(null)
  }

  function autoTime() {
    onTimeChange(timeKey(timeEdit.d, timeEdit.key), undefined)
    setTimeEdit(null)
  }

  const cardProps = { editable, onSelect: setSelected, onRemove: id => onMove(id, 'spare'), onSwap, onBook: setBooking, canBook, onDrop: drop, onHover: hover, canSwap }
  const canEditTime = editable && Boolean(onTimeChange)

  return (
    <>
      <div className="flex flex-col gap-5">
        {editable && <p className="m-0 px-1 text-xs leading-relaxed text-muted">ลากที่ไอคอนจุดเพื่อจัดการ์ด · แตะชื่อเพื่อย้ายวัน · แตะเวลาเพื่อเปลี่ยนเวลาเริ่ม</p>}
        {transit?.loading && <p role="status" className="m-0 px-1 text-xs text-muted">กำลังคำนวณเส้นทางรถไฟฟ้า/เรือ…</p>}
        {transit?.error && <div role="status" className="rounded-[22px] bg-white px-4 py-2 text-xs text-muted">ยังโหลดข้อมูลเส้นทางไม่ได้ <motion.button {...feedback} type="button" onClick={transit.retry} className="min-h-11 rounded-full px-2 font-semibold text-brown transition-colors hover:bg-cream motion-reduce:transition-none">ลองใหม่</motion.button></div>}
        {days.map((day, d) => {
          const rows = dayRows(day.items, day.meals ?? [], { hideEmpty: !onEditMeal })
          const times = schedule[d]?.times ?? {}
          const span = schedule[d]?.span
          const hasCustom = canEditTime && Object.keys(timeOverrides).some(key => key.startsWith(`${d}:`))
          const timeProps = (key, label) => ({ time: times[key], customTime: canEditTime && Boolean(timeOverrides[timeKey(d, key)]), onEditTime: canEditTime ? () => openTime(d, key, label) : undefined })
          return (
            <section key={d} data-plan-zone={d} aria-label={`วันที่ ${d + 1}`} className={`rounded-[28px] border-2 p-3 transition-colors ${hovered === String(d) ? 'border-orange bg-peach/50' : 'border-transparent bg-[#EDE5DD]/50'}`}>
              <div className="flex items-center justify-between gap-2 px-1"><h2 className="m-0 text-lg font-bold">วันที่ {d + 1}{startDate ? ` · ${thaiDate(addDays(startDate, d), { weekday: 'short', day: 'numeric', month: 'short' })}` : ''}</h2><span className="shrink-0 text-xs text-muted">{day.items.length} ที่</span></div>
              <div className={`mb-2 mt-1 flex items-center justify-between gap-2 px-1 ${canEditTime ? 'min-h-11' : ''}`}>
                <p className="m-0 min-w-0 text-xs leading-relaxed text-muted">{span ? <span className="font-semibold tabular-nums text-brown">{span.start}–{span.end} · </span> : null}{dayNarrative(day.items)}</p>
                {hasCustom && <motion.button {...feedback} type="button" onClick={() => onResetTimes?.(d)} className="min-h-11 shrink-0 cursor-pointer rounded-full px-3 text-xs font-semibold text-brown transition-colors hover:bg-white motion-reduce:transition-none">รีเซ็ตเวลาอัตโนมัติ</motion.button>}
              </div>
              <div className="flex flex-col gap-2">
                {rows.map(row => {
                  if (row.kind === 'meal') {
                    const key = mealKey(row.slot.meal)
                    const travel = times[key]?.travelBefore
                    return <div key={`meal-${row.slot.meal}`}>{travel > 0 && <TravelLine minutes={travel} />}<MealRow slot={row.slot} stayName={days[d - 1]?.stay?.name} onEdit={onEditMeal ? () => onEditMeal(d, row.slot.meal) : undefined} {...timeProps(key, `มื้อ${mealLabel(row.slot.meal)}`)} /></div>
                  }
                  const { item, index: i } = row
                  const key = placeKey(item.place.id)
                  const travel = times[key]?.travelBefore
                  return <div key={item.place.id}>{travel > 0 && <TravelLine minutes={travel} />}{i > 0 && transit?.days?.[d]?.routes[i - 1] && <TransitRoute route={transit.days[d].routes[i - 1]} fromName={day.items[i - 1].place.name} toName={item.place.name} />}<PlanCard item={item} index={i} {...cardProps} {...timeProps(key, item.place.name)} /></div>
                })}
                {editable && !day.items.length && spare.length > 0 && <div className="flex min-h-14 items-center justify-center rounded-[22px] border border-dashed border-[#C9BDB2] px-4 py-3 text-sm text-muted">ลากการ์ดสำรองมาวางที่นี่</div>}
                {day.stay && <StayRow stay={day.stay} onBook={stay => setBooking({ name: stay.name, isStay: true })} />}
              </div>
              {transit?.days?.[d] && <TransitDayTotal total={transit.days[d].total} hasRoutes={transit.days[d].routes.length > 0} />}
            </section>
          )
        })}
        {editable && spare.length > 0 && <section data-plan-zone="spare" aria-label="กองการ์ดสำรอง" className={`rounded-[28px] border-2 p-3 ${hovered === 'spare' ? 'border-orange bg-peach/50' : 'border-dashed border-[#D9CFC5]'}`}>
          <div className="flex items-center justify-between px-1"><h2 className="m-0 text-lg font-bold">กองการ์ดสำรอง</h2><span className="rounded-full bg-white px-2.5 py-1 text-xs text-muted">{spare.length} ใบ</span></div>
          <p className="mb-3 mt-1 px-1 text-xs leading-relaxed text-muted">ปัดการ์ดขึ้นเพื่อดูใบถัดไป · ลากที่ไอคอนจุดไปวางในวัน</p>
          <SpareDeck spare={spare} canBook={canBook} onSelect={setSelected} onBook={setBooking} onCycle={onCycleSpare ?? (id => onMove(id, 'spare'))} onDrop={drop} onHover={hover} />
        </section>}
      </div>
      <BottomSheet open={Boolean(selectedPlace)} onClose={closeMove} labelledBy="move-card-title">
        <div className="overflow-y-auto p-5"><div className="flex items-start justify-between gap-2"><div><p className="m-0 text-xs text-muted">{selectedPlace?.name}</p><h2 id="move-card-title" className="mt-1 text-xl font-bold">ย้ายการ์ดไปที่ไหน?</h2></div><motion.button {...feedback} type="button" onClick={closeMove} aria-label="ปิด" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-ink"><X size={18} strokeWidth={2} aria-hidden="true" /></motion.button></div>
          <div className="flex flex-col gap-2">{days.map((day, d) => <motion.button {...feedback} key={d} type="button" onClick={() => moveSelected(d)} className={`min-h-12 rounded-[20px] px-4 text-left text-sm transition-colors duration-200 ${source === d ? 'bg-peach' : 'bg-cream'}`}>วันที่ {d + 1}{startDate ? ` · ${thaiDate(addDays(startDate, d))}` : ''}<span className="float-right text-muted">{day.items.length} ที่</span></motion.button>)}<motion.button {...feedback} type="button" onClick={() => moveSelected('spare')} className="min-h-12 rounded-[20px] bg-cream px-4 text-left text-sm">กองการ์ดสำรอง</motion.button></div>
          <div className="mt-3 flex gap-2"><motion.button {...feedback} type="button" disabled={sourceIndex <= 0} onClick={() => moveSelected(source >= 0 ? source : 'spare', sourceIndex - 1)} className="flex min-h-11 flex-1 items-center justify-center gap-1 rounded-full border border-[#D9CFC5] text-sm disabled:opacity-30"><ArrowUp size={16} strokeWidth={2} aria-hidden="true" />ขึ้นหนึ่งใบ</motion.button><motion.button {...feedback} type="button" disabled={sourceIndex >= sourceLength - 1} onClick={() => moveSelected(source >= 0 ? source : 'spare', sourceIndex + 2)} className="flex min-h-11 flex-1 items-center justify-center gap-1 rounded-full border border-[#D9CFC5] text-sm disabled:opacity-30"><ArrowDown size={16} strokeWidth={2} aria-hidden="true" />ลงหนึ่งใบ</motion.button></div>
        </div>
      </BottomSheet>
      <BottomSheet open={Boolean(timeEdit)} onClose={closeTime} labelledBy="time-edit-title">
        {timeEdit && <TimeSheet key={`${timeEdit.d}:${timeEdit.key}`} edit={timeEdit} dayLabel={`วันที่ ${timeEdit.d + 1}`} onApply={applyTime} onAuto={autoTime} onClose={closeTime} />}
      </BottomSheet>
      <BookingSheet open={Boolean(booking)} place={booking} title={booking?.isStay ? `จองที่พัก ${booking.name}` : undefined} onClose={closeBooking} />
    </>
  )
}
