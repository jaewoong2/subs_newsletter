import React, { PropsWithChildren } from 'react'
import SupabaseContextProvider from '@/app/supabase-provider'

const SupabaseProvider = ({ children }: PropsWithChildren) => {
  return (
    <SupabaseContextProvider
      supabaseKey={process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}
      supabaseUrl={process.env.NEXT_PUBLIC_SUPABASE_URL}
    >
      {children}
    </SupabaseContextProvider>
  )
}

export default SupabaseProvider
