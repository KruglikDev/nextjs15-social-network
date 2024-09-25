'use client';
import Link from 'next/link';
import { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={'md:hidden'}>
      <div
        className={'flex flex-col gap-[4.5px] cursor-pointer'}
        onKeyDown={() => setIsOpen(prev => !prev)}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-500 ${isOpen ? 'rotate-45' : ''}`}
        />
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ease-in-out duration-500 ${isOpen ? 'opacity-0' : ''}`} />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-500 ${isOpen ? '-rotate-45' : ''}`}
        />
      </div>

      {isOpen && (
        <div
          className={
            'w-full h-[calc(100vh-96px)] absolute left-0 top-24 bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10'
          }
        >
          <Link className={'hover:text-blue-500'} href={'/'}>
            Home
          </Link>
          <Link className={'hover:text-blue-500'} href={'/'}>
            Friends
          </Link>
          <Link className={'hover:text-blue-500'} href={'/'}>
            Groups
          </Link>
          <Link className={'hover:text-blue-500'} href={'/'}>
            Stories
          </Link>
          <Link className={'hover:text-blue-500'} href={'/'}>
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
