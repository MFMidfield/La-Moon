import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

// แผ่นเลื่อนขึ้นจากล่าง (มือถือ) / dialog กลางจอ (desktop) — ปิดด้วย Esc, กดพื้นหลัง, ล็อก scroll หน้าหลัง
export default function BottomSheet({ open, onClose, labelledBy, className = '', children }) {
  const reduced = useReducedMotion()
  const sheetRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    sheetRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center lg:items-center">
          <motion.div
            className="absolute inset-0 bg-ink/40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduced ? { duration: 0 } : { duration: 0.2 }}
          />
          <motion.div
            ref={sheetRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            tabIndex={-1}
            className={`relative flex max-h-[85svh] w-full flex-col rounded-t-[32px] bg-white outline-none lg:max-w-[560px] lg:rounded-[32px] ${className}`}
            initial={reduced ? false : { y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { y: '100%', opacity: 0 }}
            transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 32 }}
          >
            <div className="mx-auto mt-2.5 h-1 w-10 shrink-0 rounded-full bg-[#EDE5DD] lg:hidden" />
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
