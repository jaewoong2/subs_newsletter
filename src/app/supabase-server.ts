import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../types/supabase'

export const createServerSupabaseClient = () =>
  createServerComponentClient<Database>(
    { cookies },
    {
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    }
  )

const getOrder = (searchParams?: string) => {
  if (searchParams === 'popular') return 'view'
  if (searchParams === 'new') return 'created_at'
  return 'created_at'
}

export async function getNewsLetters(searchParams?: string | 'popular' | 'new') {
  const supabase = createServerSupabaseClient()
  try {
    const response = await supabase
      .from('newsletter')
      .select('*')
      .limit(10)
      .order(getOrder(searchParams), { foreignTable: '', ascending: false })

    if (!response.data) {
      throw new Error('No data found')
    }

    if (response.data?.length === 0) {
      throw new Error('No data found')
    }

    return response
  } catch (err) {}
}

export async function getArticles(searchParams?: string | 'popular' | 'new') {
  const supabase = createServerSupabaseClient()
  try {
    const response = await supabase
      .from('article')
      .select('*')
      .limit(10)
      .order(getOrder(searchParams), { foreignTable: '', ascending: false })

    if (!response.data) {
      throw new Error('No data found')
    }

    if (response.data?.length === 0) {
      throw new Error('No data found')
    }

    return response
  } catch (err) {}
}

export async function getNewsLettersRandom() {
  const supabase = createServerSupabaseClient()
  try {
    const response = await supabase.from('newsletter_random').select('*').limit(10)

    if (!response.data) {
      throw new Error('No data found')
    }

    if (response.data?.length === 0) {
      throw new Error('No data found')
    }

    return response
  } catch (err) {}
}

export async function getBlocks() {
  const supabase = createServerSupabaseClient()
  try {
    const response = await supabase.from('blocks').select('*').order('created_at')

    if (!response.data) {
      throw new Error('No data found')
    }

    if (response.data?.length === 0) {
      throw new Error('No data found')
    }

    return response
  } catch (err) {}
}

export async function getCategories() {
  const supabase = createServerSupabaseClient()

  try {
    const response = await supabase.from('categories').select('categories').order('count', { ascending: false })

    if (!response.data) {
      throw new Error('No data found')
    }

    if (response.data?.length === 0) {
      throw new Error('No data found')
    }

    return response
  } catch (err) {}
}

export async function getNewsLettersByCategory(category?: string) {
  const supabase = createServerSupabaseClient()

  if (!category) {
    return null
  }

  try {
    const response = await supabase
      .from('newsletter')
      .select('*')
      .overlaps('category', [decodeURIComponent(category)])

    if (!response.data) {
      throw new Error('No data found')
    }

    if (response.data?.length === 0) {
      throw new Error('No data found')
    }

    return response
  } catch (err) {
    return null
  }
}

export async function getNewsLettersByName(name?: string) {
  const supabase = createServerSupabaseClient()

  if (!name) {
    return null
  }

  try {
    const response = await supabase.from('newsletter').select('*').eq('name', decodeURIComponent(name)).single()

    if (!response.data) {
      throw new Error('No data found')
    }

    return response
  } catch (err) {
    return null
  }
}

export async function getSession() {
  const supabase = createServerSupabaseClient()

  try {
    const response = await supabase.auth.getSession()

    if (!response.data) {
      throw new Error('No data found')
    }

    return response
  } catch (err) {
    return null
  }
}

export const getUserById = async (id: number | string) => {
  const supabase = createServerSupabaseClient()

  try {
    const response = await supabase.from('users').select('*').eq('id', id).single()
    const user = await supabase.auth.getUser()

    if (!response.data) {
      throw new Error('No data found')
    }

    return { ...response, data: { ...response.data, email: user.data.user?.email } }
  } catch (err) {
    return null
  }
}
