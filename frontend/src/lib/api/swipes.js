import { supabase } from '../supabase'

// บันทึกการปัด — ไม่ block UI, พลาดแค่ log
export function recordSwipe(placeId, direction) {
  supabase
    .from('swipes')
    .insert({ place_id: placeId, direction })
    .then(({ error }) => error && console.error('record swipe failed', error))
}

// สถานที่ที่ผู้ใช้เคยปัดขวาทั้งหมด (ไม่ซ้ำ) — ใช้คำนวณบุคลิกการเที่ยว
export async function listLikedPlaces() {
  const { data, error } = await supabase
    .from('swipes')
    .select('place:places(*)')
    .eq('direction', 'right')
  if (error) throw error
  const unique = new Map(data.filter((r) => r.place).map((r) => [r.place.id, r.place]))
  return [...unique.values()]
}
