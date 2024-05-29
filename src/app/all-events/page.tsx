import EventList from '@/components/EventList';
import { getAllEvents } from '@/lib/actions/events';

export default async function AllEventsPage() {
  const events = (await getAllEvents()).data.events;

  return <EventList events={events} />;
}
