export default function TermsCheckbox({ checked, onChange, onOpenDoc }) {
  return (
    <div className="mx-[22px] mt-[18px] flex items-start gap-3">
      <span className="relative mt-0.5 flex h-6 w-6 shrink-0">
        <input
          id="accept-terms"
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer absolute inset-0 m-0 cursor-pointer opacity-0"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none flex h-6 w-6 items-center justify-center rounded-lg border-[1.5px] border-[#D9CFC5] bg-white transition-colors peer-checked:border-brown peer-checked:bg-brown peer-focus-visible:ring-2 peer-focus-visible:ring-orange"
        >
          {checked && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          )}
        </span>
      </span>
      <span className="text-sm leading-[1.6] text-[#4A3A30]">
        <label htmlFor="accept-terms" className="cursor-pointer">
          ฉันยอมรับ
        </label>{' '}
        <button type="button" onClick={() => onOpenDoc('terms')} className="cursor-pointer text-brown underline hover:text-ink">
          ข้อตกลงการใช้งาน
        </button>{' '}
        และ{' '}
        <button type="button" onClick={() => onOpenDoc('privacy')} className="cursor-pointer text-brown underline hover:text-ink">
          นโยบายความเป็นส่วนตัว
        </button>
      </span>
    </div>
  )
}
