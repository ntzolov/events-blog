'use client';

import { addVisitor, deleteVisitor } from '@/lib/actions/events';
import { EventsDataTypes } from '@/types/EventDataTypes';
import { useState } from 'react';

export default function JoinEventButton({
  event,
  isAlreadyJoined,
}: {
  event: EventsDataTypes;
  isAlreadyJoined: boolean;
}) {
  const [isJoined, setIsJoined] = useState<boolean>(isAlreadyJoined);

  const onClickHandler = async () => {
    if (isJoined) {
      deleteVisitor(event.id as string);
      setIsJoined(false);
    } else {
      addVisitor(event.id as string);
      setIsJoined(true);
    }
  };

  return (
    <button
      className={`${isJoined ? 'bg-red-500' : 'bg-green-500'} text-white px-4 py-2 rounded-md`}
      onClick={onClickHandler}>
      {isJoined ? 'Leave' : 'Join'}
    </button>
  );
}
