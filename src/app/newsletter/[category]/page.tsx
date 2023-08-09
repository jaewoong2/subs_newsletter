import React from 'react'
import { Navigation } from '@/components/blocks'
import { twMerge } from 'tailwind-merge'
import Footer from '@/components/atoms/Footer'
import { getNewsLettersByCategory } from '@/app/supabase-server'
import { notFound } from 'next/navigation'
import DataList from '@/components/blocks/DataList'
import CardLink from '@/components/blocks/CardLink'
import Card from '@/components/atoms/Card'
import Aside from '../components/Aside'

// export const revalidate = process.env.NODE_ENV === 'development' ? 3600 : 0

type Props = {
  params: {
    category?: string
  }
}

const NewsLetter = async ({ params }: Props) => {
  const newsletters = await getNewsLettersByCategory(params.category)

  if (!newsletters) {
    notFound()
  }

  return (
    <div className='flex h-full w-full flex-col'>
      <Navigation
        className={twMerge(
          'flex h-16 border-b bg-opacity-100 text-black',
          'dark:border-darkBg-100 dark:bg-darkBg-300 dark:bg-opacity-100 dark:text-white'
        )}
        isAnimate={false}
      />
      <section
        className={twMerge(
          'mt-16 grid grid-cols-[1fr_4fr_1fr] max-xl:grid-cols-[1fr_3fr]',
          'max-md:flex',
          'dark:bg-darkBg-300 dark:text-white'
        )}
      >
        <Aside />
        <main className='min-h-screen pb-20'>
          <DataList
            variant='block'
            title=''
            items={newsletters?.data.map(({ id, link, description, name, thumbnail, category }) => (
              <figure key={`card-${id}`} className='h-[400px] w-full'>
                <CardLink href={link ?? ''} newsLetterId={id}>
                  <Card title={name} description={description} image={thumbnail ?? ''} tags={category ?? []} />
                </CardLink>
              </figure>
            ))}
          />
        </main>
        <div />
      </section>
      <Footer />
    </div>
  )
}

export default NewsLetter
