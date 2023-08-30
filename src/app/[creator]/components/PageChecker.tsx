'use client'

import useLocalStorage from '@/hooks/useLocalstorage'
import usePostNewsletterSequence from '@/hooks/usePostNewsletterSequence'
import usePostViews from '@/hooks/usePostViews'
import { useCallback, useEffect } from 'react'

type Props = {
  id: number | string
}

const PageChecker = ({ id: currentId }: Props) => {
  const { value: previousId, setValue } = useLocalStorage<string>('currentNewsletter')
  const { trigger: postView } = usePostViews()
  const { trigger, isMutating } = usePostNewsletterSequence()

  const postNewsLetterSequence = useCallback(async () => {
    if (`${previousId}` && `${previousId}` !== `${currentId}`) {
      if (!isMutating) {
        await trigger([`${previousId}`, `${currentId}`])
      }
    }

    setValue(`${currentId}`)
  }, [currentId, isMutating, previousId, setValue, trigger])

  useEffect(() => {
    postView({ id: `${currentId}`, type: 'newsletter' })
  }, [currentId, postView])

  useEffect(() => {
    postNewsLetterSequence()
  }, [postNewsLetterSequence])

  return <></>
}

export default PageChecker
