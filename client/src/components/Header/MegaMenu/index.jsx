import { useEffect, useRef, useState } from 'react';

import AllCategoriesMenuDisplay from './AllCategoriesMenuDisplay';
import MegaMenuItem from './MegaMenuItem';
import MenMenuDisplay from './MenMenuDisplay';

const menuComponents = {
  'All Categories': AllCategoriesMenuDisplay,
  Men: MenMenuDisplay,
};

const MegaMenu = () => {
  const [currentMenu, setCurrentMenu] = useState(null);
  const menuRef = useRef(null);

  const CurrentMenuComponent = currentMenu ? menuComponents[currentMenu] : null;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setCurrentMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className='relative mx-auto hidden max-w-7xl gap-10 bg-white px-3 py-2.5 sm:px-6 lg:flex lg:px-8'>
        <MegaMenuItem
          action={setCurrentMenu}
          currentItem={currentMenu}
          label='All Categories'
        />
        <MegaMenuItem
          action={setCurrentMenu}
          currentItem={currentMenu}
          label='Men'
        />
        <MegaMenuItem
          action={setCurrentMenu}
          currentItem={currentMenu}
          label='Women'
        />
        <MegaMenuItem
          action={setCurrentMenu}
          currentItem={currentMenu}
          label='Kids'
        />
        <MegaMenuItem
          action={setCurrentMenu}
          currentItem={currentMenu}
          label='Collections'
        />
        <MegaMenuItem
          action={setCurrentMenu}
          currentItem={currentMenu}
          label='Watches'
        />
        <MegaMenuItem
          action={setCurrentMenu}
          currentItem={currentMenu}
          label='Shoes'
        />
        <MegaMenuItem
          action={setCurrentMenu}
          currentItem={currentMenu}
          label='Accessories'
        />
        <MegaMenuItem
          action={setCurrentMenu}
          currentItem={currentMenu}
          label='Sale'
        />
      </nav>

      <div ref={menuRef}>
        {CurrentMenuComponent && <CurrentMenuComponent />}
      </div>
    </>
  );
};

export default MegaMenu;
