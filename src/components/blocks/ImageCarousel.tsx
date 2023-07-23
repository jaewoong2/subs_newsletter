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
      <div className='carousel-center carousel relative max-w-md space-x-4 p-4' ref={scrollRef}>
        {items?.map((item) => (
          <div className='carousel-item flex w-full justify-center' key={item.key}>
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
