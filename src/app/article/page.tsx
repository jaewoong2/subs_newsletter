import React from 'react'
import { getArticles } from '../supabase-server'
import DataList from '@/components/blocks/DataList'
import Card from '@/components/atoms/Card'
import { Metadata } from 'next'
import { METADATA } from '@/constants'

export const metadata: Metadata = { ...METADATA, title: '뉴섭 | 뉴스레터 소식' }

const ArticlePage = async () => {
  const article = await getArticles()

  return (
    <DataList variant='block' title=''>
      {article?.data.map(({ id, title, description, thumbnail }) => (
        <div className='h-[450px] max-md:h-[300px]' key={id}>
          <Card
            articleId={id}
            title={title}
            description={description}
            image={thumbnail ?? ''}
            tags={[]}
            link={`article/${title}?`}
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
