import React, { PropsWithChildren } from 'react'
import Aside from './components/Aside'
import CategoryList from './components/CaretoryList'
import { NEWSLETTER_ASIDE_LINK_ITEM } from '@/constants'
import Layout from '@/components/layouts/Layout'

const NewsLetterLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout
      aside={
        <Aside items={NEWSLETTER_ASIDE_LINK_ITEM}>
          <CategoryList />
        </Aside>
      }
    >
      {children}
    </Layout>
  )
}

export default NewsLetterLayout
