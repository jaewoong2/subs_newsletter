import { getNewsLetters } from '@/app/supabase-server'
import Card from '@/components/atoms/Card'
import ImageCarousel from '@/components/blocks/ImageCarousel'
import Link from 'next/link'

const NotFound = async () => {
  const newsletters = await getNewsLetters('new', 10)

  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center'>
      <div className='-z-5 absolute left-1/2 top-0 -translate-x-1/2 overflow-hidden text-[160px] text-primary-content opacity-70 dark:text-purple-400'>
        <p className='-rotate-45 font-PyeongChangPeace'>404</p>
        <p className='-rotate-45 font-PyeongChangPeace'>404</p>
        <p className='-rotate-45 font-PyeongChangPeace'>404</p>
      </div>
      <div className='z-10 p-5 text-center font-tossFace text-2xl font-bold'>
        현재 카테고리에 해당하는 뉴스레터가 없습니다
      </div>
      <div className='z-10 p-2 font-tossFace text-lg font-bold text-gray-900 dark:text-white'>
        빠른 시일내에 추가하도록 하겠습니다
      </div>
      <ImageCarousel
        className='h-fit w-[80%] max-w-lg'
        itemWrapperClassName='gap-1'
        itemClassName='w-[50%] max-lg:w-[50%] max-md:w-[50%] max-sm:w-[50%] h-[350px] max-md:h-[250px] gap-0 px-1'
        items={
          newsletters?.data?.map((newsletter) => (
            <div className='h-[350px] w-full max-md:h-[250px]' key={newsletter.id}>
              <Card
                {...newsletter}
                image={newsletter.thumbnail ?? ''}
                className='bg-white'
                title={newsletter.name}
                tags={[]}
                days={newsletter.days}
                link={`/${newsletter.name}`}
              />
            </div>
          )) ?? []
        }
      />
      <Link
        href={'/newsletter'}
        className='btn-primary btn z-10 mt-4 w-full max-w-sm items-center rounded-lg px-6 text-center text-base font-bold shadow-lg dark:text-black'
      >
        다른 카테고리의 뉴스레터 보러가기
      </Link>
    </div>
  )
}

export default NotFound
