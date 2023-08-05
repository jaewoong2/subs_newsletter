import { useSupabase } from '@/app/supabase-provider'

const useGoogleLogin = () => {
  const { supabase } = useSupabase()

  const siginIn = async () => {
    return await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })
  }

  return siginIn
}

export default useGoogleLogin
