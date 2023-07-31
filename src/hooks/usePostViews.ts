import { NextResponse } from 'next/server'
import useSWRMutation, { MutationFetcher } from 'swr/mutation'

type Request = {
  type: 'article' | 'newsletter'
  id: string | number
}

const fetcher: MutationFetcher<NextResponse, string, Request> = (url, { arg }) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg),
  }).then((res) => res.json())

const usePostViews = () => {
  const { data, ...rest } = useSWRMutation('api/views', fetcher)

  return {
    data: data,
    ...rest,
  }
}

export default usePostViews
