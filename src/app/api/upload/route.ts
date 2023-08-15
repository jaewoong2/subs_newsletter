import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/supabase'
import * as uuid from 'uuid'

export const dynamic = 'force-dynamic'

function getExtension(filename: string) {
  return filename.split('.').pop()
}

export async function POST(request: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies })
  try {
    const requestData = await request.formData()

    const file = requestData.get('file') as Blob
    const name = requestData.get('name') as string
    const date = new Date()

    const { data, error } = await supabase.storage
      .from('newsletter')
      .upload(`image/${uuid.v4()}_${date.getTime()}`, file, {
        contentType: `image/${getExtension(name)}`,
      })

    return NextResponse.json({
      status: 200,
      statusText: '업로드 성공!',
      data: {
        ...data,
        name,
        path: `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${data?.path}`,
      },
      error,
    })
  } catch (err) {}
}
