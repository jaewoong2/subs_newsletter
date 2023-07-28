import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/supabase'

function getExtension(filename: string) {
  return filename.split('.').pop()
}

export async function POST(request: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies })
  try {
    const requestData = await request.formData()

    const data = requestData.get('file') as Blob
    const name = requestData.get('name') as string

    const res = await supabase.storage.from('newsletter').upload(`image/${name}`, data, {
      contentType: `image/${getExtension(name)}`,
    })

    return NextResponse.json({ status: 200, statusText: '업로드 성공!', ...res })
  } catch (err) {
    console.error('ERROR!!')
  }
}
