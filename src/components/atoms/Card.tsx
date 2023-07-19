export const Card = () => {
  return (
    <li className='card mx-auto w-full border bg-base-100 md:w-80'>
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
