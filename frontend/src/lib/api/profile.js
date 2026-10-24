import { supabase } from '../supabase'

// บันทึกจังหวัดที่ผู้ใช้อยู่ (ใช้เป็นต้นทางทริปถัดไป) — เรียก refreshProfile() ต่อเพื่ออัปเดต context
export async function updateHomeProvince(userId, provinceId) {
  const { error } = await supabase.from('profiles').update({ home_province: provinceId }).eq('id', userId)
  if (error) throw error
}
