import { Metadata } from 'next'
import { Providers } from '@/lib/Provider'
import { ThemeProviders } from '@/lib/ThemeProvider'

import './globals.css'
import { METADATA } from '@/constants'

export const metadata: Metadata = METADATA

export const dynamic = 'force-dynamic'
export const revalidate = 0

type Props = {
  children: React.ReactNode
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang='kr' className='min-h-screen overflow-scroll'>
      <head>
        <link rel='preconnect' href='https://cdn.jsdelivr.net' crossOrigin='' />
        <link href='https://cdn.jsdelivr.net/gh/toss/tossface/dist/tossface.css' rel='stylesheet' type='text/css' />
      </head>
      <body suppressHydrationWarning={true} className='relative min-h-screen overflow-scroll bg-white'>
        <ThemeProviders>
          <Providers>{children}</Providers>
        </ThemeProviders>
      </body>
    </html>
  )
}
