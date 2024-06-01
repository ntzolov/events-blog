'use client';

import { EventsDataTypes } from '@/types/EventDataTypes';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  const getEventHandler = () => {
    router.back();
  };

  return (
    <button className='' onClick={getEventHandler}>
      Back
    </button>
  );
}
