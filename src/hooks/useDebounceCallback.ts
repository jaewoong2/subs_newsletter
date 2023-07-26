import { useRef } from 'react'

function useDebounceCallback<T extends unknown[]>(callback: (...params: T) => void, delay = 500) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  return (...params: T) => {
    if (timer.current) clearTimeout(timer.current)

    timer.current = setTimeout(() => {
      callback(...params)
      timer.current = null
    }, delay)
  }
}

export default useDebounceCallback
