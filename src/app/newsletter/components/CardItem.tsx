import Card from '@/components/atoms/Card'
import CardLink from '@/components/blocks/CardLink'
import { NewsLetter } from '@/types'
import React from 'react'

const CardItem = ({
  category,
  id,
  name,
  link,
  thumbnail,
  description,
}: Pick<NewsLetter, 'category' | 'id' | 'name' | 'link' | 'thumbnail' | 'description'>) => {
  return (
    <figure key={`card-${id}`} className='h-[400px] w-full'>
      <CardLink href={link ?? ''} newsLetterId={id}>
        <Card title={name} description={description} image={thumbnail ?? ''} tags={category ?? []} />
      </CardLink>
    </figure>
  )
}

export default CardItem
