import { Bookmark, ChevronRight } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, MotionConfig, useMotionValue, useReducedMotion } from 'framer-motion'
import {
  applySwipe,
  canSave as roundCanSave,
  createRounds,
  currentId,
  isDone,
  needsRound2,
  startRound2,
  undoSwipe,
} from '../../lib/trip/swipeRounds'
import { DeckMessage } from './DeckStates'
import RoundIntro from './RoundIntro'
import SwipeControls from './SwipeControls'
import SwipeDeck from './SwipeDeck'
import { PRIMARY_BUTTON } from './swipeHelpers'

// ลิงก์ข้อความใต้ปุ่ม (สรุปเลย / ข้ามขั้นนี้)
export function FooterLink({ onClick, disabled, children }) {
  const reduced = useReducedMotion()
  return (
    <motion.button
      whileTap={reduced ? undefined : { scale: 0.96 }}
      transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 28 }}
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex h-11 cursor-pointer items-center gap-1 px-4 text-sm font-semibold text-brown transition-colors duration-200 disabled:opacity-30"
    >
      {children} <ChevronRight size={17} strokeWidth={2} aria-hidden="true" />
    </motion.button>
  )
}

function preload(url) {
  if (!url) return
  const img = new Image()
  img.referrerPolicy = 'no-referrer'
  img.src = url
}

// ใช้สถานะที่เคยบันทึกไว้ได้ก็ต่อเมื่อยังตรงกับการ์ดชุดนี้
function initRounds(items, saved) {
  const ids = new Set(items.map((i) => i.id))
  const ok =
    saved &&
    Array.isArray(saved.queue) &&
    Array.isArray(saved.history) &&
    Array.isArray(saved.liked) &&
    saved.queue.length > 0 &&
    saved.queue.every((id) => ids.has(id)) &&
    (saved.round === 2 || saved.queue.length === ids.size)
  return ok ? saved : createRounds(items.map((i) => i.id))
}

/**
 * หน้าปัดทุกหมวดที่ใช้กติกาเดียวกัน: ขวา = ชอบ, ซ้าย = ข้าม, ขึ้น = เก็บไว้ก่อน → รอบสอง
 * เต็มจอ h-dvh ไม่เลื่อน: header + (hint/ตัวนับ) + กองการ์ด (ยืดตามที่เหลือ) + ปุ่ม + footer
 *
 * items: การ์ดทั้งชุด (มี .id) หรือ null = กำลังโหลด ; fallback: node แทนกอง (error / ว่าง)
 * renderCard(item) → เนื้อการ์ด ; holoOf / labelOf ; noun = หน่วยนับ ("ใบ")
 * initialState / onStateChange(rs): เก็บ-คืนสถานะปัด (สถานะตามรูปแบบ swipeRounds)
 * onDecide(item, 'right'|'left', round): ตัดสินใจจริง (ปัดขึ้นในรอบ 1 ยังไม่นับ)
 * onDone(likedIds): ปัดครบทุกรอบ หรือกดสรุปก่อน ; finishLabel(likedCount) → ข้อความลิงก์สรุปก่อน ; footer = node แทนลิงก์นั้น
 */
export default function SwipeStage({
  items,
  renderCard,
  holoOf,
  labelOf,
  noun = 'ใบ',
  loadingLabel,
  likeLabel,
  initialState,
  onStateChange,
  onDecide,
  onDone,
  header,
  hint,
  finishLabel,
  footer,
  fallback,
  doneTitle = 'เลือกการ์ดครบแล้ว',
  doneBody,
  doneButton = 'ไปต่อ',
}) {
  const reduced = useReducedMotion()
  const deckRef = useRef(null)
  const dragX = useMotionValue(0)
  const dragY = useMotionValue(0)
  const [returning, setReturning] = useState(null)

  // เริ่มสถานะปัดใหม่ทุกครั้งที่ชุดการ์ดเปลี่ยน (ปรับ state ตอน render ตามแพตเทิร์นของ React)
  const itemsKey = items ? items.map((i) => i.id).join(',') : null
  const [rs, setRs] = useState(null)
  const [seenKey, setSeenKey] = useState(undefined)
  if (seenKey !== itemsKey) {
    setSeenKey(itemsKey)
    setRs(items ? initRounds(items, initialState) : null)
  }

  const byId = useMemo(() => Object.fromEntries((items ?? []).map((i) => [i.id, i])), [items])
  const queueItems = useMemo(() => (rs ? rs.queue.map((id) => byId[id]).filter(Boolean) : null), [rs, byId])

  useEffect(() => {
    if (rs) preload(byId[rs.queue[rs.index + 2]]?.image_url)
  }, [rs, byId])

  function commit(next) {
    setRs(next)
    onStateChange?.(next)
  }

  function handleSwiped(dir) {
    const item = byId[currentId(rs)]
    if (!item) return
    const next = applySwipe(rs, dir)
    if (next === rs) return
    setReturning(null)
    if (dir !== 'up') onDecide?.(item, dir, rs.round)
    commit(next)
    if (isDone(next)) onDone(next.liked)
  }

  function undo() {
    if (!rs || deckRef.current?.busy()) return
    const last = rs.history.at(-1)
    const next = undoSwipe(rs)
    if (next === rs) return
    setReturning({ id: last.id, dir: last.dir })
    commit(next)
  }

  function beginRound2() {
    setReturning(null)
    commit(startRound2(rs))
  }

  const finish = () => {
    if (!deckRef.current?.busy()) onDone(rs?.liked ?? [])
  }

  const swipe = (dir) => deckRef.current?.swipe(dir)

  const actions = useRef(null)
  useEffect(() => {
    actions.current = { swipe, undo }
  })

  useEffect(() => {
    function onKey(e) {
      if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return
      if (e.target.closest?.('input, textarea, select, [contenteditable="true"]')) return
      const act = actions.current
      if (!act) return
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        e.preventDefault()
        act.swipe(e.key === 'ArrowRight' ? 'right' : e.key === 'ArrowLeft' ? 'left' : 'up')
      } else if (e.key === 'Backspace' || e.key === 'z' || e.key === 'Z') {
        e.preventDefault()
        act.undo()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const total = rs?.queue.length ?? 0
  const lastStep = rs?.history.at(-1)
  const canUndo = !!rs && !!lastStep && lastStep.round === rs.round && rs.index > 0
  const saveAllowed = !!rs && roundCanSave(rs)
  const interlude = !!rs && needsRound2(rs)
  const finished = !!rs && !interlude && isDone(rs)
  const swiping = !fallback && (!rs || (!interlude && !finished && rs.index < total))

  let body
  if (fallback) {
    body = <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">{fallback}</div>
  } else if (interlude) {
    body = <RoundIntro count={rs.saved.length} noun={noun} onStart={beginRound2} />
  } else if (finished) {
    body = (
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
      <DeckMessage title={doneTitle} body={doneBody?.(rs.liked.length)}>
        <motion.button
          type="button"
          whileTap={reduced ? undefined : { scale: 0.96 }}
          transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }}
          onClick={() => onDone(rs.liked)}
          className={PRIMARY_BUTTON}
        >
          {doneButton}
        </motion.button>
        {canUndo && (
          <motion.button
            type="button"
            whileTap={reduced ? undefined : { scale: 0.96 }}
            transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }}
            onClick={undo}
            className="mt-2 h-11 w-full cursor-pointer rounded-full bg-white text-sm font-semibold text-brown"
          >
            ย้อนการ์ดก่อนหน้า
          </motion.button>
        )}
      </DeckMessage>
      </div>
    )
  } else {
    body = (
      <div className="min-h-0 flex-1 pt-2.5">
        <SwipeDeck
          ref={deckRef}
          items={queueItems}
          index={rs?.index ?? 0}
          roundKey={rs?.round ?? 1}
          returning={returning}
          dragX={dragX}
          dragY={dragY}
          onSwiped={handleSwiped}
          renderCard={renderCard}
          canSave={saveAllowed}
          holoOf={holoOf}
          labelOf={labelOf}
          loadingLabel={loadingLabel}
          likeLabel={likeLabel}
        />
      </div>
    )
  }

  let counter = 'กำลังเตรียมการ์ด…'
  if (rs && total) counter = `${rs.round === 2 ? 'รอบสอง · ' : ''}${Math.min(rs.index + 1, total)} / ${total} ${noun}`

  return (
    <MotionConfig reducedMotion="user">
      <div className="h-dvh overflow-hidden bg-cream">
        <div className="mx-auto flex h-full w-full max-w-[560px] flex-col text-ink">
          {header}

          <div className="flex shrink-0 items-center justify-between gap-2 px-[22px] py-2 text-xs text-muted">
            <span className="min-w-0 truncate">{hint}</span>
            <span className="flex shrink-0 items-center gap-2">
              {rs && rs.round === 1 && rs.saved.length > 0 && (
                <span className="flex items-center gap-1 rounded-full bg-peach px-2.5 py-1 text-brown">
                  <Bookmark size={12} strokeWidth={2} aria-hidden="true" />
                  เก็บไว้ {rs.saved.length}
                </span>
              )}
              <span aria-live="polite">{counter}</span>
            </span>
          </div>

          {body}

          {swiping && (
            <div className="shrink-0 pb-[calc(0.25rem+env(safe-area-inset-bottom))]">
              <SwipeControls
                dragX={dragX}
                dragY={dragY}
                onSkip={() => swipe('left')}
                onUndo={undo}
                onSave={() => swipe('up')}
                onLike={() => swipe('right')}
                canUndo={canUndo}
                canSave={saveAllowed}
                disabled={!rs}
                likeLabel={likeLabel}
              />
              <div className="flex h-11 items-center justify-center">{footer ?? (
                  <FooterLink onClick={finish} disabled={!rs}>
                    {finishLabel?.(rs?.liked.length ?? 0) ?? 'สรุปเลย'}
                  </FooterLink>
                )}</div>
            </div>
          )}
        </div>
      </div>
    </MotionConfig>
  )
}
