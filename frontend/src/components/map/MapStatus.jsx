import { motion, useReducedMotion } from 'framer-motion'

export default function MapStatus({ status, onRetry }) {
  const reducedMotion = useReducedMotion()
  if (status === 'loading') {
    return <p role="status" className="m-0 rounded-full bg-cream px-4 py-2.5 text-center text-sm text-muted">กำลังโหลดที่เที่ยว…</p>
  }

  return (
    <div role="alert" className="flex flex-col items-center gap-2 rounded-3xl bg-cream p-4 text-center text-sm text-muted">
      <p className="m-0">โหลดที่เที่ยวไม่สำเร็จ ลองอีกครั้งนะ</p>
      <motion.button type="button" onClick={onRetry} whileTap={reducedMotion ? undefined : { scale: 0.96 }} transition={reducedMotion ? { duration: 0 } : { type: 'spring', duration: 0.25, bounce: 0.12 }} className="min-h-11 cursor-pointer rounded-full bg-white px-5 font-medium text-brown transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brown">ลองใหม่</motion.button>
    </div>
  )
}
