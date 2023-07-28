import useSWR, { Fetcher } from 'swr'

const fetcher: Fetcher<
  {
    data: string[]
    error: null
    count: number | null
    status: number
    statusText: string
  },
  string
> = (url: string) => fetch(url, { method: 'GET' }).then((res) => res.json())

const useGetCategories = () => {
  const { data, ...rest } = useSWR('api/categories', fetcher)

  return {
    data: data,
    ...rest,
  }
}

export default useGetCategories
