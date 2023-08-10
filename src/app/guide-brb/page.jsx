import React from 'react'
import { DM_Sans } from 'next/font/google';
import Experience from '@/components/Experience';
import { FaCheck } from 'react-icons/fa';
import Button from '@/components/guide_if/Button';
import FunnelFooter from '@/components/guide_if/FunnelFooter';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export default function page() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center ${dmSans.className} overflow-x-hidden`}>
      <div className="flex flex-col w-full justify-center py-3 items-center bg-neutral-400">
        <span className="text-xl md:text-3xl font-normal md:font-bold text-center text-white">99% OF YOU ARE MISSING THIS BIG OPPORTUNITY!</span>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-center md:gap-20 py-5 px-2 md:px-40">
        <div className="flex flex-col justify-center w-full md:w-6/12 gap-2 md:gap-7 order-3 md:order-1">
          <h1 className="text-xl md:text-5xl font-bold text-center md:text-left text-neutral-700">Want To Become An Influencer But Still Not Sure?</h1>
          <p className="text-base md:text-lg font-normal text-center md:text-left text-neutral-700">Are you passionate about becoming a social media influencer, but feel like you&apos;re hitting roadblocks along the way?<br />If so, you&apos;re not alone! Don&apos;t let roadblocks hold you back any longer – it&apos;s time to unlock the secrets to becoming a successful influencer!</p>
          <div className="flex flex-col w-full md:w-10/12">
            <div className="flex flex-col items-center w-full p-3 rounded-lg bg-neutral-100 border-2 border-neutral-200 border-dashed">
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700">Regular Price: <s>₹299</s>/-</span>
              <span className="text-base md:text-2xl font-normal md:font-bold text-center md:text-left text-emerald-600">Today’s Offer: ₹29/-</span>
            </div>
          </div>
          <div className="flex flex-col md:w-10/12">
          <Button />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 order-2">
          <img src="/assets/images/guide_if/guide_1.png" alt="Guide" className="w-full" draggable={false} />
        </div>
      </section>
      <section className="flex w-full">
        <Experience />
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center md:gap-10 pt-10 px-2 md:px-40">
        <div className="flex flex-col items-center self-end w-full">
          <img src="/assets/images/akasshashokgupta.webp" alt="Akassh ashok Gupta" className="w-full -scale-x-100" draggable={false} />
        </div>
        <div className="flex flex-col justify-center gap-2 md:gap-5 pb-8">
          <h2 className="text-2xl md:text-5xl font-bold text-center md:text-left text-neutral-700">Why It Is Must For You?</h2>
          <div className="flex flex-col w-full">
            <div className="flex flex-row gap-2">
              <FaCheck className="text-emerald-600 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700"><strong>Solutions</strong> given by an experienced influencer to pace up your growth</span>
            </div>
            <div className="flex flex-row gap-2">
              <FaCheck className="text-emerald-600 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700">Actionable advice and strategies to <strong>navigate</strong> the challenges more effectively</span>
            </div>
            <div className="flex flex-row gap-2">
              <FaCheck className="text-emerald-600 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700">A guide to help you build a strong foundation for a <strong>long-term success</strong> as an Influencer</span>
            </div>
            <div className="flex flex-row gap-2">
              <FaCheck className="text-emerald-600 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700"> <strong>Comprehensive approach</strong> including mindset training to deal with different challenges that comes to the path</span>
            </div>
            <div className="flex flex-row gap-2">
              <FaCheck className="text-emerald-600 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700"><strong>Time and Effort</strong> Saving by providing a clear path forward</span>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5">
            <div className="flex flex-col w-full">
              <div className="flex flex-col items-center w-full p-3 rounded-lg bg-neutral-100 border-2 border-neutral-200 border-dashed">
                <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700">Regular Price: <s>₹299</s>/-</span>
                <span className="text-base md:text-2xl font-normal md:font-bold text-center md:text-left text-emerald-600">Today’s Offer: ₹29/-</span>
              </div>
            </div>
            <div className="flex flex-col">
              <Button />
            </div>
          </div>
        </div>
      </section>
      <FunnelFooter />
    </main >
  )
}
