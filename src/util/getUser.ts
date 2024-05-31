'use server'

import { headers } from "next/headers";

export async function getUser() {
  const headersList = headers();
  const user_id = headersList.get('x-forwarded-for') || '121.0.0.1';

  return user_id;
}