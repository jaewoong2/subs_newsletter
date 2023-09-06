import DataList from '@/components/blocks/DataList'
import React from 'react'
import { getNewsLettersRandom } from '@/app/supabase-server'
import CardItem from '../components/CardItem'

const NewsLetter = async () => {
  const newsletters = await getNewsLettersRandom()

  return (
    <DataList variant='block' title=''>
      {newsletters?.data.map((newsletter) => (
        <CardItem {...newsletter} id={newsletter?.id ? newsletter.id : -1} key={newsletter.id} />
      ))}
    </DataList>
  )
}

export default NewsLetter
