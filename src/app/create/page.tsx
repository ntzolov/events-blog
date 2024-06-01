'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import type { EventsDataTypes } from '../../types/EventDataTypes';
import { ErrorMessage } from '@hookform/error-message';
import { insertEvent } from '../../lib/actions/events';
import { useState } from 'react';
import { redirect } from 'next/navigation';

export default function Component() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<EventsDataTypes>();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<EventsDataTypes> = async (formData) => {
    setLoading(true);
    const data = await insertEvent(formData);
    reset();
    setLoading(false);
    console.log(data);
    // redirect(`/event/${data.data.insert_events_one.id}`);
  };

  return (
    <div className='mt-32 m-2'>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto space-y-4 text-slate-300'>
        <p className='text-2xl flex justify-center'>Create event</p>
        <div>
          <label className='block text-sm font-medium text-gray-300' htmlFor='title'>
            Title
          </label>
          <input
            className='block w-full rounded-md bg-gray-700 shadow-sm p-1 focus:outline-none focus:ring focus:ring-gray-500'
            {...register('title', { required: true, maxLength: 80 })}
            placeholder='Enter a title'
            type='text'
          />
          <p className='text-red-500 text-sm'>
            <ErrorMessage
              message='Title must be less than 80 characters'
              errors={errors}
              name='title'
            />
          </p>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-300' htmlFor='description'>
            Description
          </label>
          <textarea
            className='block w-full rounded-md bg-gray-700 shadow-sm p-1 focus:outline-none focus:ring focus:ring-gray-500'
            {...register('description', { required: true })}
            placeholder='Enter a description'
            rows={5}
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-300' htmlFor='image_url'>
            Image URL
          </label>
          <input
            className='block w-full rounded-md bg-gray-700 shadow-sm p-1 focus:outline-none focus:ring focus:ring-gray-500'
            {...register('image_url', { required: true, pattern: /^https?:/i })}
            placeholder='Enter an image URL'
            type='text'
          />
          <p className='text-red-500 text-sm'>
            <ErrorMessage
              message='Image URL must start with http:// or https://'
              errors={errors}
              name='image_url'
            />
          </p>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-300' htmlFor='date'>
            Date
          </label>
          <input
            className='block w-full rounded-md bg-gray-700 shadow-sm p-1 focus:outline-none focus:ring focus:ring-gray-500'
            {...register('date', { required: true })}
            type='date'
          />
        </div>
        <div>
          <button
            className='inline-flex items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-slate-200 shadow transition-colors hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
            type='submit'
            disabled={loading}>
            {loading ? 'Loading...' : 'Create'}
          </button>
        </div>
        <p>{isSubmitSuccessful && 'Successfully created!'}</p>
      </form>
    </div>
  );
}
