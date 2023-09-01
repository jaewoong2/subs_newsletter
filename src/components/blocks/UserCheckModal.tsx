'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import useSimpleModal from '@/hooks/useSimpleModal'
import { ModalCloseButton } from '@chakra-ui/react'
import useGetUser from '@/hooks/useGetUser'
import useLocalStorage from '@/hooks/useLocalstorage'
import dynamic from 'next/dynamic'

const SimpleModal = dynamic(() => import('../atoms/SimpleModal'))

const UserCheckModal = () => {
  const { value: isProfileEdit, setValue: setIsProfileEdit } = useLocalStorage<boolean>('is_profile_edit', {
    defaultValue: false,
  })

  const [isOpen_, setIsOpen_] = useState(false)
  const { isOpen, onClose } = useSimpleModal({
    isOpen: isOpen_,
    onClose() {
      setIsOpen_(false)
      setIsProfileEdit(true)
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
      <SimpleModal isOpen={!isProfileEdit && isOpen} onClose={onClose} size={'sm'} closeOnOverlayClick>
        <div className='flex flex-col pb-10 pt-5'>
          <div className='text-lg font-bold'>프로필이 아직 완성이 안되었어요</div>
          <div className='text-sm font-thin text-gray-800'>프로필 완성을 해주세요</div>
          <ModalCloseButton />
        </div>
        <Link href={`/user/${user?.data?.data?.id}`} className='w-full'>
          <button className='btn w-full' aria-label='프로필 수정'>
            프로필 수정 하기
          </button>
        </Link>
        <div className='h-6' />
      </SimpleModal>
    </>
  )
}

export default UserCheckModal
