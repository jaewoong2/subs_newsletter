'use client'
import { useRef, useEffect } from 'react'
import { NewsLetter } from '@/types'

type Props = {
  image: string
  alt?: string
  title?: React.ReactNode
  description?: React.ReactNode
  tags?: string[]
} & Partial<NewsLetter>

const IMAGE_PLACEHOLDER =
  'https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/placeholder.png'
const FIT_WIDTH_CLASS = ['w-full', 'max-w-full', 'h-auto', 'max-h-full', 'object-cover']
const FIT_HEIGHT_CLASS = ['h-full', 'max-h-full', 'w-auto', 'max-w-full', 'object-cover']

const CardImage = ({ image, alt }: Props) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const figureRef = useRef<HTMLDivElement>(null)

  const onLoadImage = () => {
    if (imageRef.current?.clientWidth && figureRef.current?.clientWidth) {
      if (imageRef.current.clientWidth < figureRef.current.clientWidth) {
        imageRef.current.classList.add(...FIT_WIDTH_CLASS)
      }
    }

    if (imageRef.current?.clientHeight && figureRef.current?.clientHeight) {
      if (imageRef.current.clientHeight < figureRef.current.clientHeight) {
        imageRef.current.classList.add(...FIT_HEIGHT_CLASS)
      }
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // 요소가 뷰포트와 교차하면 이미지를 로딩합니다.
        if (entry.isIntersecting) {
          const img = entry.target
          const src = img.getAttribute('data-src') ?? ''
          img.setAttribute('src', src)
          img.classList.remove('lazy')
          img.classList.remove('animate-pulse')

          // 이미지가 로딩되었으므로 observer에서 제거합니다.
          observer.unobserve(img)
        }
      })
    })

    const image = imageRef.current

    // 이미지 요소에 observer를 붙입니다.
    if (image) {
      observer.observe(image)
    }

    // 컴포넌트가 unmount되면 observer를 해제합니다.
    return () => {
      if (image) {
        observer.unobserve(image)
      }
    }
  }, [])

  useEffect(() => {
    const resize = () => {
      onLoadImage()
    }

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <figure className='h-[100%] max-h-[100%] min-h-[100%] w-full' ref={figureRef}>
      <img
        src={IMAGE_PLACEHOLDER}
        alt={alt ?? '카드 이미지'}
        ref={imageRef}
        onError={(event) => {
          event.currentTarget.setAttribute('src', IMAGE_PLACEHOLDER)
        }}
        onLoad={onLoadImage}
        onResize={onLoadImage}
        className='lazy h-auto w-auto animate-pulse'
        data-src={image}
      />
    </figure>
  )
}

export default CardImage