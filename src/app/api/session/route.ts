import { Database } from '@/types/supabase'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const supabase = createRouteHandlerClient<Database>({ cookies })

  try {
    const response = await supabase.auth.getSession()

    if (!response.data) {
      return NextResponse.json({ ...response }, { status: 401 })
    }

    if (!response.data.session) {
      return NextResponse.json({ ...response }, { status: 401 })
    }
    return NextResponse.json({ ...response }, { status: 200 })
  } catch (err) {
    return NextResponse.error()
  }
}
