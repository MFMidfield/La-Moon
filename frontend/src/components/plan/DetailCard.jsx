import { motion, useReducedMotion } from 'framer-motion'

export default function DetailCard({ title, icon, children }) {
  const reduced = useReducedMotion()
  return (
    <motion.section initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="rounded-[28px] bg-white p-[18px]">
      <div className="mb-3 flex min-h-10 items-center gap-2">
        <h2 className="m-0 flex items-center gap-2 text-base font-semibold"><span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FBE3D2] text-brown">{icon}</span>{title}</h2>
      </div>
      {children}
    </motion.section>
  )
}
