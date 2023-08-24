import { useState } from 'react'

type UseLocalStorageOptions<T> = {
  isMountedRevalidate?: boolean
  defaultValue?: T
}

const useLocalStorage = <T extends Record<string, unknown> | string | boolean>(
  key: string,
  options?: UseLocalStorageOptions<T>
) => {
  if (typeof window === 'undefined') {
    throw new Error('only use browser, not server')
  }

  const [value, setValue] = useState<T | null>(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        return JSON.parse(item)
      }
      return options?.defaultValue
    } catch (error) {
      console.error('Error reading from local storage:', error)
      return options?.defaultValue
    }
  })

  const getLocalstorageValue = () => {
    try {
      const valueOfLocalstorage = window.localStorage.getItem(key)
      if (valueOfLocalstorage) {
        setValue(JSON.parse(valueOfLocalstorage))
      } else {
        setValue(null)
      }
    } catch (error) {
      console.error('Error reading from local storage:', error)
    }
  }

  const setLocalStorageValue = (newValue: T | null) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue))
      setValue(newValue)
    } catch (error) {
      console.error('Error setting local storage:', error)
    }
  }

  return { value, revalidate: getLocalstorageValue, setValue: setLocalStorageValue }
}

export default useLocalStorage
