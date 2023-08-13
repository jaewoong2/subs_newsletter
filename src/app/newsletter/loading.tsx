import DataList from '@/components/blocks/DataList'
import PlaceholderItem from './components/PlaceholderItem'

const PLACEHOLDER_ITEMS = new Array(6).fill(null).map((_, index) => <PlaceholderItem key={`placeholder-${index}`} />)

const Loading = () => {
  return <DataList variant='block' title='' items={PLACEHOLDER_ITEMS} />
}

export default Loading
