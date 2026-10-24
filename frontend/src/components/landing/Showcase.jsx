const PLACES = [
  { name: 'เกาะพีพี', meta: 'กระบี่ · ชิลริมน้ำ', tone: '#FBE3D2' },
  { name: 'เสม็ดนางชี', meta: 'พังงา · ทะเลหมอก', tone: '#E7EFDC' },
  { name: 'ย่านเมืองเก่า', meta: 'ภูเก็ต · สายกิน', tone: '#F6E3B8' },
  { name: 'คีรีวง', meta: 'นครศรีธรรมราช · เงียบๆ', tone: '#EADDD3' },
]

function SectionTitle({ title, desc, className = '' }) {
  return (
    <div className={`flex flex-col gap-1 text-center ${className}`}>
      <h2 className="m-0 text-2xl font-bold lg:text-[32px]">{title}</h2>
      <p className="m-0 text-sm text-muted lg:text-base">{desc}</p>
    </div>
  )
}

function MapPreview() {
  return (
    <div className="relative flex h-[200px] items-center justify-center overflow-hidden rounded-[28px] bg-cream lg:h-[320px]">
      <svg viewBox="0 0 300 180" aria-hidden="true" className="h-auto w-[300px] lg:w-[480px]">
        <path d="M120 10 L150 6 L170 24 L168 52 L186 60 L214 50 L240 66 L246 96 L222 110 L196 104 L180 122 L170 150 L150 172 L136 160 L140 132 L124 116 L108 96 L96 66 L104 36 Z" fill="#EDCB8A" />
        <path d="M120 10 L150 6 L170 24 L168 52 L150 58 L128 50 L112 40 L104 36 Z" fill="#B9CBA6" />
        <path d="M128 50 L150 58 L168 52 L186 60 L180 90 L160 100 L136 92 L124 72 Z" fill="#F0BFA6" />
        <path d="M112 40 L128 50 L124 72 L136 92 L124 116 L108 96 L96 66 L104 36 Z" fill="#D8C2B0" />
        <path d="M136 92 L160 100 L180 90 L196 104 L180 122 L170 150 L150 172 L136 160 L140 132 L124 116 Z" fill="#C6D3C9" />
        <path d="M140 132 L156 128 L160 148 L150 160 L138 152 Z" fill="#E8793A" />
        <circle cx="149" cy="144" r="5" fill="#5A2E14" stroke="#FFFFFF" strokeWidth="2" />
        <rect x="168" y="131" width="70" height="26" rx="13" fill="#5A2E14" />
        <text x="203" y="149" fontFamily="Anuphan, sans-serif" fontSize="13" fontWeight="600" fill="#FFFFFF" textAnchor="middle">
          กระบี่
        </text>
      </svg>
    </div>
  )
}

export default function Showcase() {
  return (
    <section className="mt-10 rounded-t-[36px] bg-white px-4 pb-9 pt-8 lg:mt-20 lg:rounded-t-[56px] lg:px-8 lg:pb-16 lg:pt-16">
      <div className="mx-auto flex max-w-[608px] flex-col gap-4 lg:max-w-[1056px] lg:gap-6">
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <SectionTitle
            title="เลือกจากแผนที่ทั้งประเทศ"
            desc="แตะจังหวัด ซูมเข้าไปดูที่เที่ยวในพื้นที่"
            className="lg:text-left"
          />
          <MapPreview />
        </div>

        <SectionTitle
          title="ที่เที่ยวที่คนปัดขวาเยอะ"
          desc="ตัวอย่างการ์ดที่จะเจอในแอป"
          className="pt-4 lg:pt-12"
        />
        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4 lg:gap-4">
          {PLACES.map((place) => (
            <div key={place.name} className="flex flex-col gap-2 rounded-3xl bg-cream p-2">
              <div
                className="flex h-[120px] items-center justify-center rounded-[18px] text-xs text-muted lg:h-[180px]"
                style={{ background: place.tone }}
              >
                [รูป]
              </div>
              <div className="px-1.5 pb-1.5">
                <div className="font-semibold">{place.name}</div>
                <div className="text-[13px] text-muted">{place.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
