import { IMAGE } from '@/constants'
import Link from 'next/link'
import React from 'react'
import Buttons from './components/Buttons'
import { NewsLetter } from '@/types'

type Props = {
  newsletter: NewsLetter
}

const InactivePage = ({ newsletter }: Props) => {
  return (
    <div className='flex h-full w-full flex-col items-center py-10'>
      <div className='flex items-center gap-6 py-6 font-tossFace'>
        <img className='h-36 w-auto' src={newsletter.thumbnail ?? ''} alt={newsletter.name ?? ''} />
        <span>♾️</span>
        <img className='h-36 w-auto rounded-3xl' src={IMAGE.logo} alt={'newsubs logo'} />
      </div>
      <div className='divider mx-auto w-96'></div>
      <div className='font-tossFace'>
        <span className='font-tossFace text-lg font-bold'>{newsletter.name}</span> 님 안녕하세요 😀
      </div>
      <div className='flex items-center justify-center whitespace-nowrap'>
        <span className='translate-y-1 font-Yeongdo-Rg text-xl font-bold'>newsubs_</span>
        <span>은 뉴스레터를 소개하는 서비스 에요</span>
      </div>
      <div>
        뉴섭에 대한 자세한 설명은
        <Link
          href={'https://www.notion.so/4133f572e63a48c98fb014cf66309faf?pvs=4'}
          className='font-semibold text-blue-700 dark:text-blue-200'
        >
          {' '}
          [소개링크]{' '}
        </Link>
        에서 확인 할 수 있어요!
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='font-tossFace'>
          <span className='font-tossFace text-lg font-bold'>{newsletter.name}</span> 님을 뉴스레터 추천 서비스인
          뉴섭에서 기다리고 있어요
        </div>
        <span className='py-4 font-tossFace text-2xl'>👇</span>
      </div>
      <Buttons newsletter={newsletter} />
    </div>
  )
}

export default InactivePage
