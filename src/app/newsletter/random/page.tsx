import DataList from '@/components/blocks/DataList'
import React from 'react'
import { getNewsLettersRandom } from '@/app/supabase-server'
import CardItem from '../components/CardItem'

export const revalidate = 0
export const dynamic = 'force-dynamic'

const NewsLetter = async () => {
  const newsletters = await getNewsLettersRandom()

  return (
    <DataList
      variant='block'
      title=''
      items={newsletters?.data.map((newsletter) => (
        <CardItem {...newsletter} id={newsletter?.id ? newsletter.id : -1} key={newsletter.id} />
      ))}
    />
  )
}

export default NewsLetter
