import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import { Moon, Sparkle } from '../components/icons'
import ProfileCard from '../components/register/ProfileCard'
import MoodPicker from '../components/register/MoodPicker'
import ProvincePicker from '../components/register/ProvincePicker'
import TermsCheckbox from '../components/register/TermsCheckbox'
import TermsModal from '../components/register/TermsModal'

async function uploadAvatar(userId, file) {
  const ext = file.type === 'image/jpeg' ? 'jpg' : file.type.split('/')[1]
  const path = `${userId}/avatar-${Date.now()}.${ext}`
  const { error } = await supabase.storage.from('avatars').upload(path, file, { contentType: file.type })
  if (error) throw error
  return supabase.storage.from('avatars').getPublicUrl(path).data.publicUrl
}

export default function Register() {
  const { user, setProfile } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const meta = user?.user_metadata ?? {}
  const googleAvatar = meta.avatar_url ?? meta.picture ?? null

  const [name, setName] = useState(meta.full_name ?? meta.name ?? '')
  const [avatarFile, setAvatarFile] = useState(null)
  const [moods, setMoods] = useState([])
  const [customMoods, setCustomMoods] = useState([])
  const [provinces, setProvinces] = useState([])
  const [accepted, setAccepted] = useState(false)
  const [termsDoc, setTermsDoc] = useState(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const previewUrl = useMemo(() => (avatarFile ? URL.createObjectURL(avatarFile) : null), [avatarFile])
  useEffect(() => () => previewUrl && URL.revokeObjectURL(previewUrl), [previewUrl])

  const hasMood = moods.length + customMoods.length > 0
  const canSubmit = name.trim() !== '' && hasMood && accepted && !saving

  const closeTerms = useCallback(() => setTermsDoc(null), [])
  const acceptTerms = useCallback(() => {
    setAccepted(true)
    setTermsDoc(null)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!canSubmit) return
    setSaving(true)
    setError('')

    let avatarUrl = googleAvatar
    if (avatarFile) {
      try {
        avatarUrl = await uploadAvatar(user.id, avatarFile)
      } catch (err) {
        console.error('upload avatar failed', err)
        setError('อัปโหลดรูปไม่สำเร็จ ลองใหม่อีกครั้ง')
        setSaving(false)
        return
      }
    }

    const { data, error } = await supabase
      .from('profiles')
      .insert({
        id: user.id,
        display_name: name.trim(),
        avatar_url: avatarUrl,
        favorite_moods: moods,
        custom_moods: customMoods,
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
    <form onSubmit={handleSubmit} className="mx-auto flex min-h-svh w-full max-w-[560px] flex-col bg-cream text-ink lg:min-h-0 lg:max-w-[640px] lg:py-8">
      <div className="flex h-16 shrink-0 items-center px-[22px] lg:h-14">
        <div className="text-lg font-semibold">ตั้งค่าโปรไฟล์</div>
      </div>

      <div className="flex flex-col gap-1.5 px-[22px] pt-2">
        <h1 className="m-0 flex items-center gap-2 text-[26px] font-bold lg:text-[32px]">
          ยินดีต้อนรับสู่ LaMoon
          <Moon size={26} fill="#E8793A" className="-rotate-12" />
          <span className="-ml-1.5 -mt-3.5 flex">
            <Sparkle size={14} fill="#5A2E14" />
          </span>
        </h1>
        <p className="m-0 text-sm leading-[1.6] text-[#4A3A30] lg:text-base">บอกเราเล็กน้อย เพื่อให้การ์ดที่ปัดตรงใจตั้งแต่ใบแรก</p>
      </div>

      <div className="mx-4 mt-[18px] flex flex-col gap-3.5 lg:mt-6 lg:gap-4">
        <ProfileCard
          avatarUrl={previewUrl ?? googleAvatar}
          onAvatarChange={setAvatarFile}
          name={name}
          onNameChange={setName}
        />
        <MoodPicker value={moods} onChange={setMoods} custom={customMoods} onCustomChange={setCustomMoods} />
        <ProvincePicker value={provinces} onChange={setProvinces} />
      </div>

      <TermsCheckbox checked={accepted} onChange={setAccepted} onOpenDoc={setTermsDoc} />

      <div className="grow lg:hidden" />

      <div className="flex flex-col gap-2.5 px-4 pb-7 pt-5 lg:pb-0 lg:pt-8">
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
          {hasMood ? 'ต้องยอมรับข้อตกลงก่อน ปุ่มจึงจะกดได้' : 'เลือกมู้ดอย่างน้อย 1 อย่าง และยอมรับข้อตกลงก่อน'}
        </div>
      </div>

      <TermsModal doc={termsDoc} onDocChange={setTermsDoc} onClose={closeTerms} onAccept={acceptTerms} />
    </form>
  )
}
