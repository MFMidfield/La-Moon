import { useEffect, useRef, useState } from 'react'
import SlideLink from '../SlideLink'

// ปุ่มแชร์ (Web Share → ถ้าไม่มีก็คัดลอกลิงก์) + กลับหน้าแรก
export default function ShareActions({ title }) {
  const [notice, setNotice] = useState('')
  const timer = useRef()

  useEffect(() => () => clearTimeout(timer.current), [])

  function flash(msg) {
    clearTimeout(timer.current)
    setNotice(msg)
    timer.current = setTimeout(() => setNotice(''), 2200)
  }

  async function handleShare() {
    const url = window.location.origin
    const text = `ฉันคือ "${title}" บน LaMoon มาดูบุคลิกการเที่ยวของคุณกัน`

    if (navigator.share) {
      try {
        await navigator.share({ title: `บุคลิกการเที่ยว: ${title}`, text, url })
        return
      } catch (err) {
        if (err?.name === 'AbortError') return
        console.error('share failed', err)
      }
    }

    try {
      await navigator.clipboard.writeText(`${text} ${url}`)
      flash('คัดลอกลิงก์แล้ว')
    } catch (err) {
      console.error('copy failed', err)
      flash('คัดลอกไม่สำเร็จ')
    }
  }

  return (
    <div className="flex flex-col gap-2 px-4 pb-7 pt-5">
      <div className="flex gap-2.5">
        <button
          type="button"
          onClick={handleShare}
          className="flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-brown text-base font-semibold text-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7M16 6l-4-4-4 4M12 2v13" />
          </svg>
          แชร์
        </button>
        <SlideLink
          to="/home"
          back
          className="flex h-14 flex-1 items-center justify-center rounded-full border-[1.5px] border-[#D9CFC5] bg-white text-base font-semibold text-ink"
        >
          กลับหน้าแรก
        </SlideLink>
      </div>
      <p aria-live="polite" className="m-0 h-5 text-center text-[13px] text-muted">
        {notice}
      </p>
    </div>
  )
}
