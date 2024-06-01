import EventList from '@/components/events/EventList';
import { getAllEvents } from '@/lib/actions/events';

export default async function AllEventsPage() {
  const events = (await getAllEvents()).data.events;

  return <EventList events={events} />;
}
