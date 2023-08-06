import { NewsLetter } from '@/types'
import { NextResponse } from 'next/server'
import useSWRMutation, { MutationFetcher, SWRMutationConfiguration } from 'swr/mutation'

const fetcher: MutationFetcher<NextResponse, string, Partial<NewsLetter>> = (url, { arg }) =>
  fetch(url, { method: 'POST', body: JSON.stringify(arg) }).then((res) => res.json())

const usePostNewsletter = (configuration?: SWRMutationConfiguration<NextResponse, Error, string>) => {
  return useSWRMutation('api/newsletter', fetcher, configuration)
}

export default usePostNewsletter
