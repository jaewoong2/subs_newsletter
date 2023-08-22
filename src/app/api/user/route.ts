import { Database } from '@/types/supabase'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const supabase = createRouteHandlerClient<Database>({ cookies })

  try {
    const response = await supabase.auth.getUser()

    if (!response.data) {
      return NextResponse.json({ message: '세션 데이터가 존재 하지 않습니다.' }, { status: 401 })
    }

    if (!response.data.user) {
      return NextResponse.json({ message: '세션에 user data 가 존재 하지 않습니다.' }, { status: 401 })
    }

    const userData = await supabase.from('users').select('*').eq('id', response.data.user.id).maybeSingle()

    if (!userData?.data) {
      return NextResponse.json({ message: 'user data 가 존재 하지 않습니다.' }, { status: 401 })
    }

    return NextResponse.json({ ...userData }, { status: 200 })
  } catch (err) {
    return NextResponse.error()
  }
}
