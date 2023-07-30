import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/supabase'

export const runtime = 'edge'

export async function POST(request: NextRequest): Promise<NextResponse<null> | Response> {
  const json: { type: 'newsletter' | 'article'; id: string | number } | null = await request.json()

  if (!json) {
    return NextResponse.error()
  }

  const { id, type } = json

  if (type === 'newsletter') {
    const supabase = createRouteHandlerClient<Database>({ cookies })
    const { data: view } = await supabase.from('newsletter').select('view').eq('id', +id).single()

    if (typeof view?.view !== 'undefined' && view?.view !== null) {
      const response = await supabase
        .from('newsletter')
        .update({ view: view.view + 1 })
        .eq('id', +id)
      console.log(response, id)

      return NextResponse.json({ status: response.status, statusText: response.statusText })
    }

    return NextResponse.error()
  }

  if (type === 'article') {
    const supabase = createRouteHandlerClient<Database>({ cookies })
    const { data: view } = await supabase.from('article').select('view').eq('id', +id).single()

    if (view?.view) {
      const response = await supabase
        .from('article')
        .update({ view: view.view + 1 })
        .eq('id', +id)

      return NextResponse.json({ status: response.status, statusText: response.statusText })
    }

    return NextResponse.error()
  }

  return NextResponse.error()
}
