import React from 'react'
import { notFound } from 'next/navigation'
import { getNewsLettersByCategory } from '@/app/supabase-server'
import DataList from '@/components/blocks/DataList'
import Card from '@/components/atoms/Card'

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
    <DataList variant='block' title=''>
      {newsletters?.data.map((newsletter) => (
        <div className='h-[450px] max-md:h-[300px]' key={newsletter.id}>
          <Card
            title={newsletter.name}
            description={newsletter.description}
            image={newsletter.thumbnail ?? ''}
            tags={newsletter.category ?? []}
            link={newsletter.link}
            days={newsletter.days}
            width={330}
            height={150}
          />
        </div>
      ))}
    </DataList>
  )
}

export default NewsLetter
