'use client'
import React, { useState } from 'react'
import SearchInput from './SearchInput'

const SearchInputMain = () => {
  const [open, setOpen] = useState(false)

  const toggleClickInput = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div
      className='flex cursor-pointer items-center justify-between gap-1 rounded-3xl border px-8 pl-4'
      onClickCapture={toggleClickInput}
    >
      <SearchInput className='btn border-none bg-transparent p-0 pr-2 hover:bg-transparent dark:text-white' open={open}>
        <p className='flex h-full w-full cursor-pointer justify-start bg-white p-1 pr-6 text-left text-sm text-gray-400 outline-none dark:bg-darkBg-400 dark:text-white'>
          🗞️ 뉴스레터 를 찾아보세요
        </p>
      </SearchInput>
    </div>
  )
}

export default SearchInputMain
