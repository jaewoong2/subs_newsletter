import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import Footer from '@/components/atoms/Footer'
import { Navigation } from '@/components/blocks'
import MobileNavDropBox from '@/components/blocks/MobileNavDropBox'
import NavDropBox from '@/components/blocks/NavDropBox'
import ThemeToogleButton from '@/components/blocks/ThemeToogleButton'
import { NEWSLETTER_ASIDE_LINK_ITEM } from '@/constants'
import CategoryList from '../newsletter/components/CaretoryList'
import Aside from '../newsletter/components/Aside'

const UserLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className='flex h-full w-full flex-col items-center dark:bg-darkBg-300'>
      <Navigation
        className={twMerge(
          'flex h-16 border-b bg-opacity-100 text-black',
          'dark:border-darkBg-100 dark:bg-darkBg-300 dark:bg-opacity-100 dark:text-white'
        )}
        isAnimate={false}
        menu={
          <div className='flex items-center justify-center gap-2'>
            <NavDropBox />
            <MobileNavDropBox>
              <Aside items={NEWSLETTER_ASIDE_LINK_ITEM}>
                <CategoryList />
              </Aside>
            </MobileNavDropBox>
            <ThemeToogleButton />
          </div>
        }
      />
      <main className='flex h-full min-h-screen  w-full max-w-lg justify-center py-24 dark:text-white'>{children}</main>
      <div className='w-full'>
        <Footer />
      </div>
    </section>
  )
}

export default UserLayout
