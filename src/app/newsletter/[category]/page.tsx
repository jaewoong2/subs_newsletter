import React from 'react'
import { notFound } from 'next/navigation'
import { getNewsLettersByCategory } from '@/app/supabase-server'
import DataList from '@/components/blocks/DataList'
import CardItem from '../components/CardItem'

type Props = {
  params: {
    category?: string
  }
}

const NewsLetter = async ({ params }: Props) => {
  const newsletters = await getNewsLettersByCategory(params.category)

  if (!newsletters) {
    notFound()
  }

  return (
    <DataList
      variant='block'
      title=''
      items={newsletters?.data.map((newsletter) => (
        <CardItem {...newsletter} key={newsletter.id} />
      ))}
    />
  )
}

export default NewsLetter
