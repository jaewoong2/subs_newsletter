import { Navigation } from '@/components/blocks'
import DataList from '@/components/blocks/DataList'
import Link from '@/components/blocks/CardLink'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import Footer from '@/components/atoms/Footer'
import { getNewsLettersRandom } from '@/app/supabase-server'
import Aside from '../components/Aside'
import Card from '@/components/atoms/Card'

const NewsLetter = async () => {
  const newsletters = await getNewsLettersRandom()

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
