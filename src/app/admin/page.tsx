import React from 'react'
import { getSession, getUserById } from '../supabase-server'
import { notFound } from 'next/navigation'
import NewsLetters from './components/NewsLetters'

const Creator = async () => {
  const session = await getSession()
  const user = await getUserById(session?.data.session?.user.id ?? '')

  if (!user || user.error || user.data.role !== 'ADMIN') {
    notFound()
  }

  return (
    <div className='flex w-full flex-col items-center px-4'>
      <NewsLetters />
    </div>
  )
}

export default Creator
