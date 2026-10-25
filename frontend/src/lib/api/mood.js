import { MOODS } from '../../data/options'
import { MOOD_WORDS, NEGATIONS } from '../../data/moodWords'

const MAX_MOODS = 3
const STRONG = 3
const WEAK = 1
const NEGATION_WINDOW = 8 // ตัวอักษรระหว่างคำปฏิเสธกับคำมู้ด

// ทำข้อความให้เทียบง่าย: ตัวเล็ก, ตัดช่องว่าง/เครื่องหมาย, ตัวซ้ำ ≥3 ตัวเหลือตัวเดียว ("ทะเลลลล" → "ทะเล"), ไม้ยมกติดคำ
export function normalize(text) {
  return String(text ?? '')
    .toLowerCase()
    .normalize('NFC')
    .replace(/[\u200b-\u200d\ufeff]/g, '')
    .replace(/[\s.,!?;:"'()[\]{}\-_/\\|~`@#$%^&*+=<>]+/g, '')
    .replace(/(.)\1{2,}/gu, '$1')
}

// ระยะแก้คำ (Levenshtein) แบบหยุดเร็วเมื่อเกิน max
function withinEdits(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return false
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    const cur = [i]
    let rowMin = i
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1))
      rowMin = Math.min(rowMin, cur[j])
    }
    if (rowMin > max) return false
    prev = cur
  }
  return prev[b.length] <= max
}

// หาทุกตำแหน่งของคำ: ตรงตัวก่อน, ไม่เจอค่อยลองพิมพ์ผิด 1 ตัว (เฉพาะคำยาว ≥4) → index[]
function findWord(text, word) {
  const found = []
  for (let at = text.indexOf(word); at !== -1; at = text.indexOf(word, at + 1)) found.push(at)
  if (found.length || word.length < 4) return found
  for (let len = word.length - 1; len <= word.length + 1; len++) {
    for (let i = 0; i + len <= text.length; i++) {
      if (withinEdits(text.slice(i, i + len), word, 1)) return [i]
    }
  }
  return found
}

function negated(text, index) {
  const before = text.slice(Math.max(0, index - NEGATION_WINDOW - 10), index)
  return NEGATIONS.some((neg) => {
    const at = before.lastIndexOf(neg)
    return at !== -1 && before.length - (at + neg.length) <= NEGATION_WINDOW
  })
}

/**
 * เดามู้ดจากข้อความ (ไม่ใช้ AI) → { moods: id[] (≤3), reason, source: 'keywords', matched: { [mood]: string[] } }
 * ให้คะแนนต่อมู้ด: คำหลัก 3 / คำรอง 1, คำที่อยู่หลังคำปฏิเสธ ("ไม่อยากไปทะเล") หักคะแนน, รองรับพิมพ์ผิด 1 ตัว
 * คำยาวกินคำสั้นที่ซ้อนอยู่, เลือกมู้ดที่คะแนน ≥ 1/3 ของอันดับหนึ่ง สูงสุด 3
 */
export function guessMoods(raw) {
  const text = normalize(raw)

  // 1) หาคำทุกมู้ด พร้อมช่วงตำแหน่ง
  const found = []
  for (const [mood, { strong, weak }] of Object.entries(MOOD_WORDS)) {
    for (const [words, weight] of [[strong, STRONG], [weak, WEAK]]) {
      for (const word of words) {
        const w = normalize(word)
        if (!w) continue
        for (const at of findWord(text, w)) found.push({ mood, word, w, weight, start: at, end: at + w.length })
      }
    }
  }

  // 2) คำยาวกินช่วงก่อน: คำสั้นที่อยู่ในคำยาวอีกคำ (เช่น "ทะเล" ใน "ทะเลหมอก"/"ริมทะเล") ไม่นับ — คำเดียวกันนับได้หลายมู้ด
  found.sort((a, b) => b.w.length - a.w.length)
  const kept = []
  for (const f of found) {
    const inside = kept.some((k) => k.w !== f.w && k.w.length > f.w.length && f.start >= k.start && f.end <= k.end)
    if (!inside) kept.push(f)
  }

  // 3) รวมคะแนนต่อมู้ดต่อคำ: ทุกครั้งที่พูดถึงถูกปฏิเสธ → หัก, มีครั้งไหนไม่ปฏิเสธ → บวก
  const scores = {}
  const matched = {}
  const byMoodWord = new Map()
  for (const f of kept) {
    const key = `${f.mood}|${f.w}`
    if (!byMoodWord.has(key)) byMoodWord.set(key, { ...f, spots: [] })
    byMoodWord.get(key).spots.push(f.start)
  }
  for (const { mood, word, weight, spots } of byMoodWord.values()) {
    const neg = spots.every((at) => negated(text, at))
    scores[mood] = (scores[mood] ?? 0) + (neg ? -weight : weight)
    if (!neg) (matched[mood] ??= []).push(word)
  }
  for (const mood of Object.keys(scores)) if (scores[mood] <= 0) delete scores[mood]

  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1])
  const top = ranked[0]?.[1] ?? 0
  // เอามู้ดที่คะแนนถึง 1/3 ของอันดับหนึ่ง (และอย่างน้อย 2 ถ้าไม่ใช่อันดับหนึ่ง) สูงสุด 3
  const moods = ranked.filter(([, sc], i) => i === 0 || sc >= Math.max(2, top / 3)).slice(0, MAX_MOODS).map(([id]) => id)
  const labels = moods.map((id) => MOODS.find((m) => m.id === id)?.label ?? id)
  const words = [...new Set(moods.flatMap((id) => matched[id].slice(0, 2)))].slice(0, 4)
  return {
    moods,
    matched,
    source: 'keywords',
    reason: moods.length
      ? `จากที่เล่ามา (${words.map((w) => `“${w}”`).join(', ')}) น่าจะชอบ ${labels.join(', ')}`
      : 'ยังจับมู้ดไม่ได้ ลองเล่าเพิ่มอีกนิด เช่น อยากไปทะเล อยากกินของอร่อย หรืออยากพักผ่อนเงียบๆ',
  }
}

// เดิมเรียก AI (Gemini) — ตัดออกแล้ว ใช้จับคำล้วน คงชื่อฟังก์ชันไว้ให้หน้าเดิมเรียกได้
export async function readMood(text) {
  return guessMoods(text)
}
