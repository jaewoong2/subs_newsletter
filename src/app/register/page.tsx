import { NextPageProps } from '@/types'
import React from 'react'
import { getNewsLettersByName } from '../supabase-server'
import { ARTICLE_ASIDE_LINK_ITEM, IMAGE, NEWSLETTER_ASIDE_LINK_ITEM } from '@/constants'
import Aside from '../newsletter/components/Aside'
import CategoryList from '../newsletter/components/CaretoryList'
import Layout from '@/components/layouts/Layout'
import InactivePage from './InactivePage'
import ActivedPage from './ActivedPage'
import { notFound } from 'next/navigation'

type SearchParams = {
  name: string
}

const Register = async ({ searchParams }: NextPageProps<null, SearchParams>) => {
  const { name } = searchParams
  const newsletter = await getNewsLettersByName(decodeURIComponent(name))

  if (!newsletter || !newsletter.data || newsletter.error) {
    notFound()
  }

  return (
    <Layout
      aside={
        <Aside items={NEWSLETTER_ASIDE_LINK_ITEM.concat(ARTICLE_ASIDE_LINK_ITEM)}>
          <CategoryList />
        </Aside>
      }
    >
      {newsletter?.data.status !== 'active' && <InactivePage newsletter={newsletter.data} />}
      {newsletter?.data.status === 'active' && (
        <ActivedPage name={newsletter?.data.name} thumbnail={newsletter?.data.thumbnail} />
      )}
    </Layout>
  )
}

export default Register
