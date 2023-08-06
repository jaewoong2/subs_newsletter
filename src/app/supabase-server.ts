import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../types/supabase'
import { NextResponse } from 'next/server'

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
