import Card from '@/components/atoms/Card'
import { NewsLetter } from '@/types'
import React from 'react'

const CardItem = ({
  category,
  name,
  link,
  thumbnail,
  description,
  days,
  id,
}: Pick<NewsLetter, 'category' | 'name' | 'link' | 'thumbnail' | 'description' | 'days' | 'id'>) => {
  return (
    <div className='h-[450px] max-md:h-[300px]'>
      <Card
        id={id}
        title={name}
        description={description}
        image={thumbnail ?? ''}
        tags={category ?? []}
        link={link}
        days={days}
      />
    </div>
  )
}

export default CardItem
