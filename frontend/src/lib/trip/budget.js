import { ENTRY_BY_PRICE_LEVEL, FOOD_PER_DAY, STAY_PER_ROOM, TRANSPORT_LOCAL } from '../../data/travel'
import { travelOptions } from './travel'
import { distanceKm } from './geo'

const mid = ({ min, max }) => (min + max) / 2

// งบทั้งทริป (บาท) จาก draft.budget
export function budgetTotal(budget, people) {
  return budget.per === 'person' ? budget.max * people : budget.max
}

// ระดับที่พัก/อาหารจากงบต่อคนต่อวัน
export function budgetTier(budget, people, days) {
  const perPersonDay = budgetTotal(budget, people) / people / Math.max(1, days)
  return perPersonDay < 1500 ? 'saver' : perPersonDay < 4000 ? 'mid' : 'comfy'
}

/**
 * ประมาณค่าใช้จ่ายทั้งทริป (บาท ทั้งกลุ่ม)
 * input: { origin, province, transportTo, transportLocal, budget, people, days, nights, places, stays?, meals? }
 * คืน { transport, stay, food, local, entries, total, perPerson, budget, over, tier }
 *   over > 0 = เกินงบกี่บาท
 */
export function estimateTrip({ origin, province, transportTo, transportLocal, budget, people, days, nights, places = [], stays = null, meals = null }) {
  const tier = budgetTier(budget, people, days)

  let transport = 0
  const option = travelOptions(origin, province).options.find((o) => o.id === transportTo)
  if (option?.available) {
    const oneWay = mid(option.cost)
    transport = option.perVehicle ? oneWay * 2 * Math.ceil(people / 4) : oneWay * 2 * people
  }

  // stays: Stay[] ต่อคืน (จากหน้าปัดที่พัก) → ใช้ราคาจริง, ไม่มีก็ประมาณตามระดับงบ
  const rooms = Math.ceil(people / 2)
  const stay = stays?.length
    ? stays.reduce((sum, s) => sum + (s ? mid(s.price_per_night) : STAY_PER_ROOM[tier]) * rooms, 0)
    : nights * STAY_PER_ROOM[tier] * rooms
  // meals: { restaurant|null, atStay }[] ทุกมื้อของทริป → ร้านที่รู้ราคาใช้ราคาจริง มื้อที่เหลือประมาณ 1/3 ของค่ากินต่อวัน
  const food = meals?.length
    ? meals.reduce((sum, m) => sum + (m.atStay ? 0 : m.restaurant ? mid(m.restaurant.price_per_person) : FOOD_PER_DAY[tier] / 3) * people, 0)
    : days * FOOD_PER_DAY[tier] * people
  const localMode = TRANSPORT_LOCAL.find((m) => m.id === transportLocal)
  let local = localMode ? localMode.costPerDay * days * (localMode.perPerson ? people : 1) : 0
  // รถส่วนตัว: ระยะวนระหว่างสถานที่ × 1.3 + ไป-กลับในเมือง ~20 กม./วัน
  if (localMode?.bahtPerKm) {
    const km = places.slice(1).reduce((sum, p, i) => {
      const d = distanceKm(places[i], p)
      return sum + (Number.isFinite(d) ? d * 1.3 : 0)
    }, 20 * days)
    local = Math.round(km * localMode.bahtPerKm)
  }
  const entries = places.reduce((sum, p) => sum + (ENTRY_BY_PRICE_LEVEL[p.price_level ?? 1] ?? 0) * people, 0)

  const total = Math.round(transport + stay + food + local + entries)
  const limit = budgetTotal(budget, people)
  return {
    transport: Math.round(transport), stay: Math.round(stay), food: Math.round(food), local, entries, total,
    perPerson: Math.round(total / people), budget: limit, over: Math.max(0, total - limit), tier,
  }
}

// ทางเลือกลดงบ: [{ id, label, patch, saves }] เรียงประหยัดมาก → น้อย (ใช้กับปุ่ม "งบไม่พอ ลองแบบนี้")
export function cheaperAlternatives(input) {
  const base = estimateTrip(input).total
  const tries = []
  const opts = travelOptions(input.origin, input.province).options.filter((o) => o.available && o.id !== input.transportTo)
  for (const o of opts) tries.push({ id: `to:${o.id}`, label: `เปลี่ยนเป็น${{ plane: 'เครื่องบิน', train: 'รถไฟ', bus: 'รถทัวร์', car: 'ขับรถเอง' }[o.id]}`, patch: { transportTo: o.id } })
  if (input.nights > 0) tries.push({ id: 'nights:-1', label: 'ลดลง 1 คืน', patch: { nights: input.nights - 1, days: input.days - 1 } })
  if (input.transportLocal && input.transportLocal !== 'public') tries.push({ id: 'local:public', label: 'ใช้รถสาธารณะในพื้นที่', patch: { transportLocal: 'public' } })

  return tries
    .map((t) => ({ ...t, saves: base - estimateTrip({ ...input, ...t.patch }).total }))
    .filter((t) => t.saves > 0)
    .sort((a, b) => b.saves - a.saves)
}

export const formatBaht = (n) => `฿${Math.round(n).toLocaleString('th-TH')}`
