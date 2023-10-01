import { getArticleById } from '@/app/supabase-server'
import { METADATA } from '@/constants'
import { NextPageProps } from '@/types'
import { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'

type Params = {
  content: string
}

type SearchParams = {
  id: string
}
export async function generateMetadata({ params }: NextPageProps<Params, SearchParams>): Promise<Metadata> {
  const article = await getArticleById(decodeURIComponent(params.content))

  if (article?.error || !article?.data) return { ...METADATA }

  return {
    ...METADATA,
    title: `뉴섭 | ${article.data.title}`,
    description: `${article.data.description?.slice(0, 170)}`,
    openGraph: {
      title: `뉴섭 | ${article.data.title}`,
      url: `${process.env.NEXT_PUBLIC_CURRENT_URL}/article/${decodeURIComponent(params.content)}`,
      images: [article.data.thumbnail ?? ''],
      type: 'article',
      description: `${article.data.description}`,
    },
    twitter: {
      title: `뉴섭 | ${article.data.title}`,
      site: `${process.env.NEXT_PUBLIC_CURRENT_URL}/article/${decodeURIComponent(params.content)}`,
      images: [article.data.thumbnail ?? ''],
      description: `${article.data.description}`,
    },
  }
}

const ContentPage = async ({ params }: NextPageProps<Params, SearchParams>) => {
  const article = await getArticleById(decodeURIComponent(params.content))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: article?.data.title,
    image: article?.data.thumbnail,
    description: article?.data.description,
  }

  return (
    <div className='mx-auto flex w-full max-w-[65ch] flex-col items-center justify-center px-3'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className='flex w-full items-center pt-10'>
        <Link
          href={'/article'}
          className='link flex w-fit items-center gap-4 pb-4 text-xl font-bold text-blue-600 dark:text-white'
        >
          <FaArrowLeft className='text-sm text-blue-600 dark:text-white' />
          <h1 className='text-10 text-2xl font-bold'>{decodeURIComponent(params.content)}</h1>
        </Link>
      </div>
      <div className='flex-start flex w-full pb-10'>
        <p
          className='flex w-full justify-end text-sm font-semibold text-gray-600 dark:text-white max-md:text-xs'
          aria-label='작성일'
        >
          <span className='sr-only'>작성일</span>
          {article?.data.created_at?.slice(2, 10)}
        </p>
      </div>
      <ReactMarkdown className='prose prose-slate dark:prose-invert'>
        {article?.data.content ?? '## 소식이 없어요 T^T'}
      </ReactMarkdown>
    </div>
  )
}

export default ContentPage
