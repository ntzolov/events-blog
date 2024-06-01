import EventList from '@/components/events/EventList';
import { getEventByUserId } from '@/lib/actions/events';

export default async function AllEventsPage() {
  const events = (await getEventByUserId()).data.events;

  return <EventList events={events} name='My events list' />;
}
