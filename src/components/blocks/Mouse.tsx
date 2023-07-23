'use client'
import React, { PropsWithChildren, createContext, useMemo } from 'react'
import { motion } from 'framer-motion'
import useMousePointer from '@/hooks/useMousePointer'

export const mouseContext = createContext<Omit<ReturnType<typeof useMousePointer>, 'varinat'>>({
  setVariant: () => {},
})

const Mouse = ({ children }: PropsWithChildren) => {
  const { varinat, setVariant } = useMousePointer()

  const value = useMemo(() => {
    return { setVariant }
  }, [])

  return (
    <mouseContext.Provider value={value}>
      <motion.div style={{ ...varinat }} className='absolute z-10 h-8 w-8 rounded-full bg-green-500 blur-sm' />
      {children}
    </mouseContext.Provider>
  )
}

export default React.memo(Mouse)
