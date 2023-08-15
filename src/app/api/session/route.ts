import { Database } from '@/types/supabase'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = createRouteHandlerClient<Database>({ cookies })

  try {
    const response = await supabase.auth.getSession()

    if (!response.data) {
      throw new Error('No data found')
    }

    if (!response.data.session) {
      throw new Error('No data found')
    }
    return NextResponse.json({ ...response }, { status: 200 })
  } catch (err) {
    return NextResponse.error()
  }
}
