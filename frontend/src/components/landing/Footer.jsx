import { Logo } from '../icons'

const LINKS = ['เกี่ยวกับเรา', 'ข้อตกลง', 'ความเป็นส่วนตัว']

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 px-[22px] pb-8 pt-7 text-[13px] text-muted lg:pt-12">
      <Logo size={20} className="text-lg" />
      <div className="flex gap-4">
        {LINKS.map((label) => (
          <a key={label} href="#" className="text-brown hover:text-ink">
            {label}
          </a>
        ))}
      </div>
      <div>© 2026 ทีม LaMoon</div>
    </footer>
  )
}
