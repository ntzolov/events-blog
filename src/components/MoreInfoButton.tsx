'use client';

import { EventsDataTypes } from '@/types/EventDataTypes';
import { useRouter } from 'next/navigation';

export default function MoreInfoButton({ event }: { event: EventsDataTypes }) {
  const router = useRouter();
  const getEventHandler = () => {
    router.push(`/event/${event.id}`);
  };

  return (
    <button className='' onClick={getEventHandler}>
      More
    </button>
  );
}
