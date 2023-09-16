import DataList from '@/components/blocks/DataList'
import React from 'react'
import { getNewsLettersRandom } from '@/app/supabase-server'
import Card from '@/components/atoms/Card'

const NewsLetter = async () => {
  const newsletters = await getNewsLettersRandom()

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
    </DataList>
  )
}

export default NewsLetter
