import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_CURRENT_URL
        ? process.env.NEXT_PUBLIC_CURRENT_URL + '/newsletter'
        : 'https://newsubs-rp2bw6ixvq-du.a.run.app/newsletter',
      changeFrequency: 'always',
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: process.env.NEXT_PUBLIC_CURRENT_URL
        ? process.env.NEXT_PUBLIC_CURRENT_URL
        : 'https://newsubs-rp2bw6ixvq-du.a.run.app',
      changeFrequency: 'daily',
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: process.env.NEXT_PUBLIC_CURRENT_URL
        ? process.env.NEXT_PUBLIC_CURRENT_URL + '/article'
        : 'https://newsubs-rp2bw6ixvq-du.a.run.app/article',
      changeFrequency: 'always',
      priority: 1,
      lastModified: new Date(),
    },
  ]
}
