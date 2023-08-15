import { Metadata } from 'next'
import { Providers } from '@/lib/Provider'
import { ThemeProviders } from '@/lib/ThemeProvider'

import './globals.css'

export const metadata: Metadata = {}

export const dynamic = 'force-dynamic'
export const revalidate = 0

type Props = {
  children: React.ReactNode
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang='kr' className='h-full overflow-scroll'>
      <head>
        <link rel='preconnect' href='https://cdn.jsdelivr.net' crossOrigin='' />
        <link href='https://cdn.jsdelivr.net/gh/toss/tossface/dist/tossface.css' rel='stylesheet' type='text/css' />
      </head>
      <body suppressHydrationWarning={true} className='relative max-h-full overflow-scroll bg-white'>
        <ThemeProviders>
          <Providers>{children}</Providers>
        </ThemeProviders>
      </body>
    </html>
  )
}
