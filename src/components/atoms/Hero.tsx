import React from 'react'
import HeroBody from '../blocks/HeroBody'

type Props = {
  image?: string
  title?: React.ReactNode
  subTitle?: React.ReactNode
}

export const Hero = ({ title, subTitle }: Props) => {
  return (
    <section className='relative flex min-h-screen w-full animate-gradation items-center justify-center bg-gradient-animation bg-gradient-size py-10 dark:bg-gradient-dark-animation dark:text-white'>
      <HeroBody title={title} subTitle={subTitle} />
    </section>
  )
}
