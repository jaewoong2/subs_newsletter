import { Database } from '@/types/supabase'
import { createClient } from '@supabase/supabase-js'

export default async function sitemap() {
  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
  )

  const newsletters = await supabase.from('newsletter').select('name').eq('status', 'active')
  const aritcles = await supabase.from('article').select('title')

  if (!newsletters || newsletters.error || !newsletters.data) return
  if (!aritcles || aritcles.error || !aritcles.data) return

  const newsletterSitemaps = newsletters.data?.map((newsletter) => ({
    url: `https://newsubs.site/${newsletter.name}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  }))

  const articleSitemaps = aritcles.data?.map((article) => ({
    url: `https://newsubs.site/article/${article.title}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  }))

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
    ...newsletterSitemaps,
    ...articleSitemaps,
  ]
}
