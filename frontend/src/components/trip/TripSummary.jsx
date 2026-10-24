import { useCallback, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import ComboCard from './ComboCard'
import PlaceRow from './PlaceRow'
import BookingSheet from './BookingSheet'

const STEP = 0.05

// combo + รายการแยกวัน + sheet จอง (ใช้ทั้งหน้าสรุปทริปและทริปที่บันทึก)
export default function TripSummary({ days, combos }) {
  const reduce = useReducedMotion()
  const [bookPlace, setBookPlace] = useState(null)
  const [bookOpen, setBookOpen] = useState(false)

  const openBooking = useCallback((place) => {
    setBookPlace(place)
    setBookOpen(true)
  }, [])
  const closeBooking = useCallback(() => setBookOpen(false), [])

  const enter = (i) =>
    reduce
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, ease: 'easeOut', delay: i * STEP },
        }

  const offsets = days.map((_, d) => combos.length + days.slice(0, d).reduce((n, day) => n + day.length, 0))

  return (
    <>
      {combos.length > 0 && (
        <div className="mx-4 mt-4 flex flex-col gap-3">
          {combos.map((combo, i) => (
            <motion.div key={combo.id} {...enter(i)}>
              <ComboCard combo={combo} />
            </motion.div>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-col gap-6 px-4">
        {days.map((day, d) => (
          <section key={d} aria-labelledby={`day-${d}`} className="flex flex-col gap-1">
            <h2 id={`day-${d}`} className="m-0 px-1.5 text-lg font-bold">
              วันที่ {d + 1}
            </h2>
            <ol className="m-0 flex list-none flex-col gap-1 p-0">
              {day.map((place, i) => (
                <motion.li key={place.id} className="py-1.5" {...enter(offsets[d] + i)}>
                  <PlaceRow place={place} number={i + 1} onBook={openBooking} />
                </motion.li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <BookingSheet open={bookOpen} place={bookPlace} onClose={closeBooking} />
    </>
  )
}
