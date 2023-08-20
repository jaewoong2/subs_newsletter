'use client'
import useSignout from '@/hooks/useSignout'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {
  searchParams: {
    redirectUrl: string
  }
}

const SignOut = ({ searchParams }: Props) => {
  const navigtaion = useRouter()
  const toast = useToast()

  const { trigger } = useSignout({
    onSuccess: () => {
      navigtaion.replace(searchParams?.redirectUrl ?? '/')
      toast({
        title: '로그아웃 성공 😎',
        position: 'top',
        isClosable: true,
      })
    },
    onError: () => {
      toast({
        title: '로그아웃 실패',
        position: 'top',
        isClosable: true,
      })
    },
  })

  useEffect(() => {
    trigger()
  }, [trigger])

  return <div>로그아웃</div>
}

export default SignOut
