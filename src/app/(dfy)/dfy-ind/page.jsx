import React from 'react'
import { Sora } from 'next/font/google'
import Dfy from '@/components/funnels/pages/dfy/Dfy'

const sora = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata = {
  title: `DFY YouTube: Grow Your Channel with Professional Services`,
  description: `Grow your YouTube channel with our DFY package. Get more views, subscribers, and engagement with our professional services.`,
  images: [
    {
      url: 'https://i.ibb.co/SwbHkzV/youtube-growth-service.png',
      width: 600,
      height: 500,
      alt: `DFY YouTube: Grow Your Channel with Professional Services`,
    },
  ],
  url: 'https://peepoye.com/dfy-ind',
  type: 'website',
  keywords: ['dfy', 'dfy youtube', 'dfy youtube growth', 'peepoye', 'peepoye dfy', 'peepoye dfy youtube'],
  openGraph: {
    title: `DFY YouTube: Grow Your Channel with Professional Services`,
    description: `Grow your YouTube channel with our DFY package. Get more views, subscribers, and engagement with our professional services.`,
    images: [
      {
        url: 'https://i.ibb.co/SwbHkzV/youtube-growth-service.png',
        width: 600,
        height: 500,
        alt: `DFY YouTube: Grow Your Channel with Professional Services`,
      }
    ],
    url: 'https://peepoye.com/dfy-ind',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `DFY YouTube: Grow Your Channel with Professional Services`,
    description: `Grow your YouTube channel with our DFY package. Get more views, subscribers, and engagement with our professional services.`,
    images: [
      {
      url: 'https://i.ibb.co/SwbHkzV/youtube-growth-service.png',
      width: 600,
      height: 500,
      alt: `DFY YouTube: Grow Your Channel with Professional Services`,
    }
  ],
    creator: '@peepoye',
  },
}

export default function page() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center overflow-x-hidden ${sora.className}`}>
        <Dfy />
    </main>
  )
}
