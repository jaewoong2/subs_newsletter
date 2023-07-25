'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { sleep } from '@/lib/sleep'

type IntroProps = {
  title: string
  subTitle: string
  index: number
}

export const Intro = ({ title, subTitle, index }: IntroProps) => {
  const BACKGROUND_COLOR = ['bg-purple-100', 'bg-green-100', 'bg-blue-100']
  const TEXT_COLOR = ['text-purple-500', 'text-green-500', 'text-blue-500']

  return (
    <motion.li
      className='flex min-h-[200px] w-full opacity-0 dark:text-white'
      onViewportEnter={async (e) => {
        await sleep(index * 500)
        e?.target.classList.add(...'animate-fade-down flex-col items-center justify-center gap-3'.split(' '))
      }}
    >
      <div className={`flex h-16 w-16 items-center justify-center rounded-full ${BACKGROUND_COLOR[index - 1]} p-8}`}>
        <span className='text-2xl font-extrabold dark:text-darkBg-200 max-lg:text-xl'>{index}</span>
      </div>
      <div className='flex flex-col gap-2'>
        <div className={`mx-auto text-center text-xl font-bold max-lg:text-lg ${TEXT_COLOR[index - 1]}`}>{title}</div>
        <p className='text-lg font-semibold max-lg:text-base'>{subTitle}</p>
      </div>
    </motion.li>
  )
}
