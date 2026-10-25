import { Layers, Map, Smile } from 'lucide-react'

const STEPS = [
  {
    title: 'เลือกจังหวัด',
    desc: 'จากแผนที่',
    Icon: Map,
  },
  {
    title: 'บอกมู้ด',
    desc: 'ทะเล ภูเขา ฯลฯ',
    Icon: Smile,
  },
  {
    title: 'ปัดการ์ด',
    desc: 'ได้ทริปเลย',
    highlight: true,
    Icon: Layers,
  },
]

export default function Steps() {
  return (
    <section className="mx-4 mt-[30px] grid grid-cols-3 gap-2.5 md:mx-auto md:w-full md:max-w-[608px] lg:mt-8 lg:max-w-[1056px] lg:gap-6 lg:px-0">
      {STEPS.map(({ Icon, ...step }) => (
        <div
          key={step.title}
          className="flex flex-col items-center gap-2 rounded-[22px] bg-white px-2.5 py-3.5 text-center lg:rounded-[28px] lg:py-9"
        >
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full lg:h-14 lg:w-14 ${step.highlight ? 'bg-brown' : 'bg-[#FBE3D2]'}`}
          >
            <Icon size={22} strokeWidth={2} className={`lg:h-7 lg:w-7 ${step.highlight ? 'text-white' : 'text-[#C95F25]'}`} aria-hidden="true" />
          </div>
          <div className="text-sm font-semibold lg:text-xl">{step.title}</div>
          <div className="text-xs text-muted lg:text-base">{step.desc}</div>
        </div>
      ))}
    </section>
  )
}
