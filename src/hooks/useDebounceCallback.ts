import { useRef, useState } from 'react'

function useDebounceCallback<T extends unknown[]>(callback: (...params: T) => void, delay = 500) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [delay_, setDealy] = useState(delay)

  return [
    (...params: T) => {
      if (timer.current) clearTimeout(timer.current)

      timer.current = setTimeout(() => {
        callback(...params)
        timer.current = null
      }, delay_)
    },
    setDealy,
  ] as const
}

export default useDebounceCallback
