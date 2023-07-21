import React from 'react'

type Props = {
  image?: string
  title?: string
  subTitle?: string
}

export const Hero = ({}: Props) => {
  return (
    <section className='flex h-full w-full animate-gradation items-center justify-center bg-gradient-animation bg-gradient-size py-10'>
      <div className='flex w-full flex-col items-center justify-center'>
        <h1 className='mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight dark:text-white md:text-4xl xl:text-5xl'>
          뉴스레터는, 뉴섭에서
        </h1>
        <p className='mb-6 max-w-2xl font-light text-gray-900 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl'>
          최신 뉴스레터의 동향을 찾아보고, 내가 원하는 뉴스레터를 골라 구독하자
        </p>
        <a
          href='#'
          className='btn-primary btn mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white hover:btn-primary dark:focus:btn-primary focus:ring-4 focus:ring-blue-300'
        >
          둘러보기
          <svg
            className='-mr-1 ml-2 h-5 w-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </a>
      </div>
    </section>
  )
}
