import { Check } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export default function TermsCheckbox({ checked, onChange, onOpenDoc }) {
  const reduced = useReducedMotion()
  return (
    <div className="mx-[22px] mt-[18px] flex items-start gap-3">
      <span className="relative mt-0.5 flex h-6 w-6 shrink-0">
        <input
          id="accept-terms"
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer absolute inset-0 m-0 cursor-pointer opacity-0"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none flex h-6 w-6 items-center justify-center rounded-lg border-[1.5px] border-[#D9CFC5] bg-white transition-colors duration-200 peer-checked:border-brown peer-checked:bg-brown peer-focus-visible:ring-2 peer-focus-visible:ring-orange"
        >
          <AnimatePresence initial={false}>
            {checked && (
              <motion.span
                key="check"
                className="flex text-white"
                initial={reduced ? false : { scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={reduced ? { opacity: 0 } : { scale: 0.6, opacity: 0 }}
                transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 26 }}
              >
                <Check size={14} strokeWidth={2} aria-hidden="true" />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </span>
      <span className="text-sm leading-[1.6] text-[#4A3A30]">
        <label htmlFor="accept-terms" className="cursor-pointer">
          ฉันยอมรับ
        </label>{' '}
        <button type="button" onClick={() => onOpenDoc('terms')} className="cursor-pointer text-brown underline hover:text-ink">
          ข้อตกลงการใช้งาน
        </button>{' '}
        และ{' '}
        <button type="button" onClick={() => onOpenDoc('privacy')} className="cursor-pointer text-brown underline hover:text-ink">
          นโยบายความเป็นส่วนตัว
        </button>
      </span>
    </div>
  )
}
