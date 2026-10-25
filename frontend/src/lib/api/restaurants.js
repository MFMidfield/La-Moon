import { MOCK_RESTAURANTS } from '../../data/mock/restaurants'
import { REAL_RESTAURANTS } from '../../data/realFoodStays'

const restaurantsById = new Map([...MOCK_RESTAURANTS, ...REAL_RESTAURANTS].map((r) => [r.id, r]))

/**
 * Restaurant: { id, province, name, kind, cuisine: string[], signature_dishes: string[],
 *   meals: ('breakfast'|'lunch'|'dinner'|'snack')[], lat, lng, price_per_person: { min, max },
 *   opening_hours, rating?: { score, out_of, count? }, moods: string[], image_url|null, is_mock }
 * จังหวัดที่มีข้อมูลจริง ≥ 5 รายการใช้เฉพาะข้อมูลจริง; น้อยกว่านั้นต่อด้วยข้อมูลตัวอย่าง; ไม่มีเลยใช้ข้อมูลตัวอย่าง
 */
export async function listRestaurants({ province }) {
  const real = REAL_RESTAURANTS.filter((r) => r.province === province)
  // ของจริงน้อยกว่า 5 → ต่อท้ายด้วยข้อมูลตัวอย่างให้มีตัวเลือกพอปัด
  return real.length >= 5 ? real : [...real, ...MOCK_RESTAURANTS.filter((r) => r.province === province)]
}

export async function getRestaurantsByIds(ids) {
  return ids.map((id) => restaurantsById.get(id)).filter(Boolean)
}
