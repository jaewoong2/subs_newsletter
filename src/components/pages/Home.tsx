import React from 'react'
import Link from 'next/link'
import { getArticles, getNewsLetters } from '@/app/supabase-server'
import DataList from '../blocks/DataList'
import Card from '../atoms/Card'

export const dynamic = 'force-static'
export const revalidate = process.env.NODE_ENV === 'development' ? 3600 : 0

export const Home = async () => {
  const articles = await getArticles()
  const newsletters = await getNewsLetters()

  return (
    <main className='flex flex-col gap-5 px-10 py-10 dark:bg-darkBg-300 dark:text-white max-md:px-5'>
      <DataList
        title='최신 뉴스레터'
        items={newsletters?.data.map(({ id, link, thumbnail, name, description, category }) => (
          <figure key={`card-${id}`} className='h-full w-full'>
            <Link href={link ?? ''}>
              <Card title={name} description={description} image={thumbnail ?? ''} tags={category ?? []} />
            </Link>
          </figure>
        ))}
        lastItem={
          <>
            <p className='text-xl font-semibold'>더욱 많은 뉴스레터가 있어요</p>
            <p className='font-thin'>내 취향에 맞는 뉴스레터를 확인 해보세요!</p>
          </>
        }
      />
      <DataList
        title='뉴스레터 소식'
        items={articles?.data.map(({ id, link, description, title, thumbnail }) => (
          <figure key={`card-${id}`} className='h-full w-full'>
            <Link href={link ?? ''}>
              <Card title={title} description={description} image={thumbnail ?? ''} />
            </Link>
          </figure>
        ))}
        lastItem={
          <>
            <p className='text-xl font-semibold'>뉴스레터 관련한 소식이 있어요!</p>
            <p className='font-thin'>뉴스레터 소식 보러 가요 🐝</p>
          </>
        }
      />
    </main>
  )
}
