import { Navigation } from '@/components/blocks'
import Link from 'next/link'
import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex h-full w-full flex-col'>
      <Navigation className='flex h-16 border-b bg-opacity-100 text-black dark:text-white' isAnimate={false} />
      <main className='grid grid-cols-[1fr_6fr_1fr]'>
        <aside className='mt-16 h-full w-full px-3 py-10' aria-label='sidebar'>
          <ul className='flex flex-col gap-2 font-tossFace font-semibold'>
            <li className={'relative flex w-full flex-col items-end'}>
              <Link
                href={'/'}
                className='h-full w-full rounded-xl px-3 py-3 text-start font-tossFace transition-colors hover:bg-base-300'
              >
                최신 뉴스레터 🥳
              </Link>
              <div className='badge badge-error absolute -right-1 -top-1'>NEW</div>
            </li>
            <li className={'relative flex w-full flex-col items-end'}>
              <Link
                href={'popular'}
                className='h-full w-full rounded-xl px-3 py-3 text-start font-tossFace transition-colors hover:bg-base-300'
              >
                인기 뉴스레터 🔥
              </Link>
              <div className='badge badge-accent absolute -right-1 -top-1'>인기</div>
            </li>
            <li className={'relative flex w-full flex-col items-end'}>
              <Link
                href={'random'}
                className='h-full w-full rounded-xl px-3 py-3 text-start font-tossFace transition-colors hover:bg-base-300'
              >
                랜덤 뉴스레터 🎲
              </Link>
            </li>
          </ul>
        </aside>
      </main>
    </div>
  )
}

export default NewsLetter
