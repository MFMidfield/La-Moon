import { BedDouble, Coffee, MapPin, SquareParking, TrainFront, TreePalm, Waves, Wifi } from 'lucide-react'
import { CardImage, Chip, FlatBadge, MockBadge, Rating } from './CardParts'
import { fmtRange } from './swipeHelpers'

const TYPES = {
  guesthouse: 'เกสต์เฮาส์',
  hostel: 'โฮสเทล',
  hotel: 'โรงแรม',
  boutique: 'บูทีคโฮเทล',
  resort: 'รีสอร์ท',
  villa: 'วิลล่า',
}

const TIERS = {
  saver: { label: 'ประหยัด', bg: '#E7EFDC', text: '#3F5A2E' },
  mid: { label: 'กลาง', bg: '#FBE3D2', text: '#C95F25' },
  comfy: { label: 'สบาย', bg: '#5A2E14', text: '#F9D9C2' },
}

const AMENITIES = {
  pool: { label: 'สระว่ายน้ำ', icon: Waves },
  breakfast: { label: 'อาหารเช้า', icon: Coffee },
  free_wifi: { label: 'ไวไฟฟรี', icon: Wifi },
  parking: { label: 'ที่จอดรถ', icon: SquareParking },
  beach_access: { label: 'ใกล้ชายหาด', icon: TreePalm },
  near_transit: { label: 'ใกล้ขนส่ง', icon: TrainFront },
}
// โชว์สิ่งที่ตัดสินใจง่ายก่อน
const AMENITY_ORDER = ['pool', 'beach_access', 'breakfast', 'parking', 'near_transit', 'free_wifi']

// หน้าการ์ดที่พัก — stay.distanceKm (ใส่โดยหน้า) = ระยะถึงที่เที่ยวที่ถูกใจ
export default function StayCard({ stay: s }) {
  const tier = TIERS[s.tier] ?? TIERS.mid
  const amenities = AMENITY_ORDER.filter((a) => s.amenities?.includes(a))
  const sub = [TYPES[s.type] ?? s.type, s.area].filter(Boolean).join(' · ')

  return (
    <div className="flex h-full flex-col">
      <CardImage src={s.image_url} alt={s.name} fallback={<FlatBadge icon={BedDouble} />}>
        {s.is_mock && <MockBadge />}
        <span
          className="absolute right-3.5 top-3.5 rounded-full px-3 py-[3px] text-xs font-semibold"
          style={{ color: tier.text, background: tier.bg }}
        >
          {tier.label}
        </span>
      </CardImage>

      <div className="flex shrink-0 flex-col gap-1.5 overflow-hidden px-2.5 pb-1.5 pt-3">
        <h2 className="m-0 truncate text-2xl font-semibold leading-tight">{s.name}</h2>
        <div className="truncate text-sm text-muted">{sub}</div>

        <div className="flex items-center justify-between gap-2">
          <span className="min-w-0 truncate text-sm font-semibold">
            ~฿{fmtRange(s.price_per_night)}
            <span className="font-normal text-muted">/คืน</span>
          </span>
          <Rating score={s.rating.score} outOf={s.rating.out_of} count={s.rating.count} />
        </div>

        <div className="flex h-[26px] gap-1.5 overflow-hidden">
          {amenities.map((a) => (
            <Chip key={a} icon={AMENITIES[a].icon}>
              {AMENITIES[a].label}
            </Chip>
          ))}
        </div>

        {s.distanceKm != null && (
          <div className="flex items-center gap-1.5 text-sm text-[#4A3A30]">
            <MapPin size={14} strokeWidth={2} className="shrink-0 text-muted" aria-hidden="true" />
            <span className="truncate">ห่างที่เที่ยวที่เลือก ~{Math.max(1, Math.round(s.distanceKm))} กม.</span>
          </div>
        )}

        {(s.check_in || s.check_out) && (
          <div className="truncate text-sm text-muted [@media(max-height:640px)]:hidden">
            เช็กอิน {s.check_in ?? '-'} · เช็กเอาต์ {s.check_out ?? '-'}
          </div>
        )}
      </div>
    </div>
  )
}
