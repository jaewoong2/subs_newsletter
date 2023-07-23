'use client'
import React from 'react'
import Body from './Body'
import { GoArrowRight } from 'react-icons/go'

type Props = {
  image?: string
  title?: string
  subTitle?: string
}

export const Hero = ({ title, subTitle }: Props) => {
  return (
    <section className='flex h-full w-full animate-gradation items-center justify-center bg-gradient-animation bg-gradient-size py-10'>
      <div className='flex w-full flex-col items-center justify-center p-20 max-lg:p-10'>
        <Body
          title={title}
          subTitle={subTitle}
          button={
            <>
              <a href='#new' className='absolute left-0 right-0 flex h-full w-full items-center gap-2 px-5 py-3'></a>
              <div className='flex h-full w-full items-center gap-2'>
                <span>둘러보기</span>
                <GoArrowRight className='text-lg' />
              </div>
            </>
          }
        />
      </div>
    </section>
  )
}
