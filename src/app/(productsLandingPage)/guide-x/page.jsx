import React from 'react'
import { Roboto_Serif } from 'next/font/google'
import GuideX from '@/components/funnels/pages/GuideX'


const robo = Roboto_Serif({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export default function page() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center overflow-x-hidden bg-gradient-to-r from-black via-neutral-800 to-black ${robo.className}`}>
      <GuideX />
    </main>
  )
}
