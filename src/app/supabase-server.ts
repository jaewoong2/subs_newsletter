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

export async function getNewsLetters(searchParams?: string | 'popular' | 'new', limit = 10) {
  const supabase = createServerSupabaseClient()
  try {
    const response = await supabase
      .from('newsletter')
      .select('*')
      // .eq('status', 'active')
      .limit(limit)
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

export async function getArticles(searchParams?: string | 'popular' | 'new', limit = 10) {
  const supabase = createServerSupabaseClient()
  try {
    const response = await supabase
      .from('article')
      .select('*')
      .limit(limit)
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
    const response = await supabase.from('newsletter_random').select('*').eq('status', 'active').limit(10)

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

export async function getNewsLettersById(ids: number[]) {
  const supabase = createServerSupabaseClient()

  try {
    const response = await supabase.from('newsletter').select('*').eq('status', 'active').contains('id', ids)

    if (!response.data) {
      throw new Error('No data found')
    }

    return response
  } catch (err) {
    return null
  }
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
      .eq('status', 'active')
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

export const getRelatedNewsletter = async (id: number | string) => {
  const functionName = 'explore_related_newsletters'

  const supabase = createServerSupabaseClient()

  try {
    const response = await supabase.rpc(functionName, { starting_item_id: +id })

    if (!response.data) {
      throw new Error('No data found')
    }

    return response
  } catch (err) {
    return null
  }
}

export const getRelatedNewsletterByCategory = async (id: number | string) => {
  const supabase = createServerSupabaseClient()

  try {
    const currentNewsletter = await supabase
      .from('newsletter')
      .select('id, category')
      .eq('id', +id)
      .eq('status', 'active')
      .single()

    if (!currentNewsletter.data?.category) {
      throw new Error('No data found')
    }

    const response = await supabase
      .from('newsletter')
      .select('id')
      .or(currentNewsletter.data?.category?.map((category) => `category.ov.{${category}}`).join(', ') ?? '')

    if (!response.data) {
      throw new Error('No data found')
    }

    return response
  } catch (err) {
    return null
  }
}

export const getRelatedNewsletters = async (ids: number[]) => {
  const supabase = createServerSupabaseClient()

  try {
    const newsletters = await supabase.from('newsletter').select('*').eq('status', 'active').in('id', ids)

    if (!newsletters.data || newsletters.data.length === 0) {
      throw new Error('No data found')
    }

    return newsletters
  } catch (err) {
    return null
  }
}

export const getLettersByNewsLetterId = async (id: number) => {
  const supabase = createServerSupabaseClient()

  try {
    const letters = await supabase.from('letters').select('id, title').eq('newsletter_id', id)

    if (!letters.data || letters.data.length === 0) {
      throw new Error('No data found')
    }

    return letters
  } catch (err) {
    return null
  }
}

export const getLettersById = async (id: number) => {
  const supabase = createServerSupabaseClient()

  try {
    const letters = await supabase.from('letters').select('*').eq('id', id).single()

    if (!letters.data || letters.error) {
      throw new Error('No data found')
    }

    return letters
  } catch (err) {
    return null
  }
}

export const getArticleById = async (title: string) => {
  const supabase = createServerSupabaseClient()

  try {
    const article = await supabase.from('article').select('*').eq('title', title).single()

    if (!article.data || article.error) {
      throw new Error('No data found')
    }

    return article
  } catch (err) {
    return null
  }
}

export const registerNewsletter = async (id: number) => {
  const supabase = createServerSupabaseClient()

  try {
    const response = await supabase.from('newsletter').update({ status: 'active' }).eq('id', id)

    if (!response.data || response.error) {
      throw new Error('No data found')
    }

    return response
  } catch (err) {
    return null
  }
}
