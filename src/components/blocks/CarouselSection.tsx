'use client'
import React from 'react'
import Body from '../atoms/Body'
import ImageCarousel from './ImageCarousel'
import { motion } from 'framer-motion'
import { sleep } from '@/lib/sleep'

const CarouselSection = () => {
  return (
    <section className='flex w-full items-center justify-center gap-10 bg-emerald-200 p-20 text-blue-800 max-lg:flex-col-reverse max-lg:p-10'>
      <motion.div
        className=''
        onViewportEnter={(e) => {
          e?.target.classList.add(...'animate-fade-right max-lg:animate-fade-down'.split(' '))
        }}
      >
        <Body
          title='인기 있는 뉴스레터는 뭐가 있을까?'
          subTitle='요리, 경제, 문화 찾으시는 모든 것이 여기 다 있어요!'
          button='구독 하기'
          buttonVariant='success'
        />
      </motion.div>
      <motion.div
        className='opacity-0'
        onViewportEnter={async (e) => {
          await sleep(500)
          e?.target.classList.add(...'opacity-100 animate-fade-left max-lg:animate-fade-down'.split(' '))
        }}
      >
        <ImageCarousel
          items={[
            <img
              key={'1'}
              src='https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg'
              alt=''
              className='rounded-box'
            />,
            <img
              key={2}
              src='https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg'
              alt=''
              className='rounded-box'
            />,
            <img
              key={3}
              alt=''
              src='https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg'
              className='rounded-box'
            />,
            <img
              key={4}
              src='https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg'
              alt=''
              className='rounded-box'
            />,
          ]}
        />
      </motion.div>
    </section>
  )
}

export default CarouselSection
