import { Metadata } from 'next'
import { Providers } from '@/lib/Provider'
import { ThemeProviders } from '@/lib/ThemeProvider'

import './font.css'
import './globals.css'
import { METADATA } from '@/constants'
import GoogleAnalytics from '@/lib/GoogleAnalytics'

export const metadata: Metadata = METADATA
export const dynamic = 'force-dynamic'
export const revalidate = 0

type Props = {
  children: React.ReactNode
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang='kr' className='min-h-screen'>
      <head>
        <meta name='naver-site-verification' content='e8e88ea2a73b01b874af4aa082769ffb504474e6' />
        <link rel='canonical' href='https://newsusbs.site' />
        {process.env.NODE_ENV !== 'development' && (
          <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID ?? ''} />
        )}
      </head>
      <body suppressHydrationWarning={true} className='relative min-h-screen overflow-scroll bg-white'>
        <ThemeProviders>
          <Providers>{children}</Providers>
        </ThemeProviders>
      </body>
    </html>
  )
}
