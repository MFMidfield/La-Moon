import { useState } from 'react'
import { PROVINCES, REGIONS } from '../../data/options'

const MAX_SUGGESTIONS = 6

function toggle(list, id) {
  return list.includes(id) ? list.filter((v) => v !== id) : [...list, id]
}

export default function PlacePicker({ regions, onRegionsChange, provinces, onProvincesChange }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  const q = query.trim()
  const suggestions = q
    ? PROVINCES.filter((p) => p.label.includes(q) && !provinces.includes(p.id)).slice(0, MAX_SUGGESTIONS)
    : []

  function addProvince(id) {
    onProvincesChange([...provinces, id])
    setQuery('')
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (suggestions[0]) addProvince(suggestions[0].id)
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <div className="flex flex-col gap-3 rounded-[28px] bg-white p-[18px]">
      <div className="flex items-baseline justify-between">
        <div className="text-base font-semibold">ภาค/จังหวัดที่อยากไป</div>
        <div className="text-xs text-muted">ไม่บังคับ</div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {REGIONS.map((region) => {
          const selected = regions.includes(region.id)
          return (
            <button
              key={region.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onRegionsChange(toggle(regions, region.id))}
              className={`flex h-[72px] cursor-pointer flex-col items-center justify-center gap-1 rounded-[20px] border-2 text-sm ${
                selected ? 'border-orange bg-peach font-semibold' : 'border-transparent bg-cream'
              }`}
            >
              <span className="h-3.5 w-3.5 rounded-full" style={{ background: region.color }} />
              {region.label}
            </button>
          )
        })}
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
            placeholder="เพิ่มจังหวัด เช่น เชียงใหม่"
            aria-label="เพิ่มจังหวัดที่อยากไป"
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
                    addProvince(p.id)
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

      {provinces.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {provinces.map((id) => {
            const label = PROVINCES.find((p) => p.id === id)?.label ?? id
            return (
              <span key={id} className="flex h-[34px] items-center gap-1.5 rounded-full bg-[#FBE3D2] pl-3.5 pr-2 text-sm">
                {label}
                <button
                  type="button"
                  aria-label={`ลบ${label}`}
                  onClick={() => onProvincesChange(provinces.filter((v) => v !== id))}
                  className="flex h-[22px] w-[22px] cursor-pointer items-center justify-center rounded-full bg-white"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1F1A17" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )
          })}
        </div>
      )}
    </div>
  )
}
