import React from 'react'

const CheckSome = () => {
  return (
    <div className='w-full flex-col'>
      <div className='card w-full bg-base-300'>
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <div>
                <span className='label-text'>보내시는 분 (이메일)</span>
                <span className='text-red-500'>*</span>
              </div>
            </label>
            <input type='text' placeholder='이메일 주소를 남겨주세요' required className='input-bordered input' />
          </div>
          <div className='form-control'>
            <label className='label'>
              <div>
                <span className='label-text'>문의내용</span>
                <span className='text-red-500'>*</span>
              </div>
            </label>
            <textarea placeholder='문의 내용을 작성 해주세요' rows={6} className='textarea-bordered textarea' />
          </div>
        </div>
      </div>
      <div className='form-control mt-6'>
        <button className='btn-primary btn'>보내기</button>
      </div>
    </div>
  )
}

export default CheckSome
