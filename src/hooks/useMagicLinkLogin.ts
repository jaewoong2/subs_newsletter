import { NextResponse } from 'next/server'
import useSWRMutation, { MutationFetcher, SWRMutationConfiguration } from 'swr/mutation'

const fetcher: MutationFetcher<NextResponse, string, { email: string }> = (url, { arg }) =>
  fetch(url, { method: 'POST', body: JSON.stringify(arg) }).then((res) => res.json())

const useMagicLinkLogin = (configuration?: SWRMutationConfiguration<NextResponse, Error, string>) => {
  return useSWRMutation('api/magiclink', fetcher, { ...configuration })
}

export default useMagicLinkLogin
