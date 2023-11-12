import React from 'react'
import { DM_Sans } from 'next/font/google';
import Experience from '@/components/Experience';
import { FaCheck } from 'react-icons/fa';
import Button from '@/components/funnels/Button';
import FunnelFooter from '@/components/funnels/FunnelFooter';
import { notFound } from 'next/navigation';
import url from '@/utils/url';
import Form from '@/components/waitlist/Form';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: `Join our Imlementation Challenge & Setup your systems step by step`,
  description: `As an extension to White Membership and Foundational Accelerator Program, the Jump Level will focus on hand holding you by holding events and workshops`,
  images: [
    {
      url: 'https://i.ibb.co/BfkfNXF/green-membership.webp',
      width: 600,
      height: 500,
      alt: `Green Membership`,
    },
  ],
  url: 'https://peepoye.com/green-membership',
  type: 'website',
  keywords: [ `green`, `green membership`, `peepoye green membership`, `peepoye green`, `peepoye green membership`],
  openGraph: {
    title: `Join our Imlementation Challenge & Setup your systems step by step`,
  description: `As an extension to White Membership and Foundational Accelerator Program, the Jump Level will focus on hand holding you by holding events and workshops`,
    images: [
      {
        url: 'https://i.ibb.co/BfkfNXF/green-membership.webp',
        width: 600,
        height: 500,
        alt: `Green Membership`,
      },
    ],
    url: 'https://peepoye.com/green-membership',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Join our Imlementation Challenge & Setup your systems step by step`,
  description: `As an extension to White Membership and Foundational Accelerator Program, the Jump Level will focus on hand holding you by holding events and workshops`,
    images: [
      {
        url: 'https://i.ibb.co/BfkfNXF/green-membership.webp',
        width: 600,
        height: 500,
        alt: `Green Membership`,
      },
    ],
    creator: '@peepoye',
  },
}

export default function page() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center ${dmSans.className} overflow-x-hidden pt-[68px]`}>
      <div className="flex flex-col w-full justify-center py-3 items-center bg-neutral-400">
        <span className="text-xl md:text-3xl font-normal md:font-bold text-center text-white">Why spend time when you can simply cut and paste?</span>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-center md:gap-20 py-5 px-2 md:px-40">
        <div className="flex flex-col justify-center w-full md:w-6/12 gap-2 md:gap-7 order-3 md:order-1">
          <h1 className="text-xl md:text-5xl font-bold text-center md:text-left text-neutral-700">Join our Imlementation Challenge & Setup your systems step by step</h1>
          <p className="text-base md:text-lg font-normal text-center md:text-left text-neutral-700"><br /> As an extension to White Membership and Foundational Accelerator Program, the Jump Level will focus on hand holding you by holding events and workshops as well as providing you a 35 Day-Implementation Challenge where you follow step by step actions and setup all the systems so that you are set to create content and market your digital products.</p>
          <div className="flex flex-col w-full md:w-10/12">
            <div className="flex flex-col items-center w-full p-3 rounded-lg bg-neutral-100 border-2 border-neutral-200 border-dashed">
              <span className="text-base md:text-2xl font-normal md:font-bold text-center md:text-left text-emerald-600">This program is only sold periodically!</span>
            </div>
          </div>
          <div className="flex flex-col md:w-10/12">
          <Form formtype="GREEN" goal ="Jump" keyList='green' meta='meta_green' buttonColor={{ normal: 'emerald-700', hover: 'emerald-600', active: 'emerald-800' }} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 order-2">
          <img src="https://i.ibb.co/BfkfNXF/green-membership.webp" alt="Guide" className="w-full" draggable={false} />
        </div>
      </section>
      <section className="flex w-full">
        <Experience />
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center md:gap-10 pt-10 px-2 md:px-40">
        <div className="flex flex-col items-center self-end w-full md:w-8/12">
          <img src="https://i.ibb.co/GdRJ5sw/akasshashokgupta.webp" alt="Akassh ashok Gupta" className="w-full -scale-x-100" draggable={false} />
        </div>
        <div className="flex flex-col justify-center gap-2 md:gap-5 pb-8">
          <h2 className="text-2xl md:text-5xl font-bold text-center md:text-left text-neutral-700">Why It Is Must For You?</h2>
          <div className="flex flex-col w-full">
            <div className="flex flex-row gap-2">
              <FaCheck className="text-emerald-600 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700">Just do it <strong>approach</strong></span>
            </div>
            <div className="flex flex-row gap-2">
              <FaCheck className="text-emerald-600 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700">Join the <strong>challenge</strong> with many others</span>
            </div>
            <div className="flex flex-row gap-2">
              <FaCheck className="text-emerald-600 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700">Shift your focus from <strong>concept and strategy</strong> to imlementation</span>
            </div>
            <div className="flex flex-row gap-2">
              <FaCheck className="text-emerald-600 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700"><strong>Live workshops</strong> will detail out concepts for deeper learning</span>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5">
          <div className="flex flex-col w-full md:w-10/12">
            <div className="flex flex-col items-center w-full p-3 rounded-lg bg-neutral-100 border-2 border-neutral-200 border-dashed">
              <span className="text-base md:text-2xl font-normal md:font-bold text-center md:text-left text-emerald-600">This program is only sold periodically!</span>
            </div>
          </div>
          <div className="flex flex-col md:w-10/12">
          <Form formtype="GREEN" goal ="Jump" keyList='green' meta='meta_green' buttonColor={{ normal: 'emerald-700', hover: 'emerald-600', active: 'emerald-800' }} />
          </div>
          </div>
        </div>
      </section>
    </main >
  )
}
