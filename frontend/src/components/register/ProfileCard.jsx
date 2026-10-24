import { Camera } from 'lucide-react'
import { useState } from 'react'

const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const MAX_SIZE = 2 * 1024 * 1024

export default function ProfileCard({ avatarUrl, onAvatarChange, name, onNameChange }) {
  const [fileError, setFileError] = useState('')

  function handleFile(e) {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setFileError('รองรับเฉพาะไฟล์ jpg, png, webp')
      return
    }
    if (file.size > MAX_SIZE) {
      setFileError('ไฟล์ใหญ่เกิน 2MB')
      return
    }
    setFileError('')
    onAvatarChange(file)
  }

  return (
    <div className="flex flex-col gap-2 rounded-[28px] bg-white p-[18px]">
      <div className="flex items-center gap-3.5">
        <label className="relative h-16 w-16 shrink-0 cursor-pointer" aria-label="เปลี่ยนรูปโปรไฟล์">
          <input type="file" accept={ACCEPTED_TYPES.join(',')} onChange={handleFile} className="sr-only" />
          {avatarUrl ? (
            <img src={avatarUrl} alt="" referrerPolicy="no-referrer" className="h-16 w-16 rounded-full bg-peach object-cover" />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-peach text-2xl font-bold text-brown">
              {name.trim().charAt(0) || '?'}
            </div>
          )}
          <span className="absolute -bottom-0.5 -right-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-brown">
            <Camera size={12} strokeWidth={2} className="text-white" aria-hidden="true" />
          </span>
        </label>
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <label htmlFor="display-name" className="text-[13px] font-semibold">
            ชื่อที่แสดง
          </label>
          <input
            id="display-name"
            type="text"
            value={name}
            maxLength={40}
            onChange={(e) => onNameChange(e.target.value)}
            className="h-[46px] w-full rounded-full border-0 bg-cream px-4 text-[15px] text-ink outline-none focus:ring-2 focus:ring-orange"
          />
        </div>
      </div>
      {fileError && (
        <p role="alert" className="m-0 text-[13px] text-[#C0392B]">
          {fileError}
        </p>
      )}
    </div>
  )
}
