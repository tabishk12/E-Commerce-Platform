import { useState } from 'react';

import DesktopMenu from './DesktopMenu';
import Logo from './Logo';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import MobileMenuIcon from './MobileMenuIcon';
import SearchBar from './SearchBar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed z-50 w-full border-b border-slate-300 bg-white'>
      <div className='relative z-50 mx-auto max-w-7xl bg-white px-3 sm:px-6 lg:px-8'>
        <div className='relative flex h-14 w-full items-center justify-between sm:h-16'>
          <div className='flex flex-1 items-center justify-between gap-10'>
            <Logo />
            <SearchBar />
            <DesktopMenu />
            <MobileMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>

      <div>{isOpen && <MobileMenu />}</div>

      <MegaMenu />
    </header>
  );
};

export default Header;
