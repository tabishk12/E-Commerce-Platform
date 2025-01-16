import CategoryImageBox from './CategoryImageBox';

const AllCategoriesMenuDisplay = () => {
  return (
    <section className='border-t'>
      <div className='relative z-50 mx-auto hidden max-w-7xl gap-10 bg-white px-3 py-8 sm:px-6 lg:flex lg:px-8'>
        <div className='grid w-full grid-cols-12 gap-8'>
          {/* Column 1 (3/12) */}
          <div className='col-span-3'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/men-category.jpg'
              label='Men'
            />
          </div>
          {/* Column 2 (3/12) */}
          <div className='col-span-3'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/women-category.jpg'
              label='Women'
            />
          </div>
          {/* Column 3 (3/12) */}
          <div className='col-span-3'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/kids-category.jpg'
              label='Kids'
            />
          </div>
          {/* Column 4 (3/12) */}
          <div className='col-span-3'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/collections-category.jpg'
              label='Collections'
            />
          </div>
          {/* Column 5 (3/12) */}
          <div className='col-span-3'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/watches-category.jpg'
              label='Watches'
            />
          </div>
          {/* Column 6 (3/12) */}
          <div className='col-span-3'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/shoes-category.jpg'
              label='Shoes'
            />
          </div>
          {/* Column 7 (3/12) */}
          <div className='col-span-3'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/accessories-category.jpg'
              label='Accessories'
            />
          </div>
          {/* Column 8 (3/12) */}
          <div className='col-span-3'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/sale-category.jpg'
              label='Sale'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCategoriesMenuDisplay;
