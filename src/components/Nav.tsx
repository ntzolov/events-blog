'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const path = usePathname();
  return (
    <nav className='w-full flex flex-col items-center my-5 gap-3 sm:flex-row justify-center'>
      <Link
        className={`${
          path === '/' ? 'bg-lime-600' : 'bg-lime-700'
        } inline-flex items-center justify-center rounded-md px-4 py-2 text-md font-medium text-gray-200 shadow transition-colors hover:bg-lime-600 focus:outline-none active:scale-90`}
        href={'/'}>
        Home
        {/* <NavButton>Home</NavButton> */}
      </Link>
      <Link
        className={`${
          path === '/create' ? 'bg-lime-600' : 'bg-lime-700'
        } inline-flex items-center justify-center rounded-md px-4 py-2 text-md font-medium text-gray-200 shadow transition-colors hover:bg-lime-600 focus:outline-none active:scale-90`}
        href={'/create'}>
        Create event
      </Link>
      <Link
        className={`${
          path === '/my-events' ? 'bg-lime-600' : 'bg-lime-700'
        } inline-flex items-center justify-center rounded-md px-4 py-2 text-md font-medium text-gray-200 shadow transition-colors hover:bg-lime-600 focus:outline-none active:scale-90`}
        href={'/my-events'}>
        My events
      </Link>
      <Link
        className={`${
          path === '/all-events' ? 'bg-lime-600' : 'bg-lime-700'
        } inline-flex items-center justify-center rounded-md  px-4 py-2 text-md font-medium text-gray-200 shadow transition-colors hover:bg-lime-600 focus:outline-none active:scale-90`}
        href={'/all-events'}>
        All events
      </Link>
    </nav>
  );
}
