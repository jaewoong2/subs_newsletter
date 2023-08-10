import React from 'react'
import CardLink from '@/components/blocks/CardLink'
import CategoryList from './CaretoryList'
import AuthButton from '@/components/blocks/AuthButton'

const Aside = () => {
  return (
    <aside className='z-[19] flex h-full w-full flex-col px-3 py-10' aria-label='sidebar'>
      <ul className='flex flex-col gap-2 bg-white font-tossFace font-semibold dark:border-darkBg-100 dark:bg-darkBg-300 '>
        <li className={'relative flex w-full flex-col items-end'}>
          <CardLink
            href={process.env.NEXT_PUBLIC_CURRENT_URL + '/newsletter'}
            className='h-full w-full rounded-xl px-3 py-3 text-start font-tossFace transition-colors hover:bg-base-300 dark:hover:bg-darkBg-100'
          >
            최신 뉴스레터 🥳
          </CardLink>
          <div className='badge badge-error absolute -right-1 -top-1'>NEW</div>
        </li>
        <li className={'relative flex w-full flex-col items-end'}>
          <CardLink
            href={process.env.NEXT_PUBLIC_CURRENT_URL + '/newsletter/popular'}
            className='h-full w-full rounded-xl px-3 py-3 text-start font-tossFace transition-colors hover:bg-base-300 dark:hover:bg-darkBg-100'
          >
            인기 뉴스레터 🔥
          </CardLink>
          <div className='badge badge-accent absolute -right-1 -top-1'>인기</div>
        </li>
        <li className={'relative flex w-full flex-col items-end'}>
          <CardLink
            href={process.env.NEXT_PUBLIC_CURRENT_URL + '/newsletter/random'}
            className='h-full w-full rounded-xl px-3 py-3 text-start font-tossFace transition-colors hover:bg-base-300 dark:hover:bg-darkBg-100'
          >
            랜덤 뉴스레터 🎲
          </CardLink>
        </li>
      </ul>
      <div className='py-5 pl-10'>
        <div className='h-1 border-t border-gray-200 dark:border-darkBg-100' />
      </div>
      <CategoryList />
      <div className='py-5 pl-10'>
        <div className='h-1 border-t border-gray-200 dark:border-darkBg-100' />
      </div>
      <AuthButton className='' />
    </aside>
  )
}

export default Aside
