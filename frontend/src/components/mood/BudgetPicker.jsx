const OPTIONS = [
  { value: 1, label: 'ประหยัด' },
  { value: 2, label: 'กลางๆ' },
  { value: 3, label: 'จัดเต็ม' },
]

export default function BudgetPicker({ value, onChange }) {
  return (
    <div className="flex flex-col gap-2.5 rounded-3xl bg-white p-4">
      <div id="budget-label" className="text-[15px] font-semibold">
        งบประมาณต่อคน
      </div>
      <div role="radiogroup" aria-labelledby="budget-label" className="grid grid-cols-3 gap-1 rounded-full bg-cream p-1">
        {OPTIONS.map((opt) => {
          const active = opt.value === value
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(opt.value)}
              className={`h-10 cursor-pointer rounded-full text-sm transition-colors ${
                active ? 'bg-brown font-semibold text-white' : 'text-[#4A3A30]'
              }`}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
