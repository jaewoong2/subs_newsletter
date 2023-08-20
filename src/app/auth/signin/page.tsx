'use client'
import useGetSession from '@/hooks/useGetSession'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const SignIn = () => {
  const { isLoading, data } = useGetSession()
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined' && !isLoading) {
      if (data?.data.session.user.app_metadata.provider === 'email') {
        router.replace('/')
        return
      }
      window.close()
    }
  }, [router, isLoading, data?.data.session.user.app_metadata.provider])

  return <div>로그인 성공</div>
}

export default SignIn
