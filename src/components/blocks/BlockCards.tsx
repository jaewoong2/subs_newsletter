import React from 'react'
import BlockCard from '../atoms/BlockCard'
import { getBlocks } from '@/app/supabase-server'
import Image from 'next/image'

const BG_COLORS = ['bg-[#F1A4CE]', 'bg-[#92C5FE]', 'bg-[#86EFAC]', 'bg-[#b28dea]']
const BLOCKS_ANIMATION = [
  'group-hover:animate-fade-left',
  'group-hover:animate-wiggle',
  'group-hover:animate-wiggle',
  'group-hover:animate-jump',
]

export const dynamic = 'force-static'

const BlockCards = async () => {
  const blocks = await getBlocks()

  return (
    <div className='flex max-h-full w-full items-center justify-center bg-slate-200 py-10 dark:bg-darkBg-300'>
      <div className='flex w-full max-w-6xl flex-col items-center justify-center gap-4 p-10 max-md:p-5'>
        <div className='grid w-full grid-cols-[4fr_3fr] gap-x-3 gap-y-5 overflow-hidden max-md:grid-cols-1'>
          {blocks?.data.slice(0, 2).map(({ id, image, subtitle, title }, index) => (
            <BlockCard
              title={title ?? ''}
              description={subtitle ?? ''}
              key={id}
              className={`${BG_COLORS[index]} h-96 text-black dark:text-white`}
            >
              <figure className='flex min-w-[150px] items-end justify-end gap-5 px-10 py-5'>
                <Image
                  src={image ?? ''}
                  alt={subtitle ?? 'block-image'}
                  className={`max-w-auto h-auto max-h-full w-auto min-w-[150px] drop-shadow-2xl
                  max-md:min-w-[120px] ${BLOCKS_ANIMATION[index]}`}
                  width={350}
                  height={350}
                />
              </figure>
            </BlockCard>
          ))}
        </div>
        <div className='grid w-full grid-cols-[3fr_4fr] gap-x-3 gap-y-5 max-md:grid-cols-1'>
          {blocks?.data.slice(2, 4).map(({ id, image, subtitle, title }, index) => (
            <BlockCard
              title={title ?? ''}
              description={subtitle ?? ''}
              key={id}
              className={`${BG_COLORS[index + 2]} text-black dark:text-white`}
            >
              <figure className='flex min-w-[150px] items-end justify-end gap-5 px-10 py-5'>
                <Image
                  src={image ?? ''}
                  alt={subtitle ?? 'block-image'}
                  className={`max-w-auto h-auto max-h-full w-auto min-w-[150px] drop-shadow-2xl
                  max-md:min-w-[120px] 
                  ${BLOCKS_ANIMATION[index + 2]}`}
                  width={350}
                  height={350}
                />
              </figure>
            </BlockCard>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlockCards
