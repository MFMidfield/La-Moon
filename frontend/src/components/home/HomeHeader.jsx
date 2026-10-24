import { useCallback, useState } from 'react'
import { Logo } from '../icons'
import BottomSheet from '../BottomSheet'

function Avatar({ url, name, size }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FBE3D2] font-bold text-brown"
      style={{ width: size, height: size, fontSize: size * 0.42 }}
    >
      {url ? (
        <img src={url} alt="" referrerPolicy="no-referrer" className="h-full w-full object-cover" />
      ) : (
        name?.charAt(0)
      )}
    </div>
  )
}

// โลโก้ + avatar (กดเปิดเมนูออกจากระบบ)
export default function HomeHeader({ profile, onSignOut }) {
  const [open, setOpen] = useState(false)
  const [signingOut, setSigningOut] = useState(false)
  const [error, setError] = useState('')
  const close = useCallback(() => setOpen(false), [])

  async function handleSignOut() {
    setSigningOut(true)
    setError('')
    const { error } = (await onSignOut()) ?? {}
    if (error) {
      console.error('sign out failed', error)
      setError('ออกจากระบบไม่สำเร็จ ลองใหม่อีกครั้ง')
      setSigningOut(false)
    }
  }

  return (
    <header className="flex h-16 shrink-0 items-center justify-between px-4">
      <Logo size={26} className="text-[22px]" />
      <button
        type="button"
        aria-label="เมนูบัญชี"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-full"
      >
        <Avatar url={profile.avatar_url} name={profile.display_name} size={44} />
      </button>

      <BottomSheet open={open} onClose={close} labelledBy="account-title">
        <div className="flex flex-col gap-5 px-[22px] pb-7 pt-5">
          <div className="flex items-center gap-3">
            <Avatar url={profile.avatar_url} name={profile.display_name} size={52} />
            <div className="min-w-0">
              <div className="text-xs text-muted">บัญชีของฉัน</div>
              <h2 id="account-title" className="m-0 truncate text-lg font-semibold">
                {profile.display_name}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSignOut}
            disabled={signingOut}
            className="flex h-14 cursor-pointer items-center justify-center gap-2 rounded-full border-[1.5px] border-[#D9CFC5] bg-white text-base font-semibold text-ink disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F1A17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
            </svg>
            {signingOut ? 'กำลังออก…' : 'ออกจากระบบ'}
          </button>
          {error && (
            <p role="alert" className="m-0 text-center text-[13px] text-[#C0392B]">
              {error}
            </p>
          )}
        </div>
      </BottomSheet>
    </header>
  )
}
