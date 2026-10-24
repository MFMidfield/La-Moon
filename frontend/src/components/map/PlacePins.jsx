import { memo } from 'react'

function PlacePins({ pins, onChoose }) {
  return (
    <g data-pins="" style={{ display: 'none' }}>
      {pins.map(pin => (
        <g
          key={pin.id}
          transform={`translate(${pin.point[0]}, ${pin.point[1]})`}
          role="button"
          tabIndex={0}
          aria-label={pin.name}
          onClick={event => { event.stopPropagation(); onChoose(pin) }}
          onKeyDown={event => {
            if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.stopPropagation(); onChoose(pin) }
          }}
          className="group cursor-pointer outline-none"
        >
          <title>{pin.name}</title>
          <g data-pin-marker="">
            <circle r="22" fill="transparent" />
            <circle r="7" fill="#5A2E14" stroke="#FFFFFF" strokeWidth="2.5" className="group-focus-visible:stroke-orange group-focus-visible:stroke-[4]" />
          </g>
        </g>
      ))}
    </g>
  )
}

export default memo(PlacePins)
