import { geoBounds, geoCentroid, geoContains, geoMercator, geoPath } from 'd3-geo'
import { zoomIdentity } from 'd3-zoom'
import thailand from '../../data/geo/thailand.json'
import { PROVINCES, REGIONS } from '../../data/options'

export const MAP_WIDTH = 400
export const MAP_HEIGHT = 600
export const CENTER = [MAP_WIDTH / 2, MAP_HEIGHT / 2]
export const VIEW_EXTENT = [[0, 0], [MAP_WIDTH, MAP_HEIGHT]]
export const SELECT_ZOOM = 2.5
export const PIN_ZOOM = 3
export const PROVINCE_BY_ID = Object.fromEntries(PROVINCES.map(province => [province.id, province]))
export const REGION_BY_ID = Object.fromEntries(REGIONS.map(region => [region.id, region]))
export const FEATURES = thailand.features
export const FEATURE_BY_ID = new Map(FEATURES.map(feature => [feature.properties.id, feature]))
export const projection = geoMercator().fitExtent([[24, 24], [MAP_WIDTH - 24, MAP_HEIGHT - 24]], thailand)
const path = geoPath(projection).digits(2)
const countryBounds = path.bounds(thailand)
export const PAN_EXTENT = [
  [countryBounds[0][0] - 100, countryBounds[0][1] - 150],
  [countryBounds[1][0] + 100, countryBounds[1][1] + 150],
]
export const COUNTRY_PATHS = FEATURES.map(feature => ({ id: feature.properties.id, d: path(feature) }))
export const PATH_BY_ID = new Map(COUNTRY_PATHS.map(province => [province.id, province.d]))
const geographicBounds = new Map(FEATURES.map(feature => [feature.properties.id, geoBounds(feature)]))

function inside(feature, coordinates) {
  const [[west, south], [east, north]] = geographicBounds.get(feature.properties.id)
  return coordinates[0] >= west && coordinates[0] <= east && coordinates[1] >= south && coordinates[1] <= north && geoContains(feature, coordinates)
}

export function provinceAt(point, previousId) {
  const coordinates = projection.invert(point)
  const previous = FEATURE_BY_ID.get(previousId)
  if (previous && inside(previous, coordinates)) return previousId
  return FEATURES.find(feature => inside(feature, coordinates))?.properties.id ?? null
}

function interiorCenter(feature, bounds) {
  const center = [(bounds[0][0] + bounds[1][0]) / 2, (bounds[0][1] + bounds[1][1]) / 2]
  if (geoContains(feature, projection.invert(center))) return center
  let best = projection(geoCentroid(feature))
  let distance = geoContains(feature, projection.invert(best)) ? Math.hypot(best[0] - center[0], best[1] - center[1]) : Infinity
  for (let x = 1; x < 24; x++) for (let y = 1; y < 24; y++) {
    const point = [bounds[0][0] + (bounds[1][0] - bounds[0][0]) * x / 24, bounds[0][1] + (bounds[1][1] - bounds[0][1]) * y / 24]
    const delta = Math.hypot(point[0] - center[0], point[1] - center[1])
    if (delta < distance && geoContains(feature, projection.invert(point))) { best = point; distance = delta }
  }
  return best
}

const provinceViews = new Map(FEATURES.map(feature => {
  const bounds = path.bounds(feature)
  return [feature.properties.id, { bounds, center: interiorCenter(feature, bounds) }]
}))
const regionViews = new Map(REGIONS.map(region => {
  const features = FEATURES.filter(feature => PROVINCE_BY_ID[feature.properties.id].region === region.id)
  const bounds = path.bounds({ type: 'FeatureCollection', features })
  return [region.id, { bounds, center: [(bounds[0][0] + bounds[1][0]) / 2, (bounds[0][1] + bounds[1][1]) / 2] }]
}))

export function fitTransform(id, region = false) {
  const view = (region ? regionViews : provinceViews).get(id)
  if (!view) return zoomIdentity
  const { bounds, center } = view
  const halfWidth = Math.max(center[0] - bounds[0][0], bounds[1][0] - center[0])
  const halfHeight = Math.max(center[1] - bounds[0][1], bounds[1][1] - center[1])
  const scale = Math.max(region ? 1 : SELECT_ZOOM + 0.1, Math.min(24, (MAP_WIDTH / 2 - 44) / halfWidth, (MAP_HEIGHT / 2 - 64) / halfHeight))
  return zoomIdentity.translate(...CENTER).scale(scale).translate(-center[0], -center[1])
}

export function placeCoordinates(place) {
  if (place.lat == null || place.lng == null || place.lat === '' || place.lng === '') return null
  const lat = Number(place.lat)
  const lng = Number(place.lng)
  return Number.isFinite(lat) && Number.isFinite(lng) && Math.abs(lat) < 90 && Math.abs(lng) <= 180 ? [lng, lat] : null
}

export function projectPlaces(places) {
  return places.flatMap(place => {
    const coordinates = placeCoordinates(place)
    return coordinates ? [{ ...place, point: projection(coordinates) }] : []
  })
}
