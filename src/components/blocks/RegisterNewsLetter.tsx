'use client'
import React, { useCallback, useState } from 'react'
import { useModal } from '@chakra-ui/react'
import SimpleModal from '../atoms/SimpleModal'
import { twMerge } from 'tailwind-merge'
import useGetCategories from '@/hooks/useGetCategories'
import { NewsLetter } from '@/types'
import Dropzone from '../atoms/Dropzone'
import useFileUpload from '@/hooks/useUploadImage'

const Register = () => {
  const [newsLetter, setNewsLetter] = useState<Partial<NewsLetter>>({})
  const { upload, data, error } = useFileUpload()

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault()
    },
    [newsLetter]
  )

  const onChangeNewsLetter = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewsLetter((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    })
  }, [])

  const { data: categories } = useGetCategories()
  const [selected, setSelected] = useState<string[]>([''])
  const toggleBadge = (category: string) => {
    setSelected((prev) => {
      if (prev.includes(category)) return prev.filter((value) => value !== category)
      return [...prev, category]
    })
  }

  return (
    <div className='w-full flex-col'>
      <form onSubmit={() => {}} id='checksome'>
        <div className='form-control'>
          <label className='label'>
            <div>
              <span className='label-text'>뉴스레터 주소</span>
              <span className='text-red-500'>*</span>
            </div>
          </label>
          <input
            type='text'
            placeholder='구독 신청이 가능한 주소를 작성해주세요'
            required
            className='input-bordered input'
            name='link'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <div>
              <span className='label-text'>뉴스레터 제목</span>
              <span className='text-red-500'>*</span>
            </div>
          </label>
          <input
            type='text'
            placeholder='뉴스레터 제목에 대해 알려주세요'
            required
            className='input-bordered input'
            name='name'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <div>
              <span className='label-text'>뉴스레터 소개</span>
              <span className='text-red-500'>*</span>
            </div>
          </label>
          <textarea
            placeholder='📰 뉴섭은 흩어진 뉴스레터를 소개해주는 서비스 입니다 :) 관심이 있으시면 구독 😉'
            rows={6}
            className='textarea-bordered textarea font-tossFace'
            name='description'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <div>
              <span className='label-text'>뉴스레터 썸네일</span>
              <span className='text-red-500'>*</span>
            </div>
          </label>
          <div className='flex h-32 w-full items-center justify-center'>
            {!error && data?.data.path ? (
              <div className='h-full max-h-64'>
                <img
                  className='h-auto max-h-full w-auto max-w-full'
                  src={process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL + data?.data?.path}
                  alt='미리보기 이미지'
                />
              </div>
            ) : (
              <Dropzone onChange={(e) => upload(e.target.files ? e.target.files[0] : null)}>
                <p className='text-xs text-gray-500 dark:text-gray-400'>썸네일에 사용될 이미지를 업로드 해주세요</p>
              </Dropzone>
            )}
          </div>
        </div>
        <div className='form-control'>
          <label className='label'>
            <div>
              <span className='label-text'>카테고리 설정</span>
              <span className='text-red-500'>*</span>
            </div>
          </label>
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
        </div>
      </form>
      <div className='form-control my-6'>
        <button className='btn-primary btn' type='submit' form='checksome'>
          등록하기
        </button>
      </div>
    </div>
  )
}

export const RegisterNewsLetter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { onClose, isOpen } = useModal({
    isOpen: isModalOpen,
    onClose: () => {
      setIsModalOpen(false)
    },
  })

  return (
    <section className='flex w-full justify-center bg-violet-100 p-20 dark:bg-darkBg-400 max-md:p-5 '>
      <div className='flex w-full flex-col items-center justify-center border-x-0 p-20 dark:bg-darkBg-300 dark:text-white'>
        <div>
          <span className='card-title font-tossFace'>📰 뉴섭에 소개하고 싶은 나만의 뉴스레터가 있다면?</span>
          <p className='font-semibold'>간단하게 등록하고, 뉴섭에 뉴스레터 소개하기</p>
          <button className='btn-primary btn mt-4 w-full' onClick={() => setIsModalOpen(true)}>
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
