import type { EventsDataTypes } from '../../types/EventDataTypes';
import { EventItem } from '../events/EventItem';

export default async function EventList({
  events,
  name,
}: {
  events: EventsDataTypes[];
  name?: string;
}) {
  return (
    <div className='flex flex-col m-2 mt-20 items-center'>
      <p className='text-3xl mb-5 font-medium text-gray-300'>{name}</p>
      <div className='flex flex-wrap justify-center gap-5'>
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
