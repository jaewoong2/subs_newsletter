import React from 'react'
import CardLink from '@/components/blocks/CardLink'
import CategoryList from './CaretoryList'

const Aside = () => {
  return (
    <aside
      className='z-[19] h-full w-full px-3 py-10 max-md:fixed max-md:bottom-0 max-md:h-fit max-md:p-0'
      aria-label='sidebar'
    >
      <ul className='flex flex-col gap-2 bg-white font-tossFace font-semibold dark:border-darkBg-100 dark:bg-darkBg-300  max-md:flex-row max-md:border-t max-md:px-1 max-md:py-2'>
        <li className={'relative flex w-full flex-col items-end'}>
          <CardLink
            href={process.env.NEXT_PUBLIC_CURRENT_URL + '/newsletter'}
            className='h-full w-full rounded-xl px-3 py-3 text-start font-tossFace transition-colors hover:bg-base-300 dark:hover:bg-darkBg-100 max-md:rounded-none max-md:bg-transparent max-md:text-center max-md:hover:bg-transparent'
          >
            최신 뉴스레터 🥳
          </CardLink>
          <div className='badge badge-error absolute -right-1 -top-1'>NEW</div>
        </li>
        <li className={'relative flex w-full flex-col items-end'}>
          <CardLink
            href={process.env.NEXT_PUBLIC_CURRENT_URL + '/newsletter/popular'}
            className='h-full w-full rounded-xl px-3 py-3 text-start font-tossFace transition-colors hover:bg-base-300 dark:hover:bg-darkBg-100 max-md:rounded-none max-md:bg-transparent max-md:text-center max-md:hover:bg-transparent'
          >
            인기 뉴스레터 🔥
          </CardLink>
          <div className='badge badge-accent absolute -right-1 -top-1'>인기</div>
        </li>
        <li className={'relative flex w-full flex-col items-end'}>
          <CardLink
            href={process.env.NEXT_PUBLIC_CURRENT_URL + '/newsletter/random'}
            className='h-full w-full rounded-xl px-3 py-3 text-start font-tossFace transition-colors hover:bg-base-300 dark:hover:bg-darkBg-100 max-md:rounded-none max-md:bg-transparent max-md:text-center max-md:hover:bg-transparent'
          >
            랜덤 뉴스레터 🎲
          </CardLink>
        </li>
      </ul>
      <div className='py-5'>
        <div className='h-1 border-t border-gray-800 dark:border-darkBg-100' />
      </div>
      <CategoryList />
    </aside>
  )
}

export default Aside
