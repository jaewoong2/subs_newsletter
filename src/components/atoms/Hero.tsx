import React from 'react'
import HeroBody from '../blocks/HeroBody'

type Props = {
  image?: string
}

export const Hero = ({}: Props) => {
  return (
    <section className='relative flex min-h-screen w-full animate-gradation items-center justify-center bg-gradient-animation bg-gradient-size py-10 dark:bg-gradient-dark-animation dark:text-white'>
      <HeroBody
        title={<div className='flex items-center justify-center'>뉴스레터는, 뉴섭에서</div>}
        subTitle={<span className=''>최신 뉴스레터의 동향을 찾아보고, 내가 원하는 뉴스레터를 골라 구독하자</span>}
      />
    </section>
  )
}
