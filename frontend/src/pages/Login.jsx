import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Logo } from '../components/icons'
import LoginArt from '../components/login/LoginArt'
import GoogleButton from '../components/login/GoogleButton'

export default function Login() {
  const { signInWithGoogle } = useAuth()
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin() {
    setLoading(true)
    setError('')
    const { error } = await signInWithGoogle(location.state?.from ?? '/map')
    if (error) {
      setError('เข้าสู่ระบบไม่สำเร็จ ลองใหม่อีกครั้ง')
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-svh flex-col overflow-hidden bg-cream text-ink lg:grid lg:h-svh lg:grid-cols-2 lg:gap-4 lg:p-4">
      <div className="relative flex flex-col lg:h-full">
        <div className="flex h-16 shrink-0 items-center px-4 lg:absolute lg:left-4 lg:top-4 lg:z-10 lg:h-auto lg:p-0">
          <Link
            to="/"
            aria-label="ย้อนกลับ"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F1A17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
        </div>
        <LoginArt />
      </div>

      <div className="flex grow flex-col lg:mx-auto lg:w-full lg:max-w-[400px] lg:justify-center">
        <div className="flex flex-col gap-2 px-[22px] pt-[30px] text-center lg:px-0 lg:pt-0">
          <Logo size={22} className="justify-center text-xl" />
          <h1 className="m-0 text-[28px] font-bold leading-[1.25] lg:text-4xl">
            เข้าสู่ระบบ
            <br />
            เพื่อเริ่มปัดการ์ด
          </h1>
          <p className="m-0 text-[15px] leading-[1.6] text-[#4A3A30]">บันทึกที่ที่อยากไป และเก็บทริปไว้ดูได้ทุกเครื่อง</p>
        </div>

        <div className="grow lg:hidden" />

        <div className="flex flex-col gap-3.5 px-[22px] pb-7 pt-8 lg:px-0 lg:pb-0 lg:pt-12">
          <GoogleButton loading={loading} onClick={handleLogin} />
          {error && (
            <p role="alert" className="m-0 text-center text-[13px] text-[#C0392B]">
              {error}
            </p>
          )}
          <p className="m-0 text-center text-xs leading-[1.6] text-muted">
            ยังไม่มีบัญชี? กดปุ่มเดียวกันได้เลย
            <br />
            ครั้งแรกจะพาไปตั้งค่าโปรไฟล์สั้นๆ
          </p>
        </div>
      </div>
    </div>
  )
}
