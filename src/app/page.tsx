import { getUser } from '../util/getUser';

export default async function Home() {
  const user = await getUser();

  return <main className='text-slate-300 text-2xl mt-10 flex justify-center'>Welcome: {user}</main>;
}
