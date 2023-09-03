import { getLettersById } from '@/app/supabase-server'
import { NextPageProps } from '@/types'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import Content from './components/Content'

type Props = {
  creator: string
  letters: string
}

const CreatorsLetters = async ({ params }: NextPageProps<Props>) => {
  const letter = await getLettersById(+params.letters)

  return (
    <section className='w-full max-w-2xl px-3'>
      <Link
        href={`/${decodeURIComponent(params.creator)}`}
        className='link flex w-fit items-center gap-4 pb-4 text-xl font-bold text-blue-600'
      >
        <FaArrowLeft className='text-sm text-blue-600' />
        {decodeURIComponent(params.creator)}
      </Link>
      <div className='flex w-full items-center justify-between rounded-lg bg-slate-100 px-2 py-5'>
        <p className='text-lg font-semibold max-md:text-base'>{letter?.data.title}</p>
        <p className='text-sm font-semibold text-gray-600 max-md:text-xs'>{letter?.data.released_at?.slice(2, 10)}</p>
      </div>
      <div className='divider mx-auto w-full p-0 pb-6 dark:before:bg-darkBg-200 dark:after:bg-darkBg-200' />
      <Content
        className='absolute left-0 top-0 h-full w-full'
        id={`${letter?.data.id}`}
        name={`${letter?.data.id}`}
        sandbox='allow-same-origin'
        srcDoc={letter?.data.content ?? ''}
      />
    </section>
  )
}

export default CreatorsLetters
