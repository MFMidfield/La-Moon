import { useEffect, useState } from 'react'

// โหลดข้อมูลครั้งเดียวตอนเข้าหน้า — load ต้องเป็นฟังก์ชันคงที่ (เช่น import จาก lib/api)
export default function useLoad(load) {
  const [state, setState] = useState({ status: 'loading', data: null })

  useEffect(() => {
    let alive = true
    load().then(
      (data) => alive && setState({ status: 'done', data }),
      (err) => {
        console.error('load failed', err)
        if (alive) setState({ status: 'error', data: null })
      },
    )
    return () => {
      alive = false
    }
  }, [load])

  return state
}
