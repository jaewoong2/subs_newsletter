import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../types/supabase'
import { cache } from 'react'

export const createServerSupabaseClient = cache((cache?: RequestInit['cache']) =>
  createServerComponentClient<Database>(
    { cookies },
    {
      options: {
        global: {
          fetch: (...rest) =>
            fetch(rest[0], {
              ...rest[1],
              cache: cache,
            }),
        },
      },
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    }
  )
)
