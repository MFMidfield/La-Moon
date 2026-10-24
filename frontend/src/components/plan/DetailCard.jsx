import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Lock, LockOpen } from 'lucide-react'

export default function DetailCard({ title, icon, lockKey, random, locked = [], onToggleLock, children }) {
  const reduced = useReducedMotion()
  const isLocked = locked.includes(lockKey)
  return (
    <motion.section initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="rounded-[28px] bg-white p-[18px]">
      <div className="mb-3 flex min-h-10 items-center justify-between gap-2">
        <h2 className="m-0 flex items-center gap-2 text-base font-semibold"><span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FBE3D2] text-brown">{icon}</span>{title}</h2>
        {random && lockKey && <motion.button type="button" onClick={() => onToggleLock(lockKey)} aria-pressed={isLocked} aria-label={`${isLocked ? 'ปลดล็อก' : 'ล็อก'}${title}`} whileTap={reduced ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-brown transition-colors duration-200 motion-reduce:transition-none ${isLocked ? 'bg-peach' : 'bg-cream'}`}><AnimatePresence initial={false} mode="wait"><motion.span key={isLocked ? 'locked' : 'open'} aria-hidden="true" initial={reduced ? false : { opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: reduced ? 1 : 0.6 }} transition={{ duration: reduced ? 0 : 0.1 }}>{isLocked ? <Lock size={18} strokeWidth={2} /> : <LockOpen size={18} strokeWidth={2} />}</motion.span></AnimatePresence></motion.button>}
      </div>
      {children}
    </motion.section>
  )
}
