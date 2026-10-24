// ภาพประกอบ flat ในวงกลม — พื้นสีตามบุคลิก + ฉากตามมู้ดหลัก
const SUN = <circle cx="102" cy="40" r="14" fill="#F4A36C" />
const HILLS = (
  <>
    <path d="M0 140 L0 92 L38 56 L64 84 L96 48 L140 96 L140 140 Z" fill="#D9A27E" />
    <path d="M64 84 L96 48 L118 72 L98 96 Z" fill="#C88A63" />
  </>
)

const SCENES = {
  beach: (
    <>
      {SUN}
      <rect x="0" y="80" width="140" height="60" fill="#A9BFB2" />
      <path d="M0 92 Q18 86 35 92 T70 92 T105 92 T140 92" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M10 108 Q28 102 45 108 T80 108 T115 108" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M0 140 L0 118 Q50 108 140 124 L140 140 Z" fill="#F6E3B8" />
    </>
  ),
  mountain: (
    <>
      {SUN}
      {HILLS}
      <ellipse cx="40" cy="96" rx="34" ry="9" fill="#FFFFFF" opacity="0.85" />
      <ellipse cx="104" cy="104" rx="30" ry="8" fill="#FFFFFF" opacity="0.85" />
    </>
  ),
  food: (
    <>
      <path d="M52 34 q-6 10 0 20 M70 28 q-6 12 0 24 M88 34 q-6 10 0 20" stroke="#FFFFFF" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M86 46 L118 22 M92 50 L124 30" stroke="#5A2E14" strokeWidth="4" strokeLinecap="round" />
      <path d="M26 70 H114 A44 44 0 0 1 26 70 Z" fill="#C88A63" />
      <ellipse cx="70" cy="70" rx="44" ry="8" fill="#D9A27E" />
      <rect x="0" y="112" width="140" height="28" fill="#FFFFFF" opacity="0.5" />
    </>
  ),
  temple: (
    <>
      {SUN}
      <rect x="0" y="112" width="140" height="28" fill="#C88A63" />
      <rect x="40" y="96" width="60" height="16" rx="3" fill="#D9A27E" />
      <path d="M48 96 Q48 64 70 58 Q92 64 92 96 Z" fill="#D9A27E" />
      <path d="M64 58 L70 18 L76 58 Z" fill="#C88A63" />
      <rect x="62" y="80" width="16" height="16" rx="8" fill="#5A2E14" opacity="0.5" />
    </>
  ),
  quiet: (
    <>
      <path d="M96 22A22 22 0 1 1 72 44a18 18 0 0 0 24-22z" fill="#FFFFFF" />
      <path d="M0 140 L0 100 Q70 80 140 104 L140 140 Z" fill="#8BAA6E" />
      <path d="M44 104 Q30 80 44 60 Q58 80 44 104 Z" fill="#6E8F55" />
      <path d="M44 104 V70" stroke="#E7EFDC" strokeWidth="2" />
      <path d="M96 108 Q86 92 96 78 Q106 92 96 108 Z" fill="#6E8F55" />
    </>
  ),
  photo: (
    <>
      <path d="M108 26l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" fill="#E8793A" />
      <rect x="28" y="52" width="84" height="58" rx="14" fill="#5A2E14" />
      <rect x="48" y="44" width="24" height="12" rx="4" fill="#5A2E14" />
      <circle cx="70" cy="81" r="20" fill="#FFFFFF" />
      <circle cx="70" cy="81" r="12" fill="#F4A36C" />
      <circle cx="98" cy="64" r="4" fill="#F9D9C2" />
    </>
  ),
  adventure: (
    <>
      {SUN}
      {HILLS}
      <path d="M96 48 V18" stroke="#5A2E14" strokeWidth="3" strokeLinecap="round" />
      <path d="M96 18 L120 25 L96 32 Z" fill="#E8793A" />
    </>
  ),
}

export default function PersonalityArt({ mood, color }) {
  return (
    <div className="mx-auto h-[148px] w-[148px] shrink-0 overflow-hidden rounded-full border-4 border-white" aria-hidden="true">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <rect width="140" height="140" fill={color} />
        {SCENES[mood] ?? SCENES.mountain}
      </svg>
    </div>
  )
}
