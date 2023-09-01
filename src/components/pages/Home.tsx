import React from 'react'
import { getArticles, getNewsLetters } from '@/app/supabase-server'
import dynamic from 'next/dynamic'

const DataList = dynamic(() => import('../blocks/DataList'))
const UserCheckModal = dynamic(() => import('../blocks/UserCheckModal'))
const ImageCarousel = dynamic(() => import('../blocks/ImageCarousel'))
const Card = dynamic(() => import('../atoms/Card'))

export const Home = async () => {
  const articles = await getArticles()
  const newsletters = await getNewsLetters()

  return (
    <main className='flex flex-col gap-5 px-10 py-10 dark:bg-darkBg-300 dark:text-white max-md:px-5'>
      <DataList
        title='최신 뉴스레터'
        lastItem={
          <>
            <p className='text-xl font-semibold'>더욱 많은 뉴스레터가 있어요</p>
            <p className='font-thin'>내 취향에 맞는 뉴스레터를 확인 해보세요!</p>
          </>
        }
      >
        <ImageCarousel
          items={
            newsletters?.data.map(({ id, link, thumbnail, name, description, category }) => (
              <figure key={`card-${id}-${name}`} className='h-full w-full'>
                <Card
                  title={name}
                  description={description}
                  image={thumbnail ?? ''}
                  link={link}
                  tags={category ?? []}
                />
              </figure>
            )) ?? []
          }
        />
      </DataList>
      <DataList
        title='뉴스레터 소식'
        lastItem={
          <>
            <p className='text-xl font-semibold'>뉴스레터 관련한 소식이 있어요!</p>
            <p className='font-thin'>뉴스레터 소식 보러 가요 🐝</p>
          </>
        }
      >
        <ImageCarousel
          items={
            articles?.data.map(({ id, link, description, title, thumbnail }) => (
              <figure key={`card-${id}-${title}`} className='h-full w-full'>
                <Card title={title} description={description} image={thumbnail ?? ''} link={link} />
              </figure>
            )) ?? []
          }
        />
      </DataList>
      <UserCheckModal />
    </main>
  )
}
