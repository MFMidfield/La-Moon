import { useEffect, useId, useRef, useState } from 'react'
import { geoContains } from 'd3-geo'
import { PROVINCES } from '../../data/options'

export default function OriginPicker({ value, onChange }) {
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
      <button type="button" onClick={locate} disabled={loading} className="min-h-11 cursor-pointer rounded-full border border-[#D9CFC5] bg-white px-4 text-sm font-semibold text-brown disabled:opacity-50">
        📍 {loading ? 'กำลังหาตำแหน่ง…' : 'ใช้ตำแหน่งปัจจุบัน'}
      </button>
      <button type="button" aria-expanded={open} aria-controls={`${id}-list`} aria-labelledby={`${id}-label ${id}-value`} onClick={() => setOpen(!open)} className="flex min-h-12 items-center justify-between rounded-[20px] bg-cream px-4 text-left text-sm">
        <span id={`${id}-value`}>{selected?.label ?? 'เลือกจังหวัดต้นทาง'}</span><span aria-hidden="true">⌄</span>
      </button>
      {open && (
        <div className="rounded-[22px] border border-[#EDE5DD] p-2">
          <input autoFocus value={search} onChange={e => setSearch(e.target.value)} aria-label="ค้นหาจังหวัดต้นทาง" placeholder="ค้นหาจังหวัด…" className="h-11 w-full rounded-full bg-cream px-4 text-base outline-none focus:ring-2 focus:ring-peach" />
          <div id={`${id}-list`} role="group" aria-label="จังหวัดต้นทาง" className="mt-1 max-h-52 overflow-y-auto overscroll-contain">
            {matches.map(p => <button key={p.id} type="button" aria-pressed={value === p.id} onClick={() => choose(p.id)} className={`flex min-h-11 w-full items-center justify-between rounded-[16px] px-4 text-left text-sm ${value === p.id ? 'bg-peach font-semibold' : 'hover:bg-cream'}`}>{p.label}<span aria-hidden="true">{value === p.id ? '✓' : ''}</span></button>)}
            {!matches.length && <p className="p-3 text-sm text-muted">ไม่พบจังหวัดนี้</p>}
          </div>
        </div>
      )}
      {status && <p role="status" className="m-0 text-xs leading-relaxed text-muted">{status}</p>}
    </div>
  )
}
