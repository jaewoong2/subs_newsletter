'use client'
import { SWRConfig } from 'swr'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import SupabaseProvider from '@/app/supabase-provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SupabaseProvider>
      <SWRConfig>
        <ChakraProvider resetCSS>
          <CacheProvider>{children}</CacheProvider>
        </ChakraProvider>
      </SWRConfig>
    </SupabaseProvider>
  )
}
