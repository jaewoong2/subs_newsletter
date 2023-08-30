import React, { PropsWithChildren } from 'react'
import ImageCarousel from './ImageCarousel'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { BASEURL } from '@/constants'

type Props = {
  title: string
  items?: React.ReactElement[]
  lastItem?: React.ReactElement
  variant?: 'carousel' | 'block'
  isLoading?: boolean
}

const DataList = ({
  title,
  items = [],
  lastItem,
  isLoading,
  children,
  variant = 'carousel',
}: PropsWithChildren<Props>) => {
  return (
    <section className='flex w-full flex-col justify-center'>
      <h3 className='px-20 text-xl font-bold max-lg:px-10 max-md:px-0' id='new'>
        {title}
      </h3>
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
          {children}
          {isLoading && (
            <div className='h-[450px] max-md:h-[300px]' aria-label='Loading space reserved for incoming data content' />
          )}
          {lastItem}
        </div>
      )}
    </section>
  )
}

export default DataList
