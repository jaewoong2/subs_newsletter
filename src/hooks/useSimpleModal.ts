import { UseModalProps, useModal } from '@chakra-ui/react'

type UseSimpleModal = UseModalProps

const useSimpleModal = ({ ...props }: UseSimpleModal) => {
  return useModal({
    ...props,
  })
}

export default useSimpleModal
