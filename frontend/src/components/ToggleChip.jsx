import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, Plus } from 'lucide-react'

export default function ToggleChip({ selected, onClick, children }) {
  const reduced = useReducedMotion()
  return (
    <motion.button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      whileTap={reduced ? undefined : { scale: 0.96 }}
      transition={{ type: 'spring', duration: 0.22, bounce: 0.2 }}
      className={`flex h-10 cursor-pointer items-center gap-1.5 rounded-full px-3.5 text-sm font-medium transition-colors duration-200 ${selected ? 'bg-brown text-white' : 'bg-cream text-ink'}`}
    >
      <span className="relative flex h-3.5 w-3.5 shrink-0 items-center justify-center" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.span key={selected ? 'check' : 'plus'} initial={reduced ? false : { scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: reduced ? 1 : 0.6, opacity: 0 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2, bounce: 0.15 }} className={`absolute inset-0 ${selected ? 'text-white' : 'text-muted'}`}>
            {selected ? <Check size={14} strokeWidth={2.2} /> : <Plus size={14} strokeWidth={2} />}
          </motion.span>
        </AnimatePresence>
      </span>
      {children}
    </motion.button>
  )
}
