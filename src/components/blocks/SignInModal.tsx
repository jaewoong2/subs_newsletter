'use client'
import React, { useCallback, useState } from 'react'
import SimpleModal from '@/components/atoms/SimpleModal'
import { AbsoluteCenter, Box, Divider, UseModalProps, useToast } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import useMagicLinkLogin from '@/hooks/useMagicLinkLogin'
import FormInput from '../atoms/FormInput'
import useGoogleLogin from '@/hooks/useGoogleLogin'

type Props = UseModalProps

const SignInModal = ({ isOpen, onClose }: Props) => {
  const toast = useToast()
  const googleLogin = useGoogleLogin()
  const { trigger: login, isMutating } = useMagicLinkLogin({
    onSuccess: () => {
      onClose()
      toast({
        title: '로그인 메일 전송 완료',
        description: '이메일을 확인 해주세요',
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
  const [email, setEmail] = useState('')
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const onClickEmailSignIn = useCallback(() => {
    if (isMutating) return
    login({ email })
  }, [email, login, isMutating])

  const onClickGoogleSignIn = useCallback(() => {
    googleLogin(window.location.href)
  }, [])

  return (
    <SimpleModal isOpen={isOpen} onClose={onClose} title='로그인'>
      <div className='form-control w-full pb-5'>
        <label className='label'>
          <span className='label-text'>이메일을 입력하세요.</span>
        </label>
        <form
          className='flex w-full gap-5'
          onSubmit={(e) => {
            e.preventDefault()
            onClickEmailSignIn()
          }}
        >
          <FormInput
            type='text'
            placeholder='introduce@example.com'
            className='w-full'
            required
            value={email}
            onChange={onChangeEmail}
          />
          <button className='btn-accent btn justify-start text-white' type='submit' disabled={isMutating}>
            로그인
          </button>
        </form>
      </div>
      <Box position='relative' className='py-5'>
        <Divider />
        <AbsoluteCenter bg='white' px='4' className='text-sm font-semibold text-gray-600'>
          소셜 로그인
        </AbsoluteCenter>
      </Box>
      <div className='flex flex-col items-center justify-center py-5'>
        <button className='btn-primary btn-square btn flex w-full text-white' onClick={onClickGoogleSignIn}>
          <FcGoogle className='text-xl' />
          구글로 로그인 하기
        </button>
      </div>
    </SimpleModal>
  )
}

export default SignInModal
