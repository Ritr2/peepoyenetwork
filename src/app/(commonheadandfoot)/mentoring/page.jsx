import React from 'react'
import { DM_Sans } from 'next/font/google'
import data from '@/utils/mentoring/expect_sections'
import BoxContainer from '@/components/mentoring/BoxContainer'
import DynamicForm from '@/components/mentoring/DynamicForm'
import testimonials from '@/utils/mentoring/testimonials_section'
import Testimonials from '@/components/mentoring/Testimonials'
import FormPopup from '@/components/mentoring/FormPopup'
import { BsCheck } from 'react-icons/bs';
import parse from 'html-react-parser';
import Link from 'next/link'
import ScrollButton from '@/components/mentoring/ScrollButton'

const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

const whoIsThisFor = [
  `Tailored for students, career enthusiasts, budding entrepreneurs, influencers, and beginners in the corporate world.`,
  `Designed for individuals seeking success and eager to learn essential principles, tools, skills, and methods.`,
  `Geared towards those hungry for success and aspiring to follow the footsteps of successful leaders.`,
  `A comprehensive program aiming to equip participants with the knowledge needed for success in various fields.`
]

const plans = [
  {
    title: 'Grey Membership',
    subtitle: '(Free)',
    image: 'http://peepoyenetwork.com/wp-content/uploads/2023/12/grey.png',
    items: [
      'Daily Success Dose',
      'Weekly Success Gamification-based Challenge with a New Concept every week.',
      'Monthly Success Letter flashing Gamification results and Highlighting Success Stories',
      'Early access to register for Success workshops (paid basis)'
    ]
  },
  {
    title: 'Blue Membership',
    subtitle: '(₹1/Day)',
    image: 'http://peepoyenetwork.com/wp-content/uploads/2023/12/blue.png',
    items: [
      `All benefits of Grey Membership+`,
      `<b className="text-blue-500">Access to Blue Card</b> that provides a Free Pass x 12 to Join Success Workshops that will be held once a Month in the calendar year`,
      `Private Access to the Telegram Community to Stay Connected for Frequent Updates, Alerts, etc.`,
      `24/7 email support`,
    ]
  }
]

export default function Mentoring() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
      <div className="flex flex-col w-full justify-center py-3 items-center bg-neutral-400">
        <span className="text-base md:text-xl font-normal md:font-bold text-center md:text-left text-white">Unlock unlimited potential with our Mentorship for Success Program</span>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-center md:gap-5 pt-5 px-5 md:px-52 pb-5 md:pb-10">
        <div className="flex flex-col justify-center gap-5 order-3 md:order-1 w-full md:w-6/12">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left text-neutral-700">Join our new 'Mentorship for Success Program' for 2024</h1>
          <p className="text-base md:text-lg font-normal text-center md:text-left text-neutral-700">Discover a thrilling journey with our upcoming <b>"Mentorship for Success Program."</b> Building on our past success, This new program is designed to take your professional and personal growth to unprecedented heights by enabling your success journey daily. As we expand our mentorship program, we want you to be among the first to embark on this transformative journey.</p>
          <div className="flex flex-col w-full md:w-9/12 mt-2 md:mt-3">
            <ScrollButton />
          </div>
        </div>
        <div className="flex flex-col items-end flex-1 order-2">
          <img src='http://peepoyenetwork.com/wp-content/uploads/2023/12/mentoring-logo.png' alt="Akassh ashok Gupta" className="w-full md:w-9/12" draggable={false} />
        </div>
      </section>
      <section className="flex flex-col items-center w-full justify-center gap-10 bg-stone-100 px-5 py-16 md:px-52 overflow-hidden">
        <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left text-neutral-700">Who is This For?</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
          <div className="flex flex-col flex-1 gap-2 md:gap-5 self-stretch border-[4px] border-neutral-200 rounded-lg shadow-inner">
            <img src='http://peepoyenetwork.com/wp-content/uploads/2023/12/who-is-this-for.png' alt="Who is this for?" className="w-full object-contain object-bottom h-full" draggable={false} />
          </div>
          <div className="flex flex-col justify-center w-full md:w-7/12 gap-2 md:gap-5">

            <div className="flex flex-col justify-center gap-1">
              {
                whoIsThisFor.map((item, index) => (
                  <div key={index} className="flex flex-row">
                    <BsCheck className="text-4xl w-12 text-neutral-700" />
                    <p className="text-base md:text-lg font-normal text-neutral-700">{item}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      {/* <section className="flex flex-col items-center w-full justify-center gap-8 bg-white px-5 pt-16 pb-0 md:py-16 md:px-52 overflow-hidden">
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
      </section> */}
      <section id="plan" className="flex flex-col items-center w-full justify-center gap-8 bg-white px-5 pt-16 pb-0 md:py-16 md:px-52 overflow-hidden">
        <h2 className="text-xl md:text-4xl font-bold text-center text-neutral-700">What You'll Gain</h2>
        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-10">
          {
            plans.map((plan, index) => (
              <div key={index} className="flex flex-col justify-between items-center gap-2 w-full md:w-4/12 shadow-lg drop-shadow-lg rounded-lg p-5 bg-neutral-100">
                <div className="flex flex-col justify-center items-center gap-2 w-full">
                  <img src={plan.image} alt={plan.title} className="w-20 h-20" draggable={false} />
                  <h3 className="text-xl md:text-2xl font-bold text-center text-neutral-700">{plan.title}</h3>
                  <h4 className="text-base md:text-lg font-bold text-center text-neutral-700">{plan.subtitle}</h4>
                </div>
                <ul className="flex flex-col gap-2 w-full mb-5">
                  {
                    plan.items.map((item, index) => (
                      <li key={index} className="flex flex-row gap-2 mt">
                        <BsCheck className="text-4xl w-6 text-neutral-700" />
                        <p className=" flex-1 text-base md:text-lg font-normal text-neutral-700">
                          {parse(item)}
                        </p>
                      </li>
                    ))
                  }
                </ul>
                {
                  plan.title === 'Grey Membership' ? (
                    <div className="flex flex-col w-full md:w-9/12">
                      {/* <FormPopup /> */}
                      <Link href='https://akassh.co/mfsp2023' className="text-lg md:text-xl text-center bg-neutral-600 text-white p-3 rounded-lg drop-shadow-lg shadow-lg hover:bg-neutral-700 hover:shadow-xl hover:drop-shadow-xl active:bg-neutral-800 active:shadow-2xl active:drop-shadow-2xl active:translate-x-1 active:scale-95  uppercase">
                         Apply Now
                      </Link>
                    </div>
                  ) : (
                    <div className="flex flex-col w-full md:w-9/12">
                      <Link href='https://akassh.co/mfsp2023' className="text-lg md:text-xl text-center bg-blue-500 text-white p-3 rounded-lg drop-shadow-lg shadow-lg hover:bg-blue-700 hover:shadow-xl hover:drop-shadow-xl active:bg-blue-800 active:shadow-2xl active:drop-shadow-2xl active:translate-x-1 active:scale-95 uppercase">
                         Apply Now
                      </Link>
                    </div>
                  )
                }
              </div>
            ))
          }
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
                      <ScrollButton />
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
