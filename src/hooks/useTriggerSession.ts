import { Session } from '@supabase/supabase-js'
import { Key } from 'swr'
import useSWRMutation, { MutationFetcher, SWRMutationConfiguration } from 'swr/mutation'

type Data = { data: { session: Session } }

const fetcher: MutationFetcher<Data> = (url: string) =>
  fetch(url, { method: 'GET', cache: 'no-cache' }).then(async (res) => {
    return res.json()
  })

const useTriggerSession = (configuration?: SWRMutationConfiguration<Data, any, Key, never, any>) => {
  return useSWRMutation<Data>('/api/session', fetcher, { ...configuration })
}

export default useTriggerSession
