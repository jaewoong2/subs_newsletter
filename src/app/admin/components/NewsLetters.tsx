import React from 'react'
import { getNewsLetters } from '../../supabase-server'
import { IMAGE } from '@/constants'

const NewsLetters = async () => {
  const newsletters = await getNewsLetters('new', 10)

  return (
    <div className='flex w-full flex-col px-4'>
      <h6 className='py-4 font-SUITE text-xl font-bold'>뉴스레터</h6>
      <div className='flex gap-5'>
        {newsletters?.data.map((newsletter) => (
          <div key={newsletter.id} className='relative flex flex-col'>
            <div className='h-[200px] w-[200px] overflow-hidden rounded-2xl border-2 object-cover shadow-lg'>
              <img
                src={newsletter.thumbnail ?? IMAGE.placeholder}
                alt={newsletter.name + '`s thumbnail'}
                className='max-h-full: h-full w-full max-w-full object-cover'
              />
            </div>
            <div className='px-2 pt-2 font-SUITE text-lg font-semibold'>{newsletter.name}</div>
            <div className='badge badge-error absolute -right-1 -top-1 aspect-square cursor-pointer font-SUITE text-base font-semibold text-white shadow-lg'>
              &times;
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsLetters
