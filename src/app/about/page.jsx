import React from 'react'
import { DM_Sans } from 'next/font/google'
import Experience from '@/components/Experience'
import FeatureSection from '@/components/FeatureSection'
import data from '@/utils/about_sections'

const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

export default function About() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center mt-20 ${dmSans.className} overflow-x-hidden`}>
      <section className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20">
        <div className="flex flex-col justify-center flex-1 md:gap-2">
          <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left text-neutral-700 md:mb-3">Founder&apos;s Journey</h1>
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
          <img src="https://i.postimg.cc/wj9bM879/akasshashokgupta2.png" alt="Akassh ashok Gupta" className="w-full"  draggable={false} />
        </div>
      </section>
      <Experience />
      {
        Object.keys(data).map((key, index) => (
          <FeatureSection key={index} data={data[key]} about={true} backgroundColor={'bg-white'} reverse={index%2 === 0 ? false : true} />
        ))
      }
    </main>
  )
}
