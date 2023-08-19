import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/supabase'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest): Promise<NextResponse<null> | Response> {
  try {
    const email: { email: string } | null = await request.json()

    if (!email?.email) {
      return NextResponse.json({ message: '이메일을 정확히 입력 해주세요' }, { status: 200 })
    }

    const supabase = createRouteHandlerClient<Database>({ cookies })

    const session = await supabase.auth.getSession()

    if (session.data.session) {
      return NextResponse.json({ message: '로그인이 완료 되었습니다' }, { status: 401 })
    }

    const response = await supabase.auth.signInWithOtp({
      email: email.email,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_CURRENT_URL}/auth/callback`,
      },
    })

    if (response.error) {
      throw NextResponse.error()
    }

    return NextResponse.json({ message: '전송 완료' }, { status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 401 })
    }
    return NextResponse.json({ message: '메시지 전송 실패' }, { status: 401 })
  }
}
