import React, { Fragment } from 'react'
import { DM_Sans } from 'next/font/google'
import data from '@/utils/mentoring/expect_sections'
import BoxContainer from '@/components/mentoring/BoxContainer'
import DynamicForm from '@/components/mentoring/DynamicForm'
import testimonials from '@/utils/mentoring/testimonials_section'
import testimonials2 from '@/utils/mentoring/testimonials_2_section'
import Testimonials from '@/components/mentoring/Testimonials'
import FormPopup from '@/components/mentoring/FormPopup'
import { BsCheck } from 'react-icons/bs';
import parse from 'html-react-parser';
import Link from 'next/link'
import ScrollButton from '@/components/mentoring/ScrollButton'
import SocialMediaDetails from '@/components/SocialMediaDetails'
import Experience from '@/components/Experience'

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

const whatYouWillLearn = [
  [
    'Time Management',
    'Goal Setting',
    'Developing Success Mindset',
    'Mindset Hacks',
    'Wellness',
    'Digital Authority',
  ],
  [
    'Mindset Hacks',
    'Networking',
    'Digital Collaboration',
    'Productivity Hacks',
    'Work Life Balance',
    'Code of Success',
  ]
]

const whoIsThisFor2 = [
  {
    title: 'Students',
    image: 'http://peepoyenetwork.com/wp-content/uploads/2024/01/student1.png',
    paragraph: `<b>Students,</b> seeking to enhance their personality, acquire effective time management techniques, boost productivity and focus, and cultivate the skills required to grab the desired opportunities to take their career to the next level and excel as future professionals`,
  },
  {
    title: 'Corporate Professionals',
    image: 'http://peepoyenetwork.com/wp-content/uploads/2024/01/corporate-employee.png',
    paragraph: `<b>Corporate Professionals,</b> seeking to acquire methods for boosting productivity, building confidence, and honing effective communication skills to engage customers and stakeholders, thereby promoting continuous career growth`,
  },
  {
    title: 'Entrepreneurs',
    image: 'http://peepoyenetwork.com/wp-content/uploads/2024/01/business-owner.png',
    paragraph: `<b>Small Business Owners,</b> seeking to gain communication and collaboration skills that will enable them to attract new clients and enhance their business management capabilities by implementing the efficient operational methods utilized by larger companies`,
  },
  {
    title: 'Working Professionals',
    image: 'http://peepoyenetwork.com/wp-content/uploads/2024/01/working-professionals.png',
    paragraph: `<b>Working Professionals,</b> seeking to acquire skills in networking, time management, communication, problem-solving, decision-making, emotional intelligence development, and conflict resolution, with the aim of achieving professional success at an expert level`,
  },
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

const whatYouWillGain = [
  {
    title: 'Key Features of our Mentorship Program',
    section: [
      {
        title: `Daily Success Dose for 365 Days`,
        paragraph: `Unlock daily emails brimming with invaluable wisdom to empower your journey to success through reflection, visualization, thought-provoking tasks, and transformative techniques that bring absolute clarity toward your success`,
        image: `http://peepoyenetwork.com/wp-content/uploads/2024/01/Daily-Success-Dose-for-365-Days.png`,
      },
      {
        title: `Weekly Success Challenges`,
        paragraph: `Engage in a weekly success challenge that encourages you to apply the concepts and methods you've learned during the week. This practical approach will enable you to integrate your newfound knowledge into your daily personal life, job, or business, providing you with the opportunity to witness and experience tangible transformation while benefiting from mentorship.`,
        image: `http://peepoyenetwork.com/wp-content/uploads/2024/01/Weekly-Success-Challenges.png`,
      },
      {
        title: `Monthly Success Newsletter`,
        paragraph: `Experience a monthly success newsletter that encapsulates the month's cumulative learning journey. This includes a compilation of daily insights, weekly challenges, and the shared experiences of diverse mentees. These stories serve as a source of motivation, allowing everyone to draw inspiration from the experiences of others and gain valuable insights into various applications of the methods, concepts, and tools learned.`,
        image: `http://peepoyenetwork.com/wp-content/uploads/2024/01/Monthly-Success-Newsletter.png`,
      },
      {
        title: `Early Access to Monthly Success Workshops`,
        paragraph: `Unlock an enticing advantage by gaining VIP early access and exclusive invitations to our premium virtual monthly success workshops, held at the end of each month. These workshops are dedicated to dynamic live discussions, delving deep into vital concepts and methods from our esteemed success mentorship program. Plus, as a VIP participant, you'll have the unique opportunity to pose questions and participate in an engaging interactive Q&A session.`,
        image: `http://peepoyenetwork.com/wp-content/uploads/2024/01/Early-Access-to-Monthly-Success-Workshops.png`,
      }
    ]
  },
]

export default function Mentoring() {
  return (
    <main className={`flex flex-col items-center mt-16 ${dmSans.className}`}>
      <div className="flex flex-col w-full justify-center py-3 items-center bg-neutral-400">
        <span className="text-base md:text-xl font-normal md:font-bold text-center md:text-left text-white">Experience Unstoppable Success with Our Leading Mentorship Program</span>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-center md:gap-5 pt-10 px-5 md:px-52 pb-5 md:pb-10">
        <div className="flex flex-col justify-center gap-5 order-3 md:order-1 w-full md:w-6/12">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left text-neutral-700">Unlock Your Success Potential with Our Innovative Mentorship</h1>
          <p className="text-base md:text-lg font-normal text-center md:text-left text-neutral-700">"Our groundbreaking Success Mentorship Program is meticulously crafted to provide you with the tools, methods, and concepts that ensure not just learning but practical implementation, enabling a transformation of your ingrained patterns over time. Through a gamified and enjoyable setting, you'll receive daily success boosts, tackle weekly challenges, and engage in monthly workshops, igniting a relentless pursuit of success within you."</p>
          <div className="flex flex-col w-full md:w-9/12 mt-2 md:mt-3">
            <ScrollButton text='Explore the Key Features' />
          </div>
        </div>
        <div className="flex flex-col items-end flex-1 order-2">
          <img src='http://peepoyenetwork.com/wp-content/uploads/2023/12/mentoring-logo.png' alt="Akassh ashok Gupta" className="w-full md:w-9/12" draggable={false} />
        </div>
      </section>
      <section className="flex flex-col items-center w-full justify-center gap-10 bg-stone-100 px-5 py-16 md:px-52 overflow-hidden">
        <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left text-neutral-700">Who is This For?</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-24 w-full shadow-lg rounded-lg bg-white p-5 md:p-10">
          {
            whoIsThisFor2.map((item, index) => (
              <div key={index} className="flex flex-col gap-5 w-full md:w-[40%]">
                <img src={item.image} alt={item.title} className="w-full rounded-xl" draggable={false} />
                <p className="text-base md:text-lg font-normal text-center md:text-left text-neutral-700">{parse(item.paragraph)}</p>
              </div>
            ))
          }
          {/* <div className="flex flex-col flex-1 gap-2 md:gap-5 self-stretch border-[4px] border-neutral-200 rounded-lg shadow-inner">
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
          </div> */}
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
      <section id="plan" className="flex flex-col items-center w-full justify-center gap-8 bg-white px-5 pt-16 pb-0 md:py-16 md:px-52">
        <div className="flex flex-col items-center justify-center gap-5 md:gap-10 bg-white shadow-lg rounded-lg w-full p-5">
          {
            whatYouWillGain.map((item, index) => (
              <Fragment key={index}>
                <div className={`flex flex-col items-center justify-center gap-5 md:gap-20 w-full p-5`}>
                  <h2 className="text-2xl md:text-4xl font-bold text-center text-neutral-700">{item.title}</h2>
                  <div className="flex flex-col justify-center gap-20 w-full">

                    {
                      item.section.map((section, index2) => (
                        <div key={index2} className={`flex flex-col md:flex-row justify-between w-full gap-16`}>
                          <div className={`flex flex-col items-start justify-center gap-5 w-full md:w-6/12 ${index2 % 2 === 0 ? 'order-1 md:order-2' : 'order-2 md:order-1'}`}>
                            <h3 className="text-xl md:text-2xl font-bold text-center md:text-left text-neutral-700">{section.title}</h3>
                            <p className="text-base md:text-lg font-normal text-center md:text-left text-neutral-700">{parse(section.paragraph)}</p>
                            <div className="flex flex-col justify-center gap-1 w-full md:w-auto md:min-w-[300px]">
                              {/* <Link href="/mentoring-blue" className='text-lg md:text-xl text-center bg-neutral-600 text-white p-3 rounded-lg drop-shadow-lg shadow-lg hover:bg-neutral-700 hover:shadow-xl hover:drop-shadow-xl active:bg-neutral-800 active:shadow-2xl active:drop-shadow-2xl active:translate-x-1 active:scale-95 uppercase'>
                              Join Grey Tier Now free
                              </Link> */}
                              <FormPopup />
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
                {/* {
                  index === 0 && (
                    <div className="border-b-[4px] border-neutral-600 border-double w-full"></div>
                  )
                } */}
              </Fragment>
            ))
          }
        </div>
      </section>
      <section className="flex flex-col items-center w-full justify-center gap-8 bg-stone-100 px-5 py-16 md:px-52 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-5 w-full">
          <div className="flex flex-col items-center justify-center gap-2 w-full md:w-7/12">
            <h2 className="text-lg md:text-2xl font-bold text-neutral-700">
            Our Program Structure
            </h2>
            <div className="flex flex-row gap-1 w-full">
              {
                whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex flex-col bg-neutral-300 rounded-lg shadow-lg p-5 flex-1">
                      {
                        item.map((section, index2) => (
                          <div key={index2} className="flex flex-row items-center gap-2">
                            <span key={index} className="text-base md:text-lg text-neutral-700 w-3 h-3 bg-neutral-700 rounded-full"></span>
                            <span className="text-base md:text-lg text-neutral-700">{section}</span>
                          </div>
                        ))
                      }
                  </div>
                ))
              }
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 md:gap-10 flex-1 p-5">
            <img src="https://i.ibb.co/GdRJ5sw/akasshashokgupta.webp" alt="Akassh ashok Gupta" className="w-full" draggable={false} />
          </div>
        </div>
      </section>
      <section className="z-10 flex flex-col py-10 md:py-20 px-5 md:px-40 gap-5 md:gap-14">
        <div className={`flex flex-col items-center gap-2`}>
          <h2 className={`text-xl md:text-4xl text-center text-neutral-800 font-bold`}>
            Meet Your Coach, Guide, and Mentor - <span className={`text-neutral-600`}> Akassh Ashok Gupta </span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
          <div className={`flex flex-col w-full md:w-6/12 rounded-xl`}>
            <img src="https://i.ibb.co/pdXR2sN/1.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
          </div>
          <div className="flex flex-col flex-1">
            <p className={`text-base md:text-xl text-neutral-600 font-normal`}>
              Hey there, I'm Akassh Ashok Gupta! Thanks for stopping by to learn more about me. With over <span className={``}>19 years of experience</span> in the corporate world and more than <span className={``}>5 years dedicated</span> to mastering the art of YouTube, I bring a unique blend of skills to the table. My background as a business consultant, coupled with my status as an influencer, sets me apart as the ideal mentor for this journey.<br /><br /><span className={``}>Imagine this:</span> in less than a year after leaving a high-profile leadership position, I managed to build an impressive online presence with over 1 million followers across various social media platforms. This success is a result of my distinctive approach to consulting and influence, all fueled by the vast experience I gained from mentoring some of the world's biggest brands.
            </p>
          </div>
        </div>
        <div className="flex flex-col h-32">
          <SocialMediaDetails />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
          <div className={`flex flex-col w-full md:w-6/12 rounded-xl order-1 md:order-2`}>
            <img src="https://i.ibb.co/RT3XGxt/2.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
          </div>
          <div className="flex flex-col flex-1 order-2 md:order-1">
            <p className={`text-base md:text-xl text-neutral-600 font-normal`}>
              Even when I was at a leadership position at my job, earning really well, I decided to quit my job and do YouTube full-time. The reason was simple- I realised my Passion. Today, <span className={``}>I breathe passion</span> by doing what I love. Quitting the job was not an easy call but still I took that step because I knew what I was truly meant for and what my passion was. Now, I am on a mission to <span className={``}>enable 1 lac people</span> like me breathe their passion and create multiple revenue streams by doing what they love the most.<br /><br />What sets me apart further are my incredible collaborations with legends like Sonu Nigam and Shruti Haasan. Additionally, I've gained the admiration of top YouTube influencers including Ashish Chanchlani, Harsh Beniwal, MythPat, Sourav Joshi, and many more.
            </p>
          </div>
        </div>
        <Experience />
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
          <div className={`flex flex-col w-full md:w-6/12 rounded-xl`}>
            <img src="https://i.ibb.co/LrvNWBp/3.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
          </div>
          <div className="flex flex-col flex-1">
            <p className={`text-base md:text-xl text-neutral-600 font-normal`}>
              I believe in the power of YouTube not just as a platform for entertainment but as a strategic tool for business growth.<br /><br />Let's embark on this exciting journey together, and I'll guide you every step of the way in leveraging YouTube to its fullest potential.<br /><br />Whether you're looking to diversify your <span className={``}>revenue streams or attract valuable business leads</span>, I've got the expertise to make it happen. Let's make your YouTube venture a resounding success!<br /><br />I'm really looking forward to you completing this course and make this about passion, fullfillment and enjoy every bit of the journey it entails.<br /><br />
            </p>
          </div>
        </div>
        <div className="flex flex-col self-center w-full md:w-8/12">
          <FormPopup />
          {/* <Link to='dfyPricingSection' smooth={true} duration={500} className='flex-1 flex flex-row items-center justify-center gap-2 md:gap-5 bg-emerald-700 cursor-pointer text-white text-lg md:text-xl font-bold rounded-xl py-2 md:py-3 px-5 md:px-8 hover:bg-emerald-600'>
            Book Now
          </Link> */}
        </div>
      </section>
      <section className="flex flex-col items-center w-full justify-center gap-8 bg-stone-100 px-5 py-16 md:px-52 overflow-hidden">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-neutral-700">A sneak peek at the enthusiasm in 2024 surrounding our Revamped Success Mentorship Program 2.0</h2>
        <div className='flex flex-col items-center w-full justify-center gap-8'>
          {
            testimonials2.map((testimonial, index) => (
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
      <section className="flex flex-col items-center w-full justify-center gap-8 px-5 py-16 md:px-52 overflow-hidden">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-neutral-700">Hear What Our Mentees said about this Program in 2023</h2>
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
