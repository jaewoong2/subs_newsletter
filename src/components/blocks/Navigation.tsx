import { twMerge } from 'tailwind-merge'
import NavigationBody from '../atoms/NavigationBody'

type Props = {
  isAnimate?: boolean
  className?: string

  menu?: React.ReactNode
}

export const Navigation = ({ className, menu }: Props) => {
  return (
    <nav
      className={twMerge(
        'fixed top-0 z-[100] flex w-full justify-between bg-white p-5 backdrop-blur-md',
        'dark:bg-darkBg-200 dark:bg-opacity-0 dark:text-white',
        className
      )}
    >
      <NavigationBody menu={menu} />
    </nav>
  )
}
