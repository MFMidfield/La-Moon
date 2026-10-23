import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { profile, signOut } = useAuth()

  // TODO: รอ design หน้า Home
  return (
    <div className="p-8">
      <h1>Home</h1>
      <p>{profile?.display_name}</p>
      <button onClick={signOut}>ออกจากระบบ</button>
    </div>
  )
}
