import { BedDouble, BusFront, ExternalLink, Plane, Search, Ticket, TrainFront } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Fragment } from 'react'
import { formatBaht } from '../../lib/trip/budget'
import CheckPop from './CheckPop'
import { bookingTotal } from './bookingItems'
import { stayLinks } from './stayLinks'

const MODE_ICON = { plane: Plane, train: TrainFront, bus: BusFront }
const PILL = 'flex min-h-11 items-center justify-center gap-1.5 rounded-full px-4 text-xs font-semibold transition-colors duration-200 motion-reduce:transition-none'

function useFeedback() {
  const reduced = useReducedMotion()
  return { whileTap: reduced ? undefined : { scale: 0.96 }, transition: reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 28 } }
}

// "N/M จองแล้ว" + แถบความคืบหน้า (ความกว้างแถบเปลี่ยนใน track ขนาดคงที่ ไม่ดัน layout)
export function BookingProgress({ done, total }) {
  return (
    <div className="flex items-center gap-3">
      <div role="progressbar" aria-label="จองแล้ว" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done} className="h-1.5 flex-1 overflow-hidden rounded-full bg-cream">
        <div className="h-full rounded-full bg-brown transition-[width] duration-300 motion-reduce:transition-none" style={{ width: `${total ? (done / total) * 100 : 0}%` }} />
      </div>
      <span className="shrink-0 text-xs font-semibold tabular-nums text-brown">{done}/{total} จองแล้ว</span>
    </div>
  )
}

export function BookingTotal({ items }) {
  const unpriced = items.some(item => item.amount == null)
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-sm text-[#4A3A30]">รวมที่ต้องจอง (ประมาณ){unpriced && <span className="block text-[11px] text-muted">ไม่รวมตั๋วที่ยังไม่ได้เลือกเที่ยว</span>}</span>
      <span className="text-xl font-bold tabular-nums text-brown">{formatBaht(bookingTotal(items))}</span>
    </div>
  )
}

// ปุ่ม "จองแล้ว" (สลับได้) หรือป้ายสถานะ (อ่านอย่างเดียว) — ขนาดคงที่ เปลี่ยนแค่สี/ติ๊ก
function BookedToggle({ item, done, onToggle, feedback }) {
  if (!onToggle) return <span className={`flex min-h-11 items-center gap-2 text-xs font-semibold ${done ? 'text-brown' : 'text-muted'}`}><CheckPop selected={done} />{done ? 'จองแล้ว' : 'ยังไม่ได้จอง'}</span>
  return (
    <motion.button {...feedback} type="button" aria-pressed={done} aria-label={`จองแล้ว ${item.title}`} onClick={() => onToggle(item.key)} className={`${PILL} cursor-pointer pl-2.5 ${done ? 'bg-peach text-brown' : 'bg-white text-[#4A3A30]'}`}>
      <CheckPop selected={done} />จองแล้ว
    </motion.button>
  )
}

function OutLink({ href, label, children, feedback, className = '' }) {
  return (
    <motion.a {...feedback} href={href} target="_blank" rel="noopener noreferrer sponsored" aria-label={label} className={`${PILL} bg-white text-brown ${className}`}>
      {children}<ExternalLink size={14} strokeWidth={2} aria-hidden="true" />
    </motion.a>
  )
}

// ครึ่งหนึ่งของตั๋ว (ไป หรือ กลับ)
function LegStub({ item, done, onToggle, onPickLeg, feedback }) {
  const Icon = MODE_ICON[item.mode] ?? Plane
  return (
    <div className="p-4" data-booking={item.key}>
      <div className="flex items-center justify-between gap-2">
        <span className="flex min-w-0 items-center gap-1.5 text-xs font-semibold text-brown">
          <span className="rounded-full bg-white px-2 py-0.5">{item.title}</span>
          <span className="truncate">{item.dateText}</span>
        </span>
        {item.operator && <span className="min-w-0 truncate text-right text-[11px] text-muted">{item.operator}</span>}
      </div>

      {item.chosen ? (
        <>
          <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
            <div className="min-w-0">
              <p className="m-0 text-[22px] font-bold leading-none tabular-nums">{item.depart}</p>
              <p className="m-0 mt-1 truncate text-xs text-[#4A3A30]">{item.fromLabel}</p>
            </div>
            <div aria-hidden="true" className="flex w-16 items-center gap-1 text-brown">
              <span className="h-px flex-1 bg-[#D9CFC5]" />
              <Icon size={16} strokeWidth={2} />
              <span className="h-px flex-1 bg-[#D9CFC5]" />
            </div>
            <div className="min-w-0 text-right">
              <p className="m-0 text-[22px] font-bold leading-none tabular-nums">{item.arrive}{item.nextDay && <span className="ml-0.5 align-super text-[10px] font-semibold text-brown">+1</span>}</p>
              <p className="m-0 mt-1 truncate text-xs text-[#4A3A30]">{item.toLabel}</p>
            </div>
          </div>
          {item.transferNote && <p className="mb-0 mt-2 text-[11px] text-muted">{item.transferNote}</p>}
          <p className="mb-0 mt-2 text-sm font-semibold tabular-nums text-brown">{item.amount != null ? `~${formatBaht(item.amount)}` : 'ดูราคาที่เว็บจอง'}<span className="ml-1 text-xs font-normal text-muted">· {item.people} คน</span></p>
        </>
      ) : (
        <div className="mt-3 flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brown"><Icon size={18} strokeWidth={2} aria-hidden="true" /></span>
          <div className="min-w-0">
            <p className="m-0 text-sm font-semibold">ยังไม่ได้เลือกเที่ยว</p>
            <p className="m-0 mt-0.5 truncate text-xs text-[#4A3A30]">{item.fromLabel} → {item.toLabel} · {item.people} คน</p>
          </div>
        </div>
      )}

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <BookedToggle item={item} done={done} onToggle={onToggle} feedback={feedback} />
        <div className="flex items-center gap-2">
          {!item.chosen && onPickLeg && (
            <motion.button {...feedback} type="button" onClick={() => onPickLeg(item.direction)} className={`${PILL} cursor-pointer bg-white text-[#4A3A30]`}>
              <Ticket size={14} strokeWidth={2} aria-hidden="true" />เลือกเที่ยว
            </motion.button>
          )}
          <OutLink href={item.url} label={`${item.chosen ? 'จอง' : 'ค้นหาตั๋ว'} ${item.title}`} feedback={feedback}>
            {item.chosen ? 'จอง' : <><Search size={14} strokeWidth={2} aria-hidden="true" />ค้นหาตั๋ว</>}
          </OutLink>
        </div>
      </div>
    </div>
  )
}

// การ์ดตั๋วไป-กลับ คั่นด้วยรอยปรุ (รอยเว้าสองข้างสีเดียวกับพื้นข้างหลัง = ขาว)
function TicketCard({ legs, booked, onToggle, onPickLeg, feedback }) {
  return (
    <div className="rounded-[24px] bg-cream">
      {legs.map((item, i) => (
        <Fragment key={item.key}>
          {i > 0 && (
            <div aria-hidden="true" className="relative h-4">
              <span className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-white" />
              <span className="absolute inset-x-4 top-1/2 border-t-[1.5px] border-dashed border-[#D9CFC5]" />
              <span className="absolute -right-2 top-0 h-4 w-4 rounded-full bg-white" />
            </div>
          )}
          <LegStub item={item} done={Boolean(booked[item.key])} onToggle={onToggle} onPickLeg={onPickLeg} feedback={feedback} />
        </Fragment>
      ))}
    </div>
  )
}

function StayCard({ item, done, onToggle, feedback }) {
  const links = stayLinks(item)
  return (
    <li className="rounded-[24px] bg-cream p-4" data-booking={item.key}>
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brown"><BedDouble size={18} strokeWidth={2} aria-hidden="true" /></span>
        <div className="min-w-0 flex-1">
          <p className="m-0 text-sm font-semibold leading-snug">{item.title}</p>
          {item.dateText && <p className="m-0 mt-0.5 text-xs text-[#4A3A30]">{item.dateText}</p>}
          <p className="m-0 mt-0.5 text-xs text-muted">{item.sub}</p>
        </div>
        <p className="m-0 shrink-0 text-right text-sm font-semibold tabular-nums text-brown">~{formatBaht(item.amount)}</p>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <BookedToggle item={item} done={done} onToggle={onToggle} feedback={feedback} />
        <div className="flex min-w-0 flex-1 justify-end gap-2">
          {links.map(link => <OutLink key={link.id} href={link.url} label={`จอง ${item.stay.name} ที่ ${link.name}`} feedback={feedback} className="min-w-0">{link.name}</OutLink>)}
        </div>
      </div>
      {item.stay.is_mock && <p className="mb-0 mt-2 text-[11px] leading-relaxed text-muted">ชื่อที่พักเป็นข้อมูลตัวอย่าง ลิงก์จะค้นที่พักจริงในจังหวัดตามวันและจำนวนคน</p>}
    </li>
  )
}

function SectionTitle({ icon: Icon, children }) {
  return <h3 className="m-0 mb-2 flex items-center gap-1.5 px-1 text-sm font-semibold text-[#4A3A30]"><Icon size={16} strokeWidth={2} aria-hidden="true" className="text-brown" />{children}</h3>
}

/**
 * รายการสิ่งที่ต้องจอง: ตั๋วเดินทาง (บนสุด) แล้วตามด้วยที่พัก
 * booked = { [key]: true }; onToggle ว่าง = อ่านอย่างเดียว (ปุ่มจองยังใช้ได้); onPickLeg(direction) = ไปเลือกเที่ยว (เฉพาะตอนแก้แผน)
 */
export default function BookingList({ items, booked, onToggle, onPickLeg }) {
  const feedback = useFeedback()
  const legs = items.filter(item => item.kind === 'leg')
  const stays = items.filter(item => item.kind === 'stay')
  return (
    <div className="flex flex-col gap-5">
      {legs.length > 0 && (
        <section>
          <SectionTitle icon={Ticket}>ตั๋วเดินทาง</SectionTitle>
          <TicketCard legs={legs} booked={booked} onToggle={onToggle} onPickLeg={onPickLeg} feedback={feedback} />
        </section>
      )}
      {stays.length > 0 && (
        <section>
          <SectionTitle icon={BedDouble}>ที่พัก</SectionTitle>
          <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
            {stays.map(item => <StayCard key={item.key} item={item} done={Boolean(booked[item.key])} onToggle={onToggle} feedback={feedback} />)}
          </ul>
        </section>
      )}
    </div>
  )
}

// การ์ดในหน้าทริปที่บันทึกแล้ว
export function BookingCard({ items, booked }) {
  const done = items.filter(item => booked[item.key]).length
  return (
    <section aria-labelledby="booking-card-title" className="rounded-[28px] bg-white p-4">
      <h2 id="booking-card-title" className="m-0 text-lg font-bold">สิ่งที่ต้องจองก่อนเดินทาง</h2>
      <div className="mb-4 mt-2"><BookingProgress done={done} total={items.length} /></div>
      <BookingList items={items} booked={booked} />
      <div className="mt-4"><BookingTotal items={items} /></div>
      <p className="mb-0 mt-2 text-xs leading-relaxed text-muted">สถานะ "จองแล้ว" ตามที่ติ๊กไว้ตอนบันทึกทริป</p>
    </section>
  )
}
