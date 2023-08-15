'use client'

import { PropsWithChildren, createContext, useContext, useState } from 'react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../types/supabase'

type SupabaseContext = {
  supabase: SupabaseClient<Database>
}

type Props = {
  supabaseUrl?: string | undefined
  supabaseKey?: string | undefined
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export default function SupabaseProvider({ children, supabaseKey, supabaseUrl }: PropsWithChildren<Props>) {
  const [supabase] = useState(() =>
    createPagesBrowserClient({
      supabaseKey,
      supabaseUrl,
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
