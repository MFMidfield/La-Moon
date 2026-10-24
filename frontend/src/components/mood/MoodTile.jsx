import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import MoodIcon from './MoodIcon'

export default function MoodTile({ mood, selected, disabled, onClick }) {
  const reduced = useReducedMotion()
  return (
    <motion.button
      type="button"
      aria-pressed={selected}
      disabled={disabled}
      onClick={onClick}
      whileTap={reduced || disabled ? undefined : { scale: 0.96 }}
      transition={{ type: 'spring', duration: 0.22, bounce: 0.2 }}
      className={`relative flex h-[108px] min-w-0 cursor-pointer flex-col justify-between rounded-3xl p-3.5 text-left transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-40 ${selected ? 'bg-peach' : 'bg-white'}`}
    >
      <span className={`flex h-[42px] w-[42px] items-center justify-center rounded-full transition-colors duration-200 ${selected ? 'bg-white text-[#C95F25]' : 'bg-cream text-ink'}`}>
        <MoodIcon id={mood.id} />
      </span>
      <span className="text-base font-medium">{mood.label}</span>
      <AnimatePresence initial={false}>
        {selected && (
          <motion.span key="selected" initial={reduced ? false : { scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: reduced ? 1 : 0.6, opacity: 0 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.22, bounce: 0.2 }} className="absolute right-3.5 top-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-brown text-white">
            <Check size={14} strokeWidth={2.2} aria-hidden="true" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
