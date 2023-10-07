import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/supabase'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const params = new URLSearchParams(url.search)
  const supabase = createRouteHandlerClient<Database>({ cookies: cookies })
  let search = params.get('q')

  if (!search) {
    throw new Error('no search')
  }

  search = decodeURIComponent(search)

  try {
    const letters = await supabase
      .from('newsletter')
      .select('*')
      .eq('status', 'active')
      .or(`name.like.%${search}%, description.like.%${search}%, category.ov.{${search}}`)

    const articles = await supabase
      .from('article')
      .select('*')
      .or(`title.like.%${search}%, description.like.%${search}%, category.ov.{${search}}`)

    return NextResponse.json({ letters, articles })
  } catch (err) {
    return NextResponse.error()
  }
}
