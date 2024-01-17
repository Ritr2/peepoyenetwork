import React from 'react'
import { DM_Sans } from 'next/font/google';
import Experience from '@/components/Experience';
import { FaCheck } from 'react-icons/fa';
import Button from '@/components/funnels/Button';
import FunnelFooter from '@/components/funnels/FunnelFooter';
import { notFound } from 'next/navigation';
import url from '@/utils/url';
import parse from 'html-react-parser'
import DynamicForm from '@/components/waitlist/DynamicForm';
import Form from '@/components/scripting-tempate/Form';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: `Free YouTube Scripting Template`,
  description: `Get a free copy of scripting template to create viral videos on YouTube.`,
  images: [
    {
      url: 'https://peepoyenetwork.com/wp-content/uploads/2023/12/scripting-template.png',
      width: 600,
      height: 500,
      alt: `Free YouTube Scripting Template`,
    },
  ],
  url: 'https://peepoye.com/scripting-template',
  type: 'website',
  keywords: [ 'youtube scripting template', 'youtube scripting template free', 'youtube scripting template free download', 'youtube scripting template free pdf'],
  openGraph: {
    title: `Free YouTube Scripting Template`,
    description: `Get a free copy of scripting template to create viral videos on YouTube.`,
    images: [
      {
        url: 'https://peepoyenetwork.com/wp-content/uploads/2023/12/scripting-template.png',
        width: 600,
        height: 500,
        alt: `Free YouTube Scripting Template`,
      }
    ],
    url: 'https://peepoye.com/scripting-template',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Free YouTube Scripting Template`,
    description: `Get a free copy of scripting template to create viral videos on YouTube.`,
    images: [
      {
      url: 'https://peepoyenetwork.com/wp-content/uploads/2023/12/scripting-template.png',
      width: 600,
      height: 500,
      alt: `Free YouTube Scripting Template`,
    }
  ],
    creator: '@peepoye',
  },
}

const roadmap = [
  {
    title: 'In-Depth Analysis',
    description: `We'll review your channel's strengths and weaknesses together over a Zoom call.`,
  },
  {
    title: 'Content Strategy Assessment',
    description: `Identify missing elements and strategies to boost audience engagement.`,
  },
  {
    title: 'SEO Optimization Tips',
    description: `Uncover secrets to improve video discoverability and ranking.`,
  },
  {
    title: `Audience Engagement Strategies`,
    description: `Learn techniques to increase viewer interaction and loyalty.`,
  },
  {
    title: `Monetization Guidance`,
    description: `Maximize revenue potential from your channel.`,
  },
  {
    title: `Analytics Demystified`,
    description: `Understand your channel's performance with clarity`,
  },
  {
    title: `Time Management Hacks`,
    description: `Tips to efficiently balance content creation with life.`,
  },
  {
    title: `Competitive Edge`,
    description: `Stand out and dominate your niche.`,
  },
  {
    title: `Brand Identity Enhancement`,
    description: `Create a strong and memorable channel presence.`,
  },
  {
    title: `Motivation Rekindled`,
    description: `Rediscover your passion for content creation.`,
  }
]

export default function page() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center ${dmSans.className} overflow-x-hidden`}>
      <div className="flex flex-col w-full justify-center py-3 items-center red-bg">
        <span className="text-xl md:text-3xl font-normal md:font-bold text-center text-white uppercase">THIS TEMPLATE CAN SUPERCHARGED YOUR YOUTUBE VIDEOS</span>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-center md:gap-20 py-5 px-2 md:px-40">
        <div className="flex flex-col justify-center w-full md:w-6/12 gap-2 md:gap-7 order-3 md:order-1">
          <h1 className="text-xl md:text-4xl font-bold text-center md:text-left text-neutral-700">Align Your Videos To YouTube Algorithm To Get 10x Reach </h1>
          <p className="text-base md:text-xl font-normal text-center md:text-left text-neutral-700">
          Not Sure About Scripting For YouTube?<br/>Struggling to get more views and new subscribers?<br/>Not being able to retain auidence on your YouTube videos?<br/>Uncertain about Scripting structure for YouTube?<br/>Not able to build loyal subscriber base and engagement?
          </p>
          <div className="flex flex-col w-full">
            <div className="flex flex-col items-center w-full p-3 rounded-lg bg-neutral-100 border-2 border-neutral-200 border-dashed">
              <span className="flex-1 text-base md:text-xl font-bold red-text text-center">Our Magical YouTube Scripting video template is available today for free</span>
            </div>
          </div>
          <div className="flex flex-col">
            <Form text="Download Your Template Now" />
            {/* <Button successUrl={`${url}/thankyou?product=audit-call`} amount='audit-call' text='Secure Your Audit Now' padding='py-4' bgcolor={{ normal: 'red-bg', hover: 'bg-red-700', active: 'bg-red-800' }} txcolor='text-white' /> */}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 order-2">
          <img src="https://peepoyenetwork.com/wp-content/uploads/2023/12/scripting-template.png" alt="Guide" className="w-full shadow-xl drop-shadow-xl rounded-xl" draggable={false} />
        </div>
      </section>
      <section className="flex w-full mb-10">
        <Experience />
      </section>
      {/* <section className="flex flex-col md:flex-row justify-center md:gap-20 pt-10 px-2 md:px-40">
        <div className="flex flex-col w-full">
          <img src="https://peepoyenetwork.com/wp-content/uploads/2023/12/akassh.webp" alt="Akassh ashok Gupta" className="w-full h-full object-contain object-bottom animate-text bg-gradient-to-r from-sky-100 via-green-50 to-sky-200 -scale-x-100 border-[4px] border-sky-700" draggable={false} />
        </div>
        <div className="flex flex-col justify-center gap-2 md:gap-5 pb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left text-neutral-700">Our 45-Minute YouTube Channel Audit is your personalized roadmap to YouTube success</h2>
          <div className="flex flex-col w-full gap-2">
            {
              roadmap.map((item, index) => (
                <div key={index} className="flex flex-row gap-2">
                  <FaCheck className="text-sky-600 w-10 mt-1 text-2xl" />
                  <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700"><strong>{parse(item.title)}: </strong>{parse(item.description)}</span>
                </div>
              ))
            }
          </div>
          <div className="flex flex-col w-full gap-5">
          <div className="flex flex-col w-full">
            <div className="flex flex-col items-center w-full p-3 rounded-lg bg-neutral-100 border-2 border-neutral-200 border-dashed">
              <span className="flex-1 text-base md:text-xl font-bold text-sky-700 text-center">Our 45-Minute YouTube Channel Audit is available for just INR 2,499/-</span>
            </div>
          </div>
          <div className="flex flex-col">
            <Button successUrl={`${url}/thankyou?product=audit-call`} amount='audit-call' text='Secure Your Audit Now' padding='py-4' bgcolor={{ normal: 'bg-sky-600', hover: 'bg-sky-700', active: 'bg-sky-800' }} txcolor='text-white' />
          </div>
          </div>
        </div>
      </section> */}
      <FunnelFooter />
    </main >
  )
}
