import { MOCK_STAYS } from '../../data/mock/stays'

/**
 * Stay (ที่พัก): { id, province, name, type, tier: 'saver'|'mid'|'comfy', area, lat, lng,
 *   price_per_night: { min, max } (ห้องคู่/คืน), rating: { score, out_of, count }, amenities: string[],
 *   moods: string[], check_in, check_out, image_url|null, booking_url|null, is_mock }
 * ตอนนี้อ่านจากข้อมูลตัวอย่าง — พอได้ข้อมูลจริงเปลี่ยนเป็น query ตาราง stays ที่ไฟล์นี้ไฟล์เดียว
 */
export async function listStays({ province }) {
  return MOCK_STAYS.filter((s) => s.province === province)
}

export async function getStaysByIds(ids) {
  const byId = Object.fromEntries(MOCK_STAYS.map((s) => [s.id, s]))
  return ids.map((id) => byId[id]).filter(Boolean)
}
