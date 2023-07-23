'use client'
import React, { useRef } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

type Props = {
  items?: React.ReactElement[]
}

const ImageCarousel = ({ items }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const onClickNext = () => {
    scrollRef.current?.scrollBy({ behavior: 'smooth', left: scrollRef.current.clientWidth })
  }

  const onClickPrev = () => {
    scrollRef.current?.scrollBy({ behavior: 'smooth', left: -scrollRef.current.clientWidth })
  }

  return (
    <div className='relative flex items-center justify-center'>
      <button className='btn-ghost btn-circle btn absolute left-0 z-10 border' onClick={onClickPrev}>
        <GoChevronLeft className='text-xl text-black' />
      </button>
      <div
        className='carousel-center carousel relative flex h-[250px] max-w-md flex-nowrap space-x-4 overflow-x-scroll p-4'
        ref={scrollRef}
      >
        {items?.map((item) => (
          <div key={item.key} className='carousel-item mx-auto flex h-auto w-full flex-shrink-0 justify-center'>
            {item}
          </div>
        ))}
      </div>
      <button className='btn-ghost btn-circle btn absolute right-0' onClick={onClickNext}>
        <GoChevronRight className='text-xl text-black' />
      </button>
    </div>
  )
}

export default ImageCarousel
