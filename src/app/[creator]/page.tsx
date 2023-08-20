import React from 'react'
import { NextPageProps } from '@/types'
import { getNewsLettersByName } from '../supabase-server'
import { notFound } from 'next/navigation'
import CardImage from '@/components/atoms/CardImage'
import CardLink from '@/components/blocks/CardLink'

type Params = {
  creator?: string
}

const Creator = async ({ params }: NextPageProps<Params>) => {
  const newsletter = await getNewsLettersByName(params.creator)

  if (!newsletter || newsletter.error) {
    notFound()
  }

  // MAIN 화면 (VIEW GET)
  // 1. creator === newsletter 이름
  // 2. newsletter db
  // 3. newsletter thumbnail, newsletter name, newsletter days
  // 4. creator db
  // 5. creator`s contents

  // 6. 세션에 로그인된 아이디의 등록된 ID가 해당 뉴스레터를 관리 할 수 있으면 수정 페이지 OK

  return (
    <div className='flex w-full flex-col items-center px-4'>
      <CardLink
        newsLetterId={newsletter.data.id}
        href={newsletter.data.link ?? ''}
        className='relative flex h-[150px] w-[150px] justify-center overflow-hidden rounded-3xl drop-shadow-xl'
      >
        <CardImage image={newsletter.data.thumbnail ?? ''} alt='thumbnail' className='cursor-pointer object-cover' />
      </CardLink>
      <h2 className='w-full px-10 pt-5 text-center font-SUITE text-base font-bold'>{newsletter.data.description}</h2>
      <div className='divider mx-auto w-[150px] p-0' />
      <CardLink
        newsLetterId={newsletter.data.id}
        href={newsletter.data.link ?? ''}
        className='relative flex justify-center drop-shadow-xl'
      >
        <h2 className='font-SUITE text-2xl font-bold'>{newsletter.data.name}</h2>
      </CardLink>
      <div className='flex gap-2'>
        {newsletter.data.days?.map((day) => (
          <div key={day} className='badge'>
            {day[0]}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Creator
