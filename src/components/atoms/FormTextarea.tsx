import React from 'react'
import FormBase from './FormBase'
import { twMerge } from 'tailwind-merge'

type Props = {
  label?: string
  helper?: string
  isClicked?: boolean
} & JSX.IntrinsicElements['textarea']

const FormTextarea = ({ label, helper, isClicked, ...props }: Props) => {
  return (
    <FormBase label={label} required={props.required} helper={helper}>
      <textarea
        rows={6}
        className={twMerge('textarea-bordered textarea font-tossFace', isClicked && 'peer/form invalid:input-error')}
        {...props}
      />
    </FormBase>
  )
}

export default FormTextarea
