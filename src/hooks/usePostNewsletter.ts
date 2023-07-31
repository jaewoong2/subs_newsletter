import { NewsLetter } from '@/types'
import { NextResponse } from 'next/server'
import useSWRMutation, { MutationFetcher } from 'swr/mutation'

const fetcher: MutationFetcher<NextResponse, string, Partial<NewsLetter>> = (url, { arg }) =>
  fetch(url, { method: 'POST', body: JSON.stringify(arg) }).then((res) => res.json())

const usePostNewsletter = () => {
  return useSWRMutation('api/newsletter', fetcher)
}

export default usePostNewsletter
