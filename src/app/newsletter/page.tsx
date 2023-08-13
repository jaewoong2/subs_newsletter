import React from 'react'
import { getNewsLetters } from '../supabase-server'
import DataList from '@/components/blocks/DataList'
import CardItem from './components/CardItem'

export const revalidate = process.env.NODE_ENV === 'development' ? 3600 : 0

const NewsLetter = async () => {
  const newsletters = await getNewsLetters('new')

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
