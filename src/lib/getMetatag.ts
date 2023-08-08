import ogs from 'open-graph-scraper'
import { OpenGraphScraperOptions } from 'open-graph-scraper/dist/lib/types'
import puppeteer from 'puppeteer'

async function getRenderedHTML(url: string) {
  const browser = await puppeteer.launch({
    headless: 'new',
  })

  try {
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle2' }) // 네트워크 요청이 완료될 때까지 대기합니다.
    await page.$$eval('head > style', (styles) => {
      styles.forEach((style) => style.remove())
    })
    const headContent = await page.$eval('head', (head) => head.innerHTML)
    await browser.close()
    return headContent
  } catch (err) {
    return null
  }
}

export default async function getMetaTags(url: string) {
  try {
    const htmlContent = await getRenderedHTML(url)

    // console.log(htmlContent)
    if (!htmlContent) {
      throw new Error(' no html content')
    }
    const ogsOptions: OpenGraphScraperOptions = {
      html: htmlContent,
      onlyGetOpenGraphInfo: true,
    }

    const data = await ogs(ogsOptions)

    return data
  } catch (err) {
    return null
  }
}
