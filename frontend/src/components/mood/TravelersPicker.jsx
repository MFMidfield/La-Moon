function Stepper({ label, value, min, max, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm font-medium">{label}</span>
      <div className="flex items-center gap-2">
        <button type="button" aria-label={`ลด${label}`} disabled={value <= min} onClick={() => onChange(value - 1)} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-cream text-xl text-brown disabled:cursor-not-allowed disabled:opacity-35">−</button>
        <span aria-live="polite" className="w-7 text-center text-lg font-semibold tabular-nums">{value}</span>
        <button type="button" aria-label={`เพิ่ม${label}`} disabled={value >= max} onClick={() => onChange(value + 1)} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-peach text-xl text-brown disabled:cursor-not-allowed disabled:opacity-35">+</button>
      </div>
    </div>
  )
}

export default function TravelersPicker({ value, onChange }) {
  return (
    <section className="flex flex-col gap-3 rounded-[28px] bg-white p-[18px]" aria-labelledby="travelers-title">
      <h2 id="travelers-title" className="m-0 text-base font-semibold">ไปกันกี่คน?</h2>
      <Stepper label="ผู้ใหญ่" value={value.adults} min={1} max={10} onChange={adults => onChange({ ...value, adults })} />
      <Stepper label="เด็ก" value={value.children} min={0} max={10} onChange={children => onChange({ ...value, children })} />
    </section>
  )
}
