import SlideLink from '../SlideLink'
import { Moon, Sparkle } from '../icons'

// ยังไม่เคยปัดขวา → ชวนไปเริ่มทริป
export default function EmptyState() {
  return (
    <div className="flex grow flex-col items-center px-[22px] pt-16 text-center">
      <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-peach" aria-hidden="true">
        <Moon size={56} fill="#E8793A" className="-rotate-12" />
        <Sparkle size={20} fill="#5A2E14" className="absolute right-4 top-5" />
        <Sparkle size={14} fill="#FFFFFF" className="absolute bottom-6 left-6" />
      </div>
      <p className="m-0 mt-6 text-base leading-[1.6] text-[#4A3A30]">ยังไม่มีข้อมูลพอ ลองปัดการ์ดสักทริปก่อน</p>
      <div className="grow" />
      <SlideLink
        to="/map"
        className="mb-7 mt-8 flex h-14 w-full items-center justify-center rounded-full bg-brown text-base font-semibold text-white"
      >
        เริ่มเลือกจังหวัด
      </SlideLink>
    </div>
  )
}
