import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/supabase'
import { NewsLetter } from '@/types'

export const dynamic = 'force-dynamic'

export async function GET() {
  const supabase = createRouteHandlerClient<Database>({ cookies: cookies })

  try {
    const response = await supabase.from('categories').select('categories').order('count', { ascending: false })

    if (!response.data) {
      throw new Error('No data found')
    }

    if (response.data?.length === 0) {
      throw new Error('No data found')
    }
    return NextResponse.json({ ...response })
  } catch (err) {
    return NextResponse.error()
  }
}

export async function POST(request: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies })

  try {
    const newsLetter: Partial<NewsLetter> = await request.json()

    if (!newsLetter) {
      return NextResponse.error()
    }

    const response = await supabase.from('newsletter').insert({
      ...newsLetter,
    })

    return NextResponse.json({ status: response.status, statusText: response.statusText })
  } catch (err) {}
}
