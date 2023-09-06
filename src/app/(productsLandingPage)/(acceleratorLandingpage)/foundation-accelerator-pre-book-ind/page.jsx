import React from 'react'
import { Lato } from 'next/font/google'
import AcceleratorInd from '@/components/funnels/pages/accelerator/AcceleratorInd'


const robo = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
})

export default function page() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center overflow-x-hidden ${robo.className}`}>
      <AcceleratorInd />
    </main>
  )
}
