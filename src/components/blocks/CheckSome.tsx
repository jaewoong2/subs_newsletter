import usePostChecksome from '@/hooks/usePostChecksome'
import { Checksome } from '@/types'
import React, { useCallback, useState } from 'react'

type Props = {
  category: Checksome['category']
}

const initialChecksome: Partial<Checksome> = {
  category: '',
  description: '',
  email: '',
}

const CheckSome = ({ category }: Props) => {
  const { trigger } = usePostChecksome()
  const [checksome, setChecksome] = useState<Partial<Checksome>>(initialChecksome)

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault()
      trigger({ ...checksome, category })
    },
    [category, checksome, trigger]
  )

  const onChangeChecksome = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setChecksome((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    })
  }, [])

  return (
    <div className='w-full flex-col'>
      <form onSubmit={onSubmit} id='checksome'>
        <div className='form-control'>
          <label className='label'>
            <div>
              <span className='label-text'>보내시는 분 (이메일)</span>
              <span className='text-red-500'>*</span>
            </div>
          </label>
          <input
            type='text'
            placeholder='이메일 주소를 남겨주세요'
            required
            className='input-bordered input'
            name='email'
            value={checksome.email ?? ''}
            onChange={onChangeChecksome}
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <div>
              <span className='label-text'>문의내용</span>
              <span className='text-red-500'>*</span>
            </div>
          </label>
          <textarea
            placeholder='문의 내용을 작성 해주세요'
            rows={6}
            className='textarea-bordered textarea'
            name='description'
            value={checksome.description ?? ''}
            onChange={onChangeChecksome}
          />
        </div>
      </form>
      <div className='form-control my-6'>
        <button className='btn-primary btn' type='submit' form='checksome'>
          보내기
        </button>
      </div>
    </div>
  )
}

export default CheckSome
