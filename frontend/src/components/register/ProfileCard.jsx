export default function ProfileCard({ avatarUrl, name, onNameChange }) {
  return (
    <div className="flex items-center gap-3.5 rounded-[28px] bg-white p-[18px]">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt=""
          referrerPolicy="no-referrer"
          className="h-16 w-16 shrink-0 rounded-full bg-peach object-cover"
        />
      ) : (
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-peach text-2xl font-bold text-brown">
          {name.trim().charAt(0) || '?'}
        </div>
      )}
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
        <div className="text-xs text-muted">เปลี่ยนได้ทีหลัง</div>
      </div>
    </div>
  )
}
