import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NewsLetter } from '@/types'
import { Database } from '@/types/supabase'

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

  return NextResponse.json({ status: response.status, statusText: response.statusText })
}
