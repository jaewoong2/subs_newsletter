import React, { Suspense } from 'react'
import { getNewsLetters } from '../supabase-server'
import DataList from '@/components/blocks/DataList'
import NewsLetterList from './components/NewsLetterList'
import Loading from './loading'
import Card from '@/components/atoms/Card'

const NewsLetter = async () => {
  const newsletters = await getNewsLetters('new', 10)

  return (
    <DataList variant='block' title=''>
      {newsletters?.data.map((newsletter) => (
        <div className='h-[450px] max-md:h-[300px]' key={newsletter.id}>
          <Card
            newsletterId={newsletter.id}
            title={newsletter.name}
            description={newsletter.description}
            image={newsletter.thumbnail ?? ''}
            tags={newsletter.category ?? []}
            link={`/${newsletter.name}`}
            days={newsletter.days}
            width={330}
            height={150}
          />
        </div>
      ))}
      <Suspense fallback={<Loading />}>
        <NewsLetterList />
      </Suspense>
    </DataList>
  )
}

export default NewsLetter
