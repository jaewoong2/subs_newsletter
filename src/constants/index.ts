import { Metadata } from 'next'

export const BASEURL = process.env.NEXT_PUBLIC_CURRENT_URL ?? 'https://newsubs.site'

export const IMAGE = {
  logo: 'https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/logo2.png',
  placeholder: 'https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/subsubs.png',
}

export const METADATA: Metadata = {
  generator: 'Next.js',
  applicationName: '뉴섭 | 나에게 맞는 뉴스레터를 추천 받으세요',
  referrer: 'origin-when-cross-origin',
  keywords: ['뉴스레터', 'newsletter', '뉴스레터구독', '뉴스레터추천', '뉴스레터 추천'],
  authors: [{ name: '@jaewoong2', url: 'https://github.com/jaewoong2' }],
  creator: '@jaewoong2',
  title: '뉴섭 | 나에게 맞는 뉴스레터를 추천 받으세요',
  description: '내가 원하는 뉴스레터를 찾아보고 구독 하세요 🤩',
  metadataBase: new URL('https://newsubs.site'),
  openGraph: {
    title: '뉴섭 | 나에게 맞는 뉴스레터를 추천 받으세요',
    description: '내가 원하는 뉴스레터를 찾아보고 구독 하세요 🤩',
    images: IMAGE.placeholder,
  },
  twitter: {
    card: 'summary_large_image',
    images: IMAGE.placeholder,
    site: BASEURL,
    title: '뉴섭 | 나에게 맞는 뉴스레터를 추천 받으세요',
    description: '내가 원하는 뉴스레터를 찾아보고 구독 하세요 🤩',
  },
}

export const NEWSLETTER_ASIDE_LINK_ITEM = [
  {
    href: BASEURL + '/newsletter',
    title: '최신 뉴스레터 🥳',
    badge: 'NEW',
  },
  {
    href: BASEURL + '/newsletter/popular',
    title: '인기 뉴스레터 🔥',
    badge: '인기',
  },
]

export const ARTICLE_ASIDE_LINK_ITEM = [
  {
    href: BASEURL + '/article',
    title: '최신 뉴스레터 소식 🥳',
    badge: 'NEW',
  },
  {
    href: BASEURL + '/article/popular',
    title: '인기 뉴스레터 소식 🔥',
    badge: '인기',
  },
]

export const SEO_TITLE =
  '뉴섭 | 나에게 맞는 뉴스레터를 추천 받으세요. 수많은 뉴스레터들을 모아, 다양한 뉴스레터를 추천 하는 서비스를 제공 합니다'

export const CATEGORY_ICONS = {
  개발: '💻',
  문화: '🤿',
  자기개발: '📚',
  사회: '👔',
  경제: '📈',
  IT: '🖥️',
  음식: '🍭',
  크리에이터: '🎞️',
  연예: '🕺',
  디자인: '🎨',
  건강: '💊',
  헬스: '💪',
  리빙: '🏘️',
  여행: '✈️',
  트렌드: '🎧',
}
