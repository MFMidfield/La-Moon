import { supabase } from '../supabase'
import { MOODS } from '../../data/options'

const MAX_MOODS = 3

// คำที่ใช้จับมู้ดตอน AI ใช้ไม่ได้
const KEYWORDS = {
  beach: ['ทะเล', 'หาด', 'เกาะ', 'น้ำ', 'ดำน้ำ', 'ริมน้ำ', 'beach', 'sea'],
  mountain: ['ภูเขา', 'ดอย', 'หมอก', 'เขา', 'เย็น', 'หนาว', 'ป่า', 'mountain'],
  food: ['กิน', 'อาหาร', 'หิว', 'คาเฟ่', 'กาแฟ', 'ขนม', 'ร้าน', 'food'],
  temple: ['วัด', 'เมืองเก่า', 'ประวัติศาสตร์', 'ไหว้พระ', 'ทำบุญ', 'temple'],
  quiet: ['เงียบ', 'เหนื่อย', 'พัก', 'ชิล', 'สงบ', 'นอน', 'ผ่อนคลาย', 'quiet'],
  photo: ['ถ่ายรูป', 'รูป', 'วิว', 'สวย', 'กล้อง', 'photo'],
  adventure: ['ผจญภัย', 'ตื่นเต้น', 'เดินป่า', 'ปีน', 'พายเรือ', 'ลุย', 'adventure'],
}

function guessMoods(text) {
  const lower = text.toLowerCase()
  const scored = Object.entries(KEYWORDS)
    .map(([id, words]) => [id, words.filter((w) => lower.includes(w)).length])
    .filter(([, score]) => score > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, MAX_MOODS)
    .map(([id]) => id)
  const labels = scored.map((id) => MOODS.find((m) => m.id === id).label)
  return {
    moods: scored,
    reason: scored.length ? `จากที่เล่ามา น่าจะชอบ ${labels.join(', ')}` : 'ยังจับมู้ดไม่ได้ ลองเล่าเพิ่มอีกนิด',
    source: 'keywords',
  }
}

/**
 * อ่านมู้ดจากข้อความ → { moods: string[] (id ≤3), reason: string, source: 'ai'|'keywords' }
 * เรียก Edge Function `mood-reader` (Gemini) ก่อน ถ้าไม่มี key / พลาด / ได้ค่าแปลก → จับคำแทน
 */
export async function readMood(text) {
  try {
    const { data, error } = await supabase.functions.invoke('mood-reader', { body: { text } })
    if (error) throw error
    const valid = (data?.moods ?? []).filter((id) => KEYWORDS[id]).slice(0, MAX_MOODS)
    if (!valid.length) throw new Error('no moods from ai')
    return { moods: valid, reason: data.reason ?? '', source: 'ai' }
  } catch (err) {
    console.warn('mood-reader unavailable, fallback to keywords', err)
    return guessMoods(text)
  }
}
