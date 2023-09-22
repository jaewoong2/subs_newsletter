import React from 'react'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import CardLink from '../blocks/CardLink'
import { BASEURL } from '@/constants'
import { Articles, NewsLetter } from '@/types'
import CardImage from './CardImage'
import Days from './Days'

type Props = {
  image: string
  alt?: string
  title?: React.ReactNode
  description?: React.ReactNode
  tags?: string[]
  width?: string | number
  height?: string | number
  className?: string
  newsletterId?: NewsLetter['id']
  articleId?: Articles['id']
} & Partial<NewsLetter>

const Card = ({
  title,
  description,
  image,
  alt,
  tags,
  id,
  width,
  height,
  days,
  newsletterId,
  articleId,
  link,
  className,
}: Props) => {
  return (
    <article className='relative h-full w-full'>
      <div
        className={twMerge(
          'group card mx-auto h-full w-full scale-95 border bg-base-100 bg-transparent transition-transform',
          'hover:scale-100 hover:border-slate-400 dark:border-darkBg-800 dark:bg-darkBg-100',
          'relative flex flex-col',
          'animate-fade',
          className
        )}
      >
        <CardLink
          href={link ?? ''}
          newsLetterId={newsletterId}
          artlceId={articleId}
          className='grid h-[90%] w-full grid-rows-2'
        >
          <div className='h-full w-full'>
            <CardImage image={image} alt={alt} width={width} height={height} />
          </div>
          <div className='flex flex-col gap-3 text-clip px-6 py-2'>
            <h4 className='card-title'>{title}</h4>
            <span className='line-clamp-3 overflow-hidden max-md:line-clamp-2 max-md:text-sm'>{description}</span>
          </div>
        </CardLink>
        <div className='flex w-full items-center justify-start gap-3 overflow-x-scroll px-3 pb-4'>
          {tags?.map((tag) => (
            <Link
              href={BASEURL + `/newsletter/${tag}`}
              tabIndex={0}
              key={tag}
              className={twMerge(
                'badge badge-outline z-[20] whitespace-nowrap',
                'hover:badge-neutral hover:bg-slate-200'
              )}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
      <Days days={days} />
    </article>
  )
}

export default Card
