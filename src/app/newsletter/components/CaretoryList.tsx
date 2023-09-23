import React from 'react'
import CardLink from '@/components/blocks/CardLink'
import { getCategories } from '@/app/supabase-server'
import { twMerge } from 'tailwind-merge'

const CategoryList = async () => {
  const categories = await getCategories()

  if (!categories || categories.data.length === 0 || categories.error) return null

  return (
    <ul className='relative mb-8 flex flex-col gap-2 bg-white font-tossFace font-semibold dark:border-darkBg-100 dark:bg-darkBg-300'>
      <input
        id='more'
        name='more'
        type='checkbox'
        className={twMerge(
          'peer h-0 w-full border',
          'after:absolute after:top-[calc(100%+8px)] after:h-fit after:w-full after:cursor-pointer after:rounded-xl after:border after:px-3 after:py-1 after:text-sm after:font-normal after:content-["더보기"] after:hover:bg-slate-200',
          'checked:after:content-["숨기기"]'
        )}
      />
      {categories.data?.map(({ categories }, index) => (
        <li
          className={twMerge(
            'relative flex w-full flex-col items-end',
            index > 4 ? 'hidden peer-checked:block peer-checked:animate-fade-down' : ''
          )}
          key={categories}
        >
          <CardLink
            href={`/newsletter/${encodeURIComponent(categories ?? '')}`}
            className='h-full w-full rounded-lg px-3 py-1 text-start font-tossFace text-sm font-semibold transition-colors hover:bg-base-300 dark:hover:bg-darkBg-100 '
          >
            {categories}
          </CardLink>
        </li>
      ))}
    </ul>
  )
}

export default CategoryList
