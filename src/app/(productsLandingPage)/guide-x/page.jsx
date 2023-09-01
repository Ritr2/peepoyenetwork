import React from 'react'
import { Roboto_Serif } from 'next/font/google'
import GuideX from '@/components/funnels/pages/GuideX'


const robo = Roboto_Serif({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'The Ultimate Guide to X Monetization: Transforming Tweets into Profits',
  description: 'Unlock the power of X with our ultimate guide! Discover six secret nuggets to monetize your presence and turn your passion into profits.',
  images: [
    {
      url: 'https://i.postimg.cc/P5T8VS9F/akasshashokgupta.png',
      width: 840,
      height: 900,
      alt: 'The Ultimate Guide to X Monetization: Transforming Tweets into Profits',
    },
  ],
  url: 'https://peepoye.com/guide-x',
  type: 'page',
  keywords: ['guide', 'ultimate guide', 'monetization', 'x', 'passion', 'profits', 'money', 'earn', 'earn money', 'earn money online', 'earn money from home', 'earn money online free', 'earn money app', 'earn money online without investment', 'earn money online app', 'earn money online without investment for students', 'earn money online without investment by typing', 'earn money online without investment by clicking ads', 'earn money online without investment for students in india', 'earn money online without investment for students in pakistan', 'earn money online without investment for students in bangladesh', 'earn money online without investment for students in tamil', 'earn money online without investment for students in telugu', 'earn money online without investment for students in hindi', 'earn money online without investment for students in malayalam', 'earn money online without investment for students in india 2021', 'earn money online without investment for students in india 2020'],
  openGraph: {
    title: 'The Ultimate Guide to X Monetization: Transforming Tweets into Profits',
    description: 'Unlock the power of X with our ultimate guide! Discover six secret nuggets to monetize your presence and turn your passion into profits.',
    images: [
      {
        url: 'https://i.postimg.cc/P5T8VS9F/akasshashokgupta.png',
        width: 840,
        height: 900,
        alt: 'The Ultimate Guide to X Monetization: Transforming Tweets into Profits',
      },
    ],
    url: 'https://peepoye.com/guide-x',
    type: 'page',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ultimate Guide to X Monetization: Transforming Tweets into Profits',
    description: 'Unlock the power of X with our ultimate guide! Discover six secret nuggets to monetize your presence and turn your passion into profits.',
    images: ['https://i.postimg.cc/P5T8VS9F/akasshashokgupta.png'],
    creator: '@peepoye',
  },
}

export default function page() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center overflow-x-hidden bg-gradient-to-r from-black via-neutral-800 to-black ${robo.className}`}>
      <GuideX />
    </main>
  )
}
