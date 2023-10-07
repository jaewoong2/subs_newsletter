import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/supabase'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest): Promise<NextResponse<null> | Response> {
  const newsletterId: { id: number } | null = await request.json()
  if (!newsletterId) {
    return NextResponse.error()
  }

  const supabase = createRouteHandlerClient<Database>({ cookies })
  const response = await supabase.from('newsletter').update({ status: 'active' }).eq('id', +newsletterId.id)

  if (response.error) {
    return NextResponse.error()
  }

  return NextResponse.json({ status: response.status, statusText: response.statusText })
}
