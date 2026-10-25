import { MOCK_STAYS } from '../../data/mock/stays'
import { REAL_STAYS } from '../../data/realFoodStays'

const staysById = new Map([...MOCK_STAYS, ...REAL_STAYS].map((s) => [s.id, s]))

/**
 * Stay (ที่พัก): { id, province, name, type, tier: 'saver'|'mid'|'comfy', area, lat, lng,
 *   price_per_night: { min, max } (ห้องคู่/คืน), rating?: { score, out_of, count? }, amenities: string[],
 *   moods: string[], check_in, check_out, image_url|null, booking_url?, is_mock }
 * จังหวัดที่มีข้อมูลจริง ≥ 4 รายการใช้เฉพาะข้อมูลจริง; น้อยกว่านั้นต่อด้วยข้อมูลตัวอย่าง; ไม่มีเลยใช้ข้อมูลตัวอย่าง
 */
export async function listStays({ province }) {
  const real = REAL_STAYS.filter((s) => s.province === province)
  // ของจริงน้อยกว่า 4 → ต่อท้ายด้วยข้อมูลตัวอย่างให้มีตัวเลือกพอปัด
  return real.length >= 4 ? real : [...real, ...MOCK_STAYS.filter((s) => s.province === province)]
}

export async function getStaysByIds(ids) {
  return ids.map((id) => staysById.get(id)).filter(Boolean)
}
