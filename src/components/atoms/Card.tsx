type Props = {
  image?: string | null
  alt?: string
  title?: React.ReactNode
  description?: React.ReactNode
  tags?: string[]
}

export const Card = ({ title, description, image, alt, tags }: Props) => {
  return (
    <li className='group card mx-auto h-full w-full border bg-base-100 transition-colors hover:border-slate-400 dark:border-darkBg-800 dark:bg-darkBg-100'>
      <figure className='min-h-[50%] scale-90 transition-transform group-hover:scale-100'>
        <img src={image ?? ''} alt={alt} className='h-auto max-h-full w-auto max-w-full' />
      </figure>
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
