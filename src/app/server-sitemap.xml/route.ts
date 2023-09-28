import { getServerSideSitemap } from 'next-sitemap'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

  const newsletters = await supabase.from('newsletter').select('name')
  const aritcles = await supabase.from('article').select('title')

  if (!newsletters || newsletters.error || !newsletters.data) return
  if (!aritcles || aritcles.error || !aritcles.data) return

  const newsletterSitemaps = newsletters.data?.map((newsletter) => ({
    loc: `https://newsubs.site/${newsletter.name}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly' as const,
    priority: 1,
  }))

  const articleSitemaps = aritcles.data?.map((article) => ({
    loc: `https://newsubs.site/article/${article.title}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly' as const,
    priority: 1,
  }))

  return getServerSideSitemap([...newsletterSitemaps, ...articleSitemaps])
}
