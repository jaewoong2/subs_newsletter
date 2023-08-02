import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { Checksome } from '@/types'
import { Database } from '@/types/supabase'

type RequestData = Checksome

export async function POST(request: NextRequest): Promise<NextResponse<null> | Response> {
  const checksome: RequestData | null = await request.json()

  if (!checksome) {
    return NextResponse.error()
  }

  const supabase = createRouteHandlerClient<Database>({ cookies })
  const response = await supabase.from('checksome').insert({
    category: checksome.category,
    description: checksome.description,
    email: checksome.email,
  })

  return NextResponse.json({ status: response.status, statusText: response.statusText })
}
