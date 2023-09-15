import React from 'react'
import { getArticles } from '../supabase-server'
import DataList from '@/components/blocks/DataList'
import Card from '@/components/atoms/Card'

const ArticlePage = async () => {
  const article = await getArticles()

  return (
    <DataList variant='block' title=''>
      {article?.data.map(({ id, title, description, link, thumbnail }) => (
        <div className='h-[450px] max-md:h-[300px]' key={id}>
          <Card
            id={id}
            title={title}
            description={description}
            image={thumbnail ?? ''}
            tags={[]}
            link={link}
            days={[]}
            width={330}
            height={150}
          />
        </div>
      ))}
    </DataList>
  )
}

export default ArticlePage
