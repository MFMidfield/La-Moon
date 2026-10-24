import { X } from 'lucide-react'
import { useState } from 'react'
import { MOODS } from '../../data/options'
import ToggleChip from '../ToggleChip'

const MAX_CUSTOM = 5
const MAX_CUSTOM_LENGTH = 20

export default function MoodPicker({ value, onChange, custom, onCustomChange }) {
  const [showInput, setShowInput] = useState(false)
  const [draft, setDraft] = useState('')

  const full = custom.length >= MAX_CUSTOM
  const text = draft.trim()
  const canAdd = text !== '' && !full && !custom.includes(text)

  function toggle(id) {
    onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id])
  }

  function addCustom() {
    if (!canAdd) return
    onCustomChange([...custom, text])
    setDraft('')
  }

  return (
    <div className="flex flex-col gap-3 rounded-[28px] bg-white p-[18px]">
      <div className="flex items-baseline justify-between">
        <div className="text-base font-semibold">มู้ดที่ชอบ</div>
        <div className="text-xs text-muted">เลือกแล้ว {value.length + custom.length}</div>
      </div>

      <div className="flex flex-wrap gap-2">
        {MOODS.map((mood) => (
          <ToggleChip key={mood.id} selected={value.includes(mood.id)} onClick={() => toggle(mood.id)}>
            {mood.label}
          </ToggleChip>
        ))}
        {custom.map((mood) => (
          <span key={mood} className="flex h-10 items-center gap-1.5 rounded-full bg-brown pl-3.5 pr-2 text-sm font-medium text-white">
            {mood}
            <button
              type="button"
              aria-label={`ลบ${mood}`}
              onClick={() => onCustomChange(custom.filter((v) => v !== mood))}
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white/20"
            >
              <X size={12} strokeWidth={2} aria-hidden="true" />
            </button>
          </span>
        ))}
        <ToggleChip selected={showInput} onClick={() => setShowInput((v) => !v)}>
          อื่นๆ
        </ToggleChip>
      </div>

      {showInput && (
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-2">
            <input
              type="text"
              value={draft}
              maxLength={MAX_CUSTOM_LENGTH}
              disabled={full}
              autoFocus
              placeholder={full ? `เพิ่มได้สูงสุด ${MAX_CUSTOM} อย่าง` : 'พิมพ์มู้ดของคุณ เช่น ดูดาว'}
              aria-label="พิมพ์มู้ดที่ชอบเพิ่ม"
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  addCustom()
                }
              }}
              className="h-[46px] min-w-0 grow rounded-full border-0 bg-cream px-4 text-[15px] text-ink outline-none focus:ring-2 focus:ring-orange disabled:opacity-60"
            />
            <button
              type="button"
              onClick={addCustom}
              disabled={!canAdd}
              className="h-[46px] shrink-0 cursor-pointer rounded-full border-[1.5px] border-[#D9CFC5] bg-white px-5 text-[15px] font-semibold text-ink disabled:cursor-not-allowed disabled:opacity-40"
            >
              เพิ่ม
            </button>
          </div>
          <div className="px-4 text-xs text-muted">
            {custom.length}/{MAX_CUSTOM} · ไม่เกิน {MAX_CUSTOM_LENGTH} ตัวอักษร
          </div>
        </div>
      )}
    </div>
  )
}
