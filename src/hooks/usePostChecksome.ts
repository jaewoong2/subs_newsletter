import { NextResponse } from 'next/server'
import { Checksome } from '@/types'
import useSWRMutation, { MutationFetcher, SWRMutationConfiguration } from 'swr/mutation'
import Error from 'next/error'

const fetcher: MutationFetcher<NextResponse, string, Partial<Checksome>> = (url, { arg }) =>
  fetch(url, { method: 'POST', body: JSON.stringify(arg) }).then((res) => res.json())

const usePostChecksome = (configuration?: SWRMutationConfiguration<NextResponse, Error, string>) => {
  const { data, ...rest } = useSWRMutation('api/checksome', fetcher, configuration)

  return {
    data: data,
    ...rest,
  }
}

export default usePostChecksome
