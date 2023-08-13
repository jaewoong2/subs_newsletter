import React, { PropsWithChildren } from 'react'
import CardLink from '@/components/blocks/CardLink'
import AuthButton from '@/components/blocks/AuthButton'

type Props = {
  items: {
    href: string
    title: string
    badge?: React.ReactNode
  }[]
}

const Aside = ({ items, children }: PropsWithChildren<Props>) => {
  return (
    <aside className='z-[19] flex h-full w-full flex-col px-3 py-10' aria-label='sidebar'>
      <ul className='flex flex-col gap-2 bg-white font-tossFace font-semibold dark:border-darkBg-100 dark:bg-darkBg-300 '>
        {items.map(({ href, title, badge }) => (
          <li className={'relative flex w-full flex-col items-end'} key={href}>
            <CardLink
              href={href}
              className='h-full w-full rounded-xl px-3 py-3 text-start font-tossFace transition-colors hover:bg-base-300 dark:hover:bg-darkBg-100'
            >
              {title}
            </CardLink>
            {badge && <div className='badge badge-accent absolute -right-1 -top-1'>{badge}</div>}
          </li>
        ))}
      </ul>
      {children && (
        <div className='py-5 pl-10'>
          <div className='h-1 border-t border-gray-200 dark:border-darkBg-100' />
        </div>
      )}
      {children}
      <div className='py-5 pl-10'>
        <div className='h-1 border-t border-gray-200 dark:border-darkBg-100' />
      </div>
      <AuthButton className='' />
    </aside>
  )
}

export default Aside
