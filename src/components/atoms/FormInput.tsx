import React from 'react'
import FormBase from './FormBase'
import { twMerge } from 'tailwind-merge'

type Props = {
  label?: string
  helper?: string
  isClicked?: boolean
} & JSX.IntrinsicElements['input']

const FormInput = ({ label, helper, isClicked, className, ...props }: Props) => {
  return (
    <FormBase label={label} required={props.required} helper={helper}>
      <input
        className={twMerge(
          'input-bordered input font-tossFace',
          isClicked && 'peer/form invalid:input-error',
          className
        )}
        {...props}
      />
    </FormBase>
  )
}

export default FormInput
