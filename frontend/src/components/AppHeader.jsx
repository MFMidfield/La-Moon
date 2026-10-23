import SlideLink from './SlideLink'

// header ในแอป 64px: ปุ่มกลับ + (breadcrumb เล็ก) ชื่อหน้า + ป้ายขั้น "1 / 3"
export default function AppHeader({ title, crumb, step, backTo, onBack, right }) {
  const backIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F1A17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
  const backClass = 'flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white'

  return (
    <header className="flex h-16 shrink-0 items-center gap-2.5 px-4">
      {backTo && (
        <SlideLink to={backTo} back aria-label="ย้อนกลับ" className={backClass}>
          {backIcon}
        </SlideLink>
      )}
      {!backTo && onBack && (
        <button type="button" aria-label="ย้อนกลับ" onClick={onBack} className={backClass}>
          {backIcon}
        </button>
      )}
      <div className="flex min-w-0 grow flex-col">
        {crumb && <div className="truncate text-xs text-muted">{crumb}</div>}
        <div className="truncate text-lg font-semibold">{title}</div>
      </div>
      {step && <div className="shrink-0 rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold text-brown">{step}</div>}
      {right}
    </header>
  )
}
