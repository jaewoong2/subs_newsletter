import React from 'react'
import DataList from '@/components/blocks/DataList'
import { getArticles } from '@/app/supabase-server'
import CardItem from '@/app/newsletter/components/CardItem'

const NewsLetter = async () => {
  const article = await getArticles('popular')

  return (
    <DataList
      variant='block'
      title=''
      items={article?.data.map(({ id, title, description, link, thumbnail }) => (
        <CardItem
          id={id}
          name={title}
          description={description}
          category={[]}
          thumbnail={thumbnail}
          link={link}
          days={[]}
          key={id}
        />
      ))}
    />
  )
}

export default NewsLetter
