import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NewsLetter } from '@/types'
import { Database } from '@/types/supabase'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest): Promise<NextResponse<null> | Response> {
  const newsLetter: NewsLetter | null = await request.json()

  if (!newsLetter) {
    return NextResponse.error()
  }

  const supabase = createRouteHandlerClient<Database>({ cookies })
  const session = await supabase.auth.getSession()

  if (!session.data) {
    return NextResponse.json(
      { status: 401, statusText: 'No Authroization User', message: '로그인 후 이용 가능 합니다.' },
      { status: 401 }
    )
  }

  const response = await supabase.from('newsletter').insert(newsLetter)

  if (response.error) {
    return NextResponse.json({ status: response.status, statusText: response.statusText, error: response.error })
  }

  return NextResponse.json({ status: response.status, statusText: response.statusText })
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const params = new URLSearchParams(url.search)
  const q = `${params.get('q') ?? 'createdAt'}`
  const page = +`${params.get('page') ?? 1}`
  const limit = +`${params.get('limit') ?? 10}`
  const supabase = createRouteHandlerClient<Database>({ cookies: cookies })
  const from = limit * page
  const to = limit * (page + 1) - 1

  const response = await supabase
    .from('newsletter')
    .select('*')
    .eq('status', 'active')
    .range(from, to)
    .order(q === 'popular' ? 'view' : 'created_at', { ascending: false })

  if (response.error) {
    return NextResponse.json({ status: response.status, statusText: response.statusText, error: response.error })
  }

  return NextResponse.json(response)
}
