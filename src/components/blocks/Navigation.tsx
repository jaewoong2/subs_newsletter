'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'
import useDebounceCallback from '@/hooks/useDebounceCallback'

// eslint-disable-next-line react/display-name
const NavigationBody = React.memo(() => {
  const { resolvedTheme, setTheme } = useTheme()
  const onClickToogleIcon = (theme: 'light' | 'dark') => {
    setTheme(theme)
  }

  return (
    <>
      <h1 className='whitespace-nowrap font-bold'>뉴섭</h1>
      <ul className='flex w-full items-center justify-center gap-5'>
        <Link className='hover:text-slate-400' href={'/newsletter'}>
          뉴스레터
        </Link>
        <Link className='hover:text-slate-400' href={'/newsletter1'}>
          아티클
        </Link>
        <Link className='hover:text-slate-400' href={'/newsletter2'}>
          문의
        </Link>
      </ul>
      <div className='flex items-center justify-center gap-10'>
        <label className='swap-rotate swap'>
          {/* this hidden checkbox controls the state */}
          <input
            type='checkbox'
            checked={resolvedTheme === 'light'}
            onChange={() => onClickToogleIcon(resolvedTheme === 'light' ? 'dark' : 'light')}
          />
          {/* sun icon */}
          <svg className='swap-on h-7 w-7 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
          </svg>
          {/* moon icon */}
          <svg className='swap-off h-7 w-7 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
          </svg>
        </label>
      </div>
    </>
  )
})

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
