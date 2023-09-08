'use client'
import React, { useState } from 'react'
import { NewsLetter } from '@/types'
import { motion } from 'framer-motion'

const BADGECOLOR = ['#313866', '#504099', '#974EC3', '#FE7BE5', '#262A56', '#B8621B', '#E3CCAE']

const Days = ({ days }: Partial<Pick<NewsLetter, 'days'>>) => {
  const [isHovered, setHovered] = useState(false)

  const onMouseHover = () => {
    setHovered(true)
  }

  const onMouseLeave = () => {
    setHovered(false)
  }

  return (
    days && (
      <motion.div
        className='absolute -top-2 left-0 flex cursor-pointer items-center bg-transparent py-5 pr-5 will-change-transform'
        onHoverStart={onMouseHover}
        onHoverEnd={onMouseLeave}
        onViewportEnter={(e) => {
          e?.target.setAttribute('style', `width: ${15 * days?.length}px`)
          e?.target.parentElement?.addEventListener('mouseover', onMouseHover)
          e?.target.parentElement?.addEventListener('mouseleave', onMouseLeave)
        }}
        onViewportLeave={(e) => {
          e?.target.parentElement?.removeEventListener('mouseover', onMouseHover)
          e?.target.parentElement?.removeEventListener('mouseleave', onMouseLeave)
        }}
      >
        {days?.map((day, index) => (
          <motion.div
            key={day}
            className='badge badge-primary absolute w-[30px] border-none text-white shadow-md'
            style={{ left: `${index * 7.5}px`, backgroundColor: BADGECOLOR[index] }}
            animate={{
              left: isHovered ? `${index * 34}px` : `${index * 7.5}px`,
            }}
          >
            {day[0]}
          </motion.div>
        ))}
      </motion.div>
    )
  )
}

export default Days
