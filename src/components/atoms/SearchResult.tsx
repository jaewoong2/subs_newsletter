import React from 'react'
import Link from 'next/link'
import { NewsLetter } from '@/types'
import { IMAGE } from '@/constants'
import CardImage from './CardImage'

type Props = Partial<NewsLetter>

const SearchResult = ({ link, thumbnail, name, description }: Props) => {
  return (
    <li>
      <Link
        href={link ?? '/'}
        className='flex h-24 cursor-pointer items-center justify-center gap-2 rounded-lg p-3 hover:bg-slate-100'
      >
        <div className='h-16 max-h-16 w-[30%] max-w-full'>
          <CardImage
            className='h-full w-full object-cover'
            image={thumbnail ?? IMAGE.placeholder}
            alt={name ?? '썸네일'}
          />
        </div>
        <div className='w-[70%]'>
          <p className='truncate text-base font-semibold'>{name}</p>
          <span className='line-clamp-2 text-sm text-gray-700'>{description}</span>
        </div>
      </Link>
    </li>
  )
}

export default React.memo(SearchResult)
