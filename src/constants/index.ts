import { Metadata } from 'next'

export const BASEURL = process.env.NEXT_PUBLIC_CURRENT_URL ?? 'https://newsubs-rp2bw6ixvq-du.a.run.app'

export const IMAGE = {
  example: {
    image1: 'https://ndavhlqivyieuaehsnne.supabase.co/storage/v1/object/public/image/kakao-share.png',
    image2: 'https://ndavhlqivyieuaehsnne.supabase.co/storage/v1/object/public/image/thumbnail.png',
    image3: 'https://ndavhlqivyieuaehsnne.supabase.co/storage/v1/object/public/image/og.png',
    image4: 'https://ndavhlqivyieuaehsnne.supabase.co/storage/v1/object/public/image/main2.png',
  },
}

export const METADATA: Metadata = {
  generator: 'Next.js',
  applicationName: '회원가입 UX 테스트',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'UI/UX'],
  authors: [{ name: '@jaewoong2', url: 'https://github.com/jaewoong2/ux-tester' }],
  creator: '@jaewoong2',
  title: '나의 회원가입 UX 테스트',
  description: '나만의 회원가입 UX 를 만들고 점수를 확인 해보세요 :)',
  openGraph: {
    title: '나만의 회원가입 UX 테스트',
    description: '나만의 회원가입 UX 를 만들고 점수를 확인 해보세요 :)',
    images: 'https://ndavhlqivyieuaehsnne.supabase.co/storage/v1/object/public/image/thumbnail.png',
  },
  twitter: {
    card: 'summary_large_image',
    images: 'https://ndavhlqivyieuaehsnne.supabase.co/storage/v1/object/public/image/thumbnail.png',
    site: '',
    title: '나만의 회원가입 UX 테스트',
    description: '나만의 회원가입 UX 를 만들고 점수를 확인 해보세요 :)',
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
