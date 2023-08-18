import React from 'react'
import Link from 'next/link'
import { IMAGE } from '@/constants'
import Image from 'next/image'

type Props = {
  menu: React.ReactNode
}

const NavigationBody = ({ menu }: Props) => {
  return (
    <>
      <Link href={'/'}>
        <div className='flex items-end justify-center gap-2 whitespace-nowrap font-bold'>
          <Image src={IMAGE.logo} alt='뉴섭로고' width={'32'} height={32} className='rounded-xl' />
          <h1 className='translate-y-1 font-Yeongdo-Rg text-2xl font-bold'>newsubs_</h1>
        </div>
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
