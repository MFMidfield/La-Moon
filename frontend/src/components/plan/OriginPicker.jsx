import { useEffect, useId, useRef, useState } from 'react'
import { geoContains } from 'd3-geo'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, ChevronDown, LocateFixed } from 'lucide-react'
import { PROVINCES } from '../../data/options'

export default function OriginPicker({ value, onChange }) {
  const reduced = useReducedMotion()
  const id = useId()
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const request = useRef(0)
  useEffect(() => () => { request.current += 1 }, [])
  const selected = PROVINCES.find(p => p.id === value)
  const matches = PROVINCES.filter(p => p.label.includes(search.trim()) || p.id.includes(search.trim().toLowerCase()))

  function choose(province) {
    request.current += 1
    setLoading(false)
    setOpen(false)
    setSearch('')
    setStatus('')
    onChange(province)
  }

  async function locate() {
    if (!navigator.geolocation) {
      setStatus('อุปกรณ์นี้ใช้ตำแหน่งไม่ได้ เลือกจังหวัดด้านล่างได้เลย')
      return
    }
    const token = ++request.current
    setLoading(true)
    setStatus('กำลังค้นหาตำแหน่ง…')
    try {
      const [position, { default: thailand }] = await Promise.all([
        new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: false, timeout: 12000, maximumAge: 60000 })),
        import('../../data/geo/thailand.json'),
      ])
      if (request.current !== token) return
      const point = [position.coords.longitude, position.coords.latitude]
      const province = thailand.features.find(feature => geoContains(feature, point))?.properties.id
      if (province) choose(province)
      else setStatus('ตำแหน่งอยู่นอกประเทศไทย หรือใกล้แนวชายฝั่ง ลองเลือกจังหวัดเอง')
    } catch (error) {
      if (request.current !== token) return
      setStatus(error.code === 1 ? 'ยังไม่ได้อนุญาตตำแหน่ง เลือกจังหวัดเองได้เลย' : 'ค้นหาตำแหน่งไม่สำเร็จ ลองอีกครั้งหรือเลือกจังหวัดเอง')
    } finally {
      if (request.current === token) setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-2.5">
      <label id={`${id}-label`} className="text-sm font-medium text-[#4A3A30]">คุณอยู่จังหวัดไหน?</label>
      <motion.button type="button" onClick={locate} disabled={loading} whileTap={reduced || loading ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} className="flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full border border-[#D9CFC5] bg-white px-4 text-sm font-semibold text-brown transition-colors duration-200 motion-reduce:transition-none disabled:opacity-50">
        <LocateFixed size={18} strokeWidth={2} aria-hidden="true" />{loading ? 'กำลังหาตำแหน่ง…' : 'ใช้ตำแหน่งปัจจุบัน'}
      </motion.button>
      <motion.button type="button" aria-expanded={open} aria-controls={`${id}-list`} aria-labelledby={`${id}-label ${id}-value`} onClick={() => setOpen(!open)} whileTap={reduced ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} className="flex min-h-12 items-center justify-between rounded-[20px] bg-cream px-4 text-left text-sm transition-colors duration-200 motion-reduce:transition-none">
        <span id={`${id}-value`}>{selected?.label ?? 'เลือกจังหวัดต้นทาง'}</span><motion.span aria-hidden="true" animate={{ rotate: open ? 180 : 0 }} transition={{ duration: reduced ? 0 : 0.2 }}><ChevronDown size={18} strokeWidth={2} /></motion.span>
      </motion.button>
      {open && (
        <div className="rounded-[22px] border border-[#EDE5DD] p-2">
          <input autoFocus value={search} onChange={e => setSearch(e.target.value)} aria-label="ค้นหาจังหวัดต้นทาง" placeholder="ค้นหาจังหวัด…" className="h-11 w-full rounded-full bg-cream px-4 text-base outline-none focus:ring-2 focus:ring-peach" />
          <div id={`${id}-list`} role="group" aria-label="จังหวัดต้นทาง" className="mt-1 max-h-52 overflow-y-auto overscroll-contain">
            {matches.map(p => <motion.button key={p.id} type="button" aria-pressed={value === p.id} onClick={() => choose(p.id)} whileTap={reduced ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} className={`flex min-h-11 w-full items-center justify-between rounded-[16px] px-4 text-left text-sm font-medium transition-colors duration-200 motion-reduce:transition-none ${value === p.id ? 'bg-peach' : 'hover:bg-cream'}`}>{p.label}<span aria-hidden="true" className="h-5 w-5 shrink-0"><AnimatePresence initial={false}>{value === p.id && <motion.span className="flex h-5 w-5 items-center justify-center rounded-full bg-brown text-white" initial={reduced ? false : { scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: reduced ? 1 : 0.6, opacity: 0 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }}><Check size={13} strokeWidth={2} /></motion.span>}</AnimatePresence></span></motion.button>)}
            {!matches.length && <p className="p-3 text-sm text-muted">ไม่พบจังหวัดนี้</p>}
          </div>
        </div>
      )}
      {status && <p role="status" className="m-0 text-xs leading-relaxed text-muted">{status}</p>}
    </div>
  )
}
