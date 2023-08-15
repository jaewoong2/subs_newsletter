import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const useGoogleLogin = () => {
  const supabase = createClientComponentClient()

  const siginIn = async (redirectUrl?: string) => {
    return await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
        redirectTo: `http://localhost:3000/auth/callback?redirectUrl=${redirectUrl}`,
      },
    })
  }

  return siginIn
}

export default useGoogleLogin
