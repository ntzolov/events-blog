import Link from 'next/link';
import NavButton from './NavButton';

export default function Nav() {
  return (
    <nav className='w-full flex justify-center my-5 gap-3 '>
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
