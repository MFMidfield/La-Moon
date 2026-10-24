import { motion, useReducedMotion } from 'framer-motion'

export default function DetailCard({ title, icon, lockKey, random, locked = [], onToggleLock, children }) {
  const reduced = useReducedMotion()
  const isLocked = locked.includes(lockKey)
  return (
    <motion.section initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="rounded-[28px] bg-white p-[18px]">
      <div className="mb-3 flex min-h-10 items-center justify-between gap-2">
        <h2 className="m-0 flex items-center gap-2 text-base font-semibold"><span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FBE3D2]">{icon}</span>{title}</h2>
        {random && lockKey && <button type="button" onClick={() => onToggleLock(lockKey)} aria-pressed={isLocked} aria-label={`${isLocked ? 'ปลดล็อก' : 'ล็อก'}${title}`} className={`flex h-11 min-w-11 items-center justify-center rounded-full px-2 text-base ${isLocked ? 'bg-peach' : 'bg-cream'}`}><span aria-hidden="true">{isLocked ? '🔒' : '🔓'}</span></button>}
      </div>
      {children}
    </motion.section>
  )
}
