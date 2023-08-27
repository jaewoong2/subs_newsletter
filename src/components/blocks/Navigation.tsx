import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { IMAGE } from '@/constants'
import SearchInput from './SearchInput'

type Props = {
  isAnimate?: boolean
  className?: string

  menu?: React.ReactNode
}

export const Navigation = ({ className, menu }: Props) => {
  return (
    <nav
      className={twMerge(
        'fixed top-0 z-[100] flex w-full justify-between bg-white p-5 backdrop-blur-md',
        'dark:bg-darkBg-200 dark:bg-opacity-0 dark:text-white max-md:justify-between max-md:px-3',
        className
      )}
    >
      <Link href={'/'}>
        <figure className='flex items-end justify-center gap-2 whitespace-nowrap font-bold'>
          <Image src={IMAGE.logo} alt='뉴섭로고' width={32} height={32} className='rounded-xl' />
          <figcaption className='translate-y-1 font-Yeongdo-Rg text-2xl font-bold'>newsubs_</figcaption>
        </figure>
      </Link>
      <ul className='flex w-full items-center justify-center gap-3 text-base font-semibold max-md:hidden'>
        <Link className='font-SUITE underline hover:text-slate-400' href={'/newsletter'}>
          뉴스레터
        </Link>
        <Link className='font-SUITE underline hover:text-slate-400' href={'/article'}>
          소식
        </Link>
      </ul>
      <div className='flex items-center justify-center'>
        <SearchInput />
      </div>
      {menu}
    </nav>
  )
}
