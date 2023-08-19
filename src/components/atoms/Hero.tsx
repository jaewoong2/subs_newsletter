import React from 'react'
import HeroBody from '../blocks/HeroBody'

type Props = {
  image?: string
}

export const Hero = ({}: Props) => {
  return (
    <section className='relative flex min-h-screen w-full animate-gradation items-center justify-center bg-gradient-animation bg-gradient-size py-10 dark:bg-gradient-dark-animation dark:text-white'>
      <HeroBody
        title={
          <div className='flex items-center justify-center whitespace-nowrap font-GangwonState text-black dark:text-white'>
            뉴스레터는,
            <span className='pl-3 font-GangwonState text-white dark:text-black'>{'뉴섭'}</span>
            에서
          </div>
        }
        subTitle={
          <span className='text-center font-tossFace'>
            최신 뉴스레터 📰 추천 받고, 내가 원하는 뉴스레터를 골라 구독하자
          </span>
        }
      />
    </section>
  )
}
