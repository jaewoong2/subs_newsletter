import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NewsLetter } from '@/types'
import { Database } from '@/types/supabase'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest): Promise<NextResponse<null> | Response> {
  const newsLetter: NewsLetter | null = await request.json()

  if (!newsLetter) {
    return NextResponse.error()
  }

  const supabase = createRouteHandlerClient<Database>({ cookies })
  const response = await supabase.from('newsletter').insert(newsLetter)

  return NextResponse.json({ status: response.status, statusText: response.statusText })
}
