import { ReactNode } from 'react';

export default function NavButton({ children }: { children: ReactNode }) {
  return (
    <button className='inline-flex items-center justify-center rounded-md bg-lime-700 px-4 py-2 text-md font-medium text-gray-200 shadow transition-colors hover:bg-lime-600 focus:outline-none active:scale-90'>
      {children}
    </button>
  );
}
