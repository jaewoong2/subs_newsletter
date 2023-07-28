import React, { PropsWithChildren } from 'react'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Dropzone = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <label
        htmlFor='dropzone-file'
        className='dark:hover:bg-bray-800 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600'
      >
        <div className='flex flex-col items-center justify-center pb-6 pt-5'>
          <svg
            className='mb-1 h-8 w-8 text-gray-500 dark:text-gray-400'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 16'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
            />
          </svg>
          {children}
        </div>
        <input id='dropzone-file' type='file' className='hidden' {...props} />
      </label>
    </div>
  )
}

export default Dropzone
