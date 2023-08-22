import useSWR, { Fetcher, SWRConfiguration } from 'swr'
import { Users } from '@/types'

type Data = { data: Users | null }

const fetcher: Fetcher<Data> = (url: string) =>
  fetch(url, { method: 'GET', cache: 'no-cache' }).then(async (res) => {
    return res.json()
  })

const useGetUser = (configuration?: SWRConfiguration<Data>) => {
  return useSWR<Data>('/api/user', fetcher, { ...configuration })
}

export default useGetUser
