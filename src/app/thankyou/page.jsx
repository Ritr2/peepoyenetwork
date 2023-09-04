import React from 'react'
import { DM_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import url from '@/utils/url';
import parse from 'html-react-parser';
import Link from 'next/link';



const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

const fetchThankyou = async (product) => {
  let res;
  try {
    res = await fetch(`${url}/api/product/thankyou/${product}`, { cache: "no-cache" })
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
    data = await fetchThankyou(searchParams.product);
    if (data.data == false) {
      data = false;
    }
  }
  if (data == false) {
    notFound();
  }
  return (
    <main className={`relative flex min-h-screen flex-col items-center ${dmSans.className} mt-16 py-5 px-2 md:px-40 overflow-x-hidden`}>
      <section className="flex flex-col md:flex-row w-full items-center pb-8 border-b-2 border-stone-500 ">
        <div className="flex flex-col w-full md:w-6/12 gap-2 md:gap-7 order-2 md:order-1">
          {
            data.query.h1 && (
              <h1 className="text-xl md:text-4xl font-bold text-center md:text-left text-neutral-700">{parse(data.query.h1)}</h1>
            )
          }
          {
            data.query.p1 && (
              <p className="text-base md:text-lg font-medium text-center md:text-left text-neutral-700">{parse(data.query.p1)}</p>
            )
          }
          {
            data.query.p2 && (
              <p className="text-base md:text-lg font-medium text-center md:text-left text-neutral-700">{parse(data.query.p2)}</p>
            )
          }
          {
            data.query.p3 && (
              <p className="text-lg md:text-xl font-medium text-center md:text-left text-neutral-700">{parse(data.query.p3)}</p>
            )
          }
        </div>
        <div className="flex flex-col items-center justify-center flex-1 order-1 md:order-2">
          <img src={data.query.image.src} alt={data.query.image.alt} className="w-full md:w-8/12" draggable={false} />
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center md:gap-10 py-20">
        <div className="flex flex-col items-center self-end flex-1">
          <img src='https://i.ibb.co/D77w8qy/thankyou.png' alt="Akassh ashok Gupta" className="w-full" draggable={false} />
        </div>
        <div className="flex flex-col justify-center gap-2 md:gap-5 pb-8 w-full md:w-6/12">
          <h1 className="text-xl md:text-4xl font-bold text-center md:text-left text-neutral-700">To Learn More from <br /><span className='text-red-600'>Akassh Ashok Gupta</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-center md:text-left text-neutral-600">You can start your learning by reading some insightful Blog by Akassh.</p>
          <div className="flex flex-col w-full md:w-8/12">
            <Link href='/blogs' className='flex flex-col items-center text-white font-bold w-full p-3 rounded-lg bg-red-700 hover:scale-105 active:scale-95 transform transition-all duration-200 ease-in-out'>
              CLICK TO READ THE BLOG
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
