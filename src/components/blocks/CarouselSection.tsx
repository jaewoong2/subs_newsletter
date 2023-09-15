'use client'
import React from 'react'
import Body from '../atoms/Body'
import ImageCarousel from './ImageCarousel'
import { motion } from 'framer-motion'
import { IMAGE } from '@/constants'

const CarouselSection = () => {
  return (
    <section className='flex w-full items-center justify-center gap-10 bg-emerald-200 p-20 text-blue-800 max-lg:flex-col-reverse max-lg:p-10'>
      <motion.div>
        <Body
          title='인기 있는 뉴스레터는 뭐가 있을까?'
          subTitle='요리, 경제, 문화 찾으시는 모든 것이 여기 다 있어요!'
          button='구독 하기'
          buttonVariant='success'
        />
      </motion.div>
      <motion.div>
        <ImageCarousel
          items={[
            <img
              key={'1'}
              src={IMAGE.placeholder}
              alt=''
              className='rounded-box h-auto max-h-full w-auto max-w-full'
            />,
            <img key={2} src={IMAGE.placeholder} alt='' className='rounded-box h-auto max-h-full w-auto max-w-full' />,
            <img key={3} alt='' src={IMAGE.placeholder} className='rounded-box h-auto max-h-full w-auto max-w-full' />,
            <img key={4} src={IMAGE.placeholder} alt='' className='rounded-box h-auto max-h-full w-auto max-w-full' />,
          ]}
        />
      </motion.div>
    </section>
  )
}

export default CarouselSection
