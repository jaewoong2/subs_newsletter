import { Checksome } from '@/types'
import useSWRMutation, { MutationFetcher } from 'swr/mutation'

const fetcher: MutationFetcher<Partial<Checksome>, Partial<Checksome>, string> = (url, { arg }) =>
  fetch(url, { method: 'POST', body: JSON.stringify(arg) }).then((res) => res.json())

const usePostChecksome = () => {
  const { data, ...rest } = useSWRMutation('api/checksome', fetcher)

  return {
    data: data,
    ...rest,
  }
}

export default usePostChecksome
