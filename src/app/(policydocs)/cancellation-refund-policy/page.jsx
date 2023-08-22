import React from 'react'
import { DM_Sans } from 'next/font/google'
import data from '@/utils/documentation/refund'
import DataWriter from '@/components/documentation/DataWriter'

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export default function page() {
  return (
    <main className={`relative flex min-h-screen flex-col ${dmSans.className} mt-16 py-5 px-2 md:px-40 overflow-x-hidden`}>
      <section className="flex flex-col items-center gap-3 md:gap-10 w-full py-3 md:py-8">
        <h1 className="text-xl md:text-5xl font-bold text-center md:text-left text-neutral-700">Refund Policy</h1>
        <DataWriter data={data} />
      </section>
    </main>
  )
}
