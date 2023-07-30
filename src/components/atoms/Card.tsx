'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

type Props = {
  image?: string | null
  alt?: string
  title?: React.ReactNode
  description?: React.ReactNode
  tags?: string[]
}

const FIT_WIDTH_CLASS = ['w-full', 'max-w-full', 'h-auto', 'max-h-full', 'object-cover']
const FIT_HEIGHT_CLASS = ['h-full', 'max-h-full', 'w-auto', 'max-w-full', 'object-cover']

export const CardImage = ({ image, alt }: Props) => {
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

    // 이미지 요소에 observer를 붙입니다.
    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    // 컴포넌트가 unmount되면 observer를 해제합니다.
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
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
    <figure className='h-full max-h-[50%] min-h-[50%] w-full' ref={figureRef}>
      <motion.img
        src={'https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/placeholder.png'}
        alt={alt}
        ref={imageRef}
        onLoad={onLoadImage}
        onResize={onLoadImage}
        className='lazy animate-pulse'
        data-src={image}
      />
    </figure>
  )
}

export const Card = ({ title, description, image, alt, tags }: Props) => {
  return (
    <li className='group card mx-auto h-full w-full scale-95 border bg-base-100 transition-transform hover:scale-100 hover:border-slate-400 dark:border-darkBg-800 dark:bg-darkBg-100 '>
      <CardImage image={image} alt={alt} />
      <div className='flex h-full flex-col gap-3 text-clip px-6 py-2'>
        <h4 className='card-title'>{title}</h4>
        <span className='line-clamp-4 overflow-hidden'>{description}</span>
        <div className='card-actions justify-end'>
          {tags?.map((tag) => (
            <div className='badge badge-outline' key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </li>
  )
}
