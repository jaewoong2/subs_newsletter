import React from 'react'
import { getArticles, getNewsLetters } from '@/app/supabase-server'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const DataList = dynamic(() => import('../blocks/DataList'))
const UserCheckModal = dynamic(() => import('../blocks/UserCheckModal'))
const ImageCarousel = dynamic(() => import('../blocks/ImageCarousel'))
const Card = dynamic(() => import('../atoms/Card'))

export const Home = async () => {
  const articles = await getArticles()
  const newsletters = await getNewsLetters()

  return (
    <main className='flex flex-col gap-5 px-10 py-10 dark:bg-darkBg-300 dark:text-white max-md:px-5'>
      <DataList title='최신 뉴스레터'>
        <ImageCarousel
          items={newsletters?.data
            .map(({ id, link, thumbnail, name, description, category }) => (
              <figure key={`card-${id}-${name}`} className='h-full w-full'>
                <Card
                  title={name}
                  description={description}
                  image={thumbnail ?? ''}
                  link={link}
                  tags={category ?? []}
                  width={300}
                  height={150}
                />
              </figure>
            ))
            .concat(
              <Link
                href='/newsletter'
                className='flex h-full w-full scale-95 cursor-pointer flex-col items-center justify-center rounded-xl border bg-slate-200 p-5 transition-transform hover:scale-100 dark:border-darkBg-800 dark:bg-darkBg-100'
              >
                <p className='text-lg font-semibold'>더욱 많은 뉴스레터가 있어요</p>
                <p className='whitespace-nowrap text-sm font-thin'>내 취향에 맞는 뉴스레터를 확인 해보세요!</p>
              </Link>
            )}
        />
      </DataList>
      <DataList title='뉴스레터 소식'>
        <ImageCarousel
          items={articles?.data
            .map(({ id, link, description, title, thumbnail }) => (
              <figure key={`card-${id}-${title}`} className='h-full w-full'>
                <Card title={title} description={description} image={thumbnail ?? ''} link={link} />
              </figure>
            ))
            .concat(
              <Link
                href='/article'
                className='flex h-full w-full scale-95 cursor-pointer flex-col items-center justify-center rounded-xl border bg-slate-200 p-5 transition-transform hover:scale-100 dark:border-darkBg-800 dark:bg-darkBg-100'
              >
                <p className='text-lg font-semibold'>더욱 많은 소식이 있어요</p>
                <p className='whitespace-nowrap text-sm font-thin'>내 취향에 맞는 뉴스레터 소식을 확인 해보세요!</p>
              </Link>
            )}
        />
      </DataList>
      <UserCheckModal />
    </main>
  )
}
