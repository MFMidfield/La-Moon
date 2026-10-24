import { Moon, Sparkle } from '../icons'

const BLOCK = 'animate-pulse motion-reduce:animate-none rounded-full bg-cream'

export function SkeletonCard() {
  return (
    <div
      role="status"
      aria-label="กำลังโหลดที่เที่ยว"
      className="absolute inset-x-2 bottom-0.5 top-5 flex flex-col rounded-[32px] bg-white p-2.5 shadow-[0_6px_18px_#5A2E1414]"
    >
      <div className="min-h-0 grow animate-pulse rounded-3xl bg-peach/60 motion-reduce:animate-none" />
      <div className="flex shrink-0 flex-col gap-2.5 px-2.5 pb-1.5 pt-3">
        <div className="flex items-center justify-between">
          <div className={`h-7 w-40 ${BLOCK}`} />
          <div className={`h-6 w-20 ${BLOCK}`} />
        </div>
        <div className={`h-4 w-28 ${BLOCK}`} />
        <div className="flex gap-1.5">
          <div className={`h-[26px] w-16 ${BLOCK}`} />
          <div className={`h-[26px] w-20 ${BLOCK}`} />
          <div className={`h-[26px] w-14 ${BLOCK}`} />
        </div>
        <div className="grid grid-cols-5 gap-2.5 pt-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-[22px] ${BLOCK} rounded-lg`} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ข้อความกลางจอ (ว่าง / error) + ปุ่ม
export function DeckMessage({ title, body, children }) {
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
