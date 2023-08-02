import React from 'react'
import { getNewsLetters } from '../supabase-server'
import { Navigation } from '@/components/blocks'
import DataList from '@/components/blocks/DataList'
import Link from '@/components/blocks/Link'
import { twMerge } from 'tailwind-merge'
import { Card } from '@/components/atoms'
import Footer from '@/components/atoms/Footer'

type Props = {
  params: {
    [key: string]: string
  }
  searchParams: {
    [key: string]: string
  }
}

const NewsLetter = async ({ searchParams }: Props) => {
  const category = searchParams.category
  const newsletters = await getNewsLetters(category)

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
        <aside
          className='z-[19] h-full w-full px-3 py-10 max-md:fixed max-md:bottom-0 max-md:h-fit max-md:p-0'
          aria-label='sidebar'
        >
          <ul className='flex flex-col gap-2 bg-white font-tossFace font-semibold dark:border-darkBg-100 dark:bg-darkBg-300  max-md:flex-row max-md:border-t max-md:px-1 max-md:py-2'>
            <li className={'relative flex w-full flex-col items-end'}>
              <Link
                href={'newsletter'}
                isActive={!('category' in searchParams)}
                className='h-full w-full rounded-xl px-3 py-3 text-start font-tossFace transition-colors hover:bg-base-300 dark:hover:bg-darkBg-100 max-md:rounded-none max-md:bg-transparent max-md:text-center max-md:hover:bg-transparent'
              >
                최신 뉴스레터 🥳
              </Link>
              <div className='badge badge-error absolute -right-1 -top-1'>NEW</div>
            </li>
            <li className={'relative flex w-full flex-col items-end'}>
              <Link
                href={'newsletter?category=popular'}
                isActive={searchParams.category === 'popular'}
                className='h-full w-full rounded-xl px-3 py-3 text-start font-tossFace transition-colors hover:bg-base-300 dark:hover:bg-darkBg-100 max-md:rounded-none max-md:bg-transparent max-md:text-center max-md:hover:bg-transparent'
              >
                인기 뉴스레터 🔥
              </Link>
              <div className='badge badge-accent absolute -right-1 -top-1'>인기</div>
            </li>
            <li className={'relative flex w-full flex-col items-end'}>
              <Link
                href={'newsletter/random'}
                isActive={searchParams.category === 'random'}
                className='h-full w-full rounded-xl px-3 py-3 text-start font-tossFace transition-colors hover:bg-base-300 dark:hover:bg-darkBg-100 max-md:rounded-none max-md:bg-transparent max-md:text-center max-md:hover:bg-transparent'
              >
                랜덤 뉴스레터 🎲
              </Link>
            </li>
          </ul>
        </aside>
        <main className='pb-20'>
          <DataList
            variant='block'
            title=''
            items={newsletters?.data.map(({ id, link, description, name, thumbnail, category }) => (
              <figure key={`card-${id}`} className='h-full w-full'>
                <Link href={link ?? ''} newsLetterId={id}>
                  <Card title={name} description={description} image={thumbnail} tags={category ?? []} />
                </Link>
              </figure>
            ))}
          />
        </main>
        <div />
      </section>
      <Footer />
    </div>
  )
}

export default NewsLetter
