'use client'
import Page from '@/app/[creator]/components/Page'
import Card from '@/components/atoms/Card'
import SimpleModal from '@/components/atoms/SimpleModal'
import usePostRegisterNewsletter from '@/hooks/usePostRegisterNewsletter'
import useSimpleModal from '@/hooks/useSimpleModal'
import { NewsLetter } from '@/types'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {
  newsletter: NewsLetter
}

const Buttons = ({ newsletter }: Props) => {
  const [open, setOpen] = useState(false)
  const { isOpen, onClose } = useSimpleModal({
    isOpen: open,
    onClose() {
      setOpen(false)
    },
  })
  const router = useRouter()

  const { trigger } = usePostRegisterNewsletter({
    onSuccess() {
      router.push(`/register/success?name=${newsletter.name}`)
    },
  })

  return (
    <div className='flex gap-5'>
      <button
        type='button'
        className='btn-success btn text-black dark:text-white'
        onClick={() => {
          trigger({ id: newsletter.id })
        }}
      >
        등록하기
      </button>
      <button
        type='button'
        className='btn-primary btn text-white'
        onClick={() => {
          setOpen(true)
        }}
      >
        미리보기
      </button>
      <SimpleModal isOpen={isOpen} onClose={onClose} title='미리보기' subTitle='카드 및 페이지 미리보기' size={'2xl'}>
        <section className='flex h-full max-h-full w-full gap-5 overflow-scroll max-sm:flex-col max-sm:items-center'>
          <figure className='w-full border-dashed border-gray-700 max-sm:border-b-2 max-sm:pb-4 sm:border-r-2 sm:pr-4'>
            <p className='py-2 text-sm font-semibold'>[카드 미리보기]</p>
            <Card
              className='z-0 h-[350px] w-[250px] bg-white '
              title={newsletter.name}
              description={newsletter.description}
              image={newsletter.thumbnail ?? ''}
              tags={newsletter.category ?? []}
              link={`/${newsletter.name}`}
              width={300}
              height={150}
              days={newsletter.days}
            />
          </figure>
          <figure className='h-96 max-h-full w-full overflow-y-scroll'>
            <p className='py-2 text-sm font-semibold'>[페이지 미리보기]</p>
            <Page newsletter={newsletter} className='min-h-fit' />
          </figure>
        </section>
      </SimpleModal>
    </div>
  )
}

export default Buttons
