import { useState, useCallback } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import useDebounceCallback from './useDebounceCallback'
import { NewsLetter, Articles } from '@/types'
import { PostgrestSingleResponse } from '@supabase/supabase-js'

type SearchResponse = { letters: PostgrestSingleResponse<NewsLetter[]>; articles: PostgrestSingleResponse<Articles[]> }

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export const useSearch = () => {
  const [isEmpty, setIsEmpty] = useState(false)
  const [query, setQuery] = useState('')
  const [url, setUrl] = useState('')
  const [onChangeUrl] = useDebounceCallback((searchQuery: string) => {
    setUrl(`/api/search?q=${searchQuery}`)
  }, 500)

  const { data, ...rest } = useSWR<SearchResponse>(url, fetcher, {
    keepPreviousData: true,
    onSuccess(data) {
      setIsEmpty(
        data?.articles.error !== null ||
          data?.letters.error !== null ||
          (!data?.articles.data && !data?.letters.data) ||
          (data?.letters?.data.length === 0 && data?.articles?.data.length === 0)
      )
    },
    onError() {
      setIsEmpty(true)
    },
  })

  const handleSearch = useCallback(
    (searchQuery: string) => {
      setQuery(searchQuery)
      if (searchQuery) {
        onChangeUrl(searchQuery)
      } else {
        setUrl('')
      }
    },
    [onChangeUrl]
  )

  return {
    query,
    setQuery: handleSearch,
    data,
    isEmpty,
    ...rest,
  }
}
