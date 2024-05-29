import type { EventsDataTypes } from '../types/EventDataTypes';
import { EventItem } from './EventItem';

export default async function EventList({ events }: { events: EventsDataTypes[] }) {
  return (
    <div className='flex flex-col mt-20 items-center'>
      <p className='text-3xl mb-5 font-medium text-gray-300'>All events list</p>
      <div className='flex justify-center gap-5'>
        {events.map((e: EventsDataTypes) => {
          return (
            <div key={e.id}>
              <EventItem event={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
