import { Moon, Sparkle } from '../icons'

export function TripLoading({ label }) {
  return (
    <div role="status" className="flex grow flex-col items-center justify-center gap-3 py-20">
      <div className="h-10 w-10 animate-spin motion-reduce:animate-none rounded-full border-4 border-brown/20 border-t-brown" />
      <span className="text-sm text-muted">{label}</span>
    </div>
  )
}

// ข้อความกลางจอ (ว่าง / ไม่พบ / error) + ปุ่ม
export function TripMessage({ title, body, children }) {
  return (
    <div className="flex grow flex-col items-center justify-center gap-2 px-[22px] py-16 text-center">
      <div className="relative mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-peach">
        <Moon size={40} fill="#5A2E14" className="-rotate-12" />
        <span className="absolute -right-1 top-1">
          <Sparkle size={18} fill="#E8793A" />
        </span>
      </div>
      <h2 className="m-0 text-[22px] font-bold">{title}</h2>
      {body && <p className="m-0 text-[15px] leading-[1.6] text-[#4A3A30]">{body}</p>}
      {children && <div className="mt-5 w-full">{children}</div>}
    </div>
  )
}
