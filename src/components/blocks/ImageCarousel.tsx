'use client'
import React, { useRef, useState } from 'react'
import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

type Props = {
  items: React.ReactElement[]
  className?: string
  itemClassName?: string
  itemWrapperClassName?: string
}

const ImageCarousel = ({ items, className, itemClassName, itemWrapperClassName }: Props) => {
  const [buttonStatus, setButtonStatus] = useState<number[]>([])

  const scrollRef = useRef<HTMLUListElement>(null)
  const itemRef = useRef<HTMLLIElement>(null)

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
        <button
          className='btn-ghost btn-circle btn absolute left-0 z-10 border max-md:-left-4'
          onClick={onClickPrev}
          aria-label='왼쪽'
        >
          <CgArrowLongLeft className='text-2xl text-black dark:text-white max-md:text-xl' />
        </button>
      )}
      <ul
        ref={scrollRef}
        className={twMerge(
          'relative',
          'flex h-full w-full max-w-full gap-5 overflow-x-scroll py-5 max-md:carousel-center max-md:carousel',
          itemWrapperClassName
        )}
      >
        {items?.map((item, index) => (
          <li
            ref={itemRef}
            key={`${item.key}_${index}_carousel`}
            className={twMerge(
              'relative h-[400px] w-1/4 flex-shrink-0 max-md:carousel-item max-lg:w-[40%] max-md:w-[49%] max-sm:w-full',
              itemClassName
            )}
          >
            {(index === 0 || index + 1 === items.length) && (
              <motion.div
                id={`${index}`}
                className='absolute left-0 top-0 h-0 w-0'
                onViewportEnter={(event) => {
                  if (!event?.target.id) {
                    return
                  }
                  setButtonStatus((prev) => [...prev, +event?.target.id])
                }}
                onViewportLeave={(event) => {
                  if (!event?.target.id) {
                    return
                  }
                  setButtonStatus((prev) => prev.filter((value) => value !== +event?.target.id))
                }}
              />
            )}
            {item}
          </li>
        ))}
      </ul>
      {!buttonStatus.includes(items.length - 1) && (
        <button
          className='btn-ghost btn-circle btn absolute right-0 max-md:-right-4'
          onClick={onClickNext}
          aria-label='오른쪽'
        >
          <CgArrowLongRight className='text-2xl text-black dark:text-white max-md:text-xl' />
        </button>
      )}
    </div>
  )
}

export default ImageCarousel
