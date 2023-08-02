import { Navigation } from '@/components/blocks'
import DataList from '@/components/blocks/DataList'
import Link from '@/components/blocks/Link'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Card } from '@/components/atoms'
import Footer from '@/components/atoms/Footer'
import { getNewsLettersRandom } from '@/app/supabase-server'
import Aside from '../components/Aside'

const NewsLetter = async () => {
  const newsletters = await getNewsLettersRandom()

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
        <main className='pb-20'>
          <DataList
            variant='block'
            title=''
            items={newsletters?.data.map(({ id, link, description, name, thumbnail, category }) => (
              <figure key={`card-${id}`} className='h-full w-full'>
                <Link href={link ?? ''} newsLetterId={id ?? 0}>
                  <Card title={name} description={description} image={thumbnail} tags={category ?? []} />
                </Link>
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
