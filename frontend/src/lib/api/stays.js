import { MOCK_STAYS } from '../../data/mock/stays'
import { REAL_STAYS } from '../../data/realFoodStays'

const staysById = new Map([...MOCK_STAYS, ...REAL_STAYS].map((s) => [s.id, s]))

/**
 * Stay (ที่พัก): { id, province, name, type, tier: 'saver'|'mid'|'comfy', area, lat, lng,
 *   price_per_night: { min, max } (ห้องคู่/คืน), rating?: { score, out_of, count? }, amenities: string[],
 *   moods: string[], check_in, check_out, image_url|null, booking_url?, is_mock }
 * จังหวัดที่มีข้อมูลจริงใช้เฉพาะข้อมูลจริง; จังหวัดอื่นใช้ข้อมูลตัวอย่าง
 */
export async function listStays({ province }) {
  const real = REAL_STAYS.filter((s) => s.province === province)
  return real.length ? real : MOCK_STAYS.filter((s) => s.province === province)
}

export async function getStaysByIds(ids) {
  return ids.map((id) => staysById.get(id)).filter(Boolean)
}
