import { Sparkle } from '../icons'

export default function ComboCard({ combo }) {
  return (
    <div className="relative rounded-[28px] bg-brown px-5 py-4 text-white">
      <span className="absolute -top-2.5 right-5 rotate-12">
        <Sparkle size={26} fill="#E8793A" />
      </span>
      <span className="absolute right-12 top-3">
        <Sparkle size={12} fill="#F9D9C2" />
      </span>
      <div className="flex items-center gap-2 pr-10">
        <span className="shrink-0 text-xs font-semibold tracking-[0.12em] text-peach">✦ COMBO</span>
        <span className="truncate text-lg font-bold">{combo.title}</span>
      </div>
      <p className="m-0 mt-1 text-sm leading-[1.6] text-white/80">{combo.description}</p>
    </div>
  )
}
