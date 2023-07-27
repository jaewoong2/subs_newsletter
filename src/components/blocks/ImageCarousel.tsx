'use client'
import React, { useRef, useState } from 'react'
import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg'
import { motion } from 'framer-motion'

type Props = {
  items?: React.ReactElement[]
}

const ImageCarousel = ({ items }: Props) => {
  const [buttonStatus, setButtonStatus] = useState<'left' | 'both' | 'right'>('right')

  const scrollRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  const onClickNext = () => {
    scrollRef.current?.scrollBy({ behavior: 'smooth', left: itemRef.current?.clientWidth })
  }

  const onClickPrev = () => {
    scrollRef.current?.scrollBy({ behavior: 'smooth', left: -`${itemRef.current?.clientWidth}` })
  }

  return (
    <div className='relative flex w-full max-w-full items-center justify-start px-20 max-lg:px-10 max-md:px-0'>
      {buttonStatus !== 'right' && (
        <button className='btn-ghost btn-circle btn absolute left-0 z-10 border max-md:-left-8' onClick={onClickPrev}>
          <CgArrowLongLeft className='text-2xl text-black max-md:text-xl' />
        </button>
      )}
      <div
        ref={scrollRef}
        className='flex w-full max-w-full gap-5 overflow-x-scroll py-10 max-md:carousel-center max-md:carousel'
      >
        {items?.map((item, index) => (
          <motion.div
            ref={itemRef}
            key={item.key}
            className='h-[400px] w-1/4 flex-shrink-0 max-md:carousel-item max-lg:w-[40%] max-md:w-full'
            onViewportEnter={() => {
              if (index === 0) setButtonStatus('right')
              if (index === items.length - 1) setButtonStatus('left')
            }}
            onViewportLeave={() => {
              if (index === 0) setButtonStatus('both')
              if (index === items.length - 1) setButtonStatus('both')
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>
      {buttonStatus !== 'left' && (
        <button className='btn-ghost btn-circle btn absolute right-0 max-md:-right-8' onClick={onClickNext}>
          <CgArrowLongRight className='text-2xl text-black max-md:text-xl' />
        </button>
      )}
    </div>
  )
}

export default ImageCarousel
