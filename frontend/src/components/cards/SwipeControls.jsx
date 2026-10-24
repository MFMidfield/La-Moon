import { Bookmark, Heart, Undo2, X } from 'lucide-react'
import { motion, useReducedMotion, useTransform } from 'framer-motion'

const TAP = { scale: 0.966 }
const SPRING = { type: 'spring', stiffness: 500, damping: 22 }

// ปุ่มใต้กองการ์ด: ข้าม · ย้อนการ์ด · เก็บไว้ก่อน · ชอบ — ปุ่มขยายตามทิศที่ลาก (dragX / dragY)
// canSave=false (รอบสอง) → ปุ่มเก็บไว้ก่อนซ่อน (คงที่ไว้ ไม่ให้ปุ่มอื่นขยับ)
export default function SwipeControls({ dragX, dragY, onSkip, onUndo, onSave, onLike, canUndo, canSave, disabled, likeLabel = 'อยากไป' }) {
  const reduce = useReducedMotion()
  const skipScale = useTransform(dragX, [-120, 0], [1.14, 1])
  const likeScale = useTransform(dragX, [0, 120], [1, 1.14])
  const saveScale = useTransform(dragY, [-120, 0], [1.14, 1])

  return (
    <div className="flex shrink-0 items-center justify-center gap-4 pb-1 pt-3">
      <motion.div style={{ scale: reduce ? 1 : skipScale }}>
        <motion.button
          type="button"
          aria-label="ข้าม"
          title="ข้าม (ปุ่มลูกศรซ้าย)"
          onClick={onSkip}
          disabled={disabled}
          whileTap={disabled || reduce ? undefined : TAP}
          transition={reduce ? { duration: 0 } : SPRING}
          className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          <X size={24} strokeWidth={2} className="text-ink" aria-hidden="true" />
        </motion.button>
      </motion.div>

      <motion.button
        type="button"
        aria-label="ย้อนการ์ดก่อนหน้า"
        title="ย้อนการ์ด (Z)"
        onClick={onUndo}
        disabled={disabled || !canUndo}
        whileTap={disabled || !canUndo || reduce ? undefined : { rotate: -40, scale: 0.96 }}
        transition={reduce ? { duration: 0 } : SPRING}
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-35"
      >
        <Undo2 size={20} strokeWidth={2} className="text-muted" aria-hidden="true" />
      </motion.button>

      <motion.div style={{ scale: reduce ? 1 : saveScale }} className={canSave ? undefined : 'invisible'} aria-hidden={canSave ? undefined : true}>
        <motion.button
          type="button"
          aria-label="เก็บไว้ก่อน"
          title="เก็บไว้ก่อน (ปุ่มลูกศรขึ้น)"
          onClick={onSave}
          disabled={disabled || !canSave}
          tabIndex={canSave ? undefined : -1}
          whileTap={disabled || reduce ? undefined : TAP}
          transition={reduce ? { duration: 0 } : SPRING}
          className="flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Bookmark size={22} strokeWidth={2} className="text-brown" aria-hidden="true" />
        </motion.button>
      </motion.div>

      <motion.div style={{ scale: reduce ? 1 : likeScale }}>
        <motion.button
          type="button"
          aria-label={likeLabel}
          title={`${likeLabel} (ปุ่มลูกศรขวา)`}
          onClick={onLike}
          disabled={disabled}
          whileTap={disabled || reduce ? undefined : TAP}
          transition={reduce ? { duration: 0 } : SPRING}
          className="flex h-[68px] w-[68px] cursor-pointer items-center justify-center rounded-full bg-brown disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Heart size={28} strokeWidth={2} className="text-white" aria-hidden="true" />
        </motion.button>
      </motion.div>
    </div>
  )
}
