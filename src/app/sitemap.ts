import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_CURRENT_URL
        ? process.env.NEXT_PUBLIC_CURRENT_URL + '/newsletter'
        : 'https://newsubs.site/newsletter',
      changeFrequency: 'always',
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: process.env.NEXT_PUBLIC_CURRENT_URL ? process.env.NEXT_PUBLIC_CURRENT_URL : 'https://newsubs.site',
      changeFrequency: 'daily',
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: process.env.NEXT_PUBLIC_CURRENT_URL
        ? process.env.NEXT_PUBLIC_CURRENT_URL + '/article'
        : 'https://newsubs.site/article',
      changeFrequency: 'always',
      priority: 1,
      lastModified: new Date(),
    },
  ]
}
