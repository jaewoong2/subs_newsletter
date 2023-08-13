import React from 'react'
import AuthButton from './AuthButton'
import { HiOutlineMenu } from 'react-icons/hi'

const NavDropBox = () => {
  return (
    <div className='flex-none max-md:hidden'>
      <div className='dropdown-end dropdown'>
        <button className='btn-ghost btn-square btn'>
          <HiOutlineMenu className='text-2xl' />
        </button>
        <ul
          tabIndex={0}
          className='dropdown-content menu rounded-box z-[1] w-52 bg-base-100 p-2 shadow dark:bg-darkBg-300'
        >
          <AuthButton />
        </ul>
      </div>
    </div>
  )
}

export default NavDropBox
