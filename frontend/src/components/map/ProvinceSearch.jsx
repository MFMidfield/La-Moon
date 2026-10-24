import { useState } from 'react'
import { PROVINCES } from '../../data/options'

export default function ProvinceSearch({ query, onQueryChange, counts, ready, onChoose }) {
  const [open, setOpen] = useState(false)
  const matches = query.trim() ? PROVINCES.filter(province => province.label.includes(query.trim())) : []

  function handleKeyDown(event) {
    if (event.key === 'Escape') setOpen(false)
    if (event.key === 'Enter' && ready && open) {
      const first = matches.find(province => counts[province.id] > 0)
      if (first) {
        event.preventDefault()
        onChoose(first.id)
      }
    }
  }

  return (
    <div className="relative z-20" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false) }}>
      <label className="flex h-12 items-center gap-2.5 rounded-full bg-white px-[18px] focus-within:ring-2 focus-within:ring-brown">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="shrink-0 text-muted" aria-hidden="true">
          <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={event => { onQueryChange(event.target.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          aria-label="ค้นหาจังหวัด"
          aria-describedby={open && query.trim() ? 'province-search-summary' : undefined}
          placeholder="ค้นหาจังหวัด"
          className="min-w-0 grow border-0 bg-transparent text-base text-ink outline-none placeholder:text-muted"
        />
      </label>
      {open && query.trim() && (
        <div className="absolute inset-x-0 top-14 overflow-hidden rounded-3xl border border-[#EDE5DD] bg-white p-2">
          <p id="province-search-summary" role="status" className="m-0 px-3 py-2 text-xs text-muted">
            {matches.length ? `พบ ${matches.length} จังหวัด` : 'ไม่พบจังหวัด ลองค้นหาอีกครั้ง'}
          </p>
          <ul aria-label="ผลการค้นหาจังหวัด" className="m-0 max-h-64 list-none overflow-y-auto p-0">
            {matches.map(province => {
              const available = ready && counts[province.id] > 0
              return (
                <li key={province.id}>
                  <button
                    type="button"
                    disabled={!available}
                    onClick={() => onChoose(province.id)}
                    className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-3 rounded-full px-3 text-left text-sm hover:bg-cream focus-visible:outline-2 focus-visible:outline-brown disabled:cursor-default disabled:text-muted"
                  >
                    <span>{province.label}</span>
                    <span className="shrink-0 text-xs text-muted">{available ? `${counts[province.id]} ที่เที่ยว` : ready ? 'เร็วๆ นี้' : 'รอข้อมูล'}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
