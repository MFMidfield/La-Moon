const MONTHS = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']
const SYNODIC = 29.530588853
const REF_FULL_MOON = Date.UTC(2000, 0, 21, 4, 40) // คืนเพ็ญอ้างอิง

// คืน phase 0..1 (0.5 ≈ เพ็ญ เมื่อเทียบกับ new moon) — ใช้แบบหยาบ ±1 วัน
function daysFromFullMoon(date) {
  const days = (date.getTime() - REF_FULL_MOON) / 86400000
  const phase = ((days % SYNODIC) + SYNODIC) % SYNODIC
  return Math.min(phase, SYNODIC - phase)
}

function eachDate(start, end) {
  const out = []
  const d = new Date(start)
  while (d <= end) {
    out.push(new Date(d))
    d.setDate(d.getDate() + 1)
  }
  return out
}

// "พ.ย.-พ.ค." → เดือนที่อยู่ในช่วง (0-11) | null ถ้าไม่ใช่ช่วงเดือน
function monthRange(text) {
  const m = text.match(/^([ก-๙.]+)\s*-\s*([ก-๙.]+)$/)
  if (!m) return null
  const a = MONTHS.indexOf(m[1])
  const b = MONTHS.indexOf(m[2])
  if (a < 0 || b < 0) return null
  const months = []
  for (let i = a; ; i = (i + 1) % 12) {
    months.push(i)
    if (i === b) break
  }
  return months
}

/**
 * เตือนตามฤดูจาก places.best_time + วันเดินทาง
 * คืน [{ placeId, message }]
 */
export function seasonWarnings(places, startDate, endDate) {
  if (!startDate) return []
  const dates = eachDate(new Date(startDate), new Date(endDate ?? startDate))
  const warnings = []
  for (const p of places) {
    const best = p.best_time?.trim()
    if (!best || best === 'ตลอดปี') continue
    const months = monthRange(best)
    if (months && !dates.some((d) => months.includes(d.getMonth()))) {
      warnings.push({ placeId: p.id, message: `${p.name} เหมาะช่วง ${best} ช่วงที่ไปอาจไม่ใช่ฤดูเที่ยว/ปิดบริการ` })
    }
    if (best.includes('พระจันทร์เต็มดวง') && !dates.some((d) => daysFromFullMoon(d) <= 1.5)) {
      warnings.push({ placeId: p.id, message: `${p.name} จัดเฉพาะคืนพระจันทร์เต็มดวง วันที่เลือกไม่ตรงคืนเพ็ญ` })
    }
  }
  return warnings
}
