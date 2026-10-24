// ไอคอนเส้นแบบ Lucide ต่อ mood id
const PATHS = {
  beach: (
    <>
      <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <circle cx="17" cy="6" r="2.5" />
    </>
  ),
  mountain: <path d="M8 4l4 8 4-4 6 12H2z" />,
  food: (
    <>
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </>
  ),
  temple: (
    <>
      <path d="M4 21V10l8-6 8 6v11" />
      <path d="M10 21v-6h4v6" />
    </>
  ),
  quiet: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />,
  photo: (
    <>
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z" />
      <circle cx="12" cy="13" r="3" />
    </>
  ),
  adventure: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z" />
    </>
  ),
}

export default function MoodIcon({ id, size = 22, color = '#1F1A17' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[id]}
    </svg>
  )
}
