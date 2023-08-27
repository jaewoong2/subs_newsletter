import { getNewsLettersById } from '@/app/supabase-server'
import { NewsLetter } from '@/types'

type UserAction = {
  views: number[]
}

const calculatorScore = async (userActions: UserAction, letter: NewsLetter) => {
  let score = 0
  const response = await getNewsLettersById(userActions.views)

  if (!response) {
    return 0
  }

  const views = response.data

  views.forEach((item) => {
    if (item.id === letter.id) {
      score += 1
    }
  })

  const currentDate = new Date()
  const itemDate = new Date(letter.created_at ?? '')
  const daysDiff = (currentDate.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24)
  if (daysDiff <= 7) {
    score += 2
  }

  const userViewedCategories = views.flatMap((item) => item.category)
  const letterCategory = letter.category ?? []
  for (const category of letterCategory) {
    if (userViewedCategories.includes(category)) {
      score += 1 // 카테고리가 일치할 때마다 점수 추가 (값은 조절 가능)
    }
  }

  return score
}

const recommend = () => {}

export default recommend
