'use client'
import React, { useCallback, useState } from 'react'
import { useModal, useToast } from '@chakra-ui/react'
import SimpleModal from '../atoms/SimpleModal'
import { twMerge } from 'tailwind-merge'
import useGetCategories from '@/hooks/useGetCategories'
import { NewsLetter } from '@/types'
import useFileUpload from '@/hooks/useUploadImage'
import Link from 'next/link'
import usePostNewsletter from '@/hooks/usePostNewsletter'
import FormInput from '../atoms/FormInput'
import FormTextarea from '../atoms/FormTextarea'
import FormDropzone from '../atoms/FormDropzone'
import FormBase from '../atoms/FormBase'
import useGetSession from '@/hooks/useGetSesstion'

const Register = () => {
  const toast = useToast()
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const { trigger, isMutating } = usePostNewsletter({
    onSuccess: () => {
      toast({
        title: '등록 완료',
        position: 'top-right',
      })
    },
    onError: (error) => {
      toast({
        status: 'error',
        title: '등록 실패',
        description: error.message,
        position: 'top-right',
      })
    },
  })
  const [newsLetter, setNewsLetter] = useState<Partial<NewsLetter>>({})
  const { upload, data } = useFileUpload()
  const { data: categories } = useGetCategories()
  const [selected, setSelected] = useState<string[]>([])

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault()
      if (isMutating) return
      trigger({
        ...newsLetter,
        category: selected,
        thumbnail: `${data?.data?.path}`,
      })
    },
    [newsLetter, trigger, data?.data?.path, selected, isMutating]
  )

  const onChangeNewsLetter = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewsLetter((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    })
  }, [])

  const toggleBadge = (category: string) => {
    setSelected((prev) => {
      if (prev.includes(category)) return prev.filter((value) => value !== category)
      return [...prev, category]
    })
  }

  return (
    <div className='w-full flex-col'>
      <form onSubmit={onSubmit} id='newsletter'>
        <FormInput
          isClicked={isClicked}
          required={true}
          label='뉴스레터 주소'
          name='link'
          onChange={onChangeNewsLetter}
          placeholder='구독 신청이 가능한 주소를 작성해주세요'
        />
        <FormInput
          isClicked={isClicked}
          required={true}
          label='뉴스레터 제목'
          name='name'
          onChange={onChangeNewsLetter}
          placeholder='뉴스레터 제목에 대해 알려주세요'
        />
        <FormTextarea
          isClicked={isClicked}
          required={true}
          label='뉴스레터 소개'
          name='description'
          onChange={onChangeNewsLetter}
          placeholder='📰 뉴섭은 흩어진 뉴스레터를 소개해주는 서비스 입니다 :) 관심이 있으시면 구독 😉'
        />
        <FormDropzone
          isClicked={isClicked}
          required={true}
          label='뉴스레터 썸네일'
          name='description'
          onChange={(e) => upload(e.target.files ? e.target.files[0] : null)}
          placeholder='📰 썸네일에 사용될 이미지를 업로드 해주세요'
        >
          {data?.data && (
            <Link href={`${data?.data?.path}`} target='_blank'>
              <p className='text-xs text-blue-500 hover:text-blue-400'>이미지: {data?.data?.name}</p>
            </Link>
          )}
        </FormDropzone>
        <FormBase label='카테고리 설정'>
          <div className='flex gap-1'>
            {categories?.data.map((category) => (
              <button
                key={category}
                type='button'
                onClick={() => toggleBadge(category)}
                className={twMerge(
                  'badge py-2.5 text-xs ',
                  selected.includes(category) ? 'badge-primary text-white' : 'badge-outline hover:bg-slate-200'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </FormBase>
      </form>
      <div className='form-control my-6'>
        <button
          disabled={isMutating}
          className='btn-primary btn'
          type='submit'
          form='newsletter'
          onClick={() => setIsClicked(true)}
        >
          등록하기
        </button>
      </div>
    </div>
  )
}

export const RegisterNewsLetter = () => {
  const session = useGetSession()
  const toast = useToast()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { onClose, isOpen } = useModal({
    isOpen: isModalOpen,
    onClose: () => {
      setIsModalOpen(false)
    },
  })

  const onClickButton = () => {
    if (session) {
      setIsModalOpen(true)
      return
    }
    toast({ status: 'error', title: '로그인 후 등록이 가능해요' })
  }

  return (
    <section className='flex w-full justify-center bg-violet-100 p-20 dark:bg-darkBg-400 max-md:p-5 '>
      <div className='flex w-full flex-col items-center justify-center border-x-0 p-20 dark:bg-darkBg-300 dark:text-white'>
        <div>
          <span className='card-title font-tossFace'>📰 뉴섭에 소개하고 싶은 나만의 뉴스레터가 있다면?</span>
          <p className='font-semibold'>간단하게 등록하고, 뉴섭에 뉴스레터 소개하기</p>
          <button className='btn-primary btn mt-4 w-full' onClick={onClickButton}>
            등록하기
          </button>
        </div>
      </div>
      <SimpleModal
        isOpen={isOpen}
        onClose={onClose}
        title={'뉴스레터 등록하기'}
        subTitle='등록하시고자 하는 뉴스레터에 대해 알려주세요 🤩'
      >
        <Register />
      </SimpleModal>
    </section>
  )
}
