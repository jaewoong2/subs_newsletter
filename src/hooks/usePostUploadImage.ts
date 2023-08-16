import useSWRMutation, { MutationFetcher, SWRMutationConfiguration } from 'swr/mutation'

interface UploadResponse {
  data?: {
    path?: string
    name?: string
  }
  path: string
  error: null | string
  status: number
  statusText: string
}

const fetcher: MutationFetcher<UploadResponse, string, FormData> = (url, { arg }) =>
  fetch(url, {
    method: 'POST',
    body: arg,
  }).then((res) => res.json())

const usePostUploadImage = (configuration?: SWRMutationConfiguration<UploadResponse, Error, string>) => {
  const { data, ...rest } = useSWRMutation('/api/upload', fetcher, configuration)

  return {
    data: data,
    ...rest,
  }
}

export default usePostUploadImage
