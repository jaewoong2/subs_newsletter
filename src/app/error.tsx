'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@chakra-ui/react'

const ErrorComponent = () => {
  const navigator = useRouter()
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-3'>
      <div className='flex flex-col gap-1 font-bold'>
        <span className='text-red-400'>오류가 발생 했어요</span>
        <Button onClick={() => navigator.back()} className='bg-red-200 hover:bg-red-300'>
          되돌아가기
        </Button>
      </div>
    </div>
  )
}

export default ErrorComponent
