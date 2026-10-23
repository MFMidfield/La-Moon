import { MOODS } from '../../data/options'

export default function MoodPicker({ value, onChange }) {
  function toggle(id) {
    onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id])
  }

  return (
    <div className="flex flex-col gap-3 rounded-[28px] bg-white p-[18px]">
      <div className="flex items-baseline justify-between">
        <div className="text-base font-semibold">มู้ดที่ชอบ</div>
        <div className="text-xs text-muted">เลือกแล้ว {value.length}</div>
      </div>
      <div className="flex flex-wrap gap-2">
        {MOODS.map((mood) => {
          const selected = value.includes(mood.id)
          return (
            <button
              key={mood.id}
              type="button"
              aria-pressed={selected}
              onClick={() => toggle(mood.id)}
              className={`flex h-10 cursor-pointer items-center gap-1.5 rounded-full text-sm ${
                selected ? 'bg-brown px-3.5 font-semibold text-white' : 'bg-cream px-4 text-ink'
              }`}
            >
              {selected && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
              {mood.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
