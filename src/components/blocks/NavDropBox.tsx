'use client'
import useGetSession from '@/hooks/useGetSesstion'
import useGoogleLogin from '@/hooks/useGoogleLogin'
import Link from 'next/link'
import React, { useState } from 'react'
import SignInModal from './SignInModal'
import useSimpleModal from '@/hooks/useSimpleModal'

const NavDropBox = () => {
  const signin = useGoogleLogin()
  const session = useGetSession()
  const url = typeof window === 'undefined' ? '' : window.location.href
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { isOpen, onClose } = useSimpleModal({
    isOpen: isOpenModal,
    onClose: () => {
      setIsOpenModal(false)
    },
  })
  const onClickSignInButton = () => {
    setIsOpenModal(true)
  }

  return (
    <div className='flex-none'>
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
          {session ? (
            <>
              <li>
                <button>내 뉴스레터 관리</button>
              </li>
              <li>
                <Link className='text-black' href={`/auth/signout?redirectUrl=${url}`}>
                  로그아웃
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button className='text-black' onClick={onClickSignInButton}>
                로그인
              </button>
            </li>
          )}
        </ul>
      </div>

      <SignInModal isOpen={isOpen} onClose={onClose} />
    </div>
  )
}

export default NavDropBox
