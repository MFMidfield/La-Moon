import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'lamoon.tripDraft'

/**
 * ร่างทริประหว่าง flow มู้ด → จังหวัด → รายละเอียด → ปัด → แผน (เก็บใน sessionStorage กัน refresh หาย)
 * mode: 'pick' (เลือกจังหวัดเอง) | 'random' (ระบบสุ่ม) | null
 * budget: { min, max, per: 'person'|'total' } บาท
 * transportTo: 'plane'|'train'|'bus'|'car'|null (null = เที่ยวในจังหวัดตัวเอง)
 * transportLocal: 'rental_car'|'motorbike'|'public'|'tour'|null
 * tripType: 'daytrip'|'overnight'; startDate/endDate: 'YYYY-MM-DD' (daytrip: end = start)
 * pace: 'chill'|'normal'|'packed'
 * locked: key ที่ไม่สุ่มซ้ำ ('province'|'transportTo'|'dates'|'pace'|'transportLocal')
 * deck: place id ที่ระบบสุ่มให้ปัด (โหมดสุ่ม) | null = ใช้ listPlaces ตามมู้ด
 * likedIds: place id ที่ปัดขวา ตามลำดับ
 * likedRestaurantIds / likedStayIds: ร้าน/ที่พักที่ปัดขวา (หลังรอบสอง)
 * stayMode: 'single'|'multi'|null, chosenStayId: ที่พักที่เลือก (โหมด single)
 * transportBooking: { out: Trip|null, back: Trip|null } เที่ยวไป-กลับที่เลือก (Trip จาก lib/trip/schedules.js + routeId)
 * carDepart: 'HH:MM' เวลาออกเดินทางกรณีรถส่วนตัว
 * bookingChecks: { [bookingItem.key]: true } ติ๊ก "จองแล้ว" ในเช็กลิสต์ก่อนบันทึก
 */
// eslint-disable-next-line react-refresh/only-export-components
export const EMPTY_DRAFT = {
  mode: null,
  moods: [],
  budget: { min: 4000, max: 10000, per: 'person' },
  travelers: { adults: 1, children: 0 },
  province: null,
  origin: null,
  transportTo: null,
  transportLocal: null,
  tripType: 'overnight',
  startDate: null,
  endDate: null,
  pace: 'normal',
  locked: [],
  deck: null,
  likedIds: [],
  likedRestaurantIds: [],
  likedStayIds: [],
  stayMode: null,
  chosenStayId: null,
  transportBooking: { out: null, back: null },
  carDepart: '06:00',
  bookingChecks: {},
}

function load() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    return raw ? { ...EMPTY_DRAFT, ...JSON.parse(raw) } : EMPTY_DRAFT
  } catch {
    return EMPTY_DRAFT
  }
}

const TripDraftContext = createContext(null)

export function TripDraftProvider({ children }) {
  const [draft, setDraft] = useState(load)

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draft))
    } catch {
      // private mode / storage เต็ม — ใช้ใน memory ต่อได้
    }
  }, [draft])

  const updateDraft = useCallback((patch) => setDraft((d) => ({ ...d, ...(typeof patch === 'function' ? patch(d) : patch) })), [])
  const resetDraft = useCallback((patch = {}) => setDraft({ ...EMPTY_DRAFT, ...patch }), [])
  const value = useMemo(() => ({ draft, updateDraft, resetDraft }), [draft, updateDraft, resetDraft])

  return <TripDraftContext.Provider value={value}>{children}</TripDraftContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTripDraft() {
  const ctx = useContext(TripDraftContext)
  if (!ctx) throw new Error('useTripDraft must be used inside TripDraftProvider')
  return ctx
}

// จำนวนวัน/คืนจากร่าง (ยังไม่เลือกวัน = 1 วัน)
// eslint-disable-next-line react-refresh/only-export-components
export function tripLength(draft) {
  if (draft.tripType === 'daytrip' || !draft.startDate || !draft.endDate) return { days: 1, nights: 0 }
  const ms = new Date(draft.endDate) - new Date(draft.startDate)
  const nights = Math.max(0, Math.round(ms / 86400000))
  return { days: nights + 1, nights }
}

// eslint-disable-next-line react-refresh/only-export-components
export function travelerCount(draft) {
  return Math.max(1, draft.travelers.adults + draft.travelers.children)
}
