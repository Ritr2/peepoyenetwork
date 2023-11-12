import React from 'react'
import { DM_Sans } from 'next/font/google';
import { FiCheckCircle } from 'react-icons/fi';
import parse from 'html-react-parser'
import Experience from '@/components/Experience';


const dmSans = DM_Sans({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

export default function page() {
  const whatLearn = [{
    question: `1 - Which area is most profitable and can turn you into <strong className='font-black'>money-making machine?</strong>`,
    answer: `Identify your Super Niche`
  },
  {
    question: `2 - Which platform is most suitable to create <strong className='font-black'>passive income and business leads</strong> organically?`,
    answer: `Identify BEST platform`
  },
  {
    question: `3 - What is the secret to <strong className='font-black'>influence building and brand value creation</strong> in today's digital world?`,
    answer: `Hacking the Algorithm of the most powerful social media platform`,
  },
  {
    question: `4 - How to create <strong className='font-black'>digital info products that you can own</strong> in 24 hours?`,
    answer: `Design eBooks, Courses, Coaching, Consulting and Membership models.`,
  },
  {
    question: `5 - How to setup <strong className='font-black'>digital systems to avoid investing</strong> in your money engine?`,
    answer: `Launch with simple tools and scale as you progress.`,
  },
  {
    question: `6 - How to get continuous flow of <strong className='font-black'>converting leads</strong> for your business?`,
    answer: `Use organic mareketing without investing in ads to attract the right customers 24/7 for your business`
  },
  {
    question: `7 - How to create <strong className='font-black'>multiple revenue streams and digital products</strong> based on your passion and expertise?`,
    answer: `Live your life on your own terms doing what you love instead of being stuck with uncertainty`
  }
  ]

  const benifits = [
    {
      img: 'https://i.ibb.co/p0Cc62K/time.webp',
      h1: 'Have More Time',
      p: 'Take charge of your TIME and work from anywhere in the world'
    },
    {
      img: 'https://i.ibb.co/gdyf94j/coins.webp',
      h1: 'Create More Wealth',
      p: 'Unlimited potential to generate massive wealth online'
    },
    {
      img: 'https://i.ibb.co/c1ZKfZX/happy.webp',
      h1: 'Get Debt-Free',
      p: `You don't need an office or employees to launch this model`
    },
    {
      img: 'https://i.ibb.co/WKWMWhb/planet.webp',
      h1: 'Travel The World',
      p: 'Live a life without boundaries. Build a business from your laptop'
    },
    {
      img: 'https://i.ibb.co/4Zt6Q6j/love-2.webp',
      h1: 'More Family Time',
      p: 'Play more with your kids and give quality time for your family'
    },
    {
      img: 'https://i.ibb.co/McJjFb2/bulb.webp',
      h1: 'Help More People',
      p: 'Give people the knowledge you have and create an impact'
    },
  ]

  return (
    <main className={`flex flex-col items-center justify-center w-full ${dmSans.className}`}>
      <section className='flex flex-col items-center justify-center w-full webinar-background md:min-h-[800px]'>
        <div className='flex flex-col items-center justify-center gap-5 md:gap-10 w-full flex-1 px-4 lg:px-[200px] pt-10 md:pt-0 pb-32 md:pb-20'>
          <span className='text-xl md:text-3xl font-bold text-center text-red-500/90'>Join Free Webinar</span>
          <h1 className='text-xl md:text-5xl font-bold text-center text-white md:leading-[55px]'>Learn How I Attracted 1MN+ People and Built a Powerful Money Engine for Continuous Passive Income and Business Leads from Home!</h1>
          <p className='text-sm md:text-lg font-normal text-center text-white'>
            I'm Akassh Ashok Gupta, committed to helping business owners, creators, experts, coaches, and working professionals carve out a dynamic online presence. Ready to supercharge your online presence, live life on your terms & immersing yourself in what truly ignites your passion?
            <br />Dive into our live webinar— sparking a buzz with its vibrant spirit of 'Happiness' and the collective mantra of growing with abudance through 'Value Creation'. Why let this game-changing experience slip through your fingers when it's within your reach today?. Seize the moment—sign up now and ride the wave of transformation. Ready to embark on this exciting journey? 🚀✨ Join us!
          </p>
          <button className='bg-green-600 text-white font-bold text-xl md:text-2xl px-10 py-3 rounded-3xl hover:bg-green-500 active:bg-green-700 hover:shadow-xl active:shadow-md hover:scale-105 active:scale-100 transition-all duration-200'>Register Now</button>
        </div>
      </section>
      <section className='flex flex-col items-center justify-center w-full bg-white py-10 gap-10 px-5'>
        <h2 className='text-2xl md:text-5xl font-black text-center tracking-tight text-slate-900'>What You Will Learn In The Webinar?</h2>
        <div className='flex flex-col items-center justify-center w-full md:w-9/12'>
          <img src='https://i.ibb.co/FY333K1/Final.webp' alt='What You Will Learn In The Webinar' className='w-full rounded-lg' draggable={false} />
        </div>
        <div className='flex flex-col items-center justify-center w-full md:w-9/12 gap-3 md:gap-10'>
          {
            whatLearn.map((item, index) => {
              return (
                <div key={index} className={`flex flex-col justify-center w-full gap-1 md:gap-3 pb-3 md:pb-6 ${index < whatLearn.length - 1 ? 'border-b-[3px] border-neutral-200' : ''}`}>
                  <div className='flex flex-row items-center gap-1 md:gap-5'>
                    <FiCheckCircle className='text-red-600 text-2xl md:text-5xl font-bold' />
                    <p className='text-base flex-1 md:text-2xl font-medium text-slate-900'>{parse(item.question)}</p>
                  </div>
                  <p className='text-base md:text-xl font-light text-neutral-800'>{parse(item.answer)}</p>
                </div>
              )
            }
            )
          }
        </div>
        <button className='bg-green-600 text-white font-bold text-xl md:text-2xl px-10 py-3 rounded-3xl hover:bg-green-500 active:bg-green-700 hover:shadow-xl active:shadow-md hover:scale-105 active:scale-100 transition-all duration-200'>Register Now</button>
      </section>
      <section className='flex flex-col items-center justify-center w-full bg-white md:py-10 gap-10'>
        <Experience />
      </section>
      <section className='flex flex-col items-center justify-center w-full md:w-9/12 bg-white gap-4 md:gap-10 py-10'>
        <div className='flex flex-col items-center justify-center w-full gap-5'>
          <h2 className='text-2xl md:text-5xl font-black text-center tracking-tight text-slate-900'>Benefits Of Learning This Information</h2>
          <span className='text-base md:text-2xl font-normal text-center text-neutral-500'>Over 1000+ people have attended this session</span>
        </div>
        <div className='flex flex-col md:flex-row flex-wrap items-center justify-center w-full gap-5 md:gap-10'>
          {
            benifits.map((item, index) => {
              return (
                <div key={index} className='flex flex-col items-center justify-center w-full md:w-[31%] gap-5'>
                  <div className='flex flex-col items-center justify-center w-2/12'>
                    <img src={item.img} alt={item.h1} className='w-full' draggable={false} />
                  </div>
                  <div className='flex flex-col items-center justify-center w-full'>
                    <h3 className='text-xl md:text-2xl font-bold text-center text-slate-900'>{item.h1}</h3>
                    <p className='text-base md:text-lg font-normal text-center text-neutral-800'>{item.p}</p>
                  </div>
                </div>
              )
            })
          }
          <button className='bg-green-600 text-white font-bold text-xl md:text-2xl px-10 py-3 rounded-3xl hover:bg-green-500 active:bg-green-700 hover:shadow-xl active:shadow-md hover:scale-105 active:scale-100 transition-all duration-200'>Register Now</button>
        </div>
      </section>
    </main>
  )
}
