import { useSupabase } from '@/app/supabase-provider'
import { Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const useGetSession = () => {
  const [session, setSession] = useState<Session | null>(null)
  const { supabase } = useSupabase()

  const getSesstion = async () => {
    const { data } = await supabase.auth.getSession()
    if (data.session) {
      setSession(data.session)
    }
  }

  useEffect(() => {
    getSesstion()
  }, [])

  return session
}

export default useGetSession
