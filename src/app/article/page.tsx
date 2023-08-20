import React from 'react'
import { getArticles } from '../supabase-server'
import DataList from '@/components/blocks/DataList'
import CardItem from '../newsletter/components/CardItem'

const ArticlePage = async () => {
  const article = await getArticles()

  return (
    <DataList
      variant='block'
      title=''
      items={article?.data.map(({ id, title, description, link, thumbnail }) => (
        <CardItem
          name={title}
          description={description}
          category={[]}
          days={[]}
          thumbnail={thumbnail}
          link={link}
          key={id}
        />
      ))}
    />
  )
}

export default ArticlePage
