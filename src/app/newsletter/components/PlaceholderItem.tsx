const PlaceholderItem = () => {
  return (
    <figure className='h-[400px] w-full'>
      <li className='group card mx-auto h-full w-full scale-95 border bg-base-100 transition-transform hover:scale-100 hover:border-slate-400 dark:border-darkBg-800 dark:bg-darkBg-100 '>
        <figure className='h-full max-h-[50%] min-h-[50%] w-full'>
          <div className='h-full w-full animate-pulse bg-slate-100'></div>
        </figure>
        <div className='flex h-full flex-col gap-3 text-clip px-6 py-2'>
          <h4 className='card-title w-36 animate-pulse rounded-xl bg-slate-100 text-slate-100'>placeholder</h4>
          <span className='line-clamp-3 animate-pulse overflow-hidden rounded-xl bg-slate-100 text-slate-100 max-md:text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero perspiciatis aliquid eaque magnam sunt
            ipsam debitis numquam. Voluptatum maxime minima, cumque necessitatibus debitis eaque illum, ipsa sint,
            labore sunt aspernatur!
          </span>
          <div className='flex w-fit justify-end gap-3'>
            <span className='badge badge-outline animate-pulse bg-slate-100 text-slate-100 max-md:text-sm'>Lorem</span>
            <span className='badge badge-outline animate-pulse bg-slate-100 text-slate-100 max-md:text-sm'>Lorem</span>
          </div>
        </div>
      </li>
    </figure>
  )
}

export default PlaceholderItem
