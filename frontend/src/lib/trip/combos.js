import { MOODS } from '../../data/options'
import { distanceKm } from './geo'

export const MAX_COMBOS = 2
const NEARBY_KM = 10

const moodLabel = (id) => MOODS.find((m) => m.id === id)?.label ?? id

/**
 * Combo = ป้ายโบนัสบนสรุปทริป (แสดงอย่างเดียว)
 * คืน { id, title, description }[] ไม่เกิน 2 อัน เรียงตามลำดับเช็ก: ของหายาก → มู้ด → พื้นที่
 * id ที่เก็บลง trips.combos: 'rare-hunter' | 'mood:<a>+<b>' | 'nearby'
 */
export function findCombos(places) {
  const combos = []

  // ของหายาก: ตำนาน ≥1 + หายาก ≥2
  const legendary = places.filter((p) => p.rarity === 'legendary').length
  const rare = places.filter((p) => p.rarity === 'rare').length
  if (legendary >= 1 && rare >= 2) {
    combos.push({ id: 'rare-hunter', title: 'นักล่าของหายาก', description: `ได้การ์ดตำนาน ${legendary} ใบ หายาก ${rare} ใบ` })
  }

  // มู้ด: 2 มู้ดที่มีอย่างละ ≥2 ที่ (เอาคู่ที่มากสุด)
  const counts = {}
  places.forEach((p) => p.moods.forEach((m) => (counts[m] = (counts[m] ?? 0) + 1)))
  const top = Object.entries(counts)
    .filter(([, n]) => n >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([id]) => id)
  if (top.length === 2) {
    const [a, b] = top.sort()
    combos.push({
      id: `mood:${a}+${b}`,
      title: `${moodLabel(a)} + ${moodLabel(b)}`,
      description: 'ได้ครบทั้งสองฟีลในทริปเดียว',
    })
  }

  // พื้นที่: มี ≥3 ที่ อยู่ในรัศมี 10 กม. จากที่ใดที่หนึ่ง
  const clustered = places.some((center) => places.filter((p) => distanceKm(center, p) <= NEARBY_KM).length >= 3)
  if (clustered) {
    combos.push({ id: 'nearby', title: 'เที่ยวรวดเดียว', description: `มีที่เที่ยวใกล้กันในรัศมี ${NEARBY_KM} กม. ประหยัดเวลาเดินทาง` })
  }

  return combos.slice(0, MAX_COMBOS)
}
