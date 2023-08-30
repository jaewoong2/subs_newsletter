interface Item {
  related_item_id: number
  counts: number
  depths: number
}

const k = 1

const calculateWeight = (item: Item) => {
  return item.counts + k / item.depths
}

export const getRelatedItems = (data: Item[], sameCateoryIds: number[]) => {
  const sortedData = data.sort((a, b) => {
    let left = calculateWeight(a)
    let right = calculateWeight(b)

    if (sameCateoryIds.includes(a.related_item_id)) {
      left = left * 2
    }

    if (sameCateoryIds.includes(b.related_item_id)) {
      right = right * 2
    }

    return right - left
  })

  return sortedData
}
