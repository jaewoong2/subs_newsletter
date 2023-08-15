'use client'
import { SWRConfig } from 'swr'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <SWRConfig>
        <ChakraProvider resetCSS>{children}</ChakraProvider>
      </SWRConfig>
    </CacheProvider>
  )
}
