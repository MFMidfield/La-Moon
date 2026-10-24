import { TRANSPORT_TO } from '../../data/travel'
import { formatBaht } from '../../lib/trip/budget'
import { thaiDate } from './itinerary'

export default function TripOverview({ trip, days, nights, people }) {
  const start = trip.startDate ?? trip.start_date
  const end = trip.endDate ?? trip.end_date
  const transport = trip.transportTo ?? trip.transport_to
  const hasTransport = 'transportTo' in trip || 'transport_to' in trip
  const summary = [`${days} วัน ${nights} คืน`, ...(trip.travelers ? [`${people} คน`] : []), ...(hasTransport ? [TRANSPORT_TO.find(t => t.id === transport)?.label ?? 'เที่ยวในจังหวัด'] : [])].join(' · ')
  return (
    <div className="rounded-[28px] bg-peach p-5">
      {start && <p className="m-0 text-lg font-semibold">{thaiDate(start)}{end && end !== start ? ` – ${thaiDate(end)}` : ''}</p>}
      <p className="m-0 mt-1 text-sm text-[#4A3A30]">{summary}</p>
      {trip.travelers && <p className="m-0 mt-1 text-xs text-muted">ผู้ใหญ่ {trip.travelers.adults} คน{trip.travelers.children ? ` · เด็ก ${trip.travelers.children} คน` : ''}</p>}
      {typeof trip.budget === 'object' && trip.budget && <p className="m-0 mt-3 text-sm font-medium">งบ {formatBaht(trip.budget.min)} – {formatBaht(trip.budget.max)} {trip.budget.per === 'person' ? 'ต่อคน' : 'ทั้งทริป'}</p>}
    </div>
  )
}
