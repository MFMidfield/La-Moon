const networks = new WeakMap()
let loading

function hasCoords(point) {
  return point != null && Number.isFinite(point.lat) && Number.isFinite(point.lng)
    && Math.abs(point.lat) <= 90 && Math.abs(point.lng) <= 180
}

function distanceKm(a, b) {
  if (!hasCoords(a) || !hasCoords(b)) return Infinity
  const rad = value => value * Math.PI / 180
  const h = Math.sin(rad(b.lat - a.lat) / 2) ** 2
    + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(rad(b.lng - a.lng) / 2) ** 2
  return 6371 * 2 * Math.asin(Math.sqrt(Math.min(1, h)))
}

function prepare(net) {
  if (networks.has(net)) return networks.get(net)
  const stations = new Map(net.stations.map(station => [station.id, station]))
  const graph = new Map(net.stations.map(station => [station.id, []]))
  function connect(from, to, edge) {
    if (!graph.has(from) || !graph.has(to) || from === to) return
    graph.get(from).push({ ...edge, from, to })
    graph.get(to).push({ ...edge, from: to, to: from })
  }
  for (const line of net.lines) {
    for (let i = 1; i < line.stations.length; i++) {
      connect(line.stations[i - 1], line.stations[i], {
        line, minutes: line.minutes_per_stop ?? (line.mode === 'boat' ? 5 : 2.5),
      })
    }
  }
  for (const transfer of net.transfers ?? []) {
    connect(transfer.from, transfer.to, { line: null, minutes: transfer.walk_minutes ?? 5 })
  }
  const prepared = { graph, stations, routes: new Map() }
  networks.set(net, prepared)
  return prepared
}

export async function loadTransit() {
  if (!loading) {
    loading = import('../../data/transit/bkk.json', { with: { type: 'json' } })
      .then(({ default: net }) => { prepare(net); return net })
      .catch(error => { loading = undefined; throw error })
  }
  return loading
}

export function nearestStation(net, point) {
  if (!hasCoords(point)) return null
  let nearest = null
  for (const station of net.stations) {
    const walkMinutes = distanceKm(point, station) * 1000 / 80
    if (walkMinutes <= 20 && (!nearest || walkMinutes < nearest.walkMinutes)) {
      nearest = { station, walkMinutes }
    }
  }
  return nearest
}

function shortestPath(graph, from, to) {
  const distances = new Map([[from, 0]])
  const previous = new Map()
  const visited = new Set()
  while (true) {
    let current = null
    let best = Infinity
    for (const [id, minutes] of distances) {
      if (!visited.has(id) && minutes < best) { current = id; best = minutes }
    }
    if (current === null) return null
    if (current === to) break
    visited.add(current)
    for (const edge of graph.get(current) ?? []) {
      const minutes = best + edge.minutes
      if (minutes < (distances.get(edge.to) ?? Infinity)) {
        distances.set(edge.to, minutes)
        previous.set(edge.to, edge)
      }
    }
  }
  const edges = []
  for (let id = to; id !== from;) {
    const edge = previous.get(id)
    edges.push(edge)
    id = edge.from
  }
  return { edges: edges.reverse(), minutes: distances.get(to) }
}

function legFare(fare, stops) {
  if (!Number.isFinite(fare?.min)) return null
  if (fare.type === 'flat') return fare.min
  if (!Number.isFinite(fare.max)) return null
  return Math.min(fare.max, Math.max(fare.min, fare.min + stops * (fare.per_stop ?? (fare.max - fare.min) / 15)))
}

function transitRoute(net, from, to) {
  const start = nearestStation(net, from)
  const end = nearestStation(net, to)
  if (!start || !end) return null
  const { graph, stations } = prepare(net)
  const path = shortestPath(graph, start.station.id, end.station.id)
  if (!path) return null
  const legs = []
  const transfers = []
  let leg = null
  for (const edge of path.edges) {
    if (!edge.line) {
      transfers.push({ afterLeg: legs.length - 1, fromStation: stations.get(edge.from), toStation: stations.get(edge.to), minutes: edge.minutes })
      leg = null
      continue
    }
    const line = edge.line
    if (!leg || leg.lineId !== line.id) {
      leg = { lineId: line.id, lineName: line.name_th, lineMode: line.mode, color: line.color, fromStation: stations.get(edge.from), toStation: stations.get(edge.to), stops: 0, minutes: 0, fareNotes: line.fare?.notes ?? null }
      legs.push(leg)
    }
    leg.toStation = stations.get(edge.to)
    leg.stops++
    leg.minutes += edge.minutes
    leg.fare = legFare(line.fare, leg.stops)
  }
  if (!legs.length) return null
  return {
    mode: 'transit', minutes: Math.ceil(start.walkMinutes + path.minutes + end.walkMinutes),
    fare: legs.some(item => item.fare === null) ? null : legs.reduce((sum, item) => sum + item.fare, 0),
    fareNotes: [...new Set(legs.map(item => item.fareNotes).filter(Boolean))],
    legs, transfers, walkStart: start.walkMinutes, walkEnd: end.walkMinutes,
  }
}

// Coordinates are part of the key so updated place locations never reuse stale routes.
export function routeBetween(net, from, to) {
  const { routes } = prepare(net)
  const key = JSON.stringify([from?.lat, from?.lng, to?.lat, to?.lng])
  if (routes.has(key)) return routes.get(key)
  const km = distanceKm(from, to)
  const roadKm = km * 1.3
  const baseFare = 35 + roadKm * 7
  const taxi = Number.isFinite(km)
    ? { mode: 'taxi', minutes: Math.ceil(roadKm / 25 * 60), fare: { min: Math.floor(baseFare * 0.8), max: Math.ceil(baseFare * 1.2) } }
    : { mode: 'taxi', minutes: null, fare: null, unavailable: true }
  const walkMinutes = km * 1000 / 80
  let chosen = taxi
  if (walkMinutes <= 15) chosen = { mode: 'walk', minutes: Math.ceil(walkMinutes), fare: 0 }
  else if (Number.isFinite(km)) {
    const transit = transitRoute(net, from, to)
    if (transit && transit.minutes <= taxi.minutes * 1.5) chosen = transit
  }
  const result = { ...chosen, taxi }
  routes.set(key, result)
  return result
}

// Transit fares are per person; taxi ranges are per vehicle and stay separate.
export function summarizeRoutes(routes) {
  const summary = { minutes: 0, transitFare: 0, unknownFare: false, unavailable: false, taxiMin: 0, taxiMax: 0 }
  for (const route of routes) {
    summary.minutes += route.minutes ?? 0
    summary.unavailable ||= Boolean(route.unavailable)
    if (route.mode === 'transit') {
      summary.unknownFare ||= route.fare === null
      summary.transitFare += route.legs.reduce((sum, leg) => sum + (leg.fare ?? 0), 0)
    } else if (route.mode === 'taxi' && route.fare) {
      summary.taxiMin += route.fare.min
      summary.taxiMax += route.fare.max
    }
  }
  return summary
}
