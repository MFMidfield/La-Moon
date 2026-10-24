import { Star } from 'lucide-react'
import { useState } from 'react'
import { fmtCount } from './swipeHelpers'

// ชิ้นส่วนที่การ์ดร้านอาหาร/ที่พักใช้ร่วมกัน

// พื้นที่รูป: รูปจริง → ถ้าไม่มี/โหลดไม่ขึ้น ใช้ภาพประกอบ (fallback) ; ยืด/หดตามที่เหลือในการ์ด
export function CardImage({ src, alt, fallback, children }) {
  const [broken, setBroken] = useState(false)
  const showImage = src && !broken
  return (
    <div className="relative min-h-[72px] min-w-0 grow overflow-hidden rounded-3xl bg-peach">
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          draggable={false}
          onError={() => setBroken(true)}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        fallback
      )}
      {children}
    </div>
  )
}

export function MockBadge() {
  return (
    <span className="absolute left-3.5 top-3.5 rounded-full bg-white/90 px-3 py-[3px] text-xs font-semibold text-muted">
      ข้อมูลตัวอย่าง
    </span>
  )
}

export function Chip({ icon: Icon, children }) {
  return (
    <span className="flex min-w-0 shrink-0 items-center gap-1 rounded-full bg-cream px-3 py-[3px] text-[13px]">
      {Icon && <Icon size={13} strokeWidth={2} className="shrink-0 text-muted" aria-hidden="true" />}
      <span className="truncate">{children}</span>
    </span>
  )
}

export function Rating({ score, outOf, count }) {
  return (
    <span className="flex shrink-0 items-center gap-1 text-sm font-semibold">
      <Star size={14} strokeWidth={2} fill="#E8793A" className="text-orange" aria-hidden="true" />
      <span>
        {score}
        {outOf === 5 ? '' : `/${outOf}`}
      </span>
      <span className="font-normal text-muted">({fmtCount(count)})</span>
    </span>
  )
}

// ภาพประกอบแบน (สไตล์เดียวกับ FlatMountain) ใช้เมื่อไม่มีรูป — เนินสีดิน + ดวงอาทิตย์ + ไอคอนกลาง
export function FlatBadge({ icon: Icon }) {
  return (
    <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 220 150" className="absolute bottom-0 left-1/2 w-[86%] max-w-[380px] -translate-x-1/2">
        <circle cx="168" cy="34" r="16" fill="#F4A36C" />
        <ellipse cx="110" cy="150" rx="150" ry="52" fill="#D9A27E" />
        <ellipse cx="110" cy="158" rx="110" ry="36" fill="#C88A63" />
      </svg>
      <div className="relative flex h-[84px] w-[84px] items-center justify-center rounded-full bg-white/85">
        <Icon size={38} strokeWidth={1.75} className="text-brown" />
      </div>
    </div>
  )
}
