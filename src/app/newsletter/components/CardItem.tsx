import Card from '@/components/atoms/Card'
import { NewsLetter } from '@/types'
import React from 'react'

const CardItem = ({
  category,
  id,
  name,
  link,
  thumbnail,
  description,
  days,
}: Pick<NewsLetter, 'category' | 'id' | 'name' | 'link' | 'thumbnail' | 'description' | 'days'>) => {
  return (
    <figure key={`card-${id}`} className='h-[500px] w-full'>
      <Card
        title={name}
        description={description}
        image={thumbnail ?? ''}
        tags={category ?? []}
        link={link}
        days={days}
      />
    </figure>
  )
}

export default CardItem
