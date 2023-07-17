import Image from 'next/image'
import Link from 'next/link'

export default async function Page() {
  return (
    <div className='w-full'>
      <nav className='flex w-full justify-between border p-5'>
        <h1 className='whitespace-nowrap font-bold'>뉴섭</h1>
        <ul className='flex w-full items-center justify-center gap-5'>
          <Link className='hover:text-slate-400' href={'/newsletter'}>
            뉴스레터
          </Link>
          <Link className='hover:text-slate-400' href={'/newsletter1'}>
            아티클
          </Link>
          <Link className='hover:text-slate-400' href={'/newsletter2'}>
            문의
          </Link>
        </ul>
        <div className='flex items-center justify-center gap-10'></div>
      </nav>
      <section className='bg-gray-50 dark:bg-gray-900'>
        <div className='mx-auto grid max-w-screen-xl gap-10 px-4 py-6 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
          <div className='flex h-full max-h-[400px] w-full items-center justify-center lg:hidden'>
            <img
              className='h-full w-auto'
              src='https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
              alt='mockup'
            />
          </div>
          <div className='mr-auto place-self-center lg:col-span-7'>
            <h1 className='mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight dark:text-white md:text-4xl xl:text-5xl'>
              뉴스레터는, 뉴섭에서
            </h1>
            <p className='mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl'>
              최신 뉴스레터의 동향을 찾아보고, 내가 원하는 뉴스레터를 골라 구독하자
            </p>
            <a
              href='#'
              className='btn-primary btn mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white hover:btn-primary dark:focus:btn-primary focus:ring-4 focus:ring-blue-300'
            >
              둘러보기
              <svg
                className='-mr-1 ml-2 h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
          </div>
          <div className='hidden lg:col-span-5 lg:mt-0 lg:flex'>
            <img
              src='https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
              alt='mockup'
            />
          </div>
        </div>
      </section>
      <main className='flex w-full justify-center'>
        <section className='flex w-full max-w-5xl flex-col justify-center gap-5 py-10'>
          <h1 className='mx-auto text-xl font-bold'>최신 뉴스레터</h1>
          <ul className='grid w-full grid-cols-3 justify-center gap-5 px-10 max-lg:grid-cols-2 max-md:grid-cols-1'>
            {new Array(10).fill(0).map((_, index) => (
              <Card key={`card-${index}`} />
            ))}
          </ul>
        </section>
      </main>
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
    </div>
  )
}

const Card = () => {
  return (
    <li className='w-62 card mx-auto border bg-base-100 max-md:w-80'>
      <figure>
        <img src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          Shoes!
          <div className='badge badge-secondary'>NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <div className='badge badge-outline'>Fashion</div>
          <div className='badge badge-outline'>Products</div>
        </div>
      </div>
    </li>
  )
}
