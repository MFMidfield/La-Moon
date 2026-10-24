import MoodIcon from './MoodIcon'

// tile 108px — เลือกแล้ว = พื้นพีช + วงเช็คน้ำตาลมุมขวาบน (absolute ไม่ดัน layout)
export default function MoodTile({ mood, selected, disabled, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      disabled={disabled}
      onClick={onClick}
      className={`relative flex h-[108px] cursor-pointer flex-col justify-between rounded-3xl p-3.5 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
        selected ? 'bg-peach' : 'bg-white'
      }`}
    >
      <span className={`flex h-[42px] w-[42px] items-center justify-center rounded-full ${selected ? 'bg-white' : 'bg-cream'}`}>
        <MoodIcon id={mood.id} color={selected ? '#C95F25' : '#1F1A17'} />
      </span>
      <span className={`text-base ${selected ? 'font-semibold' : 'font-medium'}`}>{mood.label}</span>
      {selected && (
        <span className="absolute right-3.5 top-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-brown">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>
      )}
    </button>
  )
}
