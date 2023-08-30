'use client'
import React, { useMemo } from 'react'
import useInfiniteNewsletter from '@/hooks/useInfiniteNewsletter'
import { motion } from 'framer-motion'
import CardItem from './CardItem'

type Props = {
  q?: 'createdAt' | 'popular'
}

const NewsLetterList = ({ q = 'createdAt' }: Props) => {
  const { data, setSize, limit } = useInfiniteNewsletter(q, {
    suspense: true,
    fallbackData: [],
  })

  const newsletters = useMemo(() => data?.flatMap((newsletter) => newsletter.data), [data])

  return (
    <>
      {!newsletters ||
        (newsletters?.length === 0 && (
          <motion.div
            className='h-0 w-0 bg-red-500'
            onViewportEnter={() => {
              setSize((prev) => prev + 1)
            }}
          />
        ))}
      {newsletters?.map((newsletter) => (
        <CardItem {...newsletter} key={newsletter.id} />
      ))}
      {data?.[data.length - 1]?.data.length === limit && (
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
