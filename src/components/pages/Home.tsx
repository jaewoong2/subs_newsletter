import React from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Card } from '../atoms'
import ImageCarousel from '../blocks/ImageCarousel'
import { getNewsLetters } from '@/app/supabase-server'

export const Home = async () => {
  const response = await getNewsLetters()

  return (
    <main className='flex px-10 dark:bg-darkBg-300 dark:text-white'>
      <section className='flex w-full flex-col justify-center py-10'>
        <h1 className='px-20 text-xl font-bold max-lg:px-10 max-md:px-0' id='new'>
          최신 뉴스레터
        </h1>
        <ImageCarousel
          items={response?.data
            ?.map(({ name, thumbnail, category, description, id, Link: link }) => (
              <figure key={`card-${id}`} className='h-full w-full'>
                <Link href={link ?? ''}>
                  <Card title={name} description={description} image={thumbnail} tags={category ?? []} />
                </Link>
              </figure>
            ))
            .concat(
              <Link
                href={'newsletter'}
                className='flex h-full w-full scale-95 justify-end transition-transform hover:scale-100'
              >
                <div
                  className={twMerge(
                    'flex h-full w-full flex-col items-center justify-center rounded-2xl border font-bold ',
                    'bg-slate-50 hover:bg-slate-200 dark:bg-darkBg-100 dark:hover:bg-darkBg-400',
                    'dark:border-darkBg-700'
                  )}
                >
                  <p className='text-xl font-semibold'>더욱 많은 뉴스레터가 있어요</p>
                  <p className='font-thin'>내 취향에 맞는 뉴스레터를 확인 해보세요!</p>
                </div>
              </Link>
            )}
        />
      </section>
    </main>
  )
}
