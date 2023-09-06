import React from 'react'
import HeroBody from '../blocks/HeroBody'
import Image from 'next/image'

type Props = {
  image?: string
}

export const Hero = ({}: Props) => {
  return (
    <section className='relative flex min-h-screen w-full animate-gradation items-center justify-center bg-gradient-animation bg-gradient-size py-10 dark:bg-gradient-dark-animation dark:text-white'>
      <HeroBody
        title={
          <div className='relative flex items-center justify-center whitespace-nowrap font-GangwonState text-black dark:text-white'>
            뉴스레터는,
            <span className='relative z-10 h-full pl-3 font-GangwonState text-white dark:text-black'>{'뉴섭'}</span>
            에서
            <Image
              src='https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubsfamily.PNG'
              alt='섭섭이'
              width={150}
              height={40}
              priority={true}
              className='absolute bottom-[110%] right-0 z-[9] scale-x-[-1] animate-jump will-change-transform'
            />
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
