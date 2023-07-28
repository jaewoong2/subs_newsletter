'use client'
import React from 'react'
import Body from '../atoms/Body'
import { GoArrowRight } from 'react-icons/go'

type Props = {
  title?: React.ReactNode
  subTitle?: React.ReactNode
}

const HeroBody = ({ title, subTitle }: Props) => {
  return (
    <div className='z-[21] mx-5'>
      <div className='z-20 flex min-h-full w-full flex-col items-center justify-center p-20 max-lg:p-10'>
        <Body
          title={title}
          subTitle={subTitle}
          button={
            <>
              <a
                href='#new'
                className='absolute left-0 right-0 z-[11] flex h-full w-full items-center gap-2 px-5 py-3'
              />
              <div className='flex h-full w-full items-center gap-2'>
                <span>둘러보기</span>
                <GoArrowRight className='text-lg' />
              </div>
            </>
          }
        ></Body>
      </div>
    </div>
  )
}

export default HeroBody
