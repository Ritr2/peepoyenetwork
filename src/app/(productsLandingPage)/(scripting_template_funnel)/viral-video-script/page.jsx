import React from 'react'
import { DM_Sans } from 'next/font/google';
import Experience from '@/components/Experience';
import { FaCheck } from 'react-icons/fa';
import Button from '@/components/funnels/Button';
import FunnelFooter from '@/components/funnels/FunnelFooter';
import { notFound } from 'next/navigation';
import url from '@/utils/url';
import parse from 'html-react-parser'
import { BsHourglassTop } from "react-icons/bs";
import DynamicForm from '@/components/waitlist/DynamicForm';
import Form from '@/components/scripting-tempate/Form';
import CountDown from '@/components/scripting-tempate/CountDown';
import Link from 'next/link';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: `Viral Video Script`,
  description: `Are you struggling to write a script for your YouTube video? Get a copy of our Viral Video Script and create a viral video in no time.`,
  images: [
    {
      url: 'https://peepoyenetwork.com/wp-content/uploads/2023/12/scripting-template.png',
      width: 600,
      height: 500,
      alt: `Viral Video Script`,
    },
  ],
  url: 'https://peepoye.com/viral-video-script',
  type: 'website',
  keywords: ['youtube channel audit', 'Viral Video Script', 'Viral Video Script india', 'Viral Video Script inr', 'Viral Video Script price', 'Viral Video Script cost', 'Viral Video Script price inr', 'Viral Video Script cost inr', 'Viral Video Script price india', 'Viral Video Script cost india', 'Viral Video Script price inr india', 'Viral Video Script cost inr india', 'Viral Video Script price inr in india', 'Viral Video Script cost inr in india', 'Viral Video Script price india inr', 'Viral Video Script cost india inr', 'Viral Video Script price inr india inr', 'Viral Video Script cost inr india inr', 'Viral Video Script price inr in india inr', 'Viral Video Script cost inr in india inr', 'Viral Video Script price inr in india inr', 'Viral Video Script cost inr in india inr'],
  openGraph: {
    title: `Viral Video Script`,
    description: `Are you struggling to write a script for your YouTube video? Get a copy of our Viral Video Script and create a viral video in no time.`,
    images: [
      {
        url: 'https://peepoyenetwork.com/wp-content/uploads/2023/12/scripting-template.png',
        width: 600,
        height: 500,
        alt: `Viral Video Script`,
      }
    ],
    url: 'https://peepoye.com/viral-video-script',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Viral Video Script`,
    description: `Are you struggling to write a script for your YouTube video? Get a copy of our Viral Video Script and create a viral video in no time.`,
    images: [
      {
        url: 'https://peepoyenetwork.com/wp-content/uploads/2023/12/scripting-template.png',
        width: 600,
        height: 500,
        alt: `Viral Video Script`,
      }
    ],
    creator: '@peepoye',
  },
}

const roadmap = [
  {
    description: `Copy and Paste this script to create your own decode video`,
  },
  {
    description: `Improve your Video retention`,
  },
  {
    description: `Improve engagement`,
  },
  {
    description: `Build a connect with your community and established loyalty and trust`,
  },
  {
    description: `Create super value for your auidence to get instant subscription`,
  }
]

export default function page() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center ${dmSans.className} overflow-x-hidden`}>
      <div className="flex flex-col w-full justify-center py-3 items-center bg-neutral-700">
        <span className="flex flex-row items-center text-base md:text-xl font-normal md:font-bold text-center text-white uppercase gap-2"><BsHourglassTop /> WAIT...YOU HAVE UNLOCKED OUR VIRAL VIDEO SCRIPT WHICH IS ONLY AVAILABLE WITH THIS MAGICAL SCRIPTING TEMPLATE</span>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className=" flex flex-col w-10/12 md:w-8/12 justify-center mt-8 h-10 mb-10 bg-stone-300 self-center rounded-full">
          <div className={`relative bg-blue- h-full w-16 rounded-full flex flex-col items-center bg-red-500`} style={{ width: `50%` }}>
            <div className="absolute top-0 left-0 flex flex-col rounded-full justify-center items-center h-full animate-percentage bg-red-700/90" />
            <span className="flex z-10 flex-col justify-center items-center h-full text-white text-sm md:text-2xl font-medium">50% Completed</span>
          </div>
        </div>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-center md:gap-20 px-2 md:px-40">
        <div className="flex flex-col justify-center w-full md:w-6/12 gap-2 md:gap-7 order-3 md:order-1">
          <h1 className="text-xl md:text-4xl font-bold text-center md:text-left text-neutral-700">Get Ready To Discover The Key To My Viral Videos On YouTube</h1>
          <p className="text-base md:text-2xl font-normal text-center md:text-left text-neutral-700">
            10x your Subscription and views by grabbing my original viral script which got me 1M+ views and got us 5k+ subscribers
          </p>
          <div className="flex flex-col w-full">
            <div className="flex flex-col items-center w-full p-3 rounded-lg bg-neutral-100 border-2 border-neutral-200 border-dashed">
              <span className="flex-1 text-lg md:text-2xl font-bold red-text text-center">Grab my Original viral video script only for<br/> INR 499/- </span>
              <span className="flex-1 text-base md:text-xl font-bold text-neutral-800 text-center">Hurry! Offer ends in</span>
              <CountDown />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {/* <Form text="Download Your Template Now" /> */}
            <Button successUrl={`${url}/thankyou?product=scripting-template-2`} amount='viral-video-script' text='Download Your Script Now' padding='py-4' bgcolor={{ normal: 'red-bg', hover: 'bg-red-700', active: 'bg-red-800' }} txcolor='text-white' />
            <Link className='self-center text-xl text-neutral-500 hover:underline' href={`/thankyou?product=scripting-template`} >
              No, I don't want this offer
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 order-2">
          <img src="https://peepoyenetwork.com/wp-content/uploads/2023/12/scripting-template.png" alt="Guide" className="w-full shadow-xl drop-shadow-xl rounded-xl" draggable={false} />
        </div>
      </section>
      <section className="flex w-full mb-10">
        <Experience />
      </section>
      {/* Expected Outcome and Benefits */}
      <section className="flex flex-col md:flex-row justify-center md:gap-20 pt-10 px-2 md:px-40">
        <div className="flex flex-col flex-1">
          <img src="https://peepoyenetwork.com/wp-content/uploads/2023/12/akassh.webp" alt="Akassh ashok Gupta" className="w-full h-full object-contain object-bottom animate-text bg-gradient-to-r from-red-100 via-red-50 to-red-200 -scale-x-100 border-[4px] border-red-700" draggable={false} />
        </div>
        <div className="flex flex-col justify-center gap-2 md:gap-5 pb-8 w-full md:w-6/12">
          <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left text-neutral-700">
            What you can expect from this script?
          </h2>
          <div className="flex flex-col w-full gap-2">
            {
              roadmap.map((item, index) => (
                <div key={index} className="flex flex-row gap-2">
                  <FaCheck className="red-text w-10 mt-1 text-2xl" />
                  <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700">{parse(item.description)}</span>
                </div>
              ))
            }
          </div>
          <div className="flex flex-col w-full gap-5">
            <div className="flex flex-col w-full">
            <div className="flex flex-col items-center w-full p-3 rounded-lg bg-neutral-100 border-2 border-neutral-200 border-dashed">
              <span className="flex-1 text-lg md:text-2xl font-bold red-text text-center">Grab my Original viral video script only for<br/>INR 499/- </span>
              <span className="flex-1 text-base md:text-xl font-bold text-neutral-800 text-center">Hurry! Offer ends in</span>
              <CountDown />
            </div>
            </div>
            <div className="flex flex-col gap-2">
            <Button successUrl={`${url}/thankyou?product=scripting-template-2`} amount='viral-video-script' text='Download Your Script Now' padding='py-4' bgcolor={{ normal: 'red-bg', hover: 'bg-red-700', active: 'bg-red-800' }} txcolor='text-white' />
            <Link className='self-center text-xl text-neutral-500 hover:underline' href={`/thankyou?product=scripting-template`} >
              No, I don't want this offer
            </Link>
            </div>
          </div>
        </div>
      </section>
      <FunnelFooter />
    </main >
  )
}
