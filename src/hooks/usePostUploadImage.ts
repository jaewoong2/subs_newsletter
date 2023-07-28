import useSWRMutation, { MutationFetcher } from 'swr/mutation'

interface UploadResponse {
  data: {
    path: string
  }
  path: string
  error: null | string
  status: number
  statusText: string
}

const fetcher: MutationFetcher<UploadResponse, FormData, string> = (url, { arg }) =>
  fetch(url, {
    method: 'POST',
    body: arg,
  }).then((res) => res.json())

const usePostUploadImage = () => {
  const { data, ...rest } = useSWRMutation('api/upload', fetcher)

  return {
    data: data,
    ...rest,
  }
}

export default usePostUploadImage
