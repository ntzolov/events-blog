import Link from 'next/link';
import NavButton from './NavButton';

export default function Nav() {
  return (
    <nav className='w-full flex flex-col items-center my-5 gap-3 sm:flex-row justify-center'>
      <Link href={'/'}>
        <NavButton>Home</NavButton>
      </Link>
      <Link href={'/create'}>
        <NavButton>Create event</NavButton>
      </Link>
      <Link href={'/my-events'}>
        <NavButton>My events</NavButton>
      </Link>
      <Link href={'/all-events'}>
        <NavButton>All events</NavButton>
      </Link>
    </nav>
  );
}
