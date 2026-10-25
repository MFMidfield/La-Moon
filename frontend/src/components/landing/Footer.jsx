import SlideLink from '../SlideLink'
import { Logo } from '../icons'

const LINKS = [
  ['เกี่ยวกับเรา', '/about'],
  ['ข้อตกลง', '/about#terms'],
  ['ความเป็นส่วนตัว', '/about#privacy'],
]

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 px-[22px] pb-8 pt-7 text-[13px] text-muted lg:mx-auto lg:mt-16 lg:w-full lg:max-w-[1120px] lg:flex-row lg:justify-between lg:gap-4 lg:border-t lg:border-[#EDE5DD] lg:px-8 lg:pb-8 lg:pt-8 lg:text-sm">
      <Logo size={20} className="text-lg" />
      <div className="flex gap-4">
        {LINKS.map(([label, to]) => (
          <SlideLink key={label} to={to} className="text-brown hover:text-ink">
            {label}
          </SlideLink>
        ))}
      </div>
      <div>© 2026 ทีม LaMoon</div>
    </footer>
  )
}
