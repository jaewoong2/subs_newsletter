import { Provider } from '@supabase/supabase-js'
import useSWRMutation, { MutationFetcher, SWRMutationConfiguration } from 'swr/mutation'

const fetcher: MutationFetcher<
  {
    data: {
      provider: Provider
      url: string
    }
  },
  string,
  { redirectUrl: string }
> = (url, { arg }) => fetch(url, { method: 'POST', body: JSON.stringify(arg) }).then((res) => res.json())

const useGoogleLogin = (
  configuration?: SWRMutationConfiguration<
    {
      data: {
        provider: Provider
        url: string
      }
    },
    Error,
    string
  >
) => {
  return useSWRMutation('api/login', fetcher, { ...configuration })
}

export default useGoogleLogin
