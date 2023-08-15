import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../types/supabase'
import getMetaTags from '@/lib/getMetatag'

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

export async function getDataByMetatag() {
  const supabase = createServerSupabaseClient()
  try {
    const response = await supabase.from('newsletter').select('link').limit(10)

    if (!response.data) {
      throw new Error('No data found')
    }
    const metatags = await Promise.all(
      response.data?.map((data) => {
        if (!data.link) return null
        return getMetaTags(data.link)
      })
    )

    if (!response.data) {
      throw new Error('No data found')
    }

    if (response.data?.length === 0) {
      throw new Error('No data found')
    }

    return metatags
  } catch (err) {}
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
