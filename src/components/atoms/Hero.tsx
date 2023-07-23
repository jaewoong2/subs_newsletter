import React from 'react'
import Mouse from '../blocks/Mouse'
import HeroBody from '../blocks/HeroBody'

type Props = {
  image?: string
  title?: React.ReactNode
  subTitle?: React.ReactNode
}

export const Hero = ({ title, subTitle }: Props) => {
  return (
    <section className='relative flex h-full w-full animate-gradation items-center justify-center bg-gradient-animation bg-gradient-size py-10'>
      <Mouse>
        <HeroBody title={title} subTitle={subTitle} />
      </Mouse>
    </section>
  )
}
