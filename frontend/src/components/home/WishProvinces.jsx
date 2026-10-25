import SlideLink from '../SlideLink'
import { PROVINCES } from '../../data/options'

// จังหวัดที่อยากไป (จาก profile) → /map/:province — ไม่มีก็ไม่แสดง
export default function WishProvinces({ ids = [] }) {
  const provinces = ids.map((id) => PROVINCES.find((p) => p.id === id)).filter(Boolean)
  if (!provinces.length) return null

  return (
    <section className="mt-8 lg:col-start-2 lg:row-start-4 lg:mt-8">
      <h2 className="m-0 px-[22px] text-[22px] font-bold lg:px-0">จังหวัดที่อยากไป</h2>
      <div className="mx-4 mt-3 flex flex-wrap gap-2 lg:mx-0">
        {provinces.map((p) => (
          <SlideLink
            key={p.id}
            to={`/map/${p.id}`}
            className="flex h-10 items-center rounded-full bg-white px-4 text-sm font-medium"
          >
            {p.label}
          </SlideLink>
        ))}
      </div>
    </section>
  )
}
