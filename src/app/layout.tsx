import { Metadata } from 'next'
import { Providers } from '../lib/Provider'
import { METADATA } from '../constants'

import './globals.css'

export const metadata: Metadata = {
  ...METADATA,
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='kr' className='h-full overflow-scroll'>
      <body suppressHydrationWarning={true} className='relative max-h-full overflow-scroll bg-slate-200'>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
