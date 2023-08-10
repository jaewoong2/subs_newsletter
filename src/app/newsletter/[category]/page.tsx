import React from 'react'
import { getNewsLettersByCategory } from '@/app/supabase-server'
import { notFound } from 'next/navigation'
import DataList from '@/components/blocks/DataList'
import CardLink from '@/components/blocks/CardLink'
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
    <DataList
      variant='block'
      title=''
      items={newsletters?.data.map(({ id, link, description, name, thumbnail, category }) => (
        <figure key={`card-${id}`} className='h-[400px] w-full'>
          <CardLink href={link ?? ''} newsLetterId={id}>
            <Card title={name} description={description} image={thumbnail ?? ''} tags={category ?? []} />
          </CardLink>
        </figure>
      ))}
    />
  )
}

export default NewsLetter
