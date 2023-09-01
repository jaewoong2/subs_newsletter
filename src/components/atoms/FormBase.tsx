import React, { PropsWithChildren } from 'react'

type Props = {
  label?: string
  helper?: string
  required?: boolean
}

const FormBase = ({ label, required, helper, children }: PropsWithChildren<Props>) => {
  return (
    <div className='form-control w-full'>
      {label && (
        <label className='label' aria-label={label}>
          <div>
            <span className='label-text'>{label}</span>
            {required ? <span className='text-red-500'>*</span> : null}
          </div>
        </label>
      )}
      {children}
      <label className='hidden peer-invalid/form:block' aria-label={label}>
        <span className='text-xs text-error'>{helper ?? `${label}가 비었어요 🥹`}</span>
      </label>
    </div>
  )
}

export default FormBase
