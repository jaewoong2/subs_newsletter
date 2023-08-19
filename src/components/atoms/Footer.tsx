import { IMAGE } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer footer-center bg-slate-800 p-10 text-white dark:bg-darkBg-200'>
      <div>
        <div className='flex items-center gap-2'>
          <Image src={IMAGE.logo} alt='로고' width={48} height={48} className='rounded-2xl' />
          <span className='translate-y-1 font-Yeongdo-Rg text-3xl'>newsubs_</span>
        </div>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
    </footer>
  )
}

export default Footer
