// helper จัดรูปแบบเที่ยวเดินทาง (ใช้ร่วม TripDetails + TransportPick)

const toMinutes = (hhmm) => {
  const [h, m] = (hhmm ?? '00:00').split(':').map(Number)
  return h * 60 + m
}

const pad = (n) => String(n).padStart(2, '0')

// ราคากลางต่อคนของเที่ยวหนึ่ง
export const priceMid = (price) => (price ? (price.min + price.max) / 2 : 0)

// "06:00–07:20" (+1 เมื่อถึงวันถัดไป)
export const legTimes = (leg) => `${leg.depart}–${leg.arrive}${leg.arrive_next_day ? ' +1' : ''}`

// ระยะเวลาเป็นนาที
export function tripMinutes(trip) {
  const diff = toMinutes(trip.arrive) - toMinutes(trip.depart) + (trip.arrive_next_day ? 1440 : 0)
  return diff > 0 ? diff : diff + 1440
}

export function formatDuration(minutes) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return `${h ? `${h} ชม.` : ''}${h && m ? ' ' : ''}${m ? `${m} น.` : ''}`
}

// เวลาถึงโดยประมาณจากเวลาออก + จำนวนชั่วโมง (รถส่วนตัว)
export function arrivalText(depart, hours) {
  const total = toMinutes(depart) + Math.round(hours * 60)
  return `${pad(Math.floor(total / 60) % 24)}:${pad(total % 60)}${total >= 1440 ? ' +1' : ''}`
}

export const longDate = (value) => (value ? new Date(`${value}T12:00:00`).toLocaleDateString('th-TH', { weekday: 'short', day: 'numeric', month: 'short' }) : '')
export const shortDateText = (value) => (value ? new Date(`${value}T12:00:00`).toLocaleDateString('th-TH', { day: 'numeric', month: 'short' }) : '')
