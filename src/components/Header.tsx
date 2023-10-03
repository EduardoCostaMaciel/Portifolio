import { MobileMenu } from './MobileMenu';
import { Nav } from './Nav';
import { SocialNetworks } from './SocialNetworks';

export function Header() {
  return (
    <header className='fixed top-0 z-50 flex h-12 w-full justify-between bg-gray-800 px-4 transition-all duration-700 ease-out sm:px-20'>
      <Nav position='items-end' />
      <SocialNetworks />

      <MobileMenu />
      <hr className='absolute left-1/2 bottom-0 -mb-1 w-11/12 -translate-x-1/2 border-t-4 border-gray-600' />
    </header>
  );
}
