import { motion, useTransform } from 'framer-motion'

const TAP = { scale: 0.88 }
const SPRING = { type: 'spring', stiffness: 500, damping: 22 }

// ปุ่มใต้กองการ์ด: ข้าม · ย้อนการ์ด · อยากไป — ปุ่มขยายตามทิศที่ลาก (dragX)
export default function SwipeControls({ dragX, onSkip, onUndo, onLike, canUndo, disabled }) {
  const skipScale = useTransform(dragX, [-120, 0], [1.14, 1])
  const likeScale = useTransform(dragX, [0, 120], [1, 1.14])

  return (
    <div className="flex shrink-0 items-center justify-center gap-5 pb-2 pt-6">
      <motion.div style={{ scale: skipScale }}>
        <motion.button
          type="button"
          aria-label="ข้าม"
          title="ข้าม (←)"
          onClick={onSkip}
          disabled={disabled}
          whileTap={disabled ? undefined : TAP}
          transition={SPRING}
          className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F1A17" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </motion.button>
      </motion.div>

      <motion.button
        type="button"
        aria-label="ย้อนการ์ดก่อนหน้า"
        title="ย้อนการ์ด (Z)"
        onClick={onUndo}
        disabled={disabled || !canUndo}
        whileTap={disabled || !canUndo ? undefined : { rotate: -40, scale: 0.9 }}
        transition={SPRING}
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-35"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6E625A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 7v6h6" />
          <path d="M21 17a9 9 0 0 0-15-6.7L3 13" />
        </svg>
      </motion.button>

      <motion.div style={{ scale: likeScale }}>
        <motion.button
          type="button"
          aria-label="อยากไป"
          title="อยากไป (→)"
          onClick={onLike}
          disabled={disabled}
          whileTap={disabled ? undefined : TAP}
          transition={SPRING}
          className="flex h-[68px] w-[68px] cursor-pointer items-center justify-center rounded-full bg-brown disabled:cursor-not-allowed disabled:opacity-40"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  )
}
