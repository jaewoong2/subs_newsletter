import { NextResponse } from 'next/server'
import useSWRMutation, { MutationFetcher, SWRMutationConfiguration } from 'swr/mutation'
import Error from 'next/error'

const fetcher: MutationFetcher<NextResponse, string, string[]> = (url, { arg }) =>
  fetch(url, { method: 'POST', body: JSON.stringify(arg) }).then((res) => res.json())

const usePostNewsletterSequence = (configuration?: SWRMutationConfiguration<NextResponse, Error, string>) => {
  const { data, ...rest } = useSWRMutation('/api/newslettersequence', fetcher, configuration)

  return {
    data: data,
    ...rest,
  }
}

export default usePostNewsletterSequence
