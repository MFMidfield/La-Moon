import { MOCK_RESTAURANTS } from '../../data/mock/restaurants'

/**
 * Restaurant: { id, province, name, kind, cuisine: string[], signature_dishes: string[],
 *   meals: ('breakfast'|'lunch'|'dinner'|'snack')[], lat, lng, price_per_person: { min, max },
 *   opening_hours, rating: { score, out_of, count }, moods: string[], image_url|null, is_mock }
 * ตอนนี้อ่านจากข้อมูลตัวอย่าง — เปลี่ยนเป็น query ตาราง restaurants ที่ไฟล์นี้ไฟล์เดียว
 */
export async function listRestaurants({ province }) {
  return MOCK_RESTAURANTS.filter((r) => r.province === province)
}

export async function getRestaurantsByIds(ids) {
  const byId = Object.fromEntries(MOCK_RESTAURANTS.map((r) => [r.id, r]))
  return ids.map((id) => byId[id]).filter(Boolean)
}
