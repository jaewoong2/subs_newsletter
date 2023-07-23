import { useCallback, useEffect, useState } from 'react'
import { MotionStyle } from 'framer-motion'
import { useDebounce } from './useDebounce'

type Props = {
  x?: number
  y?: number
}

const useMousePointer = (options?: Props) => {
  const [variant, setVariant] = useState<'default' | 'text'>('default')
  const [mousePos, setMousePos] = useState({
    x: options?.x || document.body.clientWidth / 2,
    y: options?.y || window.innerHeight / 2 - 50,
  })
  const debonuceMousePostion = useDebounce(mousePos, 5)

  const variants: { [key: string]: MotionStyle } = {
    default: {
      top: debonuceMousePostion.y,
      left: debonuceMousePostion.x,
      x: '-50%',
      y: '-50%',
    },
    text: {
      height: '100px',
      width: '100px',
      top: debonuceMousePostion.y,
      left: debonuceMousePostion.x,
      x: '-70%',
      y: '-70%',
      backgroundColor: 'blue',
      mixBlendMode: 'difference',
    },
  }

  const handlePosition = useCallback(
    (e: MouseEvent) => {
      if (debonuceMousePostion.x === e.clientX && debonuceMousePostion.y === e.clientY) return
      setMousePos({ x: e.clientX, y: e.clientY })
    },
    [debonuceMousePostion.x, debonuceMousePostion.y]
  )

  useEffect(() => {
    window.addEventListener('mousemove', handlePosition)
    return () => window.removeEventListener('mousemove', handlePosition)
  }, [handlePosition])

  return { varinat: variants[variant], setVariant }
}

export default useMousePointer
