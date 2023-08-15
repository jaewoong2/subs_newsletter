'use client'
import React, { useRef, useState } from 'react'
import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

type Props = {
  items: React.ReactElement[]
  className?: string
}

const ImageCarousel = ({ items, className }: Props) => {
  const [buttonStatus, setButtonStatus] = useState<number[]>([])

  const scrollRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  const onClickNext = () => {
    scrollRef.current?.scrollBy({ behavior: 'smooth', left: itemRef.current?.clientWidth })
  }

  const onClickPrev = () => {
    scrollRef.current?.scrollBy({ behavior: 'smooth', left: -`${itemRef.current?.clientWidth}` })
  }

  return (
    <div
      className={twMerge(
        'relative flex w-full max-w-full items-center justify-start px-20 max-lg:px-10 max-md:px-5',
        className
      )}
    >
      {!buttonStatus.includes(0) && (
        <button className='btn-ghost btn-circle btn absolute left-0 z-10 border max-md:-left-4' onClick={onClickPrev}>
          <CgArrowLongLeft className='text-2xl text-black dark:text-white max-md:text-xl' />
        </button>
      )}
      <div
        ref={scrollRef}
        className='flex h-full w-full max-w-full gap-5 overflow-x-scroll py-5 max-md:carousel-center max-md:carousel'
      >
        {items?.map((item, index) => (
          <motion.div
            ref={itemRef}
            key={item.key}
            className='w-1/4 flex-shrink-0 max-md:carousel-item max-lg:w-[40%] max-md:w-full'
            onViewportEnter={() => {
              setButtonStatus((prev) => {
                return [...prev, index]
              })
            }}
            onViewportLeave={() => {
              setButtonStatus((prev) => {
                return prev.filter((value) => value !== index)
              })
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>
      {!buttonStatus.includes(items.length - 1) && (
        <button className='btn-ghost btn-circle btn absolute right-0 max-md:-right-4' onClick={onClickNext}>
          <CgArrowLongRight className='text-2xl text-black dark:text-white max-md:text-xl' />
        </button>
      )}
    </div>
  )
}

export default ImageCarousel
