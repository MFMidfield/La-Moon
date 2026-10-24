// รูปสถานที่ 64px — ไม่มีรูปใช้ภาพภูเขา flat แบบการ์ด swipe
export default function PlaceThumb({ src }) {
  return (
    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[18px] bg-[#FBE3D2]">
      {src ? (
        <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <svg viewBox="0 0 220 150" aria-hidden="true" className="absolute bottom-0 left-0 w-full">
          <path d="M0 150 L60 70 L100 110 L150 50 L220 150 Z" fill="#D9A27E" />
          <path d="M100 110 L150 50 L180 90" fill="#C88A63" />
          <circle cx="170" cy="30" r="16" fill="#F4A36C" />
        </svg>
      )}
    </div>
  )
}
