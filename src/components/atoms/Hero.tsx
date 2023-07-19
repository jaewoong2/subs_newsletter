import React from 'react'

type Props = {
  image?: string
  title?: string
  subTitle?: string
}

export const Hero = ({}: Props) => {
  return (
    <section className='container bg-gray-50 dark:bg-gray-900'>
      <div className='mx-auto grid max-w-screen-xl gap-10 px-4 py-6 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
        <div className='flex h-full max-h-[400px] w-full items-center justify-center lg:hidden'>
          <img
            className='h-full w-auto'
            src='https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
            alt='mockup'
          />
        </div>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className='mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight dark:text-white md:text-4xl xl:text-5xl'>
            뉴스레터는, 뉴섭에서
          </h1>
          <p className='mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl'>
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
        <div className='hidden lg:col-span-5 lg:mt-0 lg:flex'>
          <img
            src='https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
            alt='mockup'
          />
        </div>
      </div>
    </section>
  )
}
