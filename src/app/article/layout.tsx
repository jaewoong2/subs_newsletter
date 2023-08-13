import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import Footer from '@/components/atoms/Footer'
import { Navigation } from '@/components/blocks'
import Aside from '../newsletter/components/Aside'
import NavDropBox from '@/components/blocks/NavDropBox'
import MobileNavDropBox from '@/components/blocks/MobileNavDropBox'
import ThemeToogleButton from '@/components/blocks/ThemeToogleButton'
import { ARTICLE_ASIDE_LINK_ITEM } from '@/constants'

const ArticleLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex h-full w-full flex-col'>
      <Navigation
        className={twMerge(
          'flex h-16 border-b bg-opacity-100 text-black',
          'dark:border-darkBg-100 dark:bg-darkBg-300 dark:bg-opacity-100 dark:text-white'
        )}
        isAnimate={false}
        menu={
          <div className='flex items-center justify-center gap-2'>
            <NavDropBox />
            <MobileNavDropBox asideItems={ARTICLE_ASIDE_LINK_ITEM} />
            <ThemeToogleButton />
          </div>
        }
      />
      <section
        className={twMerge(
          'mt-16 grid grid-cols-[1fr_4fr_1fr] max-xl:grid-cols-[1fr_3fr]',
          'max-md:flex',
          'dark:bg-darkBg-300 dark:text-white'
        )}
      >
        <div className='max-md:hidden'>
          <Aside items={ARTICLE_ASIDE_LINK_ITEM} />
        </div>
        <main className='min-h-screen pb-20'>{children}</main>
        <div />
      </section>
      <Footer />
    </div>
  )
}

export default ArticleLayout
