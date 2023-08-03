import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  title?: string
  description?: string
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const BlockCard = ({ children, title, description, className }: PropsWithChildren<Props>) => {
  return (
    <div className={twMerge('group flex flex-col gap-0 rounded-3xl bg-pink-300', className)}>
      <div className='p-10'>
        <h4 className='text-2xl font-bold'>{title}</h4>
        <p className='whitespace-break-spaces break-words text-lg font-semibold'>{description}</p>
      </div>
      {children}
    </div>
  )
}

export default BlockCard
