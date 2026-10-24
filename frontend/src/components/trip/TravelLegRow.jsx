import { BusFront, Car, ExternalLink, Plane, TrainFront, TriangleAlert } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { slideNavigate } from '../SlideLink'
import { formatBaht } from '../../lib/trip/budget'
import { formatHours } from '../../lib/trip/travel'
import { bookingUrl } from '../../lib/trip/schedules'

const ICONS = { plane: Plane, train: TrainFront, bus: BusFront, car: Car }
const MODE_LABEL = { plane: 'เครื่องบิน', train: 'รถไฟ', bus: 'รถทัวร์', car: 'ขับรถเอง' }
const PILL = 'flex min-h-11 items-center gap-1 rounded-full px-3 text-xs font-semibold text-brown transition-colors duration-200 hover:bg-cream motion-reduce:transition-none'

const FLAG_TEXT = { overrun: 'อาจไม่ทันเที่ยวกลับ', arrival: 'ถึงปลายทางไม่ทันเที่ยวช่วงนี้', late: 'จบดึก หลัง 22:00' }

// ป้ายเตือนบนแถวที่เวลาชนกับเที่ยวเดินทาง
export function LegFlag({ kind }) {
  return <span role="note" className="inline-flex items-center gap-1 rounded-full bg-[#FBE3D2] px-2.5 py-1 text-[11px] font-medium text-[#9B432A]"><TriangleAlert size={12} strokeWidth={2} aria-hidden="true" />{FLAG_TEXT[kind]}</span>
}

function priceText(price) {
  if (!price) return null
  return price.min === price.max ? formatBaht(price.min) : `${formatBaht(price.min)}–${formatBaht(price.max)}`
}

function Detail({ leg, direction }) {
  if (leg.mode === 'car') {
    if (direction === 'out') {
      return (
        <>
          <p className="m-0 text-sm font-semibold leading-snug">ขับรถเอง · ออกเดินทาง <span className="tabular-nums">{leg.depart}</span></p>
          {leg.arrive && <p className="m-0 mt-0.5 text-xs text-[#4A3A30]">ถึงประมาณ <span className="tabular-nums">{leg.arrive}</span>{leg.arrive_next_day ? ' (วันถัดไป)' : ''}{leg.hours != null ? ` · ใช้เวลา ${formatHours(leg.hours)}` : ''}</p>}
        </>
      )
    }
    return (
      <>
        <p className="m-0 text-sm font-semibold leading-snug">ขับรถกลับ</p>
        {leg.hours != null && <p className="m-0 mt-0.5 text-xs text-[#4A3A30]">ใช้เวลา {formatHours(leg.hours)} · เลือกเวลาออกเองได้</p>}
      </>
    )
  }
  return (
    <>
      <p className="m-0 text-sm font-semibold leading-snug">{leg.operator}{leg.code ? ` · ${leg.code}` : ''}</p>
      <p className="m-0 mt-0.5 text-xs text-[#4A3A30]">ออก <span className="tabular-nums">{leg.depart}</span> → ถึง <span className="tabular-nums">{leg.arrive}</span>{leg.arrive_next_day ? ' (วันถัดไป)' : ''}</p>
      {(leg.from_station || leg.to_station) && <p className="m-0 mt-0.5 text-xs text-muted">{leg.from_station} → {leg.to_station}</p>}
      {leg.transfer?.note && <p className="m-0 mt-0.5 text-xs text-muted">{leg.transfer.note}{leg.transfer.to_city_minutes ? ` (~${leg.transfer.to_city_minutes} นาที)` : ''}</p>}
      {leg.price_thb && <p className="m-0 mt-1 text-[11px] text-muted">~{priceText(leg.price_thb)}/คน</p>}
    </>
  )
}

/**
 * แถวเดินทางไป/กลับ ในแผนรายวัน
 * leg = null → ยังไม่ได้เลือกเที่ยว (editable: มีปุ่มเลือกเที่ยว → /plan/transport; อ่านอย่างเดียว: แจ้งข้อความ)
 * hint = บรรทัดเสริม เช่น "เริ่มเที่ยวประมาณ 08:20"
 */
export default function TravelLegRow({ direction, leg, mode, editable = false, date, people = 1, hint }) {
  const reduced = useReducedMotion()
  const navigate = useNavigate()
  const feedback = { whileTap: reduced ? undefined : { scale: 0.96 }, transition: reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 28 } }
  const Icon = ICONS[leg?.mode ?? mode] ?? Plane
  const title = direction === 'out' ? 'เดินทางไป' : 'เดินทางกลับ'
  const pick = () => slideNavigate(navigate, '/plan/transport', { state: { from: 'trip', direction } })
  const url = leg ? bookingUrl({ mode: leg.mode, from: leg.from, to: leg.to, date: leg.date ?? date, people }) : null
  const isCar = leg?.mode === 'car'

  return (
    <div className="flex items-start gap-3 rounded-[22px] bg-white py-3 pl-3 pr-2" data-travel={direction}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FBE3D2] text-brown"><Icon size={18} strokeWidth={2} aria-hidden="true" /></span>
      <div className="min-w-0 flex-1">
        <p className="m-0 text-xs font-medium text-brown">{title}{leg ? ` · ${MODE_LABEL[leg.mode] ?? ''}` : mode ? ` · ${MODE_LABEL[mode] ?? ''}` : ''}</p>
        {leg ? <Detail leg={leg} direction={direction} /> : <p className="m-0 text-sm leading-snug text-muted">{editable ? 'ยังไม่ได้เลือกเที่ยว' : 'ไม่ได้เลือกเที่ยว'}</p>}
        {hint && <p className="m-0 mt-1 text-[11px] font-medium text-brown">{hint}</p>}
        {(editable || leg) && (
          <div className="-ml-3 mt-1 flex flex-wrap items-center">
            {editable && (
              <motion.button {...feedback} type="button" onClick={pick} className={`${PILL} cursor-pointer ${leg ? '' : 'bg-peach'}`}>{leg ? 'เปลี่ยน' : 'เลือกเที่ยว'}</motion.button>
            )}
            {leg && (
              <motion.a {...feedback} href={url} target="_blank" rel="noopener noreferrer sponsored" className={PILL}>
                {isCar ? 'ดูเส้นทาง' : 'ไปจองจริง'}<ExternalLink size={14} strokeWidth={2} aria-hidden="true" />
              </motion.a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
