import Link from 'next/link'
import React from 'react'

export const Navigation = () => {
  return (
    <nav className='fixed top-0 z-10 flex hidden w-full justify-between border border-black bg-white bg-opacity-40 p-5 backdrop-blur-md'>
      <h1 className='whitespace-nowrap font-bold'>뉴섭</h1>
      <ul className='flex w-full items-center justify-center gap-5'>
        <Link className='hover:text-slate-400' href={'/newsletter'}>
          뉴스레터
        </Link>
        <Link className='hover:text-slate-400' href={'/newsletter1'}>
          아티클
        </Link>
        <Link className='hover:text-slate-400' href={'/newsletter2'}>
          문의
        </Link>
      </ul>
      <div className='flex items-center justify-center gap-10'></div>
    </nav>
  )
}
