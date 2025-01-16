import { EyeIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

const CardImage = ({ image, name }) => {
  return (
    <div className='relative inline-block w-full'>
      <img
        src={image}
        alt={name}
        className='block w-full rounded-lg object-cover object-center sm:h-96'
      />
      <div className='absolute flex items-center justify-center inset-0 opacity-0 hover:opacity-100 transition-all duration-300'>
        <div className='gap-4 flex'>
          <div className='rounded-full bg-white p-3 transition-all hover:bg-slate-200'>
            <EyeIcon className='h-6 w-6 text-slate-700' strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

CardImage.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default CardImage;
