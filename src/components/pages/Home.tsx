import React from 'react'
import { Card } from '../atoms'

export const Home = () => {
  return (
    <main className='grid w-full grid-cols-[1fr_5fr_1fr] flex-no-wrap justify-center dark:bg-darkBg-300 dark:text-white'>
      <div className='w-full'></div>
      <section className='flex w-full flex-col justify-center gap-5 py-10'>
        <h1 className='px-10 text-xl font-bold max-md:px-5' id='new'>
          최신 뉴스레터
        </h1>
        <ul className='grid w-full grid-cols-3 justify-center gap-5 px-10 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:px-5'>
          {new Array(10).fill(0).map((_, index) => (
            <Card key={`card-${index}`} />
          ))}
        </ul>
      </section>
      <div className='w-full'></div>
    </main>
  )
}
