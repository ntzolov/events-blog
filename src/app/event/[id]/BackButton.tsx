'use client';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  const getEventHandler = () => {
    router.back();
  };

  return (
    <button
      className='inline-flex items-center justify-center rounded-md bg-blue-700 px-2 py-1 text-sm font-medium text-gray-200 shadow transition-colors hover:bg-blue-500 focus:outline-none active:scale-90'
      onClick={getEventHandler}>
      Back
    </button>
  );
}
