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
import { METADATA } from '@/constants'
import Page from './components/Page'
type Params = {
  creator?: string
}

export async function generateMetadata({ params }: NextPageProps<Params>) {
  const newsletter = await getNewsLettersByName(params.creator)

  if (newsletter?.error || !newsletter?.data) return { ...METADATA }

  return {
    ...METADATA,
    title: `뉴섭 | ${newsletter.data.name}`,
    description: `${newsletter.data.description?.slice(0, 170)}`,
    openGraph: {
      title: `뉴섭 | ${newsletter.data.name}`,
      url: `${process.env.NEXT_PUBLIC_CURRENT_URL}/${decodeURIComponent(params.creator ?? '')}`,
      images: [newsletter.data.thumbnail ?? ''],
      type: 'article',
      description: `${newsletter.data.description}`,
    },
    twitter: {
      title: `뉴섭 | ${newsletter.data.name}`,
      site: `${process.env.NEXT_PUBLIC_CURRENT_URL}/${decodeURIComponent(params.creator ?? '')}`,
      images: [newsletter.data.thumbnail ?? ''],
      description: `${newsletter.data.description}`,
    },
  }
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
    <Page newsletter={newsletter.data} letters={letters?.data ?? null} relatedNewsltters={relatedNewsltters?.data} />
  )
}

export default Creator
