import React from 'react'
import FormBase from './FormBase'
import { twMerge } from 'tailwind-merge'
import useIsMobile from '@/hooks/useIsMobile'

type Props = {
  label?: string
  helper?: string
  isClicked?: boolean
} & JSX.IntrinsicElements['input']

const FormInput = ({ label, helper, isClicked, className, ...props }: Props) => {
  const { isIos } = useIsMobile()

  return (
    <FormBase label={label} required={props.required} helper={helper}>
      <input
        className={twMerge(
          'input-bordered input placeholder:font-tossFace',
          isClicked && 'peer/form invalid:input-error',
          isIos() && 'text-[16px]',
          className
        )}
        {...props}
      />
    </FormBase>
  )
}

export default FormInput
