import React from 'react'
import { Lato } from 'next/font/google'
import AcceleratorInd from '@/components/funnels/pages/youtubeneur/AcceleratorInd'
import { notFound } from 'next/navigation';
import url from '@/utils/url';


const robo = Lato({
    weight: ['100', '300', '400', '700', '900'],
    subsets: ['latin'],
})

export const metadata = {
  title: 'Foundation accelerator',
  description: 'Accelerate your online growth strategy using YouTube in 3 days & create multiple revenue streams doing what you love the most..',
  images: [
    {
      url: 'https://i.ibb.co/JRjfHhr/accelerator.png',
      width: 572,
      height: 715,
      alt: 'Foundation accelerator',
    },
  ],
  url: 'https://peepoye.com/accelerator-int',
  type: 'website',
  keywords: ['accelerator', 'foundation', 'foundation accelerator', 'peepoye', 'peepoye accelerator', 'peepoye foundation accelerator'],
  openGraph: {
    title: 'Foundation accelerator',
    description: 'Accelerate your online growth strategy using YouTube in 3 days & create multiple revenue streams doing what you love the most..',
    images: [
      {
        url: 'https://i.ibb.co/JRjfHhr/accelerator.png',
        width: 572,
        height: 715,
        alt: 'Foundation accelerator',
      },
    ],
    url: 'https://peepoye.com/accelerator-int',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundation accelerator',
    description: 'Accelerate your online growth strategy using YouTube in 3 days & create multiple revenue streams doing what you love the most..',
    images: ['https://i.ibb.co/JRjfHhr/accelerator.png'],
    creator: '@peepoye',
  },
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
        <main className={`relative flex min-h-screen flex-col items-center overflow-x-hidden ${robo.className}`}>
            <AcceleratorInd loc={"int"} data = {data} />
        </main>
    )
}
