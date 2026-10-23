// chip เลือก/ไม่เลือก — ไอคอน + / ✓ กว้างเท่ากัน กดแล้ว layout ไม่ขยับ
export default function ToggleChip({ selected, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`flex h-10 cursor-pointer items-center gap-1.5 rounded-full px-3.5 text-sm font-medium transition-colors ${
        selected ? 'bg-brown text-white' : 'bg-cream text-ink'
      }`}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke={selected ? '#FFFFFF' : '#6E625A'}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {selected ? <path d="M20 6L9 17l-5-5" /> : <path d="M12 5v14M5 12h14" />}
      </svg>
      {children}
    </button>
  )
}
