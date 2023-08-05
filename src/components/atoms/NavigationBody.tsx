import React from 'react'
import Link from 'next/link'
import ThemeToogleButton from '../blocks/ThemeToogleButton'
import NavDropBox from '../blocks/NavDropBox'

const NavigationBody = () => {
  return (
    <>
      <Link href={'/'}>
        <h1 className='whitespace-nowrap font-bold'>뉴섭</h1>
      </Link>
      <ul className='flex w-full items-center justify-center gap-5'>
        <Link className='hover:text-slate-400' href={'/newsletter'}>
          뉴스레터
        </Link>
        <Link className='hover:text-slate-400' href={'/article'}>
          아티클
        </Link>
      </ul>
      <div className='flex items-center justify-center gap-2'>
        <NavDropBox />
        <ThemeToogleButton />
      </div>
    </>
  )
}

export default React.memo(NavigationBody)
