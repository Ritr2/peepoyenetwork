import Button from '@/components/funnels/Button'
import React from 'react'
import { DM_Sans } from 'next/font/google';
import { FaCheck } from 'react-icons/fa';
import RibbonBonus from '@/components/funnels/RibbonBonus';
import FunnelFooter from '@/components/funnels/FunnelFooter';
import url from '@/utils/url';
import parse from 'html-react-parser';
import Link from 'next/link';


const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Do Not Do This On Youtube',
  description: 'Do Not Do This On Youtube',
  url: 'https://peepoye.com/donot',
  type: 'article',
  image: '/assets/images/donot/donot_1.png',
  keywords: 'Do Not Do This On Youtube',
  openGraph: {
    title: 'Do Not Do This On Youtube',
    description: 'Do Not Do This On Youtube',
    url: 'https://akassh.com/donot',
    type: 'article',
    locale: 'en_IN',
    site_name: 'Akassh',
  },
  canonical: 'https://akassh.com/donot',
}

const fetchCross = async (product) => {
  let res;
  try {
    res = await fetch(`${url}/api/product/crosssell/${product}`, { cache: "no-cache" })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  }
  catch (err) {
    notFound()
  }
  return res.json()
}


export default async function page({ searchParams }) {
  let data = false;
  if (searchParams.product) {
    data = await fetchCross(searchParams.product);
    if (data.data == false) {
      data = false;
    }
  }

  return (
    <main className={`relative flex min-h-screen flex-col items-center ${dmSans.className} overflow-x-hidden`}>
      <div className="flex flex-col w-full justify-center py-2 items-center bg-red-700">
        <span className="text-lg md:text-2xl font-medium text-center text-white">{data ? parse(data.query.message) : parse("STOP WASTING TIME ON FAILED YOUTUBE STRATEGIES! ENROLL IN <strong>&quot;DO NOT DO THIS ON YOUTUBE&quot;</strong> COURSE NOW!")}</span>
      </div>
      {
        data && (
          <div className=" flex flex-col w-10/12 md:w-8/12 justify-center mt-8 h-10 bg-stone-300 rounded-full">
            <div className='relative bg-red-600 h-full w-16 rounded-full flex flex-col items-center' style={{ width: `${data.query.levelPercentage}%` }}>
              <div className="absolute top-0 left-0 flex flex-col rounded-full justify-center items-center h-full animate-percentage bg-green-700/90" />
              <span className="flex z-10 flex-col justify-center items-center h-full text-white text-sm md:text-2xl font-medium">{data.query.levelPercentage}% Completed</span>
            </div>
          </div>
        )
      }
      <div className="flex flex-col m-2 md:w-fit justify-center p-2 px-5 items-center mt-10 bg-yellow-400/90 shadow-lg rounded-md drop-shadow-lg">
        <p className="text-base md:text-2xl font-bold text-center text-neutral-800">DO YOU KNOW THAT 95% YOUTUBE CREATORS DO NOT <br className='hidden md:flex' /> GROW OR QUIT YOUTUBE DUE TO THESE BASIC MISTAKES</p>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-center md:gap-20 py-10 px-2 md:px-40">
        <div className="flex flex-col w-5/12 items-center justify-center">
          <img src="/assets/images/donot/donot_1.png" alt="donot" className="w-full md:w-8/12" draggable={false} />
        </div>
        <div className="flex flex-col justify-center w-full flex-1 gap-2 md:gap-5">
          <span className="text-base md:text-2xl font-bold text-center md:text-left text-neutral-600">21 CONCEPTS OVER 21 DAYS</span>
          <h1 className="text-xl md:text-5xl font-bold text-center md:text-left text-neutral-700">A Must Course For Every Youtube Influencer</h1>
          <p className="text-lg md:text-xl font-normal text-center md:text-left text-neutral-500">IF YOU WANT TO GROW ON YOUTUBE YOU CANNOT AFFORD THESE 21 MISTAKES..</p>
          <div className="flex flex-col w-full md:w-8/12">
            <div className="flex flex-col items-center w-full p-3 rounded-lg bg-stone-200 border-2 border-neutral-400 border-dashed">
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700">Regular Price: <s>₹999</s>/-</span>
              <span className="text-base md:text-2xl font-normal md:font-bold text-center md:text-left text-red-700">Today’s Offer: ₹99/-</span>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-8/12 gap-3">
            <Button query={data ? `/${data.yes.query}` : '/thankyou'} product={data ? `/${data.yes.product}` : '/donot'} amount='donot' text='GET YOUR COURSE ACCESS NOW' padding='py-3' bgcolor={{ normal: 'bg-red-700', hover: 'bg-red-600', active: 'bg-red-800' }} txcolor='text-white' />
            {
              data && (
                <Link href={`/${data.no.query}?product=${data.no.product}`} className='text-stone-500 text-lg md:text-2xl underline text-center hover:text-stone-700'>
                  No I don&apos;t Want this offer
                </Link>
              )
            }
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center md:gap-10 pt-10 px-2 md:px-40 bg-stone-200">
        <div className="flex flex-col justify-center gap-2 md:gap-5 flex-1 pb-8">
          <h2 className="text-2xl md:text-5xl font-bold text-center md:text-left text-neutral-700">Why It Is Must For You?</h2>
          <div className="flex flex-col w-full">
            <div className="flex flex-row gap-2">
              <FaCheck className="text-red-700 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700"><strong>Solutions</strong> given by an experienced influencer to pace up your growth</span>
            </div>
            <div className="flex flex-row gap-2">
              <FaCheck className="text-red-700 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700">Actionable advice and strategies to <strong>navigate</strong> the challenges more effectively</span>
            </div>
            <div className="flex flex-row gap-2">
              <FaCheck className="text-red-700 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700">A guide to help you build a strong foundation for a <strong>long-term success</strong> as an Influencer</span>
            </div>
            <div className="flex flex-row gap-2">
              <FaCheck className="text-red-700 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700"> <strong>Comprehensive approach</strong> including mindset training to deal with different challenges that comes to the path</span>
            </div>
            <div className="flex flex-row gap-2">
              <FaCheck className="text-red-700 w-10 mt-1 text-2xl" />
              <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700"><strong>Time and Effort</strong> Saving by providing a clear path forward</span>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5">
            <div className="flex flex-col w-full md:w-8/12">
              <div className="flex flex-col items-center w-full p-3 rounded-lg bg-white border-2 border-neutral-400 border-dashed">
                <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700">Regular Price: <s>₹999</s>/-</span>
                <span className="text-base md:text-2xl font-normal md:font-bold text-center md:text-left text-red-700">Today’s Offer: ₹99/-</span>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-8/12 gap-3">
              <Button query={data ? `${data.yes.query}` : 'thankyou'} product={data ? `${data.yes.product}` : 'donot'} amount='donot' text='GET YOUR COURSE ACCESS NOW' padding='py-3' bgcolor={{ normal: 'bg-red-700', hover: 'bg-red-600', active: 'bg-red-800' }} txcolor='text-white' />
              {
                data && (
                  <Link href={`/${data.no.query}?product=${data.no.product}`} className='text-stone-500 text-lg md:text-2xl underline text-center hover:text-stone-700'>
                    No I don&apos;t Want this offer
                  </Link>
                )
              }
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center self-end flex-1 w-full">
          <img src="/assets/images/akasshashokgupta.webp" alt="Akassh ashok Gupta" className="w-full" draggable={false} />
        </div>
      </section>
      <section className="flex w-full flex-col py-10 px-2 md:px-40">
        <img src="/assets/images/donot/donot_2.png" alt="donot" className="w-full" draggable={false} />
        <div className="flex flex-col w-full self-center md:w-8/12 gap-3">
          <Button query={data ? `${data.yes.query}` : 'thankyou'} product={data ? `${data.yes.product}` : 'donot'} amount='donot' text='GET YOUR COURSE ACCESS NOW' padding='py-3' bgcolor={{ normal: 'bg-red-700', hover: 'bg-red-600', active: 'bg-red-800' }} txcolor='text-white' />
          {
            data && (
              <Link href={`/${data.no.query}?product=${data.no.product}`} className='text-stone-500 text-lg md:text-2xl underline text-center hover:text-stone-700'>
                No I don&apos;t Want this offer
              </Link>
            )
          }
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full md:gap-2 py-10 px-2 md:px-40 bg-stone-200">
        <h2 className="text-xl md:text-4xl font-medium text-center md:text-left text-neutral-700">Claim Your Access Now And</h2>
        <p className="text-2xl md:text-5xl font-bold text-center md:text-left text-red-700">Get These FREE Bonuses!</p>
        <div className="flex flex-col items-center justify-center w-full gap-5 py-10 px-10 md:px-20">
          <RibbonBonus data={['community']} />
        </div>
        <div className="flex flex-col w-full md:w-8/12 gap-3">
          <Button query={data ? `${data.yes.query}` : 'thankyou'} product={data ? `${data.yes.product}` : 'donot'} amount='donot' text='GET YOUR COURSE ACCESS NOW' padding='py-3' bgcolor={{ normal: 'bg-red-700', hover: 'bg-red-600', active: 'bg-red-800' }} txcolor='text-white' />
          {
            data && (
              <Link href={`/${data.no.query}?product=${data.no.product}`} className='text-stone-500 text-lg md:text-2xl underline text-center hover:text-stone-700'>
                No I don&apos;t Want this offer
              </Link>
            )
          }
        </div>
      </section>
      <FunnelFooter />
    </main>
  )
}
