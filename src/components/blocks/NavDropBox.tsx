import React from 'react'
import AuthButton from './AuthButton'

const NavDropBox = () => {
  return (
    <div className='flex-none max-md:hidden'>
      <div className='dropdown-end dropdown'>
        <button className='btn-ghost btn-square btn'>
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
        </button>
        <ul tabIndex={0} className='dropdown-content menu rounded-box z-[1] w-52 bg-base-100 p-2 shadow'>
          <AuthButton />
        </ul>
      </div>
    </div>
  )
}

export default NavDropBox
