import { Share2 } from 'lucide-react'
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
    <div className="flex flex-col gap-2 px-4 pb-7 pt-5 lg:mx-auto lg:w-full lg:max-w-[480px] lg:px-0 lg:pb-0 lg:pt-8">
      <div className="flex gap-2.5">
        <button
          type="button"
          onClick={handleShare}
          className="flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-brown text-base font-semibold text-white"
        >
          <Share2 size={18} strokeWidth={2} aria-hidden="true" />
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
