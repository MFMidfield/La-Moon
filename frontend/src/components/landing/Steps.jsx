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
    <section className="mx-4 mt-[30px] grid grid-cols-3 gap-2.5 md:mx-auto md:w-full md:max-w-[608px] lg:mt-12 lg:max-w-[1056px] lg:gap-6">
      {STEPS.map(({ Icon, ...step }) => (
        <div
          key={step.title}
          className="flex flex-col items-center gap-2 rounded-[22px] bg-white px-2.5 py-3.5 text-center lg:py-6"
        >
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full ${step.highlight ? 'bg-brown' : 'bg-[#FBE3D2]'}`}
          >
            <Icon size={22} strokeWidth={2} className={step.highlight ? 'text-white' : 'text-[#C95F25]'} aria-hidden="true" />
          </div>
          <div className="text-sm font-semibold lg:text-base">{step.title}</div>
          <div className="text-xs text-muted lg:text-sm">{step.desc}</div>
        </div>
      ))}
    </section>
  )
}
