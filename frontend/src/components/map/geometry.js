import { geoMercator, geoPath } from 'd3-geo'
import thailand from '../../data/geo/thailand.json'
import { PROVINCES, REGIONS } from '../../data/options'

export const THAILAND = thailand
export const PROVINCE_BY_ID = Object.fromEntries(PROVINCES.map(province => [province.id, province]))
export const REGION_BY_ID = Object.fromEntries(REGIONS.map(region => [region.id, region]))
export const FEATURE_BY_ID = Object.fromEntries(thailand.features.map(feature => [feature.properties.id, feature]))

const countryProjection = geoMercator().fitExtent([[12, 50], [338, 472]], thailand)
const countryPath = geoPath(countryProjection).digits(2)
export const COUNTRY_PATHS = thailand.features.map(feature => ({
  id: feature.properties.id,
  d: countryPath(feature),
}))

export function placeCoordinates(place) {
  if (place.lat == null || place.lng == null || place.lat === '' || place.lng === '') return null
  const lat = Number(place.lat)
  const lng = Number(place.lng)
  return Number.isFinite(lat) && Number.isFinite(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180
    ? [lng, lat]
    : null
}

export function provinceGeometry(id, places) {
  const feature = FEATURE_BY_ID[id]
  const locatedPlaces = places.flatMap(place => {
    const coordinates = placeCoordinates(place)
    return coordinates ? [{ place, coordinates }] : []
  })
  const extent = {
    type: 'FeatureCollection',
    features: [feature, ...locatedPlaces.map(({ coordinates }) => ({ type: 'Feature', geometry: { type: 'Point', coordinates } }))],
  }
  const projection = geoMercator().fitExtent([[48, 90], [302, 402]], extent)
  const path = geoPath(projection).digits(2)
  return {
    selectedPath: path(feature),
    neighbours: thailand.features.filter(other => other !== feature).map(other => ({ id: other.properties.id, d: path(other) })),
    pins: locatedPlaces.map(({ place, coordinates }) => ({ ...place, point: projection(coordinates) })),
  }
}
