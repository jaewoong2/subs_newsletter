import React from 'react'
import FormBase from './FormBase'
import { twMerge } from 'tailwind-merge'
import useIsMobile from '@/hooks/useIsMobile'

type Props = {
  label?: string
  helper?: string
  isClicked?: boolean
} & JSX.IntrinsicElements['textarea']

const FormTextarea = ({ label, helper, isClicked, className, ...props }: Props) => {
  const { isIos } = useIsMobile()

  return (
    <FormBase label={label} required={props.required} helper={helper}>
      <textarea
        rows={6}
        className={twMerge(
          'textarea-bordered textarea placeholder:font-tossFace',
          isClicked && 'peer/form invalid:input-error',
          isIos() && 'text-[16px]',
          className
        )}
        {...props}
      />
    </FormBase>
  )
}

export default FormTextarea
