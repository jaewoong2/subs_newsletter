import React from 'react'
import { getNewsLetters } from '../supabase-server'
import DataList from '@/components/blocks/DataList'
import Link from '@/components/blocks/CardLink'
import Card from '@/components/atoms/Card'

export const revalidate = process.env.NODE_ENV === 'development' ? 3600 : 0

const NewsLetter = async () => {
  const newsletters = await getNewsLetters('new')

  return (
    <DataList
      variant='block'
      title=''
      items={newsletters?.data.map(({ id, link, description, name, thumbnail, category }) => (
        <figure key={`card-${id}`} className='h-full w-full'>
          <Link href={link ?? ''} newsLetterId={id}>
            <Card title={name} description={description} image={thumbnail ?? ''} tags={category ?? []} />
          </Link>
        </figure>
      ))}
    />
  )
}

export default NewsLetter
