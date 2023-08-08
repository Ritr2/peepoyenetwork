import React from 'react'
import { DM_Sans } from 'next/font/google'
import data from '@/utils/courses/courses_section'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import Link from 'next/link'

const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

export default function page() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
      <section className="flex flex-col md:flex-row w-full bg-neutral-200 items-center justify-center px-2 py-12 md:py-24 md:px-20">
        <div className="flex flex-col justify-center items-center flex-1 gap-2 md:gap-5">
          <h1 className="text-xl md:text-5xl font-bold text-center md:text-left text-neutral-700">FLAGSHIP PROGRAM YOUTUBENEUR</h1>
          <h2 className="text-sm md:text-lg font-thin text-center md:text-left text-neutral-500">Maximize your YouTube channel&apos;s potential with our comprehensive course covering video optimization, analytics, and strategies.</h2>
        </div>
      </section>
      <section className="flex flex-col md:flex-row w-full bg-white items-center justify-center px-5 py-12 md:py-24 md:px-20">
        <div className="flex flex-col md:flex-row flex-1 gap-10 md:gap-12">
          {
            data.map((course, index) => (
              <div key={index} className="flex flex-col flex-1 gap-3 rounded-lg pt-5 items-center shadow-lg drop-shadow-lg bg-stone-100">
                <div className="flex flex-col w-full justify-center items-center">
                  <img src={course.image.src} alt={course.image.alt} className="w-1/2 h-auto" draggable={false} />
                </div>
                <h1 className="text-lg md:text-xl font-bold text-center md:text-left text-neutral-700">{course.name}</h1>
                <p className="text-2xl md:text-5xl font-bold text-center md:text-left text-neutral-700">{course.currency}{course.price}</p>
                <p className="text-sm md:text-base font-normal text-center md:text-left text-neutral-500">{course.type}</p>
                <div className="flex flex-1 flex-col justify-around gap-5 w-full">
                  {
                    course.features.map((feature, index2) => (
                      <div key={index2} className="flex flex-row w-full items-center justify-start gap-2 px-5 md:px-10">
                        <BsFillCheckCircleFill className="text-neutral-400 text-lg md:text-xl" />
                        <p className="font-normal text-neutral-700 text-sm md:text-base">{feature}</p>
                      </div>
                    ))
                  }
                </div>
                <div className="flex w-full mt-3">
                  <Link href={course.button.link} disabled={course.active ? false : true} className={`flex rounded-b-lg p-3 text-lf md:text-xl font-bold text-white flex-row items-center justify-center gap-2 w-full ${course.active ? 'bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800' : 'bg-neutral-400 cursor-not-allowed'}`}>
                    {course.button.text}
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </main>
  )
}
