import React, { Fragment } from 'react'
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

const whatYouWillGain = [
  {
    title: 'New Upgrade Insight',
    section: [
      {
        title: `Gamification Leaderboard`,
        paragraph: `"Say Hello to the Gamified Leaderboard in the Blue Mentorship Tier! Now, earn points by completing tasks from the Daily Success Dose and Weekly Challenges, unlocking exciting rewards and the chance to be featured on our website based on your leaderboard ranking.`,
        image: `http://peepoyenetwork.com/wp-content/uploads/2024/01/gamification-leaderboard.jpg`,
      },
      {
        title: `Success Mentorship Archive`,
        paragraph: `This archive guarantees that no member of the blue tier misses out on any information, Akash. With secure online storage and lifetime access, you can simply log in and explore the complete 365-day content tailored to your access and tier-level`,
        image: `http://peepoyenetwork.com/wp-content/uploads/2024/01/Success-Mentorship-Archive.jpg`,
      }
    ]
  },
  {
    title: 'Old Benefits',
    section: [
      {
        title: `Blue Card`,
        paragraph: `"As a benefit for Blue Members, this card grants you complimentary entry to our monthly LIVE Success Workshops, covering a diverse range of topics and concepts. That's a total of 12 workshops throughout the year, all included in your membership at no extra charge."`,
        image: `http://peepoyenetwork.com/wp-content/uploads/2024/01/Blue-Card.jpg`,
      },
      {
        title: `Private Community`,
        paragraph: `"As a valued Blue Member, you gain privileged entry to our private Telegram community, where you'll receive instant updates via both text and audio messages. Be the first to stay informed about tasks and updates, and enjoy priority access to feedback & change requests."`,
        image: `http://peepoyenetwork.com/wp-content/uploads/2024/01/Private-Community.jpg`,
      },
      {
        title: `Permanent Access`,
        paragraph: `"Blue Tier members enjoy continuous program access for a full year, whereas Grey memberships may be deactivated if left inactive. Our dedication is to those who demonstrate commitment to their success and actively engage in the program."`,
        image: `http://peepoyenetwork.com/wp-content/uploads/2024/01/Permanent-Access.jpg`,
      },
    ]
  }
]

export default function Mentoring() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
      <div className="flex flex-col w-full justify-center py-3 items-center blue-bg">
        <span className="text-base md:text-xl font-normal md:font-bold text-center md:text-left text-white">
          Wait! We have a special offer for you. Join our new 'Mentorship for Success Program' for 2024
        </span>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-center md:gap-5 pt-5 px-5 md:px-52 pb-5 md:pb-10">
        <div className="flex flex-col justify-center gap-5 order-3 md:order-1 w-full md:w-6/12">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left text-neutral-700">Join our new 'Mentorship for Success Program' for 2024</h1>
          <p className="text-base md:text-lg font-normal text-center md:text-left text-neutral-700">Discover a thrilling journey with our upcoming <b>"Mentorship for Success Program."</b> Building on our past success, This new program is designed to take your professional and personal growth to unprecedented heights by enabling your success journey daily. As we expand our mentorship program, we want you to be among the first to embark on this transformative journey.</p>
          <div className="flex flex-col w-full md:w-9/12 mt-2 md:mt-3">
            <ScrollButton text= 'Explore the Benefits' bgColor={{ normal: 'blue-bg-button', hover: 'bg-sky-500', active: 'bg-sky-700' }} />
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
        <div className="flex flex-col items-center justify-center gap-5 md:gap-10 bg-white shadow-lg rounded-lg drop-shadow-xl w-full">
          {
            whatYouWillGain.map((item, index) => (
              <Fragment key={index}>
                <div className={`flex flex-col items-center justify-center gap-5 md:gap-10 w-full p-5`}>
                  <h2 className="text-2xl md:text-4xl font-bold text-center text-neutral-700">{item.title}</h2>
                  <div className="flex flex-col justify-center gap-16 w-full">
                    {
                      item.section.map((section, index2) => (
                        <div key={index2} className={`flex flex-col md:flex-row justify-between w-full gap-16`}>
                          <div className={`flex flex-col items-start justify-center gap-5 w-full md:w-6/12 ${index2 % 2 === 0 ? 'order-1 md:order-2' : 'order-2 md:order-1'}`}>
                            <h3 className="text-xl md:text-2xl font-bold text-center md:text-left text-neutral-700">{section.title}</h3>
                            <p className="text-base md:text-lg font-normal text-center md:text-left text-neutral-700">{parse(section.paragraph)}</p>
                            <div className="flex flex-col justify-center gap-1 w-full md:w-auto md:min-w-[300px]">
                              <Link href="https://pages.razorpay.com/successblue" className='flex flex-row w-full blue-bg-button md:max-w-[400px] hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-lg justify-center items-center gap-2 uppercase'>
                                Join Blue Tier Now
                              </Link>
                              <Link href="https://forms.gle/5Kh5uPWoFkB5P6ZS8" className='hover:underline text-base md:text-lg font-normal text-center text-neutral-500'>
                                No Thanks, I&apos;ll Join Grey Tier
                              </Link>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center items-center gap-5 flex-1 order-2 md:order-1">
                            <img src={section.image} alt={section.title} className="w-full rounded-xl" draggable={false} />
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
                {
                  index === 0 && (
                    <div className="border-b-[4px] border-neutral-600 border-double w-full"></div>
                  )
                }
              </Fragment>
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
