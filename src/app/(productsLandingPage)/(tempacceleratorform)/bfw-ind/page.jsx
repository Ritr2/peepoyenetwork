import React from 'react'
import { DM_Sans } from 'next/font/google';
import FunnelFooter from '@/components/funnels/FunnelFooter';
import WaitlistForm from '@/components/funnels/pages/youtubeneur/WaitlistForm';

const dmSans = DM_Sans({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

export default function page() {
  return (
    <main className={`flex flex-col items-center justify-center p-5 md:p-20 w-full ${dmSans.className}`}>
      <WaitlistForm loc={'ind'} />
    </main>
  )
}
