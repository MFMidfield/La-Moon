import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import { Moon, Sparkle } from '../components/icons'
import { slideNavigate } from '../components/SlideLink'
import ProfileCard from '../components/register/ProfileCard'
import MoodPicker from '../components/register/MoodPicker'
import PlacePicker from '../components/register/PlacePicker'

export default function Register() {
  const { user, signOut, setProfile } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const meta = user?.user_metadata ?? {}
  const avatarUrl = meta.avatar_url ?? meta.picture ?? null

  const [name, setName] = useState(meta.full_name ?? meta.name ?? '')
  const [moods, setMoods] = useState([])
  const [regions, setRegions] = useState([])
  const [provinces, setProvinces] = useState([])
  const [accepted, setAccepted] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const canSubmit = name.trim() !== '' && moods.length > 0 && accepted && !saving

  async function handleBack() {
    await signOut()
    slideNavigate(navigate, '/login', { back: true, replace: true })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!canSubmit) return
    setSaving(true)
    setError('')

    const { data, error } = await supabase
      .from('profiles')
      .insert({
        id: user.id,
        display_name: name.trim(),
        avatar_url: avatarUrl,
        favorite_moods: moods,
        regions,
        provinces,
        accepted_terms_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error('create profile failed', error)
      setError('บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง')
      setSaving(false)
      return
    }

    // เปลี่ยนหน้า + ใส่ profile ใน render เดียวกัน กัน guard ของ /register เด้งไปหน้าอื่นก่อน
    navigate('/welcome', { replace: true, state: { from: location.state?.from } })
    setProfile(data)
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex min-h-svh w-full max-w-[560px] flex-col bg-cream text-ink">
      <div className="flex h-16 shrink-0 items-center gap-2.5 px-4">
        <button
          type="button"
          aria-label="ย้อนกลับ"
          onClick={handleBack}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F1A17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="text-lg font-semibold">ตั้งค่าโปรไฟล์</div>
      </div>

      <div className="flex flex-col gap-1.5 px-[22px] pt-2">
        <h1 className="m-0 flex items-center gap-2 text-[26px] font-bold">
          ยินดีต้อนรับสู่ LaMoon
          <Moon size={26} fill="#E8793A" className="-rotate-12" />
          <span className="-ml-1.5 -mt-3.5 flex">
            <Sparkle size={14} fill="#5A2E14" />
          </span>
        </h1>
        <p className="m-0 text-sm leading-[1.6] text-[#4A3A30]">บอกเราเล็กน้อย เพื่อให้การ์ดที่ปัดตรงใจตั้งแต่ใบแรก</p>
      </div>

      <div className="mx-4 mt-[18px] flex flex-col gap-3.5">
        <ProfileCard avatarUrl={avatarUrl} name={name} onNameChange={setName} />
        <MoodPicker value={moods} onChange={setMoods} />
        <PlacePicker
          regions={regions}
          onRegionsChange={setRegions}
          provinces={provinces}
          onProvincesChange={setProvinces}
        />
      </div>

      <label className="mx-[22px] mt-[18px] flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="mt-px h-[22px] w-[22px] shrink-0 accent-brown"
        />
        <span className="text-sm leading-[1.6] text-[#4A3A30]">
          ฉันยอมรับ{' '}
          <a href="#" className="text-brown hover:text-ink">
            ข้อตกลงการใช้งาน
          </a>{' '}
          และ{' '}
          <a href="#" className="text-brown hover:text-ink">
            นโยบายความเป็นส่วนตัว
          </a>
        </span>
      </label>

      <div className="grow" />

      <div className="flex flex-col gap-2.5 px-4 pb-7 pt-5">
        <button
          type="submit"
          disabled={!canSubmit}
          className="flex h-14 cursor-pointer items-center justify-center rounded-full bg-brown text-base font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          {saving ? 'กำลังบันทึก…' : 'เริ่มใช้งาน'}
        </button>
        {error && (
          <p role="alert" className="m-0 text-center text-[13px] text-[#C0392B]">
            {error}
          </p>
        )}
        <div className="text-center text-xs text-muted">
          {moods.length === 0 ? 'เลือกมู้ดอย่างน้อย 1 อย่าง และยอมรับข้อตกลงก่อน' : 'ต้องยอมรับข้อตกลงก่อน ปุ่มจึงจะกดได้'}
        </div>
      </div>
    </form>
  )
}
