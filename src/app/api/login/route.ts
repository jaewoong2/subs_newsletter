import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/supabase'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest): Promise<NextResponse<null> | Response> {
  try {
    const redirectUrl: { redirectUrl: string } | null = await request.json()

    if (!redirectUrl?.redirectUrl) {
      return NextResponse.json({ message: 'redirectUrl을 정확히 입력 해주세요' }, { status: 400 })
    }

    const supabase = createRouteHandlerClient<Database>({ cookies })

    const response = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
        redirectTo: `${process.env.NEXT_PUBLIC_CURRENT_URL}/auth/callback?redirectUrl=${redirectUrl.redirectUrl}`,
      },
    })

    if (response.error) {
      throw NextResponse.error()
    }
    return NextResponse.json({ ...response }, { status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 401 })
    }
    return NextResponse.json({ message: '메시지 전송 실패' }, { status: 401 })
  }
}
