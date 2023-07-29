import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../types/supabase'

export const runtime = 'edge'

export const createServerSupabaseClient = () =>
  createServerComponentClient<Database>(
    { cookies },
    {
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    }
  )

export async function getNewsLetters() {
  const supabase = createServerSupabaseClient()
  try {
    const response = await supabase.from('newsletter').select('*').limit(10)

    if (!response.data) {
      throw new Error('No data found')
    }

    if (response.data?.length === 0) {
      throw new Error('No data found')
    }

    return response
  } catch (err) {}
}

export async function getArticles() {
  const supabase = createServerSupabaseClient()
  try {
    const response = await supabase.from('article').select('*').limit(10)

    if (!response.data) {
      throw new Error('No data found')
    }

    if (response.data?.length === 0) {
      throw new Error('No data found')
    }

    return response
  } catch (err) {}
}
