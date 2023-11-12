import React from 'react'
import { DM_Sans } from 'next/font/google';
import Experience from '@/components/Experience';
import { FaCheck } from 'react-icons/fa';
import Form from '@/components/waitlist/Form';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: `Join the Mastermind and exponentially grow and scale your Youtube Channel and Business`,
  description: `Remove that biggest bottleneck of thinking by shifting your focus on to doing. Our green membership and the Jump Level is for all the action takers who dont want to delay their journey of being able to create multiple revenue streams by following their passion.`,
  images: [
    {
      url: 'https://i.ibb.co/k3pyhYz/black-membership.webp',
      width: 600,
      height: 500,
      alt: `Black Membership`,
    },
  ],
  url: 'https://peepoye.com/black-membership',
  type: 'website',
  keywords: [`black`, `black membership`, `peepoye black membership`, `peepoye black`, `peepoye black membership`],
  openGraph: {
    title: `Join the Mastermind and exponentially grow and scale your Youtube Channel and Business`,
    description: `Remove that biggest bottleneck of thinking by shifting your focus on to doing. Our green membership and the Jump Level is for all the action takers who dont want to delay their journey of being able to create multiple revenue streams by following their passion.`,
    images: [
      {
        url: 'https://i.ibb.co/k3pyhYz/black-membership.webp',
        width: 600,
        height: 500,
        alt: `Black Membership`,
      },
    ],
    url: 'https://peepoye.com/black-membership',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Join the Mastermind and exponentially grow and scale your Youtube Channel and Business`,
    description: `Remove that biggest bottleneck of thinking by shifting your focus on to doing. Our green membership and the Jump Level is for all the action takers who dont want to delay their journey of being able to create multiple revenue streams by following their passion.`,
    images: [
      {
        url: 'https://i.ibb.co/k3pyhYz/black-membership.webp',
        width: 600,
        height: 500,
        alt: `Black Membership`,
      },
    ],
    creator: '@peepoye',
  },
}

export default function page() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center ${dmSans.className} overflow-x-hidden pt-[68px]`}>
      <div className="flex flex-col w-full justify-center py-3 items-center bg-neutral-400">
        <span className="text-xl md:text-3xl font-normal md:font-bold text-center text-white">Why be alone when you can work with a bigger brain?</span>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-center md:gap-20 py-5 px-2 md:px-40">
        <div className="flex flex-col justify-center w-full md:w-6/12 gap-2 md:gap-7 order-3 md:order-1">
          <h1 className="text-xl md:text-5xl font-bold text-center md:text-left text-neutral-700">Join the Mastermind and exponentially grow and scale your Youtube Channel and Business</h1>
          <p className="text-base md:text-lg font-normal text-center md:text-left text-neutral-700">Remove that biggest bottleneck of thinking by shifting your focus on to doing. Our green membership and the Jump Level is for all the action takers who dont want to delay their journey of being able to create multiple revenue streams by following their passion. <br />As an extension to White Membership and Foundational Accelerator Program, the Jump Level will focus on hand holding you by holding events and workshops as well as providing you a 35 Day-Implementation Challenge where you follow step by step actions and setup all the systems so that you are set to create content and market your digital products.</p>
          <div className="flex flex-col w-full md:w-10/12">
            <div className="flex flex-col items-center w-full p-3 rounded-lg bg-neutral-100 border-2 border-neutral-200 border-dashed">
              <span className="text-base md:text-2xl font-normal md:font-bold text-center md:text-left text-neutral-700">This program is only sold periodically!</span>
            </div>
          </div>
          <div className="flex flex-col md:w-10/12">
            <Form formtype="BLACK" goal="Mastermind" keyList='black' meta='meta_black' buttonColor={{ normal: 'neutral-800', hover: 'neutral-700', active: 'neutral-900' }} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 order-2">
          <img src="https://i.ibb.co/k3pyhYz/black-membership.webp" alt="Guide" className="w-full" draggable={false} />
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
              <FaCheck className="text-neutral-700 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700">A <strong>Private Skool</strong> only for Mastermind</span>
            </div>
            <div className="flex flex-row gap-2">
              <FaCheck className="text-neutral-700 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700"><strong>Weekly Hot-Seat</strong> through Audio-Video Conference amongst all the Mastermind Members</span>
            </div>
            <div className="flex flex-row gap-2">
              <FaCheck className="text-neutral-700 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700">Shift your focus on <strong>growing exponentially</strong></span>
            </div>
            <div className="flex flex-row gap-2">
              <FaCheck className="text-neutral-700 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700">Join our <strong>Partner Program</strong></span>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5">
            <div className="flex flex-col w-full md:w-10/12">
              <div className="flex flex-col items-center w-full p-3 rounded-lg bg-neutral-100 border-2 border-neutral-200 border-dashed">
                <span className="text-base md:text-2xl font-normal md:font-bold text-center md:text-left text-neutral-700">This program is only sold periodically!</span>
              </div>
            </div>
            <div className="flex flex-col md:w-10/12">
              <Form formtype="BLACK" goal="Mastermind" keyList='black' meta='meta_black' buttonColor={{ normal: 'neutral-800', hover: 'neutral-700', active: 'neutral-900' }} />
            </div>
          </div>
        </div>
      </section>
    </main >
  )
}
