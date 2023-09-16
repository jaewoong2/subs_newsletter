'use client'
import React, { useMemo } from 'react'
import useInfiniteNewsletter from '@/hooks/useInfiniteNewsletter'
import { motion } from 'framer-motion'
import PlaceholderItem from './PlaceholderItem'
import Card from '@/components/atoms/Card'

type Props = {
  q?: 'createdAt' | 'popular'
}

const NewsLetterList = ({ q = 'createdAt' }: Props) => {
  const { data, setSize, limit, isLoading } = useInfiniteNewsletter(q, {
    suspense: true,
    fallbackData: [],
  })

  const newsletters = useMemo(() => data?.flatMap((newsletter) => newsletter.data), [data])

  return (
    <>
      {!newsletters ||
        (newsletters?.length === 0 && !isLoading && (
          <motion.div
            className='h-0 w-0 bg-red-500'
            onViewportEnter={() => {
              setSize((prev) => prev + 1)
            }}
          />
        ))}
      {newsletters?.map((newsletter) => (
        <div className='h-[450px] max-md:h-[300px]' key={newsletter.id}>
          <Card
            newsletterId={newsletter.id}
            title={newsletter.name}
            description={newsletter.description}
            image={newsletter.thumbnail ?? ''}
            tags={newsletter.category ?? []}
            link={`/${newsletter.name}`}
            days={newsletter.days}
            width={330}
            height={150}
          />
        </div>
      ))}
      {isLoading && (
        <>
          <PlaceholderItem />
          <PlaceholderItem />
        </>
      )}
      {data?.[data.length - 1]?.data.length === limit && !isLoading && (
        <motion.div
          className='h-0 w-0'
          onViewportEnter={() => {
            setSize((prev) => prev + 1)
          }}
        />
      )}
    </>
  )
}

export default NewsLetterList
