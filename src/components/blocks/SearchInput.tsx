'use client'
import React, { useState } from 'react'
import SimpleModal from '../atoms/SimpleModal'
import useSimpleModal from '@/hooks/useSimpleModal'
import { Divider, AbsoluteCenter, Box } from '@chakra-ui/react'
import { useSearch } from '@/hooks/useSearch'
import SearchResult from '../atoms/SearchResult'
import SearchForm from '../atoms/SearchForm'

const SearchInput = () => {
  const { query, setQuery, data, isLoading, isEmpty } = useSearch()

  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { isOpen, onClose } = useSimpleModal({
    isOpen: isSearchOpen,
    onClose() {
      setIsSearchOpen(false)
    },
  })

  return (
    <>
      <button
        aria-label='검색창 열기'
        className='btn-ghost btn'
        onClick={() => {
          setIsSearchOpen(true)
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </button>
      <SimpleModal isOpen={isOpen} onClose={onClose} closeOnOverlayClick isCentered={false} size={'lg'}>
        <SearchForm onChange={(e) => setQuery(e.target.value)} value={query} />
        <Box position='relative' className='py-5'>
          <Divider />
          <AbsoluteCenter bg='white' px='4' className='text-sm font-semibold text-gray-600'>
            결과
          </AbsoluteCenter>
        </Box>
        {isLoading && (
          <div className='flex w-full justify-center p-2'>
            <span className='loading loading-dots loading-lg text-gray-700' />
          </div>
        )}
        <ul className='flex flex-col gap-1 px-1'>
          {data?.letters?.data?.map(({ name, id, description, thumbnail }) => (
            <SearchResult name={name} key={id} description={description} thumbnail={thumbnail} link={name} />
          ))}
        </ul>
        {data?.articles?.data && data?.articles?.data?.length > 0 && (
          <Box position='relative' className='py-5'>
            <Divider />
            <AbsoluteCenter bg='white' px='4' className='text-sm font-semibold text-gray-600'>
              뉴스레터 소식도 있어요
            </AbsoluteCenter>
          </Box>
        )}
        <ul className='flex flex-col gap-1 px-1'>
          {data?.articles?.data?.map(({ title, id, description, thumbnail, link }) => (
            <SearchResult name={title} key={id} description={description} thumbnail={thumbnail} link={link} />
          ))}
        </ul>
        {isEmpty && (
          <div className='flex w-full justify-center font-tossFace text-sm text-gray-700'>
            찾으시는 정보가 없어요 🥺
          </div>
        )}
      </SimpleModal>
    </>
  )
}

export default React.memo(SearchInput)
