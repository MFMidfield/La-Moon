import { useState } from 'react'
import { POPULAR_PROVINCES, PROVINCES } from '../../data/options'
import ToggleChip from './ToggleChip'

const MAX_SUGGESTIONS = 6

export default function ProvincePicker({ value, onChange }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  const q = query.trim()
  const suggestions = q
    ? PROVINCES.filter((p) => p.label.includes(q) && !value.includes(p.id)).slice(0, MAX_SUGGESTIONS)
    : []
  // ยอดนิยมก่อน แล้วต่อด้วยจังหวัดที่เลือกจากการค้นหา
  const chips = [...POPULAR_PROVINCES, ...value.filter((id) => !POPULAR_PROVINCES.includes(id))]

  function toggle(id) {
    onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id])
  }

  function addFromSearch(id) {
    onChange([...value, id])
    setQuery('')
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (suggestions[0]) addFromSearch(suggestions[0].id)
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <div className="flex flex-col gap-3 rounded-[28px] bg-white p-[18px]">
      <div className="flex items-baseline justify-between">
        <div className="text-base font-semibold">จังหวัดที่อยากไป</div>
        <div className="text-xs text-muted">ไม่บังคับ</div>
      </div>

      <div className="relative">
        <label className="flex h-[46px] items-center gap-2.5 rounded-full bg-cream px-4 focus-within:ring-2 focus-within:ring-orange">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6E625A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            type="text"
            value={query}
            placeholder="ค้นหาจังหวัด เช่น น่าน"
            aria-label="ค้นหาจังหวัดที่อยากไป"
            onChange={(e) => {
              setQuery(e.target.value)
              setOpen(true)
            }}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onKeyDown={handleKeyDown}
            className="min-w-0 grow border-0 bg-transparent text-[15px] text-ink outline-none"
          />
        </label>
        {open && suggestions.length > 0 && (
          <ul className="absolute inset-x-0 top-[52px] z-10 m-0 list-none overflow-hidden rounded-3xl border border-[#EDE5DD] bg-white p-1.5">
            {suggestions.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  // onMouseDown กัน input blur ปิด list ก่อน click
                  onMouseDown={(e) => {
                    e.preventDefault()
                    addFromSearch(p.id)
                  }}
                  className="flex h-11 w-full cursor-pointer items-center rounded-full px-3.5 text-left text-[15px] hover:bg-cream"
                >
                  {p.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-xs text-muted">ยอดนิยม</div>
        <div className="flex flex-wrap gap-2">
          {chips.map((id) => (
            <ToggleChip key={id} selected={value.includes(id)} onClick={() => toggle(id)}>
              {PROVINCES.find((p) => p.id === id)?.label ?? id}
            </ToggleChip>
          ))}
        </div>
      </div>
    </div>
  )
}
