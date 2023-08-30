import { NewsLetter } from '@/types'
import { Fetcher } from 'swr'
import useSWRInfinite, { SWRInfiniteConfiguration } from 'swr/infinite'

const getKey = (
  pageIndex: number,
  previousPageData: { data: NewsLetter[] }[],
  q: 'popular' | 'createdAt' = 'createdAt'
) => {
  if (previousPageData && previousPageData.length === 0) return null // 끝에 도달
  if (pageIndex > 1 && !previousPageData) return null
  return `/api/newsletter?page=${pageIndex}&limit=10&q=${q}` // SWR 키
}

const fetcher: Fetcher<{ data: NewsLetter[] }> = (url: string) =>
  fetch(url, { method: 'GET', cache: 'no-cache' }).then(async (res) => {
    return res.json()
  })

const useInfiniteNewsletter = (
  q?: 'popular' | 'createdAt',
  configuration?: SWRInfiniteConfiguration<{ data: NewsLetter[] }>
) => {
  const swrInfinite = useSWRInfinite<{ data: NewsLetter[] }>(
    (pageIndex, previousPageData) => getKey(pageIndex + 1, previousPageData, q),
    fetcher,
    { ...configuration }
  )

  return {
    ...swrInfinite,
    limit: 10,
  }
}

export default useInfiniteNewsletter
