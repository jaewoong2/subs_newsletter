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
import Card from '@/components/atoms/Card'
import DataList from '@/components/blocks/DataList'
import ImageCarousel from '@/components/blocks/ImageCarousel'

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
    <div className='flex h-full min-h-screen w-full flex-col items-center px-4'>
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
      <DataList title={<p className='flex w-full justify-center font-tossFace'> 함께 찾아본 뉴스레터에요 🧐</p>}>
        <ImageCarousel
          className='w-full'
          itemWrapperClassName='gap-1'
          itemClassName='w-[50%] max-lg:w-[50%] max-md:w-[50%] max-sm:w-[50%] h-[250px] gap-0 px-1'
          items={
            relatedNewsltters?.data.map((newsletter) => (
              <div className='h-[240px] w-full' key={newsletter.id}>
                <Card
                  {...newsletter}
                  image={newsletter.thumbnail ?? ''}
                  title={newsletter.name}
                  tags={newsletter.category ?? []}
                />
              </div>
            )) ?? []
          }
        />
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
