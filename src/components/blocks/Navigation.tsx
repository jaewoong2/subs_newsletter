import Link from 'next/link'
import React from 'react'

export const Navigation = () => {
  return (
    <nav className='flex w-full justify-between border p-5'>
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
