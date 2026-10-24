import { ChevronRight } from 'lucide-react'
import SlideLink from '../SlideLink'
import { Sparkle } from '../icons'

export function PersonalityChipSkeleton() {
  return <div className="mx-4 mt-4 h-14 animate-pulse rounded-full bg-white/70" aria-hidden="true" />
}

// chip ขาว "บุคลิกการเที่ยว: …" → /personality
export default function PersonalityChip({ title }) {
  return (
    <SlideLink
      to="/personality"
      className="mx-4 mt-4 flex h-14 items-center gap-2.5 rounded-full bg-white pl-2.5 pr-4 text-[15px]"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FBE3D2]">
        <Sparkle size={18} fill="#E8793A" />
      </span>
      <span className="min-w-0 grow truncate">
        <span className="text-[#4A3A30]">บุคลิกการเที่ยว: </span>
        <span className="font-semibold text-brown">{title}</span>
      </span>
      <ChevronRight size={18} strokeWidth={2} className="shrink-0 text-muted" aria-hidden="true" />
    </SlideLink>
  )
}
