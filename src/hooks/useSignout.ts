import useSWRMutation, { MutationFetcher, SWRMutationConfiguration } from 'swr/mutation'
import Error from 'next/error'
import { NextResponse } from 'next/server'

const fetcher: MutationFetcher<NextResponse, string, undefined | null> = (url) =>
  fetch(url, { method: 'POST' }).then((res) => res.json())

const useSignout = (configuration?: SWRMutationConfiguration<NextResponse, Error, string>) => {
  const { data, ...rest } = useSWRMutation('/api/signout', fetcher, { ...configuration })

  return {
    data: data,
    ...rest,
  }
}

export default useSignout
