import React from 'react'
import Link from 'next/link'

type Props = {
  menu: React.ReactNode
}

const NavigationBody = ({ menu }: Props) => {
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
      {menu}
    </>
  )
}

export default React.memo(NavigationBody)
