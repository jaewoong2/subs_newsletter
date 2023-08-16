import useSWR, { Fetcher } from 'swr'

const fetcher: Fetcher<
  {
    data: { categories: string }[]
    error: null
    count: number | null
    status: number
    statusText: string
  },
  string
> = (url: string) =>
  fetch(url, { method: 'GET', cache: 'no-cache' }).then(async (res) => {
    return res.json()
  })

const useGetCategories = () => {
  return useSWR('/api/categories', fetcher)
}

export default useGetCategories
