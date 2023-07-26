import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ModalProps,
} from '@chakra-ui/react'
import React from 'react'

type Props = {
  title?: string
}

const SimpleModal = ({ onClose, isOpen, title, children }: ModalProps & Props) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered size={'md'}>
      <ModalOverlay />
      <ModalContent className='max-[450px]:max-w-[345px]'>
        <ModalHeader>
          <div className='flex flex-col'>
            <h1>{title}</h1>
            <div className='text-xs text-gray-600'>문의를 남겨주시면, 2~3일 내에 답변 드리겠습니다 :)</div>
          </div>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SimpleModal
