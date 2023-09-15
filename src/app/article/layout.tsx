import React, { PropsWithChildren } from 'react'
import Aside from '../newsletter/components/Aside'

import { ARTICLE_ASIDE_LINK_ITEM } from '@/constants'
import Layout from '@/components/layouts/Layout'

const ArticleLayout = ({ children }: PropsWithChildren) => {
  return <Layout aside={<Aside items={ARTICLE_ASIDE_LINK_ITEM} />}>{children}</Layout>
}

export default ArticleLayout
