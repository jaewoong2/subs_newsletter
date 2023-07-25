import { Metadata } from 'next'
import { Providers } from '@/lib/Provider'
import { ThemeProviders } from '@/lib/ThemeProvider'

import './globals.css'

export const metadata: Metadata = {}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='kr' className='h-full overflow-scroll'>
      <body suppressHydrationWarning={true} className='relative max-h-full overflow-scroll bg-white'>
        <ThemeProviders>
          <Providers>{children}</Providers>
        </ThemeProviders>
      </body>
    </html>
  )
}
