import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';

const inter = Lato({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Events-blog',
  description: 'Generated by Next.js',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='bg-gray-800 h-full w-full flex justify-center'>
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
