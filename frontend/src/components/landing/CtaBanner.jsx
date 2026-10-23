import { Link } from 'react-router-dom'
import { Moon, Sparkle } from '../icons'

export default function CtaBanner() {
  return (
    <section className="px-4 pt-9 lg:pt-16">
      <div className="relative mx-auto flex max-w-[608px] flex-col items-center gap-3 overflow-hidden rounded-[32px] bg-brown px-[22px] py-7 text-center text-white lg:max-w-[720px] lg:py-12">
        <Moon size={30} fill="#F9D9C2" className="absolute right-5 top-[18px] rotate-15" />
        <Sparkle size={16} fill="#F4A36C" className="absolute left-6 top-[30px]" />
        <Sparkle size={12} fill="#F9D9C2" className="absolute left-[52px] top-[62px]" />
        <svg width="70" height="70" viewBox="0 0 120 120" aria-hidden="true">
          <rect x="30" y="38" width="60" height="66" rx="14" fill="#E8793A" />
          <rect x="46" y="24" width="28" height="18" rx="8" fill="none" stroke="#F9D9C2" strokeWidth="5" />
          <rect x="30" y="58" width="60" height="8" fill="#C95F25" />
          <circle cx="44" cy="108" r="6" fill="#F9D9C2" />
          <circle cx="76" cy="108" r="6" fill="#F9D9C2" />
        </svg>
        <h2 className="m-0 text-2xl font-bold lg:text-[32px]">พร้อมออกเดินทางรึยัง?</h2>
        <p className="m-0 text-sm leading-[1.6] text-[#F3E3D6] lg:text-base">เข้าสู่ระบบด้วย Google แล้วเริ่มปัดได้ทันที</p>
        <Link
          to="/login"
          className="mt-1 flex h-[54px] w-full items-center justify-center rounded-full bg-peach text-base font-bold text-brown lg:w-80"
        >
          เริ่มเลย
        </Link>
      </div>
    </section>
  )
}
