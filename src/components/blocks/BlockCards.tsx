import React from 'react'
import BlockCard from '../atoms/BlockCard'
import Image from 'next/image'
import { IMAGE } from '@/constants'

const BlockCards = () => {
  return (
    <div className='flex max-h-full w-full items-center justify-center bg-slate-200 py-10 dark:bg-darkBg-300'>
      <div className='flex w-full max-w-5xl flex-col items-center justify-center gap-4 p-10 max-md:p-5'>
        <div className='grid w-full grid-cols-[3fr_2fr] gap-x-3 gap-y-5 overflow-hidden max-md:grid-cols-1'>
          <BlockCard title='다양한 뉴스레터' description='요리, 경제, 문화 찾으시는 모든 것이 여기 다 있어요!'>
            <figure className='flex items-end justify-end gap-5 px-10 group-hover:animate-wiggle'>
              <img
                src={IMAGE.example.image1}
                alt='image2'
                className='h-auto w-[85%] -translate-x-9 -translate-y-5 rounded-2xl drop-shadow-2xl'
                width={350}
                height={350}
              />
            </figure>
          </BlockCard>
          <BlockCard
            title='다양한 뉴스레터'
            description='요리, 경제, 문화 찾으시는 모든 것이 여기 다 있어요!'
            className='bg-blue-300 text-white'
          >
            <figure className='flex items-end justify-end gap-5 px-10 group-hover:animate-fade-right'>
              <img
                src={IMAGE.example.image1}
                alt='image2'
                className='h-auto w-[85%] -translate-x-9 translate-y-5 rounded-2xl drop-shadow-2xl'
                width={350}
                height={350}
              />
            </figure>
          </BlockCard>
        </div>
        <div className='grid w-full grid-cols-[2fr_3fr] gap-x-3 gap-y-5 max-md:grid-cols-1'>
          <BlockCard
            title='다양한 뉴스레터'
            description='요리, 경제, 문화 찾으시는 모든 것이 여기 다 있어요!'
            className='bg-green-300'
          >
            <figure className='flex -translate-x-28 translate-y-24 items-end justify-end gap-5 px-10 transition-transform  duration-500 group-hover:translate-x-0 group-hover:translate-y-0'>
              <img
                src={IMAGE.example.image1}
                alt='image2'
                className='h-auto w-[85%] -translate-x-9 -translate-y-5 rounded-2xl drop-shadow-2xl'
                width={350}
                height={350}
              />
            </figure>
          </BlockCard>
          <BlockCard
            title='다양한 뉴스레터'
            description='요리, 경제, 문화 찾으시는 모든 것이 여기 다 있어요!'
            className='bg-violet-700 text-white'
          >
            <figure className='flex items-end justify-end gap-5 px-10 group-hover:animate-jump'>
              <img
                src={IMAGE.example.image1}
                alt='image2'
                className='h-auto w-[85%] -translate-x-9 translate-y-5 rounded-2xl drop-shadow-2xl'
                width={350}
                height={350}
              />
            </figure>
          </BlockCard>
        </div>
      </div>
    </div>
  )
}

export default BlockCards
