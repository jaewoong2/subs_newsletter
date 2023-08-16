'use client'
import useSimpleModal from '@/hooks/useSimpleModal'
import Link from 'next/link'
import React, { useState } from 'react'
import SignInModal from './SignInModal'
import { twMerge } from 'tailwind-merge'
import useGetSession from '@/hooks/useGetSession'

const AuthButton = ({ className }: JSX.IntrinsicElements['button']) => {
  const { data } = useGetSession({ errorRetryCount: 0 })

  const url = typeof window === 'undefined' ? '' : window.location.href
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { isOpen, onClose } = useSimpleModal({
    isOpen: isOpenModal,
    onClose: () => {
      setIsOpenModal(false)
    },
  })

  const onClickSignInButton = () => {
    if (data?.data.session) return
    setIsOpenModal(true)
  }

  return (
    <>
      {data?.data.session && (
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
      {!data?.data.session && (
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

export default React.memo(AuthButton)
