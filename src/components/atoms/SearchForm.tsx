import React from 'react'
import { twMerge } from 'tailwind-merge'

const SearchForm = ({ value, className, onChange }: JSX.IntrinsicElements['input']) => {
  return (
    <form className='flex w-full items-center justify-center'>
      <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        />
      </svg>
      <input
        autoFocus
        value={value}
        onChange={onChange}
        placeholder='찾고싶은 경제, IT, 취미 뉴스레터를 검색 해보세요 😆'
        className={twMerge(
          'input',
          'w-full border-none outline-none placeholder:font-tossFace focus:border-b focus:outline-none',
          className
        )}
      />
      <button className='btn-ghost btn px-4 py-2 font-tossFace text-lg' aria-label='취소'>
        &times;
      </button>
    </form>
  )
}

export default React.memo(SearchForm)
