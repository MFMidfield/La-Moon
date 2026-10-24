import { cheaperAlternatives, estimateTrip, formatBaht } from '../../lib/trip/budget'

const rows = [['transport', 'เดินทางไป–กลับ'], ['stay', 'ที่พัก'], ['food', 'อาหาร'], ['local', 'เที่ยวในพื้นที่'], ['entries', 'ค่าเข้าสถานที่']]

export default function TripBudget({ input, estimate: savedEstimate, onApply }) {
  const estimate = savedEstimate ?? estimateTrip(input)
  const alternatives = onApply && estimate.over > 0 ? cheaperAlternatives(input) : []
  return (
    <section className="rounded-[28px] bg-white p-5" aria-label="ค่าใช้จ่ายประมาณการ">
      <div className="flex items-center justify-between gap-2"><h2 className="m-0 text-lg font-semibold">งบประมาณทริป</h2><span className="rounded-full bg-cream px-2.5 py-1 text-xs text-muted">ประมาณการ · ทั้งกลุ่ม</span></div>
      <p className="mb-1 mt-4 text-[28px] font-bold text-brown">{formatBaht(estimate.total)}</p>
      <p className="m-0 text-xs text-muted">{formatBaht(estimate.perPerson)} ต่อคน · งบรวม {formatBaht(estimate.budget)}</p>
      <div role="progressbar" aria-label="ค่าใช้จ่ายเทียบงบ" aria-valuenow={Math.min(100, Math.round(estimate.total / Math.max(1, estimate.budget) * 100))} aria-valuemin={0} aria-valuemax={100} className="my-4 h-2 overflow-hidden rounded-full bg-cream"><div className={`h-full rounded-full ${estimate.over ? 'bg-orange' : 'bg-brown'}`} style={{ width: `${Math.min(100, estimate.total / Math.max(1, estimate.budget) * 100)}%` }} /></div>
      <dl className="m-0 flex flex-col gap-2 text-sm">{rows.map(([key, label]) => <div key={key} className="flex justify-between gap-2"><dt className="text-muted">{label}</dt><dd className="m-0 font-medium">{formatBaht(estimate[key] ?? 0)}</dd></div>)}</dl>
      {estimate.over > 0 && <div className="mt-4 rounded-[20px] bg-[#FBE3D2] p-3"><p className="m-0 text-sm font-semibold text-brown">เกินงบ {formatBaht(estimate.over)}</p>{alternatives.length > 0 && <div className="mt-2 flex flex-wrap gap-2">{alternatives.map(alt => <button key={alt.id} type="button" onClick={() => onApply(alt.patch)} className="min-h-11 rounded-full bg-white px-3 py-2 text-xs font-medium text-brown">{alt.label} · ลด {formatBaht(alt.saves)}</button>)}</div>}</div>}
      <p className="mb-0 mt-3 text-xs leading-relaxed text-muted">ราคาโดยประมาณสำหรับวางแผน อาจต่างจากราคาจริงในวันเดินทาง</p>
    </section>
  )
}
