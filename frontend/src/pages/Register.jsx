import { useAuth } from '../context/AuthContext'

export default function Register() {
  const { user, signOut } = useAuth()

  // TODO: ฟอร์มโปรไฟล์ → insert profiles → refreshProfile() แล้ว PrivateRoute จะพาไปหน้าถัดไปเอง
  return (
    <div className="p-8">
      <h1>Register</h1>
      <p>{user?.email}</p>
      <button onClick={signOut}>ออกจากระบบ</button>
    </div>
  )
}
