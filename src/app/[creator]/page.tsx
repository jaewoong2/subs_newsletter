import React from 'react'
import { NextPageProps } from '@/types'
import {
  getLettersByNewsLetterId,
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
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { CgEye } from 'react-icons/cg'
import { RxOpenInNewWindow } from 'react-icons/rx'

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

  const letters = await getLettersByNewsLetterId(newsletter.data.id)

  return (
    <div className='flex h-full min-h-screen w-full max-w-xl flex-col items-center px-4'>
      <CardLink
        newsLetterId={newsletter.data.id}
        href={newsletter.data.link ?? ''}
        className='relative flex h-[150px] w-[150px] justify-center overflow-hidden rounded-3xl drop-shadow-xl'
        target='_blank'
      >
        <CardImage image={newsletter.data.thumbnail ?? ''} alt='thumbnail' className='cursor-pointer object-cover' />
      </CardLink>
      <CardLink
        newsLetterId={newsletter.data.id}
        href={newsletter.data.link ?? ''}
        className='relative flex items-center justify-center gap-5 pt-4 drop-shadow-xl'
        target='_blank'
      >
        <h2 className='font-SUITE text-2xl font-bold'>{newsletter.data.name}</h2>
        <RxOpenInNewWindow className='absolute left-[calc(100%+4px)] top-2 rounded-xl text-base' />
      </CardLink>
      <div className='flex items-center justify-center gap-1 pt-2 text-xs'>
        <CgEye />
        {newsletter.data.view}
      </div>
      <div className='flex gap-2 pt-4'>
        {newsletter.data.category?.map((category) => (
          <div key={category} className='badge'>
            {category}
          </div>
        ))}
      </div>
      <h2 className='w-full px-10 pt-5 text-center font-SUITE text-base font-bold'>{newsletter.data.description}</h2>
      <div className='flex gap-2 pt-4'>
        {newsletter.data.days?.map((day) => (
          <div key={day} className='badge'>
            {day[0]}
          </div>
        ))}
      </div>
      <div className='divider mx-auto w-[150px] p-0 dark:before:bg-darkBg-200 dark:after:bg-darkBg-200' />
      {!letters?.data ||
        (letters?.data.length !== 0 && (
          <p className='font-tossFace text-lg font-bold'>최근에 작성된 뉴스레터 에요 💌</p>
        ))}
      <ul className='flex h-fit w-full flex-col items-center justify-center gap-5 py-12'>
        {letters?.data.map(({ id, title }) => (
          <li
            key={id}
            className={twMerge(
              'max-w-sm text-sm font-semibold',
              'group flex w-full items-center justify-center transition-transform hover:-translate-y-2'
            )}
          >
            <Link
              href={`/${params.creator}/${id}`}
              className='w-full max-w-sm rounded-xl border p-5 group-hover:bg-slate-100 dark:group-hover:bg-darkBg-200'
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <DataList
        title={<p className='flex w-full justify-center font-tossFace text-lg'> 함께 찾아본 뉴스레터에요 🧐</p>}
      >
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
                  days={newsletter.days}
                  link={`/${newsletter.name}`}
                />
              </div>
            )) ?? []
          }
        />
      </DataList>
      <PageChecker id={newsletter.data.id} />
    </div>
  )
}

export default Creator
