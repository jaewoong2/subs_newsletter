'use client'
import { useEffect, useState } from 'react'
import useDebounceCallback from '@/hooks/useDebounceCallback'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import NavigationBody from '../atoms/NavigationBody'

type Props = {
  isAnimate?: boolean
  className?: string
}

export const Navigation = ({ isAnimate = true, className }: Props) => {
  const [scrollHeightDiff, setScrollHeightDiff] = useState(0)

  const [onScrollDebounce] = useDebounceCallback(() => {
    setScrollHeightDiff(document.body.clientHeight - document.body.scrollTop)
  }, 10)

  useEffect(() => {
    if (isAnimate) {
      setScrollHeightDiff(document.body.clientHeight - document.body.scrollTop)
      document.body.addEventListener('scroll', onScrollDebounce)
      return () => {
        document.body.removeEventListener('scroll', onScrollDebounce)
      }
    }
  }, [onScrollDebounce, isAnimate])

  return (
    <motion.nav
      className={twMerge(
        'fixed top-0 z-[100] flex w-full justify-between bg-white p-5 backdrop-blur-md',
        'dark:bg-darkBg-200 dark:bg-opacity-0 dark:text-white',
        scrollHeightDiff < 0 ? 'bg-opacity-40 text-black' : 'bg-opacity-0 text-white',
        className
      )}
    >
      <NavigationBody />
    </motion.nav>
  )
}
