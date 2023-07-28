'use client'
import React, { useState } from 'react'
import { useModal } from '@chakra-ui/react'
import CheckSome from './CheckSome'
import SimpleModal from '../atoms/SimpleModal'
import { Checksome } from '@/types'

const LABEl_OBJECT = {
  register: '뉴스레터를 등록 하고 싶어요 😀',
  checksome: '뉴섭 사용에 대한 문의나 건의를 하고 싶어요 😎',
  etc: '기타 문의 🎸',
}

export const Register = () => {
  const [category, setCategory] = useState<Checksome['category']>('')
  const [modalTitle, setModalTitle] = useState('')
  const [isCheckSomeModalOpen, setIsCheckSomeModalOpen] = useState(false)
  const { onClose, isOpen } = useModal({
    isOpen: isCheckSomeModalOpen,
    onClose: () => {
      setIsCheckSomeModalOpen(false)
    },
  })

  const onSubmitForm: React.ChangeEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    setIsCheckSomeModalOpen((prev) => !prev)
    const value = `${event.target.checksome.value}`
    if (value === 'register' || value === 'checksome' || value === 'etc') {
      setCategory(value)
      setModalTitle(LABEl_OBJECT[value])
    }
  }

  return (
    <section className='flex w-full justify-center bg-slate-100 p-20 dark:bg-darkBg-400 max-md:p-5'>
      <form
        onSubmit={onSubmitForm}
        className='flex flex-col items-center justify-center gap-3 rounded-xl border bg-white p-5 dark:border-darkBg-300 dark:bg-darkBg-200 dark:text-white'
      >
        <fieldset className='flex w-full flex-col items-center justify-center gap-3 rounded-xl font-semibold md:gap-6'>
          <h2 className='mb-5 font-tossFace text-lg font-bold'>📰 뉴섭에 문의 해주세요</h2>
          <div className='flex w-full flex-col justify-start md:w-[450px]'>
            <label className='flex cursor-pointer items-center gap-3'>
              <input
                type='radio'
                name='checksome'
                className='radio radio-sm checked:bg-violet-500 dark:bg-darkBg-300 dark:checked:bg-violet-500'
                value={'register'}
                defaultChecked={true}
              />
              <span className='label-text font-tossFace text-sm dark:text-white'>{LABEl_OBJECT['register']}</span>
            </label>
          </div>
          <div className='flex w-full flex-col justify-start md:w-[450px]'>
            <label className='flex cursor-pointer items-center gap-3'>
              <input
                type='radio'
                name='checksome'
                className='radio radio-sm checked:bg-green-500 dark:bg-darkBg-300 dark:checked:bg-green-500'
                value={'checksome'}
              />
              <span className='label-text font-tossFace text-sm dark:text-white'>{LABEl_OBJECT['checksome']}</span>
            </label>
          </div>
          <div className='flex w-full flex-col justify-start md:w-[450px]'>
            <label className='flex cursor-pointer items-center gap-3'>
              <input
                type='radio'
                name='checksome'
                className='radio radio-sm checked:bg-blue-500 dark:bg-darkBg-300 dark:checked:bg-blue-500'
                value={'etc'}
              />
              <span className='label-text font-tossFace text-sm dark:text-white'>{LABEl_OBJECT['etc']}</span>
            </label>
          </div>
        </fieldset>
        <button type='submit' className='btn mt-10 w-full dark:border-darkBg-300 dark:bg-violet-400'>
          문의하기
        </button>
      </form>
      <SimpleModal
        isOpen={isOpen}
        onClose={onClose}
        title={modalTitle}
        subTitle='문의를 남겨주시면, 2~3일 내에 답변 드리겠습니다 📝'
      >
        <CheckSome category={category} />
      </SimpleModal>
    </section>
  )
}
