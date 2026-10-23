import { Moon, Sparkle } from './icons'

function SideCard({ name, province, tone, className, children }) {
  return (
    <div
      className={`absolute left-1/2 top-[30px] -ml-[125px] h-[360px] w-[250px] rounded-[30px] bg-white p-2 shadow-[0_4px_14px_#5A2E1410] ${className}`}
    >
      <div className="h-[250px] rounded-3xl" style={{ background: tone }} />
      <div className="px-2 pt-2.5">
        <div className="text-[17px] font-semibold">{name}</div>
        <div className="text-[13px] text-muted">{province}</div>
      </div>
      {children}
    </div>
  )
}

export default function CardStack() {
  return (
    <div className="relative mx-auto h-[470px] w-full max-w-[390px] shrink-0">
      <Moon size={38} fill="#F4A36C" className="absolute left-3.5 top-0 z-[2] -rotate-18" />
      <Sparkle size={26} fill="#E8793A" className="absolute right-[22px] top-1 z-[2]" />
      <Sparkle size={18} fill="#5A2E14" className="absolute right-[50px] top-10 z-[2]" />
      <Sparkle size={20} fill="#E8793A" className="absolute left-[26px] top-[380px] z-[2]" />
      <Moon size={32} fill="#5A2E14" className="absolute right-4 top-[350px] z-[2] rotate-20" />

      <SideCard name="เกาะสมุย" province="สุราษฎร์ธานี" tone="#E7EFDC" className="-translate-x-[74px] -rotate-14">
        <span className="absolute right-[18px] top-5 rotate-10 rounded-full border-2 border-muted bg-white px-3 py-0.5 text-sm font-bold text-muted">
          ข้าม
        </span>
      </SideCard>
      <SideCard name="ย่านเมืองเก่า" province="ภูเก็ต" tone="#F6E3B8" className="translate-x-[74px] rotate-14">
        <span className="absolute left-[18px] top-5 -rotate-10 rounded-full bg-orange px-3 py-1 text-sm font-bold text-white">
          อยากไป
        </span>
      </SideCard>

      <div className="absolute left-1/2 top-2.5 -ml-[130px] h-[390px] w-[260px] rounded-[32px] bg-white p-2.5 shadow-[0_10px_28px_#5A2E1422]">
        <div className="relative flex h-[270px] items-end justify-center overflow-hidden rounded-3xl bg-peach">
          <svg width="240" height="160" viewBox="0 0 240 160" aria-hidden="true">
            <circle cx="180" cy="40" r="20" fill="#F4A36C" />
            <path d="M0 160 L70 70 L110 115 L160 55 L240 160 Z" fill="#D9A27E" />
            <path d="M110 115 L160 55 L195 98" fill="#C88A63" />
            <path d="M0 150 Q60 136 120 148 T240 146 L240 160 L0 160Z" fill="#FFFFFF" opacity="0.6" />
          </svg>
          <span className="absolute left-3.5 top-3.5 rounded-full bg-brown px-3 py-[3px] text-xs font-semibold text-white">
            แนะนำ
          </span>
        </div>
        <div className="flex flex-col gap-1.5 px-2 pt-3">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold">เขาสก</div>
            <span className="rounded-full bg-[#E7EFDC] px-2 py-0.5 text-[11px] text-[#3F5A2E]">ตรงมู้ด</span>
          </div>
          <div className="text-[13px] text-muted">สุราษฎร์ธานี · ทะเลสาบ · ป่าดิบ</div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-[18px]">
        <div className="flex items-center gap-1.5 text-[13px] text-muted">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6E625A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          ซ้าย ข้าม
        </div>
        <div className="h-1.5 w-1.5 rounded-full bg-[#D9CFC5]" />
        <div className="flex items-center gap-1.5 text-[13px] font-semibold text-brown">
          ขวา อยากไป
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5A2E14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  )
}
