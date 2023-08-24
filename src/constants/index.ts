import { Metadata } from 'next'

export const BASEURL = process.env.NEXT_PUBLIC_CURRENT_URL ?? 'https://newsubs.site'

export const IMAGE = {
  logo: 'https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/logo2.png',
  placeholder: 'https://ywnfqdpcmgtllkshgzsl.supabase.co/storage/v1/object/public/newsletter/image/placeholder.png',
  example: {
    image1: 'https://ndavhlqivyieuaehsnne.supabase.co/storage/v1/object/public/image/kakao-share.png',
    image2: 'https://ndavhlqivyieuaehsnne.supabase.co/storage/v1/object/public/image/thumbnail.png',
    image3: 'https://ndavhlqivyieuaehsnne.supabase.co/storage/v1/object/public/image/og.png',
    image4: 'https://ndavhlqivyieuaehsnne.supabase.co/storage/v1/object/public/image/main2.png',
  },
}

export const METADATA: Metadata = {
  generator: 'Next.js',
  applicationName: '뉴섭 | 뉴스레터를 한 곳에',
  referrer: 'origin-when-cross-origin',
  keywords: ['뉴스레터', 'newsletter', '뉴스레터구독', '뉴스레터추천', '뉴스레터 추천'],
  authors: [{ name: '@jaewoong2', url: 'https://github.com/jaewoong2' }],
  creator: '@jaewoong2',
  title: '뉴섭 | 뉴스레터를 한 곳에',
  description: '내가 원하는 뉴스레터를 찾아보고 구독 하세요 🤩',
  openGraph: {
    title: '뉴섭 | 뉴스레터를 한 곳에',
    description: '내가 원하는 뉴스레터를 찾아보고 구독 하세요 🤩',
    images: IMAGE.placeholder,
  },
  twitter: {
    card: 'summary_large_image',
    images: IMAGE.placeholder,
    site: BASEURL,
    title: '뉴섭 | 뉴스레터를 한 곳에',
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
  {
    href: BASEURL + '/newsletter/random',
    title: '랜덤 뉴스레터 🎲',
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
