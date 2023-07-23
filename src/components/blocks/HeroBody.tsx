'use client'
import React, { useContext } from 'react'
import Body from '../atoms/Body'
import { mouseContext } from './Mouse'
import { GoArrowRight } from 'react-icons/go'

type Props = {
  title?: React.ReactNode
  subTitle?: React.ReactNode
}

const HeroBody = ({ title, subTitle }: Props) => {
  const { setVariant } = useContext(mouseContext)

  return (
    <div
      className='z-20 flex w-full flex-col items-center justify-center p-20 max-lg:p-10'
      onMouseOver={() => {
        setVariant('text')
      }}
      onMouseLeave={() => {
        setVariant('default')
      }}
    >
      <Body
        title={title}
        subTitle={subTitle}
        button={
          <>
            <a href='#new' className='absolute left-0 right-0 z-[11] flex h-full w-full items-center gap-2 px-5 py-3' />
            <div className='flex h-full w-full items-center gap-2'>
              <span>둘러보기</span>
              <GoArrowRight className='text-lg' />
            </div>
          </>
        }
      />
    </div>
  )
}

export default HeroBody
