import usePostChecksome from '@/hooks/usePostChecksome'
import { Checksome } from '@/types'
import { useToast } from '@chakra-ui/react'
import React, { useCallback, useState } from 'react'
import FormTextarea from '../atoms/FormTextarea'
import FormInput from '../atoms/FormInput'

type Props = {
  category: Checksome['category']
  onClose: () => void
}

const initialChecksome: Partial<Checksome> = {
  category: '',
  description: '',
  email: '',
}

const CheckSome = ({ category, onClose }: Props) => {
  const [isClicked, setIsClicked] = useState(false)
  const [checksome, setChecksome] = useState<Partial<Checksome>>(initialChecksome)
  const toast = useToast()
  const { trigger, isMutating } = usePostChecksome({
    onSuccess: () => {
      onClose()
      toast({
        title: '문의가 등록 되었어요 👏',
        position: 'top',
        isClosable: true,
      })
    },
  })

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
        <FormInput
          isClicked={isClicked}
          required={true}
          label='보내시는 분 (이메일)'
          name='email'
          onChange={onChangeChecksome}
          placeholder='이메일 주소를 남겨주세요'
        />
        <FormTextarea
          isClicked={isClicked}
          required={true}
          label='문의내용'
          onChange={onChangeChecksome}
          name='description'
          placeholder='문의 내용을 작성 해주세요'
        />
      </form>
      <div className='form-control my-6'>
        <button
          aria-label='전송'
          disabled={isMutating}
          className='btn-primary btn'
          type='submit'
          form='checksome'
          onClick={() => setIsClicked(true)}
        >
          보내기
        </button>
      </div>
    </div>
  )
}

export default CheckSome
