import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext(null)

async function fetchProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle()
  if (error) console.error('load profile failed', error)
  return data ?? null
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  // user ที่โหลด profile ล่าสุด — กัน reload ซ้ำตอน TOKEN_REFRESHED
  const loadedUserId = useRef(undefined)

  const syncSession = useCallback(async (next) => {
    setSession(next)
    const userId = next?.user.id ?? null
    if (userId === loadedUserId.current) return
    loadedUserId.current = userId
    setLoading(true)
    setProfile(userId ? await fetchProfile(userId) : null)
    setLoading(false)
  }, [])

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => syncSession(data.session))

    const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
      // ห้าม await query supabase ใน callback นี้ตรงๆ (deadlock) — เลื่อนออกไปก่อน
      setTimeout(() => syncSession(next), 0)
    })

    return () => sub.subscription.unsubscribe()
  }, [syncSession])

  const value = {
    session,
    user: session?.user ?? null,
    profile,
    loading,
    refreshProfile: async () => {
      if (session) setProfile(await fetchProfile(session.user.id))
    },
    signInWithGoogle: (redirectPath = '/map') =>
      supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin + redirectPath },
      }),
    signOut: () => supabase.auth.signOut(),
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
