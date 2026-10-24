import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { readMood } from '../../lib/api/mood'
import { Sparkle } from '../icons'

const MAX_LENGTH = 300

// เล่าความรู้สึก → AI (หรือจับคำ) เลือกมู้ดให้ ส่งผลผ่าน onPick(moods)
export default function AiMoodBox({ onPick }) {
  const reduced = useReducedMotion()
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const requestId = useRef(0)

  const canRead = text.trim() !== '' && !loading

  async function handleRead() {
    if (!canRead) return
    const id = ++requestId.current
    setLoading(true)
    const res = await readMood(text.trim())
    if (id !== requestId.current) return
    setLoading(false)
    setResult(res)
    if (res.moods.length) onPick(res.moods)
  }

  return (
    <div className="flex flex-col gap-3 rounded-[28px] bg-white p-[18px]">
      <label htmlFor="mood-story" className="text-base font-semibold">
        เล่าให้ฟังหน่อย วันนี้รู้สึกยังไง
      </label>
      <textarea
        id="mood-story"
        rows={3}
        value={text}
        maxLength={MAX_LENGTH}
        placeholder="เช่น เหนื่อยงาน อยากนั่งเงียบๆ ริมทะเล"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            handleRead()
          }
        }}
        className="resize-none rounded-[20px] border-0 bg-cream px-4 py-3 text-[15px] leading-[1.6] text-ink outline-none placeholder:text-muted focus:ring-2 focus:ring-orange"
      />
      <div className="flex items-center justify-between gap-3">
        <motion.button
          type="button"
          onClick={handleRead}
          disabled={!canRead}
          whileTap={reduced ? undefined : { scale: 0.96 }}
          transition={{ type: 'spring', duration: 0.22, bounce: 0.2 }}
          className="flex h-11 shrink-0 cursor-pointer items-center gap-1.5 rounded-full border-[1.5px] border-[#D9CFC5] bg-white px-4 text-[15px] font-semibold text-ink transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Sparkle size={16} fill="#E8793A" />
          {loading ? 'กำลังอ่านมู้ด…' : 'ให้ AI เลือกมู้ด'}
        </motion.button>
        <span className="text-xs text-muted">
          {text.length}/{MAX_LENGTH}
        </span>
      </div>

      {result && (
        <div aria-live="polite" className="flex items-start gap-2 rounded-[20px] bg-[#FBE3D2] px-3.5 py-3">
          <span className="mt-0.5 shrink-0 rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-brown">
            {result.source === 'ai' ? 'AI' : 'เดาจากคำ'}
          </span>
          <p className="m-0 text-sm leading-[1.6] text-[#4A3A30]">{result.reason}</p>
        </div>
      )}
    </div>
  )
}
