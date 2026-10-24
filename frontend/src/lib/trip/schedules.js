import { PROVINCES } from '../../data/options'
import { travelOptions } from './travel'

/**
 * ตารางเที่ยวเดินทางข้ามจังหวัด (data/schedules/bkk-south.json)
 * route: { id, mode: 'plane'|'train'|'bus', from, to (province id), from_station, to_station,
 *   trips: [{ code, operator, depart 'HH:MM', arrive 'HH:MM', arrive_next_day?, days: 'daily'|number[] (0=อา..6=ส),
 *            price_thb: { min, max }, class?, note? }],
 *   transfer: { to_city_minutes, note } | null }
 * ไม่มีตารางจริง → สร้างเที่ยวตัวอย่างจากสูตรระยะทาง (is_mock)
 */
let loading
function loadSchedules() {
  loading ??= import('../../data/schedules/bkk-south.json').then((m) => m.default).catch((e) => { loading = undefined; throw e })
  return loading
}

const pad = (n) => String(n).padStart(2, '0')
const addMinutes = (hhmm, min) => {
  const [h, m] = hhmm.split(':').map(Number)
  const t = h * 60 + m + Math.round(min)
  return { time: `${pad(Math.floor(t / 60) % 24)}:${pad(t % 60)}`, nextDay: t >= 24 * 60 }
}
const label = (id) => PROVINCES.find((p) => p.id === id)?.label ?? id

function mockTrips(from, to, mode) {
  const opt = travelOptions(from, to).options.find((o) => o.id === mode)
  if (!opt?.available) return []
  const departs = { plane: ['06:30', '10:15', '14:40', '19:05'], train: ['15:10', '17:30', '19:30'], bus: ['08:00', '18:30', '20:00'] }[mode]
  return departs.map((depart, i) => {
    const a = addMinutes(depart, opt.hours * 60)
    return { code: `${mode.toUpperCase()}-${i + 1}`, operator: 'ข้อมูลตัวอย่าง', depart, arrive: a.time, arrive_next_day: a.nextDay, days: 'daily', price_thb: opt.cost, class: null, note: null }
  })
}

/**
 * เที่ยวของวันนั้น: direction 'out' = origin → province, 'back' = province → origin
 * คืน { route, trips, isMock, updatedAt, note }
 */
export async function getTrips({ origin, province, mode, direction = 'out', date = null }) {
  const [from, to] = direction === 'out' ? [origin, province] : [province, origin]
  const data = await loadSchedules().catch(() => null)
  const route = data?.routes?.find((r) => r.mode === mode && r.from === from && r.to === to) ?? null
  const day = date ? new Date(`${date}T12:00:00`).getDay() : null
  if (route?.trips?.length) {
    const trips = route.trips.filter((t) => day == null || t.days === 'daily' || t.days?.includes(day))
    return { route, trips, isMock: false, updatedAt: data.updated_at ?? null, note: data.note ?? null }
  }
  const trips = mockTrips(from, to, mode)
  return { route: { id: `mock-${from}-${to}-${mode}`, mode, from, to, from_station: label(from), to_station: label(to), transfer: null }, trips, isMock: true, updatedAt: null, note: null }
}

/** ลิงก์ไปเว็บจองจริงที่กรอกข้อมูลให้แล้ว */
export function bookingUrl({ mode, from, to, date, people = 1 }) {
  const fromName = PROVINCES.find((p) => p.id === from)?.label ?? from
  const toName = PROVINCES.find((p) => p.id === to)?.label ?? to
  if (mode === 'plane') return `https://www.google.com/travel/flights?q=${encodeURIComponent(`Flights from ${from} to ${to} on ${date ?? ''} ${people} adults`)}&hl=th`
  if (mode === 'train') return 'https://dticket.railway.co.th/DTicketPublicWeb/home/Home'
  if (mode === 'bus') return `https://12go.asia/th/travel/${from}/${to}?date=${date ?? ''}&people=${people}`
  return `https://www.google.com/maps/dir/${encodeURIComponent(fromName)}/${encodeURIComponent(toName)}`
}
