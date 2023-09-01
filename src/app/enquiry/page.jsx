import React from 'react'
import { DM_Sans } from 'next/font/google'
import EnquiryForm from '@/components/EnquiryForm'
import data from '@/utils/enquiry_form/enquiryformData'

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export default function page() {
  return (
    <main className={`relative flex bg-neutral-300 min-h-screen flex-col items-center mt-16 ${dmSans.className} md:px-40 px-2 py-20 overflow-x-hidden`}>
      <div className='flex flex-col w-full'>
      <EnquiryForm data = {data} />
      </div>
    </main>
  )
}
