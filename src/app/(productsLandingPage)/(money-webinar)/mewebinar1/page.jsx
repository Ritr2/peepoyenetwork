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
import Form from '@/components/webinar/Form';

const dmSans = DM_Sans({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: `The Money Engine Webinar`,
  description: `Learn How I Attracted 1MN+ People and Built a Powerful Money Engine for Continuous Passive Income and Business Leads from Home!`,
  images: [
    {
      url: 'https://i.ibb.co/qxRMd4t/thumbnail2.webp',
      width: 600,
      height: 500,
      alt: `The Money Engine Webinar`,
    },
  ],
  url: 'https://peepoye.com/money-webinarYTY2B',
  type: 'website',
  keywords: [],
  openGraph: {
    title: `The Money Engine Webinar`,
    description: `Learn How I Attracted 1MN+ People and Built a Powerful Money Engine for Continuous Passive Income and Business Leads from Home!`,
    images: [
      {
        url: 'https://i.ibb.co/qxRMd4t/thumbnail2.webp',
        width: 600,
        height: 500,
        alt: `The Money Engine Webinar`,
      }
    ],
    url: 'https://peepoye.com/money-webinarYTY2B',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `The Money Engine Webinar`,
    description: `Learn How I Attracted 1MN+ People and Built a Powerful Money Engine for Continuous Passive Income and Business Leads from Home!`,
    images: [
      {
        url: 'https://i.ibb.co/qxRMd4t/thumbnail2.webp',
        width: 600,
        height: 500,
        alt: `The Money Engine Webinar`,
      }
    ],
    creator: '@peepoye',
  },
}

export default function page() {

  return (
    <main className={`flex flex-col items-center justify-center w-full ${dmSans.className}`}>
      <section className='flex flex-col items-center justify-center w-full webinar-background'>
        <div className='flex flex-col items-center justify-center bg-black/70 gap-5 md:gap-10 w-full flex-1 px-5 py-10 md:px-24'>
          <div className='flex flex-col items-center justify-center w-full gap-2 md:gap-4 flex-1'>
            <h1 className='text-xl md:text-6xl font-bold text-center text-white md:leading-[55px]'>Learn How To Build <span className='red-text'>Multiple Revenue Streams</span> Using Youtube Within 3 Days</h1>
            <p className='text-lg md:text-2xl font-normal text-center text-white'>
              Akassh Ashok Gupta reveals his exclusive method to unlock the secrets of YouTube, generating multiple revenue streams for substantial growth in ad revenue, product sales, and business leads. With two decades of business consulting for 200+ companies, training over 1000 individuals, and 5+ years as a content creator and influencer collaborating with esteemed personalities, his approach guarantees transformative results.
            </p>
          </div>
          <div className='flex flex-col md:flex-row justify-center gap-5 md:gap-10 w-full'>
            <div className='flex flex-col w-full md:w-6/12'>
              <div className='relative flex-1 w-full h-auto overflow-hidden order-2 md:order-1 min-h-[160px] md:min-h-[345px]' style={{ position: 'relative' }}>
                <iframe src="https://www.loom.com/embed/9e0c4dda20dc444cb17eee918c23649e?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&showEmbedControls=false&show_date=false&loop=1"
                  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', borderRadius: "10px" }} autoPlay
                ></iframe>
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 p-1 md:p-3 gap-1 md:gap-2 rounded-lg bg-neutral-100 border-[4px] border-red-600 border-dashed">
              <span className='text-xl md:text-2xl font-bold text-center'>Date <span className='red-text'>|</span> 12th December 2023<span className='red-text'>|</span> 8PM to 9:30PM IST</span>
              <Form text="Signup for LIVE Webinar" />
              <span className="text-base md:text-xl text-center text-neutral-500 font-bold"><span className='font-black red-text text-4xl'>+</span><br />Get my Youtube Video Script Template totally Free with this Webinar</span>
              <span className="text-base md:text-2xl text-center red-text font-bold rounded-xl mt-5">No Recordings. No Replays. Only LIVE Access</span>
            </div>
          </div>
        </div>
      </section>
      <FunnelFooter />
    </main>
  )
}
