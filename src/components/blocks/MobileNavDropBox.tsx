import React, { PropsWithChildren } from 'react'
import Aside from '@/app/newsletter/components/Aside'
import { HiOutlineMenu } from 'react-icons/hi'

type Props = {
  asideItems: {
    href: string
    title: string
    badge?: React.ReactNode
  }[]
}

const MobileNavDropBox = ({ asideItems, children }: PropsWithChildren<Props>) => {
  return (
    <div className='drawer hidden max-md:grid'>
      <input id='drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label htmlFor='drawer' className='btn-ghost drawer-button btn'>
          <HiOutlineMenu className='text-xl' />
        </label>
      </div>
      <div className='drawer-side overflow-y-hidden'>
        <label htmlFor='drawer' className='drawer-overlay overflow-y-hidden'></label>
        <div className='h-full w-2/3 bg-white dark:bg-darkBg-300'>
          <Aside items={asideItems}>{children}</Aside>
        </div>
      </div>
    </div>
  )
}

export default MobileNavDropBox
