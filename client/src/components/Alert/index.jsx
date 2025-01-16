import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

const Alert = ({ type = 'info', children: message }) => {
  const icons = {
    success: <CheckCircleIcon className='h-5 w-5 text-green-400' />,
    error: <XCircleIcon className='h-5 w-5 text-red-400' />,
    info: <InformationCircleIcon className='h-5 w-5 text-indigo-400' />,
    warning: <ExclamationCircleIcon className='h-5 w-5 text-yellow-400' />,
  };

  return (
    <div
      className={`rounded-lg border my-5 bg-white px-3 py-3 text-sm ${
        type === 'error'
          ? 'border-red-600 bg-red-50 text-red-700'
          : type === 'warning'
          ? 'border-yellow-600 bg-yellow-50 text-yellow-700'
          : type === 'info'
          ? 'border-blue-600 bg-blue-50 text-blue-700'
          : type === 'success'
          ? 'border-green-600 bg-green-50 text-green-700'
          : 'border-gray-300'
      }`}>
      <div className='flex'>
        <div>{icons[type]}</div>
        <p className='ml-3'>{message}</p>
      </div>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  children: PropTypes.node,
};

export default Alert;
