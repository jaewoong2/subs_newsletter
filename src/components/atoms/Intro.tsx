type IntroProps = {
  title: string
  subTitle: string
  index: number
}

export const Intro = ({ title, subTitle, index }: IntroProps) => {
  const BACKGROUND_COLOR = ['bg-purple-100', 'bg-green-100', 'bg-blue-100']
  const TEXT_COLOR = ['text-purple-500', 'text-green-500', 'text-blue-500']

  return (
    <li className='flex w-full flex-col items-center justify-center gap-3'>
      <div className={`flex h-16 w-16 items-center justify-center rounded-full ${BACKGROUND_COLOR[index - 1]} p-8}`}>
        <span className='text-2xl font-extrabold'>{index}</span>
      </div>
      <div className='flex flex-col gap-2'>
        <div className={`mx-auto text-xl font-bold ${TEXT_COLOR[index - 1]}`}>{title}</div>
        <p className='text-lg font-semibold'>{subTitle}</p>
      </div>
    </li>
  )
}
