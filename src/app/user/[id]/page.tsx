import React from 'react'
import { NextPageProps } from '@/types'
import { getUserById } from '../../supabase-server'
import { notFound } from 'next/navigation'
import CardImage from '@/components/atoms/CardImage'

type Params = {
  id?: string
}

const User = async ({ params }: NextPageProps<Params>) => {
  if (!params.id) {
    notFound()
  }

  const user = await getUserById(params.id)

  if (!user?.data || user.error) {
    notFound()
  }

  return (
    <div className='flex w-full flex-col items-center px-4'>
      <div className='relative flex h-[200px] w-[200px] justify-center overflow-hidden rounded-3xl drop-shadow-xl'>
        <CardImage image={user.data.avatar_url ?? ''} alt='thumbnail' className='cursor-pointer object-cover' />
      </div>
      <div className='flex w-full flex-col items-center justify-center'>
        <div className='divider mx-auto w-[200px] p-0'>
          <span className='font-SUITE text-sm font-semibold text-gray-600'>이메일</span>
        </div>
        <p className='font-SUITE text-xl font-bold'>{user.data.email}</p>
      </div>
      <div>
        <div className='divider mx-auto w-[200px] p-0'>
          <span className='font-SUITE text-sm font-semibold text-gray-600'>닉네임</span>
        </div>
        <input
          className='rounded-xl border-2 border-black px-3 py-1 font-SUITE text-lg font-bold'
          placeholder={user.data.full_name ?? ''}
          value={user.data.full_name ?? ''}
        />
      </div>
      <div>
        <div className='divider mx-auto w-[200px] p-0'>
          <span className='font-SUITE text-sm font-semibold text-gray-600'>크리에이터 이신가요?</span>
        </div>
        <span className='font-SUITE text-sm font-semibold text-gray-600'>뉴스레터</span>
      </div>
      <div className='flex w-full max-w-[250px] flex-col items-center justify-center'>
        <div className='divider mx-auto w-[200px] p-0'>
          <span className='font-SUITE text-sm font-semibold text-gray-600'>정보 수정 하기</span>
        </div>
        <button className='btn-success btn w-full' aria-label='수정'>
          수정 하기
        </button>
      </div>
    </div>
  )
}

export default User
