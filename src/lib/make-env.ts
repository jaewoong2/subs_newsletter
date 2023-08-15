// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

// .env.local 파일 생성

fs.writeFileSync('.env.local', `NEXT_PUBLIC_SUPABASE_ANON_KEY=${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}\n`)
// .env.local 파일에 추가 데이터 작성
fs.appendFileSync('.env.local', `NEXT_PUBLIC_SUPABASE_URL=${process.env.NEXT_PUBLIC_SUPABASE_URL}\n`)
fs.appendFileSync('.env.local', `NEXT_PUBLIC_SUPABASE_STORAGE_URL=${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}\n`)
fs.appendFileSync('.env.local', `NEXT_PUBLIC_CURRENT_URL=${process.env.NEXT_PUBLIC_CURRENT_URL}\n`)
