'use client'
import NextLink, { LinkProps as InternalLinkProps } from 'next/link'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import useDebounceCallback from '@/hooks/useDebounceCallback'
import usePostViews from '@/hooks/usePostViews'
import { twMerge } from 'tailwind-merge'

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof InternalLinkProps> & InternalLinkProps

type Props = {
  isActive?: boolean
  href: string
  className?: string
  newsLetterId?: string | number
  artlceId?: string | number
} & LinkProps

const CardLink = ({
  isActive: isActive_,
  href,
  children,
  className,
  newsLetterId,
  artlceId,
  ...props
}: PropsWithChildren<Props>) => {
  const [isActive, setIsActive] = useState(isActive_)
  const { trigger } = usePostViews()
  const [debouncedOnClickLink] = useDebounceCallback(() => {
    if (newsLetterId) {
      trigger({ id: +newsLetterId, type: 'newsletter' })
    }
    if (artlceId) {
      trigger({ id: +artlceId, type: 'article' })
    }
  }, 1000 * 60)

  useEffect(() => {
    if (location.href === href) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [href])

  return (
    <NextLink
      href={href}
      className={twMerge(className, isActive ? 'bg-slate-100 font-bold dark:bg-darkBg-200' : 'font-normal')}
      onClick={debouncedOnClickLink}
      {...props}
    >
      {children}
    </NextLink>
  )
}

export default CardLink
