'use client'

import { createContext, useContext, useState } from 'react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../types/supabase'

type SupabaseContext = {
  supabase: SupabaseClient<Database>
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export default function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => createPagesBrowserClient())

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
