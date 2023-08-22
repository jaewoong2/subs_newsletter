'use client'
import React, { useState } from 'react'
import useSimpleModal from '@/hooks/useSimpleModal'
import SimpleModal from '../atoms/SimpleModal'
import Link from 'next/link'
import { ModalCloseButton } from '@chakra-ui/react'
import useGetUser from '@/hooks/useGetUser'

const UserCheckModal = () => {
  const [isOpen_, setIsOpen_] = useState(false)
  const { isOpen, onClose } = useSimpleModal({
    isOpen: isOpen_,
    onClose() {
      setIsOpen_(false)
    },
  })
  const user = useGetUser({
    onSuccess(user) {
      if (user?.data && (!user.data.avatar_url || !user.data.full_name)) {
        setIsOpen_(true)
      }
    },
  })

  if (!user) {
    return null
  }

  return (
    <>
      <SimpleModal isOpen={isOpen} onClose={onClose} size={'sm'} closeOnOverlayClick>
        <div className='flex flex-col pb-10 pt-5'>
          <div className='text-lg font-bold'>프로필이 아직 완성이 안되었어요</div>
          <div className='text-sm font-thin text-gray-800'>프로필 완성을 해주세요</div>
          <ModalCloseButton />
        </div>
        <Link href={`/user/${user?.data?.data?.id}`} className='w-full'>
          <button className='btn w-full'>프로필 수정 하기</button>
        </Link>
        <div className='h-6' />
      </SimpleModal>
    </>
  )
}

export default UserCheckModal
