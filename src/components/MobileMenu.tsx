import { useState } from 'react';

import { colors } from '../utils/colors';
import { IconClose, IconMenu } from './icons';
import { Nav } from './Nav';
import { SocialNetworks } from './SocialNetworks';

export function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        className='flex items-center rounded-md text-gray-700 hover:opacity-50 sm:hidden'
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className='sr-only'>Open main menu</span>
        <IconMenu
          size='32px'
          fill={colors.secondary[3]}
        />
      </button>

      <div
        className={`px- ${
          mobileMenuOpen ? null : 'hidden'
        } fixed inset-y-0 left-0 z-50 w-10/12 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
      >
        <div className='w-ful flex justify-end border-b border-b-gray-600 bg-gray-900 p-2 shadow-md'>
          <button
            type='button'
            className='text-gray-700 hover:opacity-50 focus:rounded-full focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white'
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className='sr-only'>Close menu</span>

            <IconClose
              size='32px'
              fill={colors.secondary[3]}
            />
          </button>
        </div>

        <div className='p-4'>
          <Nav display='flex flex-col' />
        </div>

        <hr className='mx-4' />

        <div className='px-6 py-4'>
          <SocialNetworks display='flex' />
        </div>
      </div>
    </>
  );
}
