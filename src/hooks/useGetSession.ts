import { Session } from '@supabase/supabase-js'
import useSWR, { Fetcher, SWRConfiguration } from 'swr'

type Data = { data: { session: Session } }

const fetcher: Fetcher<Data> = (url: string) =>
  fetch(url, { method: 'GET', cache: 'no-cache' }).then(async (res) => {
    return res.json()
  })

const useGetSession = (configuration?: SWRConfiguration<Data>) => {
  return useSWR<Data>('/api/session', fetcher, { ...configuration })
}

export default useGetSession
