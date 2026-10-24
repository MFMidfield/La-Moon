import { Clock, Coffee, Croissant, Soup, Store, Utensils } from 'lucide-react'
import { CardImage, Chip, FlatBadge, MockBadge, Rating } from './CardParts'
import { fmtRange } from './swipeHelpers'

const KINDS = {
  restaurant: { label: 'ร้านอาหาร', icon: Utensils },
  street_food: { label: 'สตรีทฟู้ด', icon: Soup },
  market: { label: 'ตลาด', icon: Store },
  cafe: { label: 'คาเฟ่', icon: Coffee },
  bakery: { label: 'เบเกอรี่', icon: Croissant },
}

const MEALS = { breakfast: 'เช้า', lunch: 'กลางวัน', dinner: 'เย็น', snack: 'ของว่าง' }
const MEAL_ORDER = ['breakfast', 'lunch', 'dinner', 'snack']

// หน้าการ์ดร้านอาหาร (เนื้อหาอย่างเดียว ไม่มี drag) — รูปหดก่อน แถวข้อความไม่เลื่อน
export default function RestaurantCard({ restaurant: r }) {
  const kind = KINDS[r.kind] ?? KINDS.restaurant
  const meals = MEAL_ORDER.filter((m) => r.meals?.includes(m))
  const dishes = (r.signature_dishes ?? []).slice(0, 2)
  const sub = [kind.label, ...(r.cuisine ?? []).slice(0, 2)].join(' · ')

  return (
    <div className="flex h-full flex-col">
      <CardImage src={r.image_url} alt={r.name} fallback={<FlatBadge icon={kind.icon} />}>
        {r.is_mock && <MockBadge />}
      </CardImage>

      <div className="flex shrink-0 flex-col gap-1.5 overflow-hidden px-2.5 pb-1.5 pt-3">
        <h2 className="m-0 truncate text-2xl font-semibold leading-tight">{r.name}</h2>
        <div className="truncate text-sm text-muted">{sub}</div>

        {dishes.length > 0 && (
          <div className="truncate text-sm text-[#4A3A30]">
            <span className="text-muted">เมนูเด็ด </span>
            {dishes.join(' · ')}
          </div>
        )}

        <div className="flex h-[26px] gap-1.5 overflow-hidden">
          {meals.map((m) => (
            <Chip key={m}>{MEALS[m]}</Chip>
          ))}
        </div>

        <div className="flex items-center justify-between gap-2 pt-0.5">
          <span className="min-w-0 truncate text-sm font-semibold">
            ~฿{fmtRange(r.price_per_person)}
            <span className="font-normal text-muted">/คน</span>
          </span>
          <Rating score={r.rating.score} outOf={r.rating.out_of} count={r.rating.count} />
        </div>

        {r.opening_hours && (
          <div className="flex items-center gap-1.5 text-sm text-muted [@media(max-height:640px)]:hidden">
            <Clock size={14} strokeWidth={2} className="shrink-0" aria-hidden="true" />
            <span className="truncate">เปิด {r.opening_hours}</span>
          </div>
        )}
      </div>
    </div>
  )
}
