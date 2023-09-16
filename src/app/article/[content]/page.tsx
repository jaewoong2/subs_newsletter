import { getArticleById } from '@/app/supabase-server'
import { NextPageProps } from '@/types'
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

const ContentPage = async ({ params }: NextPageProps<Params, SearchParams>) => {
  const article = await getArticleById(decodeURIComponent(params.content))

  return (
    <div className='mx-auto flex w-full max-w-[65ch] flex-col items-center justify-center px-3'>
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
