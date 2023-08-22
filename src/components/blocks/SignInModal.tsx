'use client'
import React, { useCallback, useEffect, useState } from 'react'
import SimpleModal from '@/components/atoms/SimpleModal'
import { AbsoluteCenter, Box, Checkbox, Divider, UseModalProps, useToast } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import useMagicLinkLogin from '@/hooks/useMagicLinkLogin'
import FormInput from '../atoms/FormInput'
import useGoogleLogin from '@/hooks/useGoogleLogin'
import useGetSession from '@/hooks/useGetSession'
import Link from 'next/link'

type Props = UseModalProps

const SignInModal = ({ isOpen, onClose }: Props) => {
  const [informationChecked, setInformationChecked] = useState(false)
  const toast = useToast()
  const { data: session } = useGetSession()

  const { trigger } = useGoogleLogin({
    onSuccess(data) {
      window.open(data.data.url, '_blank', 'width=500, height=500')
    },
  })

  const { trigger: login, isMutating } = useMagicLinkLogin({
    onSuccess: (data) => {
      if (200 > data.status || data.status > 299) {
        toast({
          isClosable: true,
          status: 'error',
          title: '메세지 전송 실패',
          position: 'top-right',
        })
        return
      }
      onClose()
      toast({
        isClosable: true,
        title: '로그인 메일 전송 완료',
        description: '이메일을 확인 해주세요',
      })
    },
    onError: (error) => {
      toast({
        isClosable: true,
        status: 'error',
        title: '등록 실패',
        description: error.message,
        position: 'top-right',
      })
      onClose()
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
    trigger({ redirectUrl: window.location.href })
  }, [trigger])

  useEffect(() => {
    if (isOpen && session?.data.session) {
      onClose()
      toast({
        isClosable: true,
        status: 'success',
        title: '로그인 완료 되었습니다',
        position: 'top-right',
      })
    }
  }, [session?.data.session, isOpen, onClose, toast])

  return (
    <SimpleModal
      isOpen={isOpen}
      onClose={onClose}
      title='로그인'
      subTitle='뉴스레터 크리에이터 라면, 더 많은 기능을 사용 할 수 있어요'
    >
      <Box
        className='mt-3 flex w-full cursor-pointer items-center justify-between rounded-3xl border px-5 py-2 hover:bg-slate-100'
        onClick={() => setInformationChecked((prev) => !prev)}
      >
        <Link
          href={'https://woongsworld.notion.site/c4340f5a7e7d4e6da35958d4b38a765f?pvs=4'}
          className='link-primary link text-sm text-gray-700'
        >
          개인정보 처리방침
        </Link>
        <Checkbox
          variant='radio'
          size='sm'
          isChecked={informationChecked}
          checked={informationChecked}
          onChange={() => setInformationChecked((prev) => !prev)}
        />
      </Box>
      <p className='flex w-full justify-end px-5 py-2 font-tossFace text-xs text-red-400'>
        동의 후에 로그인 가능 합니다 😎
      </p>
      <Box position='relative' className='py-5'>
        <Divider />
      </Box>
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
          <button
            className='btn-accent btn justify-start text-white'
            type='submit'
            disabled={isMutating || !informationChecked}
          >
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
        <button
          className='btn-primary btn-square btn flex w-full text-white'
          onClick={onClickGoogleSignIn}
          disabled={!informationChecked}
        >
          <FcGoogle className='text-xl' />
          구글로 로그인 하기
        </button>
      </div>
    </SimpleModal>
  )
}

export default SignInModal
