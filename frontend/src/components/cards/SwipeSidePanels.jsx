import { useState } from 'react'
import { Bookmark, Heart } from 'lucide-react'

// แผงข้างกองการ์ดสำหรับจอกว้าง (lg ขึ้นไป) — มือถือไม่แสดง (SwipeStage ใส่ `hidden lg:flex`)

const PANEL = 'rounded-[28px] bg-white p-5'

function Kbd({ children }) {
  return (
    <kbd className="inline-flex h-7 min-w-7 items-center justify-center rounded-lg border-[1.5px] border-[#D9CFC5] bg-cream px-1.5 font-sans text-xs font-semibold text-[#4A3A30]">
      {children}
    </kbd>
  )
}

// ซ้าย: ตัวนับ + แถบความคืบหน้า + คำใบ้ของขั้นนี้
export function ProgressPanel({ hint, counter, index, total, round, savedCount }) {
  const percent = total ? Math.min(100, Math.round((index / total) * 100)) : 0
  return (
    <section className={`${PANEL} flex flex-col gap-3`} aria-label="ความคืบหน้า">
      <h2 className="m-0 text-base font-semibold">{round === 2 ? 'รอบสอง' : 'ความคืบหน้า'}</h2>
      <p className="m-0 text-2xl font-bold tabular-nums text-brown">{counter}</p>
      <div className="h-2 overflow-hidden rounded-full bg-cream" role="presentation">
        <div className="h-full rounded-full bg-brown transition-[width] duration-300 motion-reduce:transition-none" style={{ width: `${percent}%` }} />
      </div>
      {round === 1 && savedCount > 0 && (
        <span className="flex w-fit items-center gap-1 rounded-full bg-peach px-2.5 py-1 text-xs text-brown">
          <Bookmark size={12} strokeWidth={2} aria-hidden="true" />
          เก็บไว้ {savedCount}
        </span>
      )}
      {hint && <div className="text-sm leading-[1.6] text-[#4A3A30]">{hint}</div>}
    </section>
  )
}

function Thumb({ src, name }) {
  const [broken, setBroken] = useState(false)
  return (
    <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl bg-peach">
      {src && !broken && (
        <img
          src={src}
          alt=""
          loading="lazy"
          referrerPolicy="no-referrer"
          draggable={false}
          onError={() => setBroken(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <span className="sr-only">{name}</span>
    </span>
  )
}

// ขวา: รายการที่ถูกใจแล้ว (ใหม่สุดอยู่บน) + ปุ่มลัดคีย์บอร์ด
export function LikedPanel({ liked, noun, labelOf, canSave }) {
  const items = [...liked].reverse()
  return (
    <>
      <section className={`${PANEL} flex min-h-0 flex-col gap-3`} aria-label="ที่ถูกใจแล้ว">
        <div className="flex items-center justify-between gap-2">
          <h2 className="m-0 text-base font-semibold">ที่ถูกใจแล้ว</h2>
          <span className="rounded-full bg-peach px-2.5 py-0.5 text-xs font-semibold text-brown" aria-live="polite">
            {liked.length} {noun}
          </span>
        </div>
        {items.length ? (
          <ul className="m-0 flex min-h-0 list-none flex-col gap-2.5 overflow-y-auto p-0">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <Thumb src={item.image_url} name={labelOf?.(item) ?? item.name} />
                <span className="min-w-0 flex-1 truncate text-[15px] font-medium" aria-hidden="true">{labelOf?.(item) ?? item.name}</span>
                <Heart size={16} strokeWidth={2} className="shrink-0 text-brown" fill="#5A2E14" aria-hidden="true" />
              </li>
            ))}
          </ul>
        ) : (
          <p className="m-0 rounded-[20px] bg-cream px-4 py-5 text-center text-sm leading-[1.6] text-muted">ยังไม่มี ปัดขวาหรือกดหัวใจเพื่อเก็บไว้ตรงนี้</p>
        )}
      </section>

      <section className="flex shrink-0 flex-col gap-2 px-2 text-xs text-[#4A3A30]" aria-label="วิธีควบคุม">
        <p className="m-0 font-semibold text-muted">ลากการ์ด หรือใช้คีย์บอร์ด</p>
        <p className="m-0 flex items-center gap-2"><Kbd>←</Kbd> ข้าม <Kbd>→</Kbd> ชอบ</p>
        <p className="m-0 flex items-center gap-2">
          {canSave && (<><Kbd>↑</Kbd> เก็บไว้ก่อน</>)}
          <Kbd>Z</Kbd> ย้อนการ์ด
        </p>
      </section>
    </>
  )
}
