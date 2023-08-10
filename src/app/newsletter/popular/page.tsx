import React from 'react'
import DataList from '@/components/blocks/DataList'
import Link from '@/components/blocks/CardLink'
import { getNewsLetters } from '@/app/supabase-server'
import Card from '@/components/atoms/Card'

const NewsLetter = async () => {
  const newsletters = await getNewsLetters('popular')

  return (
    <DataList
      variant='block'
      title=''
      items={newsletters?.data.map(({ id, link, description, name, thumbnail, category }) => (
        <figure key={`card-${id}`} className='h-full w-full'>
          <Link href={link ?? ''} newsLetterId={id ?? 0}>
            <Card title={name} description={description} image={thumbnail ?? ''} tags={category ?? []} />
          </Link>
        </figure>
      ))}
    />
  )
}

export default NewsLetter
