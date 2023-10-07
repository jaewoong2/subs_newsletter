import { NextResponse } from 'next/server'
import useSWRMutation, { MutationFetcher, SWRMutationConfiguration } from 'swr/mutation'

const fetcher: MutationFetcher<NextResponse, string, { id: number }> = (url, { arg }) =>
  fetch(url, { method: 'POST', body: JSON.stringify(arg) }).then((res) => res.json())

const usePostRegisterNewsletter = (configuration?: SWRMutationConfiguration<NextResponse, Error, string>) => {
  return useSWRMutation('/api/register', fetcher, configuration)
}

export default usePostRegisterNewsletter
