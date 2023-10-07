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
import { twMerge } from 'tailwind-merge'

type Props = {
  title?: string
  subTitle?: string
  className?: string
}

const SimpleModal = ({ onClose, isOpen, title, subTitle, children, size, className, ...props }: ModalProps & Props) => {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size={size ?? 'md'} closeOnOverlayClick={false} {...props}>
        <ModalOverlay />
        <ModalContent
          className={twMerge(
            'max-h-[600px] overflow-y-scroll max-[450px]:max-h-[90%] max-[450px]:max-w-[345px]',
            className
          )}
        >
          {(title || subTitle) && (
            <ModalHeader className='sticky top-0 border-b bg-white bg-opacity-50 backdrop-blur-sm'>
              <div className='flex flex-col'>
                <span>{title}</span>
                <div className='font-tossFace text-xs text-gray-600'>{subTitle}</div>
              </div>
              <ModalCloseButton />
            </ModalHeader>
          )}
          <ModalBody className='overflow-y-scroll'>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SimpleModal
