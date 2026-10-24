export default function MapStatus({ status, onRetry }) {
  if (status === 'loading') {
    return <p role="status" className="m-0 rounded-full bg-cream px-4 py-2.5 text-center text-sm text-muted">กำลังโหลดที่เที่ยว…</p>
  }

  return (
    <div role="alert" className="flex flex-col items-center gap-2 rounded-3xl bg-cream p-4 text-center text-sm text-muted">
      <p className="m-0">โหลดที่เที่ยวไม่สำเร็จ ลองอีกครั้งนะ</p>
      <button type="button" onClick={onRetry} className="min-h-11 cursor-pointer rounded-full bg-white px-5 font-medium text-brown focus-visible:outline-2 focus-visible:outline-brown">ลองใหม่</button>
    </div>
  )
}
