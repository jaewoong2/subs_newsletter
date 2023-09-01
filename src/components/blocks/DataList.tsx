import React, { PropsWithChildren } from 'react'

type Props = {
  title: React.ReactNode
  items?: React.ReactElement[]
  lastItem?: React.ReactElement
  variant?: 'carousel' | 'block'
  isLoading?: boolean
}

const DataList = ({ title, lastItem, isLoading, children, variant = 'carousel' }: PropsWithChildren<Props>) => {
  return (
    <section className='flex w-full flex-col justify-center'>
      <h3 className='px-20 text-xl font-bold max-lg:px-10 max-md:px-0' id='new'>
        {title}
      </h3>
      {variant === 'carousel' && children}
      {variant === 'block' && (
        <div className='grid h-full grid-cols-3 px-10 max-lg:grid-cols-2 max-md:grid-cols-2 max-md:px-0'>
          {children}
          {isLoading && (
            <div className='h-[450px] max-md:h-[300px]' aria-label='Loading space reserved for incoming data content' />
          )}
          {lastItem}
        </div>
      )}
    </section>
  )
}

export default DataList
