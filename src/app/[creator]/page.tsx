import React from 'react'
import { NextPageProps } from '@/types'
import {
  getNewsLettersByName,
  getRelatedNewsletter,
  getRelatedNewsletterByCategory,
  getRelatedNewsletters,
} from '../supabase-server'
import { notFound } from 'next/navigation'
import CardImage from '@/components/atoms/CardImage'
import CardLink from '@/components/blocks/CardLink'
import PageChecker from './components/PageChecker'
import { getRelatedItems } from '@/lib/recommend'
import DataList from '@/components/blocks/DataList'
import CardItem from '../newsletter/components/CardItem'

type Params = {
  creator?: string
}

const Creator = async ({ params }: NextPageProps<Params>) => {
  const newsletter = await getNewsLettersByName(params.creator)

  if (!newsletter || newsletter.error) {
    notFound()
  }
  const relatedNewsletterByView = await getRelatedNewsletter(newsletter.data.id)
  const relatedNewsletterByCategory = await getRelatedNewsletterByCategory(newsletter.data.id)

  const relatedNewsltters = await getRelatedNewsletters(
    getRelatedItems(
      relatedNewsletterByView?.data ?? [],
      relatedNewsletterByCategory?.data.map(({ id }) => id) ?? []
    ).map(({ related_item_id }) => related_item_id)
  )

  return (
    <div className='flex w-full flex-col items-center px-4'>
      <CardLink
        newsLetterId={newsletter.data.id}
        href={newsletter.data.link ?? ''}
        className='relative flex h-[150px] w-[150px] justify-center overflow-hidden rounded-3xl drop-shadow-xl'
      >
        <CardImage image={newsletter.data.thumbnail ?? ''} alt='thumbnail' className='cursor-pointer object-cover' />
      </CardLink>
      <CardLink
        newsLetterId={newsletter.data.id}
        href={newsletter.data.link ?? ''}
        className='relative flex justify-center pt-4 drop-shadow-xl'
      >
        <h2 className='font-SUITE text-2xl font-bold'>{newsletter.data.name}</h2>
      </CardLink>
      <h2 className='w-full px-10 pt-5 text-center font-SUITE text-base font-bold'>{newsletter.data.description}</h2>
      <div className='divider mx-auto w-[150px] p-0 dark:before:bg-darkBg-200 dark:after:bg-darkBg-200' />
      <DataList variant='block' title='해당 뉴스레터를 조회한 분이 확인한 뉴스레터 에요 ❗️'>
        {relatedNewsltters?.data.map((newsletter) => (
          <CardItem {...newsletter} key={newsletter.id} />
        ))}
      </DataList>
      <div className='flex gap-2'>
        {newsletter.data.days?.map((day) => (
          <div key={day} className='badge'>
            {day[0]}
          </div>
        ))}
      </div>
      <PageChecker id={newsletter.data.id} />
    </div>
  )
}

export default Creator
