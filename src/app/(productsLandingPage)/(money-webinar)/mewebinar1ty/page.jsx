import React from 'react'
import { DM_Sans } from 'next/font/google';
import { FiCheckCircle } from 'react-icons/fi';
import parse from 'html-react-parser'
import Experience from '@/components/funnels/pages/youtubeneur/Experience';
import { BsCheck } from 'react-icons/bs';
import SocialMediaDetails from '@/components/webinar/SocialMediaDetails';
import Testimonials from '@/components/funnels/pages/youtubeneur/Testimonials';
import Link from 'next/link';
import FunnelFooter from '@/components/funnels/FunnelFooter';

const dmSans = DM_Sans({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: `Thank You for Registering!`,
  description: `Learn How I Attracted 1MN+ People and Built a Powerful Money Engine for Continuous Passive Income and Business Leads from Home!`,
  images: [
    {
      url: 'https://i.ibb.co/qxRMd4t/thumbnail2.webpp',
      width: 600,
      height: 500,
      alt: `Thank You for Registering!`,
    },
  ],
  url: 'https://peepoye.com/yty2b-register',
  type: 'website',
  keywords: [],
  openGraph: {
    title: `Thank You for Registering!`,
    description: `Learn How I Attracted 1MN+ People and Built a Powerful Money Engine for Continuous Passive Income and Business Leads from Home!`,
    images: [
      {
        url: 'https://i.ibb.co/qxRMd4t/thumbnail2.webpp',
        width: 600,
        height: 500,
        alt: `Thank You for Registering!`,
      }
    ],
    url: 'https://peepoye.com/yty2b-register',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Thank You for Registering!`,
    description: `Learn How I Attracted 1MN+ People and Built a Powerful Money Engine for Continuous Passive Income and Business Leads from Home!`,
    images: [
      {
        url: 'https://i.ibb.co/qxRMd4t/thumbnail2.webpp',
        width: 600,
        height: 500,
        alt: `Thank You for Registering!`,
      }
    ],
    creator: '@peepoye',
  },
}

export default function page() {
  
  return (
    <main className={`flex flex-col items-center justify-center w-full ${dmSans.className}`}>
      <section className='flex flex-col items-center justify-center w-full webinar-background'>
        <div className='flex flex-col items-center justify-center bg-black/70 gap-2 md:gap-8 w-full flex-1 px-5 py-10 md:py-20 md:px-24'>
        <div className='flex flex-col items-center justify-center w-full md:w-6/12'>
            <img src='https://i.ibb.co/qxRMd4t/thumbnail2.webpp' alt='What You Will Learn In The Webinar' className='w-full rounded-lg' draggable={false} />
          </div>
          <h1 className='text-xl md:text-5xl font-bold text-center text-white'>Confirm your Spot🕘</h1>
          <p className='text-lg md:text-2xl font-normal text-center text-white md:w-7/12'>
          Click below to get added to our invitee list so that you  are served with all important communication regarding the event from here on.
          </p>
          <Link href='https://akassh.co/mewebinar6_2511' className='red-bg text-center text-white font-bold text-xl md:text-2xl px-10 py-3 rounded-3xl hover:bg-red-500 active:bg-red-700 hover:shadow-xl active:shadow-md hover:scale-105 active:scale-100 transition-all duration-200'>Join Now</Link>
        </div>
      </section>

      <FunnelFooter />
    </main>
  )
}
