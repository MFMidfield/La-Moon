import { bookingUrl } from '../../lib/trip/schedules'
import { addDays, thaiDate } from './itinerary'
import { mid } from './mealPlan'

const MODE_LABEL = { plane: 'เครื่องบิน', train: 'รถไฟ', bus: 'รถทัวร์' }
const DIRECTION_LABEL = { out: 'เดินทางไป', back: 'เดินทางกลับ' }

const rangeText = (first, last) => (first === last ? `${first}` : `${first}–${last}`)

/**
 * รายการ "สิ่งที่ต้องจอง" ของทริปค้างคืน → [{ key, kind: 'leg'|'stay', mode?, title, sub, dateText, amount|null, url?, stay? }]
 * - เที่ยวไป/กลับที่เลือกแล้ว (ขับรถเองและที่ยังไม่ได้เลือกเที่ยวไม่มีรายการ); ราคา = ราคาต่อคน × คน
 * - ที่พักรวมคืนติดกันที่ใช้ที่พักเดียวกันเป็นแถวเดียว; ราคา = ราคา/คืน × คืน × ห้อง (ห้องละ 2 คน เหมือน estimateTrip)
 * days = [{ stay }] (stay ของคืนนั้น หรือ null) ทั้งตอนแก้แผนและทริปที่บันทึกแล้ว
 */
export function buildBookingItems({ legs, days, startDate, endDate, people = 1 }) {
  const items = []
  if (legs && legs.mode !== 'car') {
    for (const direction of ['out', 'back']) {
      const leg = legs[direction]
      if (!leg || leg.mode === 'car') continue
      const date = leg.date ?? (direction === 'out' ? startDate : endDate) ?? null
      const operator = [leg.operator, leg.code].filter(Boolean).join(' · ')
      const times = leg.depart && leg.arrive ? `ออก ${leg.depart} → ถึง ${leg.arrive}${leg.arrive_next_day ? ' (วันถัดไป)' : ''}` : ''
      items.push({
        key: `leg:${direction}`,
        kind: 'leg',
        mode: leg.mode,
        title: `${DIRECTION_LABEL[direction]} · ${MODE_LABEL[leg.mode] ?? ''}`.trim(),
        sub: [operator, times].filter(Boolean).join(' · '),
        dateText: date ? thaiDate(date, { weekday: 'short', day: 'numeric', month: 'short' }) : '',
        amount: leg.price_thb ? mid(leg.price_thb) * people : null,
        url: bookingUrl({ mode: leg.mode, from: leg.from, to: leg.to, date, people }),
      })
    }
  }

  const rooms = Math.ceil(people / 2)
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
