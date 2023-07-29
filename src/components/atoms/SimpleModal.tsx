import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalProps,
} from '@chakra-ui/react'
import React from 'react'

type Props = {
  title?: string
  subTitle?: string
}

const SimpleModal = ({ onClose, isOpen, title, subTitle, children }: ModalProps & Props) => {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size={'md'}>
        <ModalOverlay />
        <ModalContent className='max-h-[600px] overflow-y-scroll max-[450px]:max-h-[450px] max-[450px]:max-w-[345px]'>
          <ModalHeader>
            <div className='flex flex-col'>
              <h1>{title}</h1>
              <div className='font-tossFace text-xs text-gray-600'>{subTitle}</div>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SimpleModal
