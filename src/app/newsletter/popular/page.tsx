import React from 'react'
import DataList from '@/components/blocks/DataList'
import { getNewsLetters } from '@/app/supabase-server'
import CardItem from '../components/CardItem'

const NewsLetter = async () => {
  const newsletters = await getNewsLetters('popular')

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
