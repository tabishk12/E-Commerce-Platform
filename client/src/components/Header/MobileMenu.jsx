import {
  ShoppingBagIcon,
  TagIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

import MenuItemMobile from './MenuItemMobile';
import MobileSearchBar from './MobileSearchBar';

const MobileMenu = ({ setIsOpen }) => {
  return (
    <nav className='relative z-10 w-full overflow-y-auto bg-white pb-2 sm:max-w-sm'>
      <MobileSearchBar />
      <div className='h-2'></div>
      <div>
        <MenuItemMobile
          url='/categories'
          label='Categories'
          icon={TagIcon}
          closeMenu={setIsOpen}
        />
        <MenuItemMobile
          url='/cart'
          label='Cart'
          icon={ShoppingBagIcon}
          closeMenu={setIsOpen}
        />
        <MenuItemMobile
          url='/login'
          label='Login'
          icon={UserIcon}
          closeMenu={setIsOpen}
        />
      </div>
    </nav>
  );
};

MobileMenu.propTypes = {
  setIsOpen: PropTypes.func,
};

export default MobileMenu;
