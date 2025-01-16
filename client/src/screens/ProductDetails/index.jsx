import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Alert from '@components/Alert';
import Loader from '@components/Loader';
import Rating from '@components/ProductCard/Rating';
import { addToCart } from '@slices/cartSlice';
import { useGetProductDetailsQuery } from '@slices/productApiSlice';
import QuantitySelector from './QuantitySelector';

const ProductDetailsScreen = () => {
  const { id: productId } = useParams();

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetProductDetailsQuery(productId);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };

  return (
    <div className='bg-white pb-16 pt-6 sm:pb-24'>
      <div className='sm:px-6 mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8'>
        <Link
          to='/'
          className='mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-all hover:text-slate-700'>
          <ArrowUturnLeftIcon className='h-3.5 w-3.5' />
          Back
        </Link>

        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Alert type='error'>{error.data?.message || error?.error}</Alert>
        ) : (
          <div className='lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8'>
            {/* Image */}
            <div className='mt-8 lg:col-span-7 lg:mt-0'>
              <img
                src={product.image}
                alt={product.name}
                className='rounded-lg'
              />
            </div>

            {/* Product Details */}
            <div className='lg:col-span-5'>
              <h6 className='rounded-full inline-block border border-slate-300 px-3 py-0.5 font-medium text-sm text-slate-500'>
                {product.category}
              </h6>
              <h6 className='mt-8 text-base font-semibold text-indigo-700'>
                {product.brand}
              </h6>
              <div className='mt-1 flex justify-between'>
                <h1 className='text-2xl font-medium text-slate-900'>
                  {product.name}
                </h1>
                <p className='text-2xl font-medium text-slate-900'>
                  ₹{product.price}
                </p>
              </div>

              {/* Rating */}
              <div className='my-1 flex items-center gap-0'>
                <Rating value={product.rating} />
                <span className='ml-8 mt-0.5 text-sm font-semibold text-slate-700'>
                  {product.numReviews} reviews
                </span>
              </div>

              {/* Description */}
              <div className='mt-10 text-slate-950'>{product.description}</div>

              {/* Quantity Selector */}
              <QuantitySelector
                countInStock={product.countInStock}
                quantity={qty}
                setQuantity={setQty}
              />

              {/* Add to cart button */}
              <button
                onClick={handleAddToCart}
                disabled={product.countInStock === 0}
                className='mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-60 px-8 py-3 text-base font-medium transition-all hover:bg-indigo-700 text-white bg-indigo-600'>
                Add to cart
              </button>

              {/* Content */}
              <div className='mt-10 border-t border-slate-200 pt-8'>
                <h2 className='text-sm font-medium text-slate-500'>
                  Description
                </h2>

                <div className='text-slate-600 prose mt-4'>
                  <ReactMarkdown>{product.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsScreen;
