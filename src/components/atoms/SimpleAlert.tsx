import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  AlertDialogProps,
} from '@chakra-ui/react'
import React from 'react'

const SimpleAlert = ({
  children,
  isOpen,
  onClose,
  title,
}: Omit<AlertDialogProps, 'leastDestructiveRef'> & { title?: string }) => {
  const cancelRef = React.useRef(null)

  return (
    <AlertDialog
      motionPreset='slideInBottom'
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader>{title}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{children}</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose} aria-label='아니요'>
            아니요
          </Button>
          <Button colorScheme='green' ml={3} aria-label='예'>
            예
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default SimpleAlert
