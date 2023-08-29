import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/supabase'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest): Promise<NextResponse<null> | Response> {
  const newsletters: string[] | null = await request.json()

  if (!newsletters) {
    return NextResponse.error()
  }
  const [sourceNewsletter, targetNewsletter] = newsletters

  const supabase = createRouteHandlerClient<Database>({ cookies })

  const find = await supabase
    .from('newsletter_sequences')
    .select('count')
    .eq('source_newsletter', +sourceNewsletter)
    .eq('target_newsletter', +targetNewsletter)
    .single()

  if (!find.data || find.error) {
    const response = await supabase.from('newsletter_sequences').upsert({
      source_newsletter: +sourceNewsletter,
      target_newsletter: +targetNewsletter,
      count: 1,
    })
    return NextResponse.json({ status: response.status, statusText: response.statusText })
  } else {
    const response = await supabase
      .from('newsletter_sequences')
      .update({
        count: find.data.count + 1,
      })
      .eq('source_newsletter', +sourceNewsletter)
      .eq('target_newsletter', +targetNewsletter)

    return NextResponse.json({ status: response.status, statusText: response.statusText })
  }
}
