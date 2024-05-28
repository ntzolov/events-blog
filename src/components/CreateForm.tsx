export default function CreateForm() {
  return (
    <form className='max-w-md mx-auto space-y-4'>
      <div>
        <label
          className='block text-sm font-medium text-slate-500 dark:text-gray-300'
          htmlFor='title'>
          Title
        </label>
        <input
          className='block w-full rounded-md border-slate-500 shadow-sm focus:border-slate-500 focus:ring-slate-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:border-gray-600 dark:focus:ring-gray-600 sm:text-sm'
          id='title'
          name='title'
          placeholder='Enter a title'
          type='text'
        />
      </div>
      <div>
        <label
          className='block text-sm font-medium text-slate-500 dark:text-gray-300'
          htmlFor='description'>
          Description
        </label>
        <textarea
          className='block w-full rounded-md border-slate-500 shadow-sm focus:border-slate-500 focus:ring-slate-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:border-gray-600 dark:focus:ring-gray-600 sm:text-sm'
          id='description'
          name='description'
          placeholder='Enter a description'
          rows={3}
        />
      </div>
      <div>
        <label
          className='block text-sm font-medium text-slate-500 dark:text-gray-300'
          htmlFor='image_url'>
          Image URL
        </label>
        <input
          className='block w-full rounded-md border-slate-500 shadow-sm focus:border-slate-500 focus:ring-slate-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:border-gray-600 dark:focus:ring-gray-600 sm:text-sm'
          id='image_url'
          name='image_url'
          placeholder='Enter an image URL'
          type='text'
        />
      </div>
      <div>
        <label
          className='block text-sm font-medium text-slate-500 dark:text-gray-300'
          htmlFor='date'>
          Date
        </label>
        <input
          className='block w-full rounded-md border-slate-500 shadow-sm focus:border-slate-500 focus:ring-slate-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:border-gray-600 dark:focus:ring-gray-600 sm:text-sm'
          id='date'
          name='date'
          type='date'
        />
      </div>
      <div>
        <button
          className='inline-flex items-center justify-center rounded-md bg-slate-500 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus:ring-gray-300'
          type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
}
