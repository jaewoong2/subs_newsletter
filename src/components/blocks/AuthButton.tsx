'use client'
import useGetSession from '@/hooks/useGetSesstion'
import useSimpleModal from '@/hooks/useSimpleModal'
import Link from 'next/link'
import React, { useState } from 'react'
import SignInModal from './SignInModal'
import { twMerge } from 'tailwind-merge'

const AuthButton = ({ className }: JSX.IntrinsicElements['button']) => {
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
    if (session) return
    setIsOpenModal(true)
  }

  return (
    <>
      {session && (
        <Link
          className={twMerge(
            'cursor-pointer list-none rounded-xl px-3 py-3 text-left text-sm font-bold hover:bg-slate-50 dark:hover:bg-darkBg-100',
            className
          )}
          href={`/auth/signout?redirectUrl=${url}`}
        >
          <button className=' text-black dark:text-white'>로그아웃</button>
        </Link>
      )}
      {!session && (
        <button
          className={twMerge(
            'cursor-pointer list-none rounded-xl px-3 py-3 text-left text-sm font-bold hover:bg-slate-50 dark:hover:bg-darkBg-100',
            className
          )}
          onClick={onClickSignInButton}
        >
          로그인
        </button>
      )}
      <SignInModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default AuthButton
