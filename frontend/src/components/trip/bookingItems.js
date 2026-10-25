import { PROVINCES } from '../../data/options'
import { bookingUrl, iata } from '../../lib/trip/schedules'
import { addDays, thaiDate } from './itinerary'
import { mid } from './mealPlan'
import { roomsFor } from './stayLinks'

const MODE_LABEL = { plane: 'เครื่องบิน', train: 'รถไฟ', bus: 'รถทัวร์' }
const DIRECTION_LABEL = { out: 'ไป', back: 'กลับ' }
const provinceLabel = id => PROVINCES.find(p => p.id === id)?.label ?? id

const rangeText = (first, last) => (first === last ? `${first}` : `${first}–${last}`)

// ป้ายต้น/ปลายทางบนตั๋ว: เครื่องบิน = รหัสสนามบิน (DMK/BKK), อื่นๆ = ชื่อสถานี, ไม่รู้สถานี = ชื่อจังหวัด
function placeLabel(mode, station, province) {
  if (mode === 'plane') {
    const codes = iata(station)
    if (codes.length) return codes.join('/')
  }
  return station ? station.replace(/\s*\(.*$/, '') : provinceLabel(province)
}

/**
 * รายการ "สิ่งที่ต้องจอง" ของทริปค้างคืน
 * → [{ key, kind: 'leg'|'stay', title, dateText, amount|null, ... }]
 * - leg (มาก่อนเสมอ): ไป/กลับ ทุกครั้งที่เดินทางด้วยเครื่องบิน/รถไฟ/รถทัวร์ (ขับรถเองไม่มี)
 *   chosen = เลือกเที่ยวแล้ว (มีเวลา/ผู้ให้บริการ/ราคาต่อคน × คน); ยังไม่เลือก → ลิงก์ค้นหาตามวัน/คน
 * - stay: คืนติดกันที่ใช้ที่พักเดียวกันเป็นแถวเดียว; ราคา = ราคา/คืน × คืน × ห้อง
 * days = [{ stay }] (stay ของคืนนั้น หรือ null) ทั้งตอนแก้แผนและทริปที่บันทึกแล้ว
 * key ของ leg มีรหัสเที่ยว — เปลี่ยนเที่ยวแล้วติ๊ก "จองแล้ว" เดิมไม่ติดมา
 */
export function buildBookingItems({ legs, days, startDate, endDate, people = 1, origin, province }) {
  const items = []
  if (legs && legs.mode !== 'car') {
    for (const direction of ['out', 'back']) {
      const leg = legs[direction]
      const mode = leg?.mode ?? legs.mode
      if (mode === 'car') continue
      const from = leg?.from ?? (direction === 'out' ? origin : province)
      const to = leg?.to ?? (direction === 'out' ? province : origin)
      const date = leg?.date ?? (direction === 'out' ? startDate : endDate) ?? null
      items.push({
        key: `leg:${direction}:${leg ? `${leg.code ?? ''}@${leg.depart ?? ''}` : 'none'}`,
        kind: 'leg',
        direction,
        mode,
        chosen: Boolean(leg),
        title: `${DIRECTION_LABEL[direction]} · ${MODE_LABEL[mode] ?? ''}`.trim(),
        dateText: date ? thaiDate(date, { weekday: 'short', day: 'numeric', month: 'short' }) : '',
        operator: [leg?.operator, leg?.code].filter(Boolean).join(' · '),
        depart: leg?.depart ?? null,
        arrive: leg?.arrive ?? null,
        nextDay: Boolean(leg?.arrive_next_day),
        fromLabel: placeLabel(mode, leg?.from_station, from),
        toLabel: placeLabel(mode, leg?.to_station, to),
        transferNote: leg?.transfer?.note ?? null,
        people,
        amount: leg?.price_thb ? mid(leg.price_thb) * people : null,
        url: bookingUrl({ mode, from, to, date, people, fromStation: leg?.from_station, toStation: leg?.to_station }),
      })
    }
  }

  const rooms = roomsFor(people)
  let d = 0
  while (d < days.length) {
    const stay = days[d]?.stay
    if (!stay) {
      d += 1
      continue
    }
    let last = d
    while (days[last + 1]?.stay?.id === stay.id) last += 1
    const nights = last - d + 1
    const dateText = startDate ? `${thaiDate(addDays(startDate, d))} – ${thaiDate(addDays(startDate, last + 1))}` : ''
    items.push({
      key: `stay:${d}:${stay.id}`,
      kind: 'stay',
      title: `คืนที่ ${rangeText(d + 1, last + 1)} · ${stay.name}`,
      sub: `~฿${Math.round(mid(stay.price_per_night)).toLocaleString('th-TH')}/คืน × ${nights} คืน${rooms > 1 ? ` × ${rooms} ห้อง` : ''}`,
      dateText,
      amount: mid(stay.price_per_night) * nights * rooms,
      stay,
      checkIn: startDate ? addDays(startDate, d) : null,
      nights,
      people,
    })
    d = last + 1
  }
  return items
}

export const bookingTotal = items => items.reduce((sum, item) => sum + (item.amount ?? 0), 0)

/** รูปที่เก็บใน trips.estimate.booking (jsonb เดิม ไม่ต้องแก้ DB) */
export function serializeBooking(items, booked) {
  return { items: items.map(item => ({ key: item.key, kind: item.kind, label: item.title, booked: Boolean(booked[item.key]) })) }
}

/** estimate.booking ที่บันทึกไว้ → { [key]: true } */
export function savedBooked(estimate) {
  const list = estimate?.booking?.items
  return Array.isArray(list) ? Object.fromEntries(list.filter(item => item?.booked).map(item => [item.key, true])) : {}
}
