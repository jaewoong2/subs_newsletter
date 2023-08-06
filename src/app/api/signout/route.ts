import { Database } from '@/types/supabase'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(): Promise<NextResponse<null> | Response> {
  const supabase = createRouteHandlerClient<Database>({ cookies })

  const { error } = await supabase.auth.signOut()

  if (error) {
    return NextResponse.error()
  }

  return NextResponse.json({ message: '로그아웃 성공' }, { status: 200 })
}
