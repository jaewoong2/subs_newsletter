import { useState } from 'react'
import usePostUploadImage from './usePostUploadImage'

const useFileUpload = () => {
  const [file, setFile] = useState<File | null | undefined>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { trigger, ...rest } = usePostUploadImage()

  const upload = async (file: File | null) => {
    setIsUploading(true)
    setFile(file)
    setError(null)
    try {
      if (!file) {
        throw new Error('파일이 업로드 되지 않았습니다.')
      }
      const formData = new FormData()
      formData.append('file', file)
      formData.append('name', file.name)
      trigger(formData)
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message)
      } else {
        setError('An error occurred while uploading the file.')
      }
    } finally {
      setIsUploading(false)
    }
  }

  return {
    file,
    isUploading,
    clientError: error,
    upload,
    ...rest,
  }
}

export default useFileUpload
