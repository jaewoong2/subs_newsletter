import { Hero, Intro } from '@/components/atoms'
import { Home } from '@/components/pages/Home'
import { Navigation, Register } from '@/components/blocks'

export default async function Page() {
  return (
    <div className='h-full w-full'>
      <Navigation />
      <Hero />
      <section>
        <ul className='container mx-auto flex w-full justify-center py-20 max-md:flex-col'>
          <Intro title='뉴스레터는 뉴섭에서' index={1} subTitle='세상에 많은 뉴스레터를 한곳에 모았어요' />
          <Intro title='내가 원하는 것만' index={2} subTitle='뉴스레터를 카테고리별로 분류 했어요' />
          <Intro title='매일 업데이트 해요' index={3} subTitle='매일 새로운 뉴스레터를 추가 하고 있어요' />
        </ul>
      </section>
      <Home />
      <Register />
    </div>
  )
}
