import { Intro } from '@/components/atoms'
import { Register } from '@/components/blocks'
import Footer from '@/components/atoms/Footer'
import { RegisterNewsLetter } from '@/components/blocks/RegisterNewsLetter'
import ThemeToogleButton from '@/components/blocks/ThemeToogleButton'
import { CATEGORY_ICONS, IMAGE, SEO_TITLE } from '@/constants'
import CardLink from '@/components/blocks/CardLink'
import DataList from '@/components/blocks/DataList'
import ImageCarousel from '@/components/blocks/ImageCarousel'
import SearchInputMain from '@/components/blocks/SearchInputMain'
import Link from 'next/link'
import { getCategories, getNewsLetters, getArticles } from './supabase-server'
import Image from 'next/image'
import Card from '@/components/atoms/Card'

const getCategoryIcon = (category?: string | null) => {
  if (category && category in CATEGORY_ICONS) {
    const cate = category as keyof typeof CATEGORY_ICONS
    return CATEGORY_ICONS[cate]
  }

  return '🥳'
}

export default async function Page() {
  const categories = await getCategories()
  const newsletters = await getNewsLetters('new', 400)
  const articles = await getArticles()

  return (
    <div className='min-h-full w-full'>
      <h1 className='sr-only'>{SEO_TITLE}</h1>
      <main className='flex h-full min-h-screen w-full flex-col items-center dark:bg-darkBg-400 dark:text-white'>
        <div className='container h-fit w-full px-6 py-4'>
          <nav className='flex h-[50px] w-full items-center justify-between gap-5'>
            <Link href={'/'}>
              <figure className='flex w-fit items-end justify-center gap-2 whitespace-nowrap pl-2 font-bold'>
                <Image src={IMAGE.logo} alt='뉴섭로고' width={32} height={32} className='rounded-xl' />
                <figcaption className='translate-y-1 font-Yeongdo-Rg text-2xl font-bold'>newsubs_</figcaption>
              </figure>
            </Link>
            <div className='flex items-center'>
              <SearchInputMain />
              <ThemeToogleButton />
            </div>
          </nav>
          <ul className='flex w-full gap-4 px-2 py-6'>
            <li className='font'>
              <CardLink href={'/'} className='text-lg font-light hover:text-slate-600'>
                홈
              </CardLink>
            </li>
            <li className='font'>
              <Link href={'/newsletter'} className='text-lg font-light hover:text-slate-600'>
                뉴스레터
              </Link>
            </li>
            <li className='font'>
              <Link href={'/article'} className='text-lg font-light hover:text-slate-600'>
                뉴스레터 소식
              </Link>
            </li>
          </ul>
        </div>
        <div className='w-full border-y bg-slate-100 py-6 dark:border-darkBg-200 dark:bg-darkBg-200'>
          <div className='container mx-auto flex w-full justify-center max-md:flex-col'>
            <div className='container mx-auto grid w-fit grid-cols-4 gap-4 py-12'>
              {categories?.data.map((category) => {
                return (
                  <Link
                    href={`/newsletter/${category.categories}`}
                    key={category.categories}
                    className='
                  flex h-20 w-20 cursor-pointer flex-col items-center
                  justify-center rounded-lg border bg-white text-sm shadow-trend transition-transform hover:-translate-y-1 dark:border-darkBg-200 dark:bg-darkBg-100 dark:shadow-none max-md:h-20 max-md:w-20'
                  >
                    <p className='h-8 font-tossFace text-lg'>{getCategoryIcon(category.categories)}</p>
                    <p className='font-[500] max-md:text-sm'>{category.categories}</p>
                  </Link>
                )
              })}
            </div>
            <div className='w-2/3 px-6 py-4 max-lg:w-1/2 max-md:w-full'>
              <DataList title='최신 뉴스레터'>
                <ImageCarousel
                  itemClassName='w-1/2 max-lg:w-full'
                  className='w-full'
                  items={newsletters?.data
                    .map(({ id, thumbnail, name, description, category, days }) => (
                      <figure key={`card-${id}-${name}`} className='h-full w-full'>
                        <Card
                          className='bg-white'
                          title={name}
                          description={description}
                          image={thumbnail ?? ''}
                          tags={category ?? []}
                          link={`/${name}`}
                          width={300}
                          height={150}
                          days={days}
                        />
                      </figure>
                    ))
                    .concat(
                      <Link
                        href='/newsletter'
                        className='flex h-full w-full scale-95 cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border bg-slate-200 p-5 transition-transform hover:scale-100 dark:border-darkBg-800 dark:bg-darkBg-100'
                      >
                        <p className='text-lg font-semibold'>더욱 많은 뉴스레터가 있어요</p>
                        <p className='text-sm font-thin'>내 취향에 맞는 뉴스레터를 확인 해보세요!</p>
                      </Link>
                    )}
                />
              </DataList>
            </div>
          </div>
        </div>
        <section className='flex w-full items-center justify-center border-y dark:border-darkBg-200 dark:bg-darkBg-400'>
          <ul className='container mx-auto flex w-full justify-center py-20 max-md:flex-col'>
            <Intro title='📰 뉴스레터는 뉴섭에서' index={1} subTitle='세상에 많은 뉴스레터를 한곳에 모았어요' />
            <Intro title='💘 내가 찾는 것만' index={2} subTitle='뉴스레터를 카테고리별로 분류 했어요' />
            <Intro title='🎉 매일 업데이트 해요' index={3} subTitle='매일 새로운 뉴스레터를 추가 하고 있어요' />
          </ul>
        </section>
        <section className='w-full px-6 py-4'>
          <DataList title='뉴스레터 소식'>
            <ImageCarousel
              items={articles?.data
                .map(({ id, description, title, thumbnail }) => (
                  <figure key={`card-${id}-${title}`} className='h-full w-full'>
                    <Card title={title} description={description} image={thumbnail ?? ''} link={`article/${title}`} />
                  </figure>
                ))
                .concat(
                  <Link
                    href='/article'
                    className='flex h-full w-full scale-95 cursor-pointer flex-col items-center justify-center rounded-xl border bg-slate-200 p-5 transition-transform hover:scale-100 dark:border-darkBg-800 dark:bg-darkBg-100'
                  >
                    <p className='text-lg font-semibold'>더욱 많은 소식이 있어요</p>
                    <p className='whitespace-nowrap text-sm font-thin'>내 취향에 맞는 뉴스레터 소식을 확인 해보세요!</p>
                  </Link>
                )}
            />
          </DataList>
        </section>
        <RegisterNewsLetter />
        <Register />
        <Footer />
      </main>
    </div>
  )
}
