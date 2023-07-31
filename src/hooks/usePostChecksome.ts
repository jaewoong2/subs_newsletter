import { NextResponse } from 'next/server'
import { Checksome } from '@/types'
import useSWRMutation, { MutationFetcher } from 'swr/mutation'

const fetcher: MutationFetcher<NextResponse, string, Partial<Checksome>> = (url, { arg }) =>
  fetch(url, { method: 'POST', body: JSON.stringify(arg) }).then((res) => res.json())

const usePostChecksome = () => {
  const { data, ...rest } = useSWRMutation('api/checksome', fetcher)

  return {
    data: data,
    ...rest,
  }
}

export default usePostChecksome
