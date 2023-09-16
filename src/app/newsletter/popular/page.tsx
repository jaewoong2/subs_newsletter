import React, { Suspense } from 'react'

import DataList from '@/components/blocks/DataList'
import { getNewsLetters } from '@/app/supabase-server'
import NewsLetterList from '../components/NewsLetterList'
import Loading from '../loading'
import Card from '@/components/atoms/Card'

const NewsLetter = async () => {
  const newsletters = await getNewsLetters('popular', 10)

  return (
    <DataList variant='block' title=''>
      {newsletters?.data.map((newsletter) => (
        <div className='h-[450px] max-md:h-[300px]' key={newsletter.id}>
          <Card
            title={newsletter.name}
            description={newsletter.description}
            image={newsletter.thumbnail ?? ''}
            tags={newsletter.category ?? []}
            days={newsletter.days}
            link={`/${newsletter.name}`}
            width={330}
            height={150}
          />
        </div>
      ))}
      <Suspense fallback={<Loading />}>
        <NewsLetterList q={'popular'} />
      </Suspense>
    </DataList>
  )
}

export default NewsLetter
