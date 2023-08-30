import React, { Suspense } from 'react'
import { getNewsLetters } from '../supabase-server'
import DataList from '@/components/blocks/DataList'
import CardItem from './components/CardItem'
import NewsLetterList from './components/NewsLetterList'
import Loading from './loading'

const NewsLetter = async () => {
  const newsletters = await getNewsLetters('new', 10)

  return (
    <DataList variant='block' title=''>
      {newsletters?.data.map((newsletter) => (
        <CardItem {...newsletter} key={newsletter.id} />
      ))}
      <Suspense fallback={<Loading />}>
        <NewsLetterList />
      </Suspense>
    </DataList>
  )
}

export default NewsLetter
