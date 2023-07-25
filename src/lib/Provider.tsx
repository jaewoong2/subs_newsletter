'use client'
import { SWRConfig } from 'swr'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { useTheme } from 'next-themes'

const getTheme = (theme?: string) => {
  if (theme === 'system') return theme
  if (theme === 'dark') return theme
  if (theme === 'light') return theme
  return 'system'
}

export function Providers({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme()

  return (
    <>
      {/* <Provider store={store}> */}
      <SWRConfig>
        <ChakraProvider resetCSS>
          <ColorModeScript initialColorMode={getTheme(resolvedTheme)} />
          <CacheProvider>{children}</CacheProvider>
        </ChakraProvider>
      </SWRConfig>
      {/* </Provider> */}
    </>
  )
}
