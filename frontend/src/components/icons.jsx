export function Moon({ size = 24, fill, className, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className} style={style}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" fill={fill} />
    </svg>
  )
}

export function Sparkle({ size = 24, fill, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" fill={fill} />
    </svg>
  )
}

export function Logo({ size = 24, className = '' }) {
  return (
    <div className={`flex items-center gap-1.5 font-bold text-brown ${className}`}>
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" fill="#E8793A" />
        <circle cx="18.5" cy="5" r="1.5" fill="#5A2E14" />
      </svg>
      LaMoon
    </div>
  )
}
