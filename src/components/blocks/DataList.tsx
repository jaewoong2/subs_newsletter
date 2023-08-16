import React from 'react'
import ImageCarousel from './ImageCarousel'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { BASEURL } from '@/constants'

type Props = {
  title: string
  items?: React.ReactElement[]
  lastItem?: React.ReactElement
  variant?: 'carousel' | 'block'
}

const DataList = ({ title, items, lastItem, variant = 'carousel' }: Props) => {
  return items ? (
    <section className='flex w-full flex-col justify-center'>
      <h1 className='px-20 text-xl font-bold max-lg:px-10 max-md:px-0' id='new'>
        {title}
      </h1>
      {variant === 'carousel' && (
        <ImageCarousel
          items={items.concat(
            <Link
              href={BASEURL + '/newsletter'}
              className='flex h-full w-full scale-95 justify-end transition-transform hover:scale-100'
            >
              <div
                className={twMerge(
                  'flex h-full w-full flex-col items-center justify-center rounded-2xl border font-bold ',
                  'bg-slate-50 hover:bg-slate-200 dark:bg-darkBg-100 dark:hover:bg-darkBg-400',
                  'dark:border-darkBg-700'
                )}
              >
                {lastItem}
              </div>
            </Link>
          )}
        />
      )}
      {variant === 'block' && (
        <div className='grid h-full grid-cols-3 px-10 max-lg:grid-cols-2 max-md:grid-cols-2 max-md:px-0'>
          {items.map((item) => (
            <div className='h-[450px]' key={item.key}>
              {item}
            </div>
          ))}
        </div>
      )}
    </section>
  ) : null
}

export default DataList
