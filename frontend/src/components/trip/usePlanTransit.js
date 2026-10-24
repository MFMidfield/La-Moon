import { useEffect, useMemo, useState } from 'react'
import { BKK_TRANSIT_PROVINCES } from '../../data/travel'
import { loadTransit, routeBetween, summarizeRoutes } from '../../lib/trip/transit'

export default function usePlanTransit(province, days) {
  const enabled = BKK_TRANSIT_PROVINCES.includes(province)
  const [result, setResult] = useState(null)
  const [attempt, setAttempt] = useState(0)
  useEffect(() => {
    if (!enabled) return
    let active = true
    loadTransit().then(
      net => { if (active) setResult({ net, attempt }) },
      () => { if (active) setResult({ error: true, attempt }) },
    )
    return () => { active = false }
  }, [enabled, attempt])
  const net = result?.attempt === attempt ? result.net : null
  const routed = useMemo(() => {
    if (!enabled || !net) return null
    const perDay = days.map(day => {
      const routes = day.items.slice(1).map((item, index) => routeBetween(net, day.items[index].place, item.place))
      return { routes, total: summarizeRoutes(routes) }
    })
    return { days: perDay, total: summarizeRoutes(perDay.flatMap(day => day.routes)) }
  }, [enabled, net, days])
  if (!enabled) return null
  return {
    ...routed, loading: !net && !(result?.attempt === attempt && result.error),
    error: result?.attempt === attempt && result.error,
    retry: () => setAttempt(value => value + 1),
  }
}
