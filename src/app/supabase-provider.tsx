'use client'

import { PropsWithChildren, createContext, useContext, useState } from 'react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../types/supabase'

import env from '@beam-australia/react-env'

type SupabaseContext = {
  supabase: SupabaseClient<Database>
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export default function SupabaseProvider({ children }: PropsWithChildren) {
  const [supabase] = useState(() =>
    createPagesBrowserClient({
      supabaseKey: env('NEXT_PUBLIC_SUPABASE_ANON_KEY'),
      supabaseUrl: env('NEXT_PUBLIC_SUPABASE_URL'),
    })
  )

  return (
    <Context.Provider value={{ supabase }}>
      <>{children}</>
    </Context.Provider>
  )
}

export const useSupabase = () => {
  const context = useContext(Context)

  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider')
  }

  return context
}
