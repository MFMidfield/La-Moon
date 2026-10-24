import { useEffect, useState } from 'react'

export default function useMapData(load) {
  const [state, setState] = useState({ status: 'loading', data: null })
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    let alive = true
    load().then(
      data => { if (alive) setState({ status: 'done', data }) },
      () => { if (alive) setState({ status: 'error', data: null }) },
    )
    return () => { alive = false }
  }, [load, attempt])

  function retry() {
    setState({ status: 'loading', data: null })
    setAttempt(value => value + 1)
  }

  return { ...state, retry }
}
