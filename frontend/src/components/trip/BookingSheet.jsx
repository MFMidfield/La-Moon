import { X } from 'lucide-react'
import BottomSheet from '../BottomSheet'

// mock สำหรับ pitch — ยังไม่มีลิงก์พันธมิตรจริง
const PARTNERS = [
  { id: 'agoda', name: 'Agoda', note: 'โรงแรม รีสอร์ต', tone: '#FBE3D2' },
  { id: 'booking', name: 'Booking.com', note: 'ที่พักทุกแบบ', tone: '#E7EFDC' },
  { id: 'klook', name: 'Klook', note: 'ทัวร์ กิจกรรม', tone: '#F6E3B8' },
]

export default function BookingSheet({ open, place, onClose }) {
  return (
    <BottomSheet open={open} onClose={onClose} labelledBy="booking-title">
      <div className="flex items-center justify-between gap-3 px-[22px] pt-4">
        <h2 id="booking-title" className="m-0 min-w-0 text-xl font-bold">
          จองที่พักใกล้ {place?.name}
        </h2>
        <button
          type="button"
          aria-label="ปิด"
          onClick={onClose}
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-cream"
        >
          <X size={18} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>

      <ul className="m-0 mt-4 flex list-none flex-col gap-2.5 overflow-y-auto px-4 pb-2">
        {PARTNERS.map((p) => (
          <li key={p.id} className="flex items-center gap-3 rounded-[24px] bg-cream p-3">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold text-brown"
              style={{ background: p.tone }}
              aria-hidden="true"
            >
              {p.name.charAt(0)}
            </span>
            <div className="flex min-w-0 grow flex-col">
              <div className="flex items-center gap-1.5">
                <span className="truncate text-[15px] font-semibold">{p.name}</span>
                <span className="shrink-0 rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-muted">ตัวอย่าง</span>
              </div>
              <span className="truncate text-[13px] text-muted">{p.note}</span>
            </div>
            <button
              type="button"
              disabled
              className="h-10 shrink-0 cursor-not-allowed rounded-full bg-white px-4 text-sm font-semibold text-muted opacity-60"
            >
              ดูราคา
            </button>
          </li>
        ))}
      </ul>

      <p className="m-0 px-[22px] pb-7 pt-3 text-center text-xs leading-[1.6] text-muted lg:pb-6">
        ลิงก์พันธมิตร (เดโม) — LaMoon ได้ค่าคอมมิชชันเมื่อจองผ่านลิงก์
      </p>
    </BottomSheet>
  )
}
