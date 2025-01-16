import LinkItem from './LinkItem';

const MenMenuDisplay = () => {
  return (
    <section className='border-t'>
      <div className='relative z-50 mx-auto hidden max-w-7xl gap-10 bg-white px-3 py-8 sm:px-6 lg:flex lg:px-8'>
        <div className='grid w-full grid-cols-12 gap-8'>
          {/* Column 1 (2/12) */}
          <div className='col-span-2'>
            <h6 className='mb-6 text-sm font-semibold text-slate-900'>
              All Categories
            </h6>
            <ul className='flex flex-col gap-y-3'>
              <LinkItem url='#' label="Men's Fashion" />
              <LinkItem url='#' label='New Arrivals' />
              <LinkItem url='#' label='Clothing' />
              <LinkItem url='#' label='Footwear' />
              <LinkItem url='#' label='Watches' />
              <LinkItem url='#' label='Jewellery' />
              <LinkItem url='#' label='Backpacks' />
              <LinkItem url='#' label='Luggage' />
            </ul>
          </div>

          {/* Column 2 (2/12) */}
          <div className='col-span-2'>
            <h6 className='mb-6 text-sm font-semibold text-slate-900'>
              Top Brands
            </h6>
            <ul className='flex flex-col gap-y-3'>
              <LinkItem url='#' label='Nike' />
              <LinkItem url='#' label='Tommy Hilfiger' />
              <LinkItem url='#' label='Converse' />
              <LinkItem url='#' label='Puma' />
              <LinkItem url='#' label='Addidas' />
              <LinkItem url='#' label='Under Armour' />
              <LinkItem url='#' label='Jack & Jones' />
              <LinkItem url='#' label='Armani' />
            </ul>
          </div>

          {/* Column 3 (5/12) */}
          <div className='col-span-5'>
            <div>
              <a href='#' className='relative block overflow-hidden rounded-xl'>
                <span className='absolute left-1/2 -translate-x-1/2 bottom-10 z-10 block bg-white px-3 py-2 text-center text-sm font-semibold uppercase tracking-wide'>
                  Luxury Watches
                </span>
                <img
                  src='/images/men-watches-category.jpg'
                  alt="Men's Watches"
                  className='h-64 w-full rounded-xl object-cover object-top transition-all duration-500 hover:scale-105 transform'
                />
              </a>
            </div>
          </div>

          {/* Column 4 (3/12) */}
          <div className='col-span-3'>
            <div>
              <a href='#' className='relative block overflow-hidden rounded-xl'>
                <span className='absolute left-1/2 -translate-x-1/2 bottom-10 z-10 block bg-white px-3 py-2 text-center text-sm font-semibold uppercase tracking-wide'>
                  Men&apos;s Suits
                </span>
                <img
                  src='/images/mens-suit-category.jpg'
                  alt="Men's Watches"
                  className='h-64 w-full rounded-xl object-cover object-top transition-all duration-500 hover:scale-105 transform'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenMenuDisplay;
