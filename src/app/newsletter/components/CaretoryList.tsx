import React from 'react'
import CardLink from '@/components/blocks/CardLink'
import { getCategories } from '@/app/supabase-server'

const CategoryList = async () => {
  const categories = await getCategories()

  if (!categories) return null

  return (
    <ul className='flex flex-col gap-2 bg-white font-tossFace font-semibold dark:border-darkBg-100 dark:bg-darkBg-300  max-md:flex-row max-md:border-t max-md:px-1 max-md:py-2'>
      {categories.data?.map(({ categories }) => (
        <li className={'relative flex w-full flex-col items-end'} key={categories}>
          <CardLink
            href={process.env.NEXT_PUBLIC_CURRENT_URL + `/newsletter/${encodeURIComponent(categories ?? '')}`}
            className='h-full w-full rounded-lg px-3 py-1 text-start font-tossFace text-sm font-semibold transition-colors hover:bg-base-300 dark:hover:bg-darkBg-100 max-md:rounded-none max-md:bg-transparent max-md:text-center max-md:hover:bg-transparent'
          >
            {categories}
          </CardLink>
        </li>
      ))}
    </ul>
  )
}

export default CategoryList