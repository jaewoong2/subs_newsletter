import Aside from '@/app/newsletter/components/Aside'
import React from 'react'

const MobileNavDropBox = () => {
  return (
    <div className='drawer hidden max-md:grid'>
      <input id='drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label htmlFor='drawer' className='btn-ghost drawer-button btn'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block h-5 w-5 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
            ></path>
          </svg>
        </label>
      </div>
      <div className='drawer-side'>
        <label htmlFor='drawer' className='drawer-overlay'></label>
        <div className='h-full w-1/2 bg-white'>
          <Aside />
        </div>
      </div>
    </div>
  )
}

export default MobileNavDropBox
