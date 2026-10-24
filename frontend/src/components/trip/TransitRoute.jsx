import { CarTaxiFront, Footprints, Ship, TrainFront } from 'lucide-react'
import { formatBaht } from '../../lib/trip/budget'

const minutes = value => Math.ceil(value)
const fareText = fare => fare === null ? 'ดูราคาที่สถานี' : `~${formatBaht(fare)}`
const totalFareText = total => total.unknownFare
  ? `${total.transitFare > 0 ? `${fareText(total.transitFare)} + ` : ''}ดูราคาที่สถานี`
  : fareText(total.transitFare)

function WalkSegment({ value, children, showZero = false }) {
  if (!value && !showZero) return null
  return <p className="m-0 flex items-start gap-1.5 text-muted"><Footprints size={14} className="mt-0.5 shrink-0" aria-hidden="true" /><span>เดิน {minutes(value)} นาที{children}</span></p>
}

function TaxiEstimate({ taxi, alternative = false }) {
  if (taxi.unavailable) return <p className="m-0 text-muted">ยังประมาณเส้นทางไม่ได้ เนื่องจากไม่มีพิกัดสถานที่</p>
  return <p className="m-0 flex items-start gap-1.5 text-[#4A3A30]"><CarTaxiFront size={14} className="mt-0.5 shrink-0" aria-hidden="true" /><span>{alternative ? 'ทางเลือก · ' : ''}แท็กซี่ ~{formatBaht(taxi.fare.min)}–{formatBaht(taxi.fare.max)} /คัน · ~{taxi.minutes} นาที</span></p>
}

export default function TransitRoute({ route, fromName, toName }) {
  return <aside aria-label={`เดินทางจาก ${fromName} ไป ${toName}`} className="mx-2 my-2 flex min-w-0 flex-col gap-2 border-l-2 border-[#D9CFC5] py-2 pl-3 text-xs leading-relaxed">
    {route.mode === 'transit' ? <>
      <WalkSegment value={route.walkStart}> ไป{route.legs[0].fromStation.name_th}</WalkSegment>
      {route.transfers.filter(transfer => transfer.afterLeg === -1).map((transfer, index) => <WalkSegment key={`start-${index}`} value={transfer.minutes}> · เปลี่ยนไป{transfer.toStation.name_th}</WalkSegment>)}
      {route.legs.map((leg, index) => {
        const Icon = leg.lineMode === 'boat' ? Ship : TrainFront
        return <div key={`${leg.lineId}-${index}`} className="flex flex-col gap-1.5">
          <span className="inline-flex w-fit max-w-full items-center gap-1.5 rounded-full border px-2.5 py-1 text-brown" style={{ borderColor: leg.color, backgroundColor: `${leg.color}18` }}><Icon size={14} className="shrink-0" aria-hidden="true" /><span className="break-words font-medium">{leg.lineName}</span></span>
          <p className="m-0 break-words text-[#4A3A30]">{leg.fromStation.name_th} → {leg.toStation.name_th} · {leg.stops} สถานี · ~{minutes(leg.minutes)} นาที · {fareText(leg.fare)}/คน</p>
          {route.transfers.filter(transfer => transfer.afterLeg === index).map((transfer, i) => <WalkSegment key={i} value={transfer.minutes}> · เปลี่ยนไป{transfer.toStation.name_th}</WalkSegment>)}
        </div>
      })}
      <WalkSegment value={route.walkEnd}> ไป{toName}</WalkSegment>
      <p className="m-0 font-medium text-brown">รวม ~{route.minutes} นาที · {fareText(route.fare)}/คน</p>
      {route.fareNotes.length > 0 && <details className="text-muted"><summary className="min-h-11 cursor-pointer content-center rounded-full transition-colors hover:text-brown motion-reduce:transition-none">เงื่อนไขค่าโดยสาร</summary><div className="flex flex-col gap-2 pb-2">{route.fareNotes.map(note => <p key={note} className="m-0">{note}</p>)}<p className="m-0">ใช้สูตรประมาณแยกตามสาย ยังไม่หักส่วนลด ค่าแรกเข้าร่วม หรือเพดานรายวัน</p></div></details>}
    </> : route.mode === 'walk' ? <><WalkSegment value={route.minutes} showZero /><p className="m-0 text-muted">ไม่มีค่าโดยสาร</p></> : null}
    <TaxiEstimate taxi={route.taxi} alternative={route.mode !== 'taxi'} />
  </aside>
}

export function TransitDayTotal({ total, hasRoutes }) {
  if (!hasRoutes) return null
  return <div className="mt-3 rounded-[20px] bg-white/75 px-3 py-2.5 text-xs leading-relaxed text-muted">
    <p className="m-0 font-medium text-brown">เดินทางระหว่างที่เที่ยว · ~{total.minutes} นาที{total.unavailable ? ' (เฉพาะช่วงที่มีพิกัด)' : ''}</p>
    <p className="mb-0 mt-1">รถไฟฟ้า/เรือ {totalFareText(total)}/คน{total.taxiMax > 0 ? ` · แท็กซี่ ~${formatBaht(total.taxiMin)}–${formatBaht(total.taxiMax)}/คัน` : ''}</p>
    <p className="mb-0 mt-1">รวมเวลาเดินและเปลี่ยนสาย ไม่รวมเวลารอรถ/เรือ และการเดินทางจากที่พัก</p>
  </div>
}

export function TransitBudgetLine({ transit }) {
  return <div className="mt-4 rounded-[20px] bg-cream p-3 text-xs leading-relaxed text-muted">
    <p className="m-0 font-medium text-brown">ค่าโดยสารรถไฟฟ้า/เรือตามแผน · ต่อคน</p>
    <p className="mb-0 mt-1">{transit.loading ? 'กำลังคำนวณเส้นทาง…' : transit.error ? 'ยังโหลดข้อมูลเส้นทางไม่ได้' : totalFareText(transit.total)}</p>
    <p className="mb-0 mt-1">ข้อมูลประกอบงบเที่ยวในพื้นที่ 120 บาท/คน/วัน · ไม่บวกซ้ำในยอดรวม · ไม่รวมช่วงแท็กซี่ การเดินทางจากที่พัก และช่วงที่ไม่มีพิกัด</p>
  </div>
}
