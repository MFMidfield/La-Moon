import { Link } from 'react-router-dom'
import { Logo } from './icons'

export default function Header() {
  return (
    <header className="mx-auto flex h-16 w-full max-w-[1120px] shrink-0 items-center justify-between px-[22px] lg:h-20 lg:px-8">
      <Logo className="text-[22px]" />
      <Link
        to="/login"
        className="flex h-10 items-center rounded-full bg-white px-4 text-sm font-medium text-brown hover:text-ink"
      >
        เข้าสู่ระบบ
      </Link>
    </header>
  )
}
