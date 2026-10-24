const STATS = [
  ['chill', 'ชิล'],
  ['adventure', 'ลุย'],
  ['photo', 'ถ่ายรูป'],
  ['food', 'กิน'],
  ['budget', 'คุ้ม'],
]

// ค่าพลังการ์ด 5 ช่อง (0–5) แบบแท่งสั้น
export default function StatBars({ stats }) {
  return (
    <div className="grid grid-cols-5 gap-2.5">
      {STATS.map(([key, label]) => {
        const value = Math.min(5, Math.max(0, Math.round(stats?.[key] ?? 0)))
        return (
          <div key={key} className="flex min-w-0 flex-col gap-1" aria-label={`${label} ${value} จาก 5`} role="img">
            <div className="flex items-baseline justify-between gap-1 text-[11px] leading-none">
              <span className="truncate text-muted">{label}</span>
              <span className="font-semibold text-ink">{value}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-cream">
              <div className="h-full rounded-full bg-orange" style={{ width: `${value * 20}%` }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
