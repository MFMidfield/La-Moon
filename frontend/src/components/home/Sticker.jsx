import { motion, useReducedMotion } from 'framer-motion'

const LOOPS = {
  twinkle: { scale: [1, 0.6, 1], opacity: [1, 0.5, 1] },
  sway: { rotate: [0, 10, 0] },
}

// สติกเกอร์ตกแต่ง (พระจันทร์/ดาว) เด้งเข้า แล้วกระพริบ/แกว่งเบาๆ
export default function Sticker({ className = '', delay = 0, loop = 'twinkle', children }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      initial={reduce ? false : { opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, delay }}
    >
      <motion.div
        className="flex"
        animate={reduce ? undefined : LOOPS[loop]}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
