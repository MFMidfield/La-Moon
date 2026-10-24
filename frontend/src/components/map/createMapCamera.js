import { select } from 'd3-selection'
import { zoom, zoomIdentity } from 'd3-zoom'
import 'd3-transition'
import { CENTER, PAN_EXTENT, PIN_ZOOM, SELECT_ZOOM, VIEW_EXTENT, fitTransform, provinceAt } from './geometry'

export default function createMapCamera({ svg, world, onView, onSettled, reducedMotion }) {
  const surface = select(svg)
  const layer = select(world)
  let transform = zoomIdentity
  let currentId = null
  let frame = 0
  let settled = 0
  let destroyed = false
  const behavior = zoom()
    .extent(VIEW_EXTENT)
    .scaleExtent([1, 24])
    .translateExtent(PAN_EXTENT)
    .touchable(() => true)
    .clickDistance(5)
    .tapDistance(10)
    .on('start.map', () => clearTimeout(settled))
    .on('zoom.map', event => {
      transform = event.transform
      clearTimeout(settled)
      refresh()
    })

  function draw() {
    frame = 0
    if (destroyed) return
    layer.attr('transform', transform.toString())
    const matrix = svg.getScreenCTM()
    const screenScale = matrix ? Math.hypot(matrix.a, matrix.b) : 1
    layer.selectAll('[data-pin-marker]').attr('transform', `scale(${1 / (transform.k * (screenScale || 1))})`)
    layer.select('[data-pins]').style('display', transform.k >= PIN_ZOOM ? null : 'none')
    const zoomed = transform.k >= SELECT_ZOOM
    currentId = zoomed ? provinceAt(transform.invert(CENTER), currentId) : null
    onView({ id: currentId, zoomed, pinsVisible: transform.k >= PIN_ZOOM, ready: true })
    clearTimeout(settled)
    settled = setTimeout(() => { if (!destroyed) onSettled(currentId) }, 300)
  }

  function refresh() {
    if (!frame && !destroyed) frame = requestAnimationFrame(draw)
  }

  function fly(target, animate = true, duration = 600) {
    clearTimeout(settled)
    surface.interrupt()
    const constrained = behavior.constrain()(target, VIEW_EXTENT, PAN_EXTENT)
    if (!animate || reducedMotion) surface.call(behavior.transform, constrained)
    else surface.transition().duration(duration).call(behavior.transform, constrained)
  }

  surface.call(behavior).on('dblclick.zoom', null)
  const observer = new ResizeObserver(refresh)
  observer.observe(svg)
  refresh()

  return {
    refresh,
    focusProvince(id, animate = true) { fly(fitTransform(id), animate) },
    focusRegion(id) { fly(fitTransform(id, true)) },
    reset(animate = true) { fly(zoomIdentity, animate) },
    zoomBy(factor) {
      surface.interrupt()
      if (reducedMotion) surface.call(behavior.scaleBy, factor, CENTER)
      else surface.transition().duration(220).call(behavior.scaleBy, factor, CENTER)
    },
    getTransform() { return transform },
    setReducedMotion(value) { reducedMotion = value; if (value) surface.interrupt() },
    destroy() {
      destroyed = true
      clearTimeout(settled)
      cancelAnimationFrame(frame)
      observer.disconnect()
      surface.interrupt().on('.zoom', null)
    },
  }
}
