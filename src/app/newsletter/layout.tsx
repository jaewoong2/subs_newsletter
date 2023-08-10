import React, { PropsWithChildren } from 'react'
import Link from 'next/link'
import Footer from '@/components/atoms/Footer'
import { Navigation } from '@/components/blocks'
import DataList from '@/components/blocks/DataList'
import { Card } from '@chakra-ui/react'
import { twMerge } from 'tailwind-merge'
import Aside from './components/Aside'

const NewsLetterLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex h-full w-full flex-col'>
      <Navigation
        className={twMerge(
          'flex h-16 border-b bg-opacity-100 text-black',
          'dark:border-darkBg-100 dark:bg-darkBg-300 dark:bg-opacity-100 dark:text-white'
        )}
        isAnimate={false}
      />
      <section
        className={twMerge(
          'mt-16 grid grid-cols-[1fr_4fr_1fr] max-xl:grid-cols-[1fr_3fr]',
          'max-md:flex',
          'dark:bg-darkBg-300 dark:text-white'
        )}
      >
        <div className='max-md:hidden'>
          <Aside />
        </div>
        <main className='min-h-screen pb-20'>{children}</main>
        <div />
      </section>
      <Footer />
    </div>
  )
}

export default NewsLetterLayout
