import React, { PropsWithChildren } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'

const MobileNavDropBox = ({ children }: PropsWithChildren) => {
  return (
    <div className='drawer hidden max-md:grid'>
      <input id='drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label htmlFor='drawer' className='btn-ghost drawer-button btn' aria-label='왼쪽 드롭박스 열기'>
          <HiOutlineMenu className='text-xl' />
        </label>
      </div>
      <div className='drawer-side'>
        <label htmlFor='drawer' className='drawer-overlay overflow-y-hidden' aria-label='드롭박스 오버레이'></label>
        <div className='h-full w-2/3 bg-white dark:bg-darkBg-300'>{children}</div>
      </div>
    </div>
  )
}

export default MobileNavDropBox
