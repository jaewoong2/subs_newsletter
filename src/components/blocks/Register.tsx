'use client'
import { useModal } from '@chakra-ui/react'
import CheckSome from './CheckSome'
import SimpleModal from '../atoms/SimpleModal'
import React, { useState } from 'react'

const LABEl_OBJECT = {
  register: '뉴스레터를 등록 하고 싶어요 😀',
  checksome: '뉴섭 사용에 대한 문의나 건의를 하고 싶어요 😎',
  etc: '기타 문의 🎸',
}

export const Register = () => {
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
      setModalTitle(LABEl_OBJECT[value])
    }
  }

  return (
    <section className='flex w-full justify-center bg-slate-100 p-20'>
      <form
        onSubmit={onSubmitForm}
        className='flex flex-col items-center justify-center gap-3 rounded-xl border bg-white p-5'
      >
        <fieldset className='flex flex-col items-center justify-center gap-3 rounded-xl font-semibold'>
          <h2 className='mb-5 text-lg font-bold'>📮 뉴섭에 문의 해주세요</h2>
          <div className='flex w-[350px] flex-col justify-start'>
            <label className='flex cursor-pointer items-center gap-3'>
              <input
                type='radio'
                name='checksome'
                className='radio radio-sm checked:bg-violet-500'
                value={'register'}
                defaultChecked={true}
              />
              <span className='label-text font-black'>{LABEl_OBJECT['register']}</span>
            </label>
          </div>
          <div className='flex w-[350px] flex-col justify-start'>
            <label className='flex cursor-pointer items-center gap-3'>
              <input
                type='radio'
                name='checksome'
                className='radio radio-sm checked:bg-green-500'
                value={'checksome'}
              />
              <span className='label-text font-black'>{LABEl_OBJECT['checksome']}</span>
            </label>
          </div>
          <div className='flex w-[350px] flex-col justify-start'>
            <label className='flex cursor-pointer items-center gap-3'>
              <input type='radio' name='checksome' className='radio radio-sm checked:bg-blue-500' value={'etc'} />
              <span className='label-text font-black'>{LABEl_OBJECT['etc']}</span>
            </label>
          </div>
        </fieldset>
        <button type='submit' className='btn mt-10 w-full'>
          문의하기
        </button>
      </form>
      <SimpleModal isOpen={isOpen} onClose={onClose} title={modalTitle}>
        <CheckSome></CheckSome>
      </SimpleModal>
    </section>
  )
}
