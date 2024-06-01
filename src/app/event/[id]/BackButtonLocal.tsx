'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { SVGProps } from 'react';

export default function BackButtonLocal() {
  const router = useRouter();
  const getEventHandler = () => {
    router.back();
  };

  return (
    <Button
      onClick={getEventHandler}
      className='rounded-full absolute top-4 left-4'
      size='icon'
      variant='destructive'>
      <ArrowLeftIcon className='w-5 h-5' />
      <span className='sr-only'>Back</span>
    </Button>
  );
}

function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='m12 19-7-7 7-7' />
      <path d='M19 12H5' />
    </svg>
  );
}
