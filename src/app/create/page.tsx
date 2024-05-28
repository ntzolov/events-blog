'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import type { FormDataTypes } from '../../lib/types/FormData';
import { insertEvent } from '../../util/actions/insertEvent';
import { useEffect } from 'react';

export default function Component() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormDataTypes>();

  const onSubmit: SubmitHandler<FormDataTypes> = (formData) => {
    console.log(formData);
    insertEvent(formData);
  };

  console.log(process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT);

  return (
    <div className='mt-32'>
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
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-300' htmlFor='date'>
            Date
          </label>
          <input
            className='block w-full rounded-md bg-gray-700 shadow-sm p-1 focus:outline-none focus:ring focus:ring-gray-500'
            {...register('date', { required: true, maxLength: 80 })}
            type='date'
          />
        </div>
        <div>
          <button
            className='inline-flex items-center justify-center rounded-md bg-emerald-700 px-4 py-2 text-sm font-medium text-slate-200 shadow transition-colors hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
            type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
