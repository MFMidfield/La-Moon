const STEPS = [
  {
    title: 'เลือกจังหวัด',
    desc: 'จากแผนที่',
    icon: (
      <>
        <path d="M14.1 6l5.9-2v14l-6 2-4-2-6 2V6l6-2z" />
        <path d="M10 4v14M14 6v14" />
      </>
    ),
  },
  {
    title: 'บอกมู้ด',
    desc: 'ทะเล ภูเขา ฯลฯ',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 9h.01M15 9h.01" />
      </>
    ),
  },
  {
    title: 'ปัดการ์ด',
    desc: 'ได้ทริปเลย',
    highlight: true,
    icon: (
      <>
        <rect x="4" y="3" width="13" height="18" rx="3" />
        <path d="M20 7v12a2 2 0 0 1-2 2" />
      </>
    ),
  },
]

export default function Steps() {
  return (
    <section className="mx-4 mt-[30px] grid grid-cols-3 gap-2.5 md:mx-auto md:w-full md:max-w-[608px] lg:mt-12 lg:max-w-[1056px] lg:gap-6">
      {STEPS.map((step) => (
        <div
          key={step.title}
          className="flex flex-col items-center gap-2 rounded-[22px] bg-white px-2.5 py-3.5 text-center lg:py-6"
        >
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full ${step.highlight ? 'bg-brown' : 'bg-[#FBE3D2]'}`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke={step.highlight ? '#FFFFFF' : '#C95F25'}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {step.icon}
            </svg>
          </div>
          <div className="text-sm font-semibold lg:text-base">{step.title}</div>
          <div className="text-xs text-muted lg:text-sm">{step.desc}</div>
        </div>
      ))}
    </section>
  )
}
