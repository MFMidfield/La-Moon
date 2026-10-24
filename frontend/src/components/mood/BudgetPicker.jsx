import { useId } from 'react'
import { BUDGET_PRESETS, BUDGET_RANGE } from '../../data/travel'
import { formatBaht } from '../../lib/trip/budget'

const thumbClass = 'pointer-events-none absolute inset-0 m-0 h-11 w-full appearance-none bg-transparent outline-none [&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-brown [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:cursor-grab [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-brown focus-visible:[&::-webkit-slider-thumb]:ring-4 focus-visible:[&::-webkit-slider-thumb]:ring-peach'

export default function BudgetPicker({ value, onChange }) {
  const id = useId()
  const ceiling = Math.max(BUDGET_RANGE.max, value.max)
  const percent = n => (n - BUDGET_RANGE.min) / (ceiling - BUDGET_RANGE.min) * 100

  return (
    <section className="flex flex-col gap-3 rounded-[28px] bg-white p-[18px]" aria-labelledby={id}>
      <h2 id={id} className="m-0 text-base font-semibold">งบประมาณ</h2>
      <div className="grid grid-cols-2 gap-1 rounded-full bg-cream p-1" aria-label="รูปแบบงบประมาณ">
        {[['person', 'ต่อคน'], ['total', 'รวมทั้งทริป']].map(([per, label]) => (
          <button key={per} type="button" aria-pressed={value.per === per} onClick={() => onChange({ ...value, per })} className={`h-11 cursor-pointer rounded-full text-sm font-medium ${value.per === per ? 'bg-peach text-brown' : 'text-muted'}`}>{label}</button>
        ))}
      </div>
      <p className="m-0 text-[23px] font-bold tracking-tight text-brown" aria-live="polite">
        {formatBaht(value.min)} <span className="text-muted">–</span> {formatBaht(value.max)}
        <span className="ml-1.5 inline-block text-xs font-normal text-muted">{value.per === 'person' ? 'ต่อคน' : 'รวมทั้งทริป'}</span>
      </p>
      <div className="relative mx-1 h-11">
        <div className="absolute inset-x-0 top-5 h-1.5 rounded-full bg-cream" />
        <div className="absolute top-5 h-1.5 rounded-full bg-peach" style={{ left: `${percent(value.min)}%`, right: `${100 - percent(value.max)}%` }} />
        <input type="range" aria-label="งบประมาณต่ำสุด" aria-valuetext={formatBaht(value.min)} min={BUDGET_RANGE.min} max={ceiling} step={BUDGET_RANGE.step} value={value.min} onChange={e => onChange({ ...value, min: Math.min(Number(e.target.value), value.max - BUDGET_RANGE.step) })} className={`${thumbClass} z-20`} />
        <input type="range" aria-label="งบประมาณสูงสุด" aria-valuetext={formatBaht(value.max)} min={BUDGET_RANGE.min} max={ceiling} step={BUDGET_RANGE.step} value={value.max} onChange={e => onChange({ ...value, max: Math.max(Number(e.target.value), value.min + BUDGET_RANGE.step) })} className={`${thumbClass} z-10`} />
      </div>
      <div className="-mt-3 flex justify-between text-[11px] text-muted"><span>{formatBaht(BUDGET_RANGE.min)}</span><span>{formatBaht(ceiling)}</span></div>
      <div className="grid grid-cols-2 gap-2">
        {[['min', 'ต่ำสุด'], ['max', 'สูงสุด']].map(([field, label]) => <label key={field} className="flex min-w-0 items-center gap-2 rounded-[18px] bg-cream px-3 text-xs text-muted">
          <span className="shrink-0">{label} ฿</span>
          <input key={value[field]} type="number" inputMode="numeric" aria-label={`งบ${label}เป็นบาท`} defaultValue={value[field]} min={field === 'min' ? BUDGET_RANGE.min : value.min + BUDGET_RANGE.step} max={field === 'min' ? value.max - BUDGET_RANGE.step : ceiling} step={BUDGET_RANGE.step} onKeyDown={event => { if (event.key === 'Enter') event.currentTarget.blur() }} onBlur={event => {
            const amount = Math.round(Number(event.target.value) / BUDGET_RANGE.step) * BUDGET_RANGE.step
            const next = field === 'min' ? Math.max(BUDGET_RANGE.min, Math.min(value.max - BUDGET_RANGE.step, amount)) : Math.min(ceiling, Math.max(value.min + BUDGET_RANGE.step, amount))
            event.currentTarget.value = next
            onChange({ ...value, [field]: next })
          }} className="h-11 w-full min-w-0 bg-transparent text-right text-base font-medium text-brown outline-none" />
        </label>)}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {BUDGET_PRESETS.map(preset => {
          const active = value.min === preset.min && value.max === preset.max
          return <button key={preset.id} type="button" aria-pressed={active} onClick={() => onChange({ min: preset.min, max: preset.max, per: value.per })} className={`h-11 cursor-pointer rounded-full text-sm font-medium ${active ? 'bg-peach text-brown' : 'bg-cream text-[#4A3A30]'}`}>{preset.label}</button>
        })}
      </div>
    </section>
  )
}
