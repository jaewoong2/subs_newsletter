export const Register = () => {
  return (
    <section>
      <div className='hero bg-base-200 p-10'>
        <div className='hero-content w-full max-w-md flex-col items-start'>
          <h1 className='text-xl font-bold'>문의를 주시면 뉴스레터를 등록 해드리겠습니다</h1>
          <div className='card w-full max-w-md flex-shrink-0 bg-base-100 shadow-2xl'>
            <div className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>보내시는 분 (이메일)</span>
                </label>
                <input type='text' placeholder='email' className='input-bordered input' />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>문의내용</span>
                </label>
                <textarea placeholder='문의 내용' rows={6} className='textarea-bordered textarea' />
              </div>
              <div className='form-control mt-6'>
                <button className='btn-primary btn'>보내기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
