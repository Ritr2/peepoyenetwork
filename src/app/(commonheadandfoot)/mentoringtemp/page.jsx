import React from 'react'
import { DM_Sans } from 'next/font/google'
import data from '@/utils/mentoring/expect_sections'
import BoxContainer from '@/components/mentoring/BoxContainer'
import DynamicForm from '@/components/mentoring/DynamicForm'
import testimonials from '@/utils/mentoring/testimonials_section'
import Testimonials from '@/components/mentoring/Testimonials'
import FormPopup from '@/components/mentoring/FormPopup'

const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

export default function Mentoring() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
      <div className="flex flex-col w-full justify-center py-3 items-center bg-neutral-400">
        <span className="text-base md:text-xl font-normal md:font-bold text-center md:text-left text-white">Unlock unlimited potential with our Weekly Mentoring program: Personalised guidance for career success!</span>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-center md:gap-10 pt-5 px-5 md:px-52">
        <div className="flex flex-col justify-center flex-1 gap-2 md:gap-5 order-3 md:order-1">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left text-neutral-700">Elevate Your Career With Free Personalized Mentorship</h1>
          <p className="text-base md:text-lg font-normal text-center md:text-left text-neutral-700">Sign up for free and unlock the power of personalized guidance from Akassh, a seasoned professional with 20 years of corporate and 5 years of YouTube experience. Each week, you&apos;ll receive a personally written email directly from Akassh, packed with valuable insights and wisdom. With a focus on diverse topics such as career, skill development, entrepreneurship, personality development, mindset hacks, and efficiency methods, Akassh will teach you one impactful concept in every email.</p>
          <div className="flex flex-col w-full md:w-9/12">
            <FormPopup />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 order-2">
          <img src='https://i.ibb.co/GdRJ5sw/akasshashokgupta.webp' alt="Akassh ashok Gupta" className="w-full" draggable={false} />
        </div>
      </section>
      <section className="flex flex-col items-center w-full justify-center gap-10 bg-stone-100 px-5 py-16 md:px-52 overflow-hidden">
        <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left text-neutral-700">What To Expect From Our Weekly Mentoring Program</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
          <BoxContainer data={data} />
        </div>
      </section>
      <section className="flex flex-col items-center w-full justify-center gap-8 bg-white px-5 pt-16 pb-0 md:py-16 md:px-52 overflow-hidden">
        <h2 className="text-xl md:text-4xl font-bold text-center text-neutral-700">Register For Akassh&apos;s Free Weekly Mentoring Programme</h2>
        <div className="flex flex-col justify-center gap-2 w-full md:w-10/12">
          <p className='text-base md:text-lg font-normal md:font-bold text-neutral-700'>1. New Content Updates &#40; Blogs, Videos, Podcasts &#41;</p>
          <p className='text-base md:text-lg font-normal md:font-bold text-neutral-700'>2. Story/lessons from Akassh’s life</p>
          <p className='text-base md:text-lg font-normal md:font-bold text-neutral-700'>3. Concepts and Ideas to build strong influence & create authority in the market of your choice</p>
          <p className='text-base md:text-lg font-normal md:font-bold text-neutral-700'>P.N: Akassh Ashok Gupta writes all the emails himself — We value quality &gt; quantity.</p>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-7">
          <DynamicForm />
          <div className="flex flex-col flex-1 justify-center items-center gap-2 w-full md:w-1/2">
            <img src="https://i.ibb.co/WkhY1Wh/akasshashokgupta.png" alt="Akassh ashok Gupta" className="w-full" draggable={false} />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center w-full justify-center gap-8 bg-stone-100 px-5 py-16 md:px-52 overflow-hidden">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-neutral-700">Hear What Our Mentees Have To Say About This Program</h2>
        <div className='flex flex-col items-center w-full justify-center gap-8'>
          {
            testimonials.map((testimonial, index) => (
              <div key={index} className='flex flex-col items-center w-full justify-center gap-5'>
                <Testimonials data={testimonial} index={index} />
                {
                  ((index + 1) % 3 === 0 && index > 0) && (
                    <div className="flex flex-col w-full md:w-1/2">
                      <FormPopup />
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
      </section>
    </main>
  )
}
