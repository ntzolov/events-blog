import { getAllVisitors, getEventById } from '@/lib/actions/events';
import BackButtonLocal from './BackButtonLocal';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { SVGProps } from 'react';
import JoinEventButton from '@/components/JoinEventButton';
import { getUser } from '@/util/getUser';
import { EventsDataTypes } from '@/types/EventDataTypes';
import BackButton from '@/components/BackButton';

export default async function EventPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const event: EventsDataTypes = (await getEventById(id)).data.events[0];
  const user_id = await getUser();
  const allVisitors = (await getAllVisitors(event.id as string)).data.visitors;
  const isAlreadyJoined = allVisitors.some((v: any) => v.user_id === user_id);

  return (
    <div className='flex flex-col items-center text-gray-300 text-lg'>
      <Card className='w-full max-w-xl mb-5 relative bg-slate-700 rounded-lg shadow-lg hover:bg-slate-600 transition'>
        <BackButtonLocal />
        <Image
          alt={event.title}
          className='rounded-t-lg object-cover w-full h-96'
          width={500}
          height={300}
          src={event.image_url || '/placeholder.svg'}
          style={{
            aspectRatio: '500/300',
            objectFit: 'cover',
          }}
        />
        <CardContent className='p-6 space-y-4'>
          <div className='flex items-center justify-between'>
            <span className='text-gray-500 dark:text-gray-400 text-sm'>{event.date}</span>
            <div className='flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm'>
              <UserIcon className='w-4 h-4' />
              <span>{`${allVisitors.length} visitors`}</span>
            </div>
          </div>
          <CardTitle className='text-2xl font-bold'>{event.title}</CardTitle>
          <CardDescription className='text-gray-500 dark:text-gray-400 text-md'>
            {event.description}
          </CardDescription>
          <div className='flex justify-between !mt-10'>
            <BackButton />
            <JoinEventButton event={event} isAlreadyJoined={isAlreadyJoined} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function UserIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </svg>
  );
}
