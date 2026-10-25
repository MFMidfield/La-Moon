import { ExternalLink, X } from 'lucide-react'
import BottomSheet from '../BottomSheet'
import { PROVINCES } from '../../data/options'
import { addDays, thaiDate } from './itinerary'
import { roomsFor, stayLinks } from './stayLinks'

const TONES = { agoda: '#FBE3D2', booking: '#E7EFDC', direct: '#F6E3B8' }

// sheet จองที่พักจากแถว "คืนนี้" ในแผนรายวัน — เปิดหน้าค้นหาจริงที่กรอกวัน/คน/ห้องให้แล้ว
/** stay = ที่พักในแผน, checkIn = 'YYYY-MM-DD' | null, nights ≥ 1, people = จำนวนคน */
export default function BookingSheet({ open, stay, checkIn = null, nights = 1, people = 1, onClose }) {
  const stayNights = Math.max(1, nights)
  const adults = Math.max(1, people)
  const province = PROVINCES.find((p) => p.id === stay?.province)?.label ?? stay?.province
  const summary = [
    checkIn ? `${thaiDate(checkIn)} – ${thaiDate(addDays(checkIn, stayNights))} · ${stayNights} คืน` : null,
    `${adults} คน · ${roomsFor(adults)} ห้อง`,
  ].filter(Boolean).join(' · ')
  return (
    <BottomSheet open={open} onClose={onClose} labelledBy="booking-title">
      <div className="flex items-center justify-between gap-3 px-[22px] pt-4">
        <h2 id="booking-title" className="m-0 min-w-0 text-xl font-bold">จองที่พัก {stay?.name}</h2>
        <button
          type="button"
          aria-label="ปิด"
          onClick={onClose}
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-cream"
        >
          <X size={18} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
      <p className="m-0 px-[22px] pt-1 text-sm text-[#4A3A30]">{summary}</p>
      {stay?.is_mock && (
        <p className="mx-4 mb-0 mt-3 rounded-[20px] bg-cream px-4 py-3 text-xs leading-relaxed text-[#4A3A30]">
          ชื่อที่พักในแอปยังเป็นข้อมูลตัวอย่าง ลิงก์จะค้นที่พักจริงใน{province ?? 'จังหวัดนี้'}{stay.area ? ` (แถว${stay.area})` : ''} ตามวันและจำนวนคนให้
        </p>
      )}

      <ul className="m-0 mt-3 flex list-none flex-col gap-2.5 overflow-y-auto px-4 pb-2">
        {stayLinks({ stay, checkIn, nights: stayNights, people: adults }).map((p) => (
          <li key={p.id} className="flex items-center gap-3 rounded-[24px] bg-cream p-3">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold text-brown"
              style={{ background: TONES[p.id] }}
              aria-hidden="true"
            >
              {p.name.charAt(0)}
            </span>
            <div className="flex min-w-0 grow flex-col">
              <span className="truncate text-[15px] font-semibold">{p.name}</span>
              <span className="truncate text-[13px] text-muted">{p.note}</span>
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
              aria-label={`ดูราคาที่ ${p.name}`}
              className="flex h-11 shrink-0 items-center gap-1 rounded-full bg-white px-4 text-sm font-semibold text-brown transition-transform active:scale-95 hover:text-ink motion-reduce:transition-none"
            >
              ดูราคา <ExternalLink size={14} strokeWidth={2} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>

      <p className="m-0 px-[22px] pb-7 pt-3 text-center text-xs leading-[1.6] text-muted lg:pb-6">
        ลิงก์พันธมิตร — LaMoon อาจได้ค่าคอมมิชชันเมื่อจองผ่านลิงก์ โดยคุณไม่ต้องจ่ายเพิ่ม
      </p>
    </BottomSheet>
  )
}
