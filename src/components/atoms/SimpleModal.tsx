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
      <Modal onClose={onClose} isOpen={isOpen} isCentered size={'md'} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent className='max-h-[600px] overflow-y-scroll max-[450px]:max-h-[90%] max-[450px]:max-w-[345px]'>
          <ModalHeader className='sticky top-0 border-b bg-white bg-opacity-50 backdrop-blur-sm'>
            <div className='flex flex-col'>
              <h1>{title}</h1>
              <div className='font-tossFace text-xs text-gray-600'>{subTitle}</div>
            </div>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SimpleModal
