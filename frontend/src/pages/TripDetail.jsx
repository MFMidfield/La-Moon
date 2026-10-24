import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import BottomSheet from '../components/BottomSheet'
import SlideLink, { slideNavigate } from '../components/SlideLink'
import TripSummary from '../components/trip/TripSummary'
import { TripLoading, TripMessage } from '../components/trip/TripStates'
import { PRIMARY_BUTTON, TEXT_LINK } from '../components/trip/styles'
import { MOODS, PROVINCES } from '../data/options'
import { getPlacesByIds } from '../lib/api/places'
import { deleteTrip, getTrip } from '../lib/api/trips'
import { findCombos } from '../lib/trip/combos'

async function loadTrip(id) {
  const trip = await getTrip(id)
  if (!trip) return { notFound: true }
  const groups = trip.days ?? []
  const places = await getPlacesByIds(groups.flat())
  const byId = Object.fromEntries(places.map((p) => [p.id, p]))
  const days = groups.map((ids) => ids.map((pid) => byId[pid]).filter(Boolean)).filter((d) => d.length)
  return { trip, days, combos: findCombos(places), count: places.length }
}

// ทริปที่บันทึกแล้ว
export default function TripDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [attempt, setAttempt] = useState(0)
  const requestKey = `${id}#${attempt}`
  const [result, setResult] = useState(null)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [deleteError, setDeleteError] = useState('')

  useEffect(() => {
    let cancelled = false
    loadTrip(id)
      .then((data) => !cancelled && setResult({ key: requestKey, ...data }))
      .catch((err) => {
        console.error('load trip failed', err)
        if (!cancelled) setResult({ key: requestKey, error: true })
      })
    return () => {
      cancelled = true
    }
  }, [id, requestKey])

  const closeConfirm = useCallback(() => {
    if (!deleting) setConfirmOpen(false)
  }, [deleting])

  async function handleDelete() {
    setDeleting(true)
    setDeleteError('')
    try {
      await deleteTrip(id)
      slideNavigate(navigate, '/home', { back: true, replace: true })
    } catch (err) {
      console.error('delete trip failed', err)
      setDeleteError('ลบไม่สำเร็จ ลองใหม่อีกครั้ง')
      setDeleting(false)
    }
  }

  const current = result?.key === requestKey ? result : null
  const trip = current?.trip
  const provinceLabel = trip ? (PROVINCES.find((p) => p.id === trip.province)?.label ?? trip.province) : ''
  const crumb = trip
    ? new Date(trip.created_at).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' })
    : undefined

  let body
  if (!current) {
    body = <TripLoading label="กำลังโหลดทริป…" />
  } else if (current.error) {
    body = (
      <TripMessage title="โหลดทริปไม่สำเร็จ" body="เช็กอินเทอร์เน็ตแล้วลองใหม่อีกครั้ง">
        <button type="button" onClick={() => setAttempt((a) => a + 1)} className={PRIMARY_BUTTON}>
          ลองใหม่
        </button>
      </TripMessage>
    )
  } else if (current.notFound) {
    body = (
      <TripMessage title="ไม่พบทริปนี้" body="ทริปอาจถูกลบไปแล้ว หรือลิงก์ไม่ถูกต้อง">
        <SlideLink to="/home" back replace className={PRIMARY_BUTTON}>
          กลับหน้าหลัก
        </SlideLink>
      </TripMessage>
    )
  } else {
    const moodLabels = (trip.moods ?? []).map((m) => MOODS.find((x) => x.id === m)?.label ?? m)
    body = (
      <>
        <p className="m-0 px-[22px] pt-2 text-[15px] text-[#4A3A30]">
          {current.count} ที่ · {current.days.length} วัน
          {moodLabels.length > 0 && ` · ${moodLabels.join(', ')}`}
        </p>

        {current.days.length > 0 ? (
          <TripSummary days={current.days} combos={current.combos} />
        ) : (
          <p className="m-0 px-[22px] pt-6 text-[15px] text-muted">สถานที่ในทริปนี้ถูกนำออกจากระบบแล้ว</p>
        )}

        <div className="grow" />

        <div className="flex flex-col items-center gap-1 px-4 pb-7 pt-8">
          <SlideLink to="/personality" className={TEXT_LINK}>
            ดูบุคลิกการเที่ยวของคุณ ›
          </SlideLink>
          <button
            type="button"
            onClick={() => setConfirmOpen(true)}
            className="h-11 cursor-pointer px-4 text-sm font-semibold text-[#C0392B]"
          >
            ลบทริปนี้
          </button>
        </div>

        <BottomSheet open={confirmOpen} onClose={closeConfirm} labelledBy="delete-title">
          <div className="flex flex-col gap-1.5 px-[22px] pt-5 text-center">
            <h2 id="delete-title" className="m-0 text-xl font-bold">
              ลบทริปนี้ไหม?
            </h2>
            <p className="m-0 text-sm leading-[1.6] text-[#4A3A30]">ลบแล้วกู้คืนไม่ได้</p>
            {deleteError && (
              <p role="alert" className="m-0 text-[13px] text-[#C0392B]">
                {deleteError}
              </p>
            )}
          </div>
          <div className="flex gap-2.5 px-4 pb-7 pt-5 lg:pb-5">
            <button
              type="button"
              onClick={closeConfirm}
              disabled={deleting}
              className="h-[54px] flex-1 cursor-pointer rounded-full border-[1.5px] border-[#D9CFC5] bg-white text-base font-semibold text-ink disabled:opacity-60"
            >
              ยกเลิก
            </button>
            <button
              type="button"
              onClick={handleDelete}
              disabled={deleting}
              className="h-[54px] flex-1 cursor-pointer rounded-full bg-brown text-base font-semibold text-white disabled:opacity-60"
            >
              {deleting ? 'กำลังลบ…' : 'ลบ'}
            </button>
          </div>
        </BottomSheet>
      </>
    )
  }

  return (
    <div className="mx-auto flex min-h-svh w-full max-w-[560px] flex-col bg-cream text-ink">
      <AppHeader title={trip ? `ทริป${provinceLabel}` : 'ทริปของฉัน'} crumb={crumb} backTo="/home" />
      {body}
    </div>
  )
}
