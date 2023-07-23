'use client'
import React from 'react'
import { twMerge } from 'tailwind-merge'
type Props = {
  title?: React.ReactNode
  subTitle?: React.ReactNode
  button?: React.ReactNode
  buttonVariant?: 'success' | 'normal' | 'error'
}

const Body = ({ title, subTitle, button, buttonVariant = 'normal' }: Props) => {
  return (
    <>
      <h1
        className={twMerge(
          'relative mb-4 max-w-2xl text-3xl font-extrabold leading-none  tracking-tight',
          ' dark:text-white md:text-4xl xl:text-5xl'
        )}
      >
        <span className='text-black'>{title}</span>
      </h1>
      <p className='mb-6 max-w-2xl text-gray-600 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl'>{subTitle}</p>
      <button
        className={twMerge(
          'btn relative z-[10] mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium hover:text-white focus:ring-4 focus:ring-blue-300',
          buttonVariant === 'success' && 'btn-success text-white hover:btn-success dark:focus:btn-success',
          buttonVariant === 'normal' && 'btn-info text-white hover:btn-info dark:focus:btn-info',
          buttonVariant === 'error' && 'btn-error text-white hover:btn-error dark:focus:btn-error'
        )}
      >
        {button}
      </button>
    </>
  )
}

export default Body
