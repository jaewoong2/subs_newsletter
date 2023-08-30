import React, { Suspense } from 'react'
import DataList from '@/components/blocks/DataList'
import { getNewsLetters } from '@/app/supabase-server'
import CardItem from '../components/CardItem'
import Loading from '../loading'
import NewsLetterList from '../components/NewsLetterList'

const NewsLetter = async () => {
  const newsletters = await getNewsLetters('popular', 10)

  return (
    <DataList variant='block' title=''>
      {newsletters?.data.map((newsletter) => (
        <CardItem {...newsletter} key={newsletter.id} />
      ))}
      <Suspense fallback={<Loading />}>
        <NewsLetterList q={'popular'} />
      </Suspense>
    </DataList>
  )
}

export default NewsLetter
