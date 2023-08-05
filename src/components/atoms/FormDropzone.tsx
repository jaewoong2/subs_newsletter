import React, { PropsWithChildren } from 'react'
import Dropzone from './Dropzone'
import FormBase from './FormBase'

type Props = {
  label?: string
  helper?: string
  isClicked?: boolean
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const FormDropzone = ({ label, helper, onChange, children, placeholder, isClicked }: PropsWithChildren<Props>) => {
  return (
    <FormBase label={label} helper={helper}>
      <div className='flex h-32 w-full items-center justify-center'>
        <Dropzone onChange={onChange} className={`${isClicked ? 'peer/form invalid:input-error' : ''}`}>
          <p className='text-xs text-gray-500'>{placeholder}</p>
        </Dropzone>
      </div>
      {children}
    </FormBase>
  )
}

export default FormDropzone
