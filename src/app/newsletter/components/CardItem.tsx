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
    <Card
      id={id}
      title={name}
      description={description}
      image={thumbnail ?? ''}
      tags={category ?? []}
      link={link}
      days={days}
    />
  )
}

export default CardItem
