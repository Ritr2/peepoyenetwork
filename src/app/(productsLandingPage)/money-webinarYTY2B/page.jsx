import React from 'react'
import { DM_Sans } from 'next/font/google';
import { FiCheckCircle } from 'react-icons/fi';
import parse from 'html-react-parser'
import Experience from '@/components/funnels/pages/youtubeneur/Experience';
import { BsCheck } from 'react-icons/bs';
import SocialMediaDetails from '@/components/webinar/SocialMediaDetails';
import Testimonials from '@/components/funnels/pages/youtubeneur/Testimonials';
import Link from 'next/link';
import FunnelFooter from '@/components/funnels/FunnelFooter';

const dmSans = DM_Sans({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: `The Money Engine Webinar`,
  description: `Learn How I Attracted 1MN+ People and Built a Powerful Money Engine for Continuous Passive Income and Business Leads from Home!`,
  images: [
    {
      url: 'https://i.ibb.co/FY333K1/Final.webp',
      width: 600,
      height: 500,
      alt: `The Money Engine Webinar`,
    },
  ],
  url: 'https://peepoye.com/money-webinarYTY2B',
  type: 'website',
  keywords: [],
  openGraph: {
    title: `The Money Engine Webinar`,
    description: `Learn How I Attracted 1MN+ People and Built a Powerful Money Engine for Continuous Passive Income and Business Leads from Home!`,
    images: [
      {
        url: 'https://i.ibb.co/FY333K1/Final.webp',
        width: 600,
        height: 500,
        alt: `The Money Engine Webinar`,
      }
    ],
    url: 'https://peepoye.com/money-webinarYTY2B',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `The Money Engine Webinar`,
    description: `Learn How I Attracted 1MN+ People and Built a Powerful Money Engine for Continuous Passive Income and Business Leads from Home!`,
    images: [
      {
        url: 'https://i.ibb.co/FY333K1/Final.webp',
        width: 600,
        height: 500,
        alt: `The Money Engine Webinar`,
      }
    ],
    creator: '@peepoye',
  },
}

export default function page() {
  const whatLearn = [{
    question: `1 - Which area is most profitable and can turn you into <strong className='red-text font-black'>money-making machine?</strong>`,
    answer: `Identify your Super Niche`
  },
  {
    question: `2 - Which platform is most suitable to create <strong className='red-text font-black'>passive income and business leads</strong> organically?`,
    answer: `Identify BEST platform`
  },
  {
    question: `3 - What is the secret to <strong className='red-text font-black'>influence building and brand value creation</strong> in today's digital world?`,
    answer: `Hacking the Algorithm of the most powerful social media platform`,
  },
  {
    question: `4 - How to create <strong className='red-text font-black'>digital info products that you can own</strong> in 24 hours?`,
    answer: `Design eBooks, Courses, Coaching, Consulting and Membership models.`,
  },
  {
    question: `5 - How to setup <strong className='red-text font-black'>digital systems to avoid investing</strong> in your money engine?`,
    answer: `Launch with simple tools and scale as you progress.`,
  },
  {
    question: `6 - How to get continuous flow of <strong className='red-text font-black'>converting leads</strong> for your business?`,
    answer: `Use organic mareketing without investing in ads to attract the right customers 24/7 for your business`
  },
  {
    question: `7 - How to create <strong className='red-text font-black'>multiple revenue streams and digital products</strong> based on your passion and expertise?`,
    answer: `Live your life on your own terms doing what you love instead of being stuck with uncertainty`
  }
  ]

  const benifits = [
    {
      img: 'https://i.ibb.co/jJJTqsV/timeclock.png',
      h1: 'Have More Time',
      p: 'Take charge of your TIME and work from anywhere in the world'
    },
    {
      img: 'https://i.ibb.co/r3T6Nh0/coins.png',
      h1: 'Create More Wealth',
      p: 'Unlimited potential to generate massive wealth online'
    },
    {
      img: 'https://i.ibb.co/X2wJstK/quite-happy-1.png',
      h1: 'Get Debt-Free',
      p: `You don't need an office or employees to launch this model`
    },
    {
      img: 'https://i.ibb.co/NKLgxNd/planets.png',
      h1: 'Travel The World',
      p: 'Live a life without boundaries. Build a business from your laptop'
    },
    {
      img: 'https://i.ibb.co/rvsH4tS/love.png',
      h1: 'More Family Time',
      p: 'Play more with your kids and give quality time for your family'
    },
    {
      img: 'https://i.ibb.co/2kXC15J/bulb.png',
      h1: 'Help More People',
      p: 'Give people the knowledge you have and create an impact'
    },
  ]

  const clarity = [`How to build a dynamic online presence and authority`, `How to build a long-term asset i.e. a go to brand`, `How to future proof yourself by digitising your business`, `How to monetise through content, influence, and digital info products`, `How to attract quality leads without investing for your business`, `How to convert your leads into sales on total autopilot`, `How to automate your digital systems and tools`, `How to build loyal digital communities`, `LIVE demonstration of tools & success stories`]


  return (
    <main className={`flex flex-col items-center justify-center w-full ${dmSans.className}`}>
      <section className='flex flex-col items-center justify-center w-full webinar-background'>
        <div className='flex flex-col items-center justify-center bg-black/70 gap-5 md:gap-10 w-full flex-1 px-4 lg:px-[200px] py-10 md:py-20'>
          <span className='text-xl md:text-3xl font-bold text-center red-text'>Join Free Webinar</span>
          <h1 className='text-xl md:text-5xl font-bold text-center text-white md:leading-[55px]'>Learn How I Attracted <span className='red-text'>1MN+ People</span> and Built a Powerful Money Engine for Continuous Passive Income and Business Leads from Home!</h1>
          <p className='text-sm md:text-lg font-normal text-center text-white md:w-9/12'>
            I'm Akassh Ashok Gupta, committed to helping business owners, creators, experts, coaches, and working professionals carve out a dynamic online presence. Ready to supercharge your online presence, live life on your terms & immersing yourself in what truly ignites your passion?
            <br />Dive into our live webinar— sparking a buzz with its vibrant spirit of 'Happiness' and the collective mantra of growing with abudance through 'Value Creation'. Why let this game-changing experience slip through your fingers when it's within your reach today?. Seize the moment—sign up now and ride the wave of transformation. Ready to embark on this exciting journey? 🚀✨ Join us!
          </p>
          <Link href='https://us06web.zoom.us/meeting/register/tZEtd--ppzgvHdagzP5cC9SbAmH3t_Q60wUf' className='red-bg text-center text-white font-bold text-xl md:text-2xl px-10 py-3 rounded-3xl hover:bg-red-500 active:bg-red-700 hover:shadow-xl active:shadow-md hover:scale-105 active:scale-100 transition-all duration-200'>Register Now</Link>
        </div>
      </section>
      <div className='webinar-background-2 flex flex-col'>
        <section className='flex flex-col items-center justify-center w-full gap-10 px-5 py-10 md:py-20 bg-white/5 backdrop-blur-md'>
          <h2 className='text-2xl md:text-5xl font-black text-center tracking-tight text-white'>What You Will Learn In The Webinar?</h2>
          <div className='flex flex-col items-center justify-center w-full md:w-9/12'>
            <img src='https://i.ibb.co/FY333K1/Final.webp' alt='What You Will Learn In The Webinar' className='w-full rounded-lg' draggable={false} />
          </div>
          <div className='flex flex-col items-center justify-center w-full md:w-9/12 gap-3 md:gap-10'>
            {
              whatLearn.map((item, index) => {
                return (
                  <div key={index} className={`flex flex-col justify-center w-full gap-1 md:gap-3 pb-3 md:pb-6 ${index < whatLearn.length - 1 ? 'border-b-[3px] border-neutral-200' : ''}`}>
                    <div className='flex flex-row items-center gap-1 md:gap-5'>
                      <FiCheckCircle className='red-text text-2xl md:text-5xl font-bold' />
                      <p className='text-base flex-1 md:text-2xl font-medium text-white'>{parse(item.question)}</p>
                    </div>
                    <p className='text-base md:text-xl font-light text-neutral-200'>{parse(item.answer)}</p>
                  </div>
                )
              }
              )
            }
          </div>
          <Link href='https://us06web.zoom.us/meeting/register/tZEtd--ppzgvHdagzP5cC9SbAmH3t_Q60wUf' className='red-bg text-center text-white font-bold text-xl md:text-2xl px-10 py-3 rounded-3xl hover:bg-red-500 active:bg-red-700 hover:shadow-xl active:shadow-md hover:scale-105 active:scale-100 transition-all duration-200'>Register Now</Link>
        </section>
        <section className='flex flex-col items-center justify-center w-full py-10 md:py-20 backdrop-blur-md gap-10'>
          <Experience />
        </section>
        <section className='flex flex-col items-center justify-center w-full self-center gap-4 md:gap-10 py-10 md:py-20 bg-white/5 backdrop-blur-md'>
          <div className='flex flex-col items-center justify-center w-full gap-5 md:w-9/12'>
            <h2 className='text-2xl md:text-5xl font-black text-center tracking-tight text-white'>Benefits Of Learning This Information</h2>
            <span className='text-base md:text-2xl font-normal text-center text-neutral-200'>Over 1000+ people have attended this session</span>
          </div>
          <div className='flex flex-col md:flex-row flex-wrap items-center justify-center md:w-9/12 w-full gap-5 md:gap-10'>
            {
              benifits.map((item, index) => {
                return (
                  <div key={index} className='flex flex-col items-center justify-center w-full md:w-[31%] gap-5'>
                    <div className='flex flex-col items-center justify-center w-2/12'>
                      <img src={item.img} alt={item.h1} className='w-full' draggable={false} />
                    </div>
                    <div className='flex flex-col items-center justify-center w-full'>
                      <h3 className='text-xl md:text-2xl font-bold text-center text-white'>{item.h1}</h3>
                      <p className='text-base md:text-lg font-normal text-center text-neutral-200'>{item.p}</p>
                    </div>
                  </div>
                )
              })
            }
            <Link href='https://us06web.zoom.us/meeting/register/tZEtd--ppzgvHdagzP5cC9SbAmH3t_Q60wUf' className='red-bg text-center text-white font-bold text-xl md:text-2xl px-10 py-3 rounded-3xl hover:bg-red-500 active:bg-red-700 hover:shadow-xl active:shadow-md hover:scale-105 active:scale-100 transition-all duration-200'>Register Now</Link>
          </div>
        </section>
      </div>
      <section className='flex flex-col items-center justify-center w-full webinar-background'>
        <div className='flex flex-col items-center justify-center bg-black/70 gap-5 md:gap-10 w-full flex-1 px-4 lg:px-[200px] py-10 md:py-20'>
          <div className='flex flex-col items-center justify-center w-full md:w-9/12 gap-5 border-[15px] rounded-lg border-orange-600 p-2 md:p-10 bg-white/5'>
            <h2 className='text-xl md:text-3xl font-black text-center tracking-tight red-text'>In 2 hours, get clarity on:</h2>
            <div className='flex flex-col gap-5'>
              {
                clarity.map((item, index) => {
                  return (
                    <div key={index} className='flex flex-row items-center gap-1 md:gap-2'>
                      <BsCheck className='text-2xl md:text-5xl red-text' />
                      <p className='text-base md:text-2xl flex-1 font-medium text-white'>{item}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
      <div className='webinar-background-2 flex flex-col'>
        <section className='flex flex-col items-center justify-center w-full gap-10 px-5 py-10 md:py-20 bg-white/5 backdrop-blur-md'>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 md:w-11/12">
            <div className={`flex flex-col w-full md:w-6/12 gap-10 rounded-xl`}>
              <img src="https://i.ibb.co/RT3XGxt/2.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
              <Link href='https://us06web.zoom.us/meeting/register/tZEtd--ppzgvHdagzP5cC9SbAmH3t_Q60wUf' className='red-bg text-center hidden md:block text-white font-bold text-xl md:text-2xl px-10 py-3 rounded-3xl hover:bg-red-500 active:bg-red-700 hover:shadow-xl active:shadow-md hover:scale-105 active:scale-100 transition-all duration-200'>Register Now</Link>
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <p className={`text-lg md:text-2xl red-text font-black`}>Hi, I'm Akassh Ashok Gupta</p>
              <p className={`text-xl md:text-3xl text-neutral-200`}>I'm on a mission to help 1,00,000 people live life on their own terms with a dynamic online authority </p>
              <p className={`text-base md:text-xl text-neutral-300 font-normal`}>
                When I was in my early 30s and at a leadership level with one of the top companies, i faced a mid-life crisis questioning my level of happiness and i have built a strong method and a model that not only fulfills your money goals but also provides you with relentless excitement, joy and fuflfillment doing what you love.<br />I re-started my life for good and have embarked on the mission to teach people the same.<br />In the last few year,s i have been able to attract 1MN+ people to follow my content and coaching programs with 10,000+ mentees who learn from me everyday and uplift their career and businesses and i believe there's more that i can offer as value to ensure everyone is able to live with the sheer joy of freedom.<br />If you resonate with this idea, then I would like to personally invite you to this Free Webinar to experience my secret formula of  "Building a Money Engine" using Youtube which is helping all the business owners, creators, experts, coaches, and working professionals all around the world.
              </p>
              <Link href='https://us06web.zoom.us/meeting/register/tZEtd--ppzgvHdagzP5cC9SbAmH3t_Q60wUf' className='red-bg text-center md:hidden block text-white font-bold text-xl md:text-2xl px-10 py-3 rounded-3xl hover:bg-red-500 active:bg-red-700 hover:shadow-xl active:shadow-md hover:scale-105 active:scale-100 transition-all duration-200'>Register Now</Link>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-11/12">
            <SocialMediaDetails />
          </div>
        </section>
        <section className='flex flex-col items-center justify-center w-full gap-10 px-5 py-10 md:py-20 backdrop-blur-md'>
          <div className={`flex flex-col gap-10`}>
            <h2 className='text-xl md:text-3xl text-center text-red-500/90 font-bold'>
              Featured Testimonials From The Community & Clients
            </h2>
            <div className="flex flex-col">
              <Testimonials />
            </div>
            <Link href='https://us06web.zoom.us/meeting/register/tZEtd--ppzgvHdagzP5cC9SbAmH3t_Q60wUf' className='red-bg text-center text-white font-bold w-full self-center md:w-5/12 text-xl md:text-2xl px-10 py-3 rounded-3xl hover:bg-red-500 active:bg-red-700 hover:shadow-xl active:shadow-md hover:scale-105 active:scale-100 transition-all duration-200'>Register Now</Link>
          </div>
        </section>
      </div>
      <section className='flex flex-col items-center justify-center w-full webinar-background'>
        <div className='flex flex-col items-center justify-center bg-black/70 gap-5 md:gap-10 w-full flex-1 px-4 lg:px-[200px] py-10 md:py-20'>
          <span className='text-xl md:text-3xl font-bold text-center rounded-md red-bg text-white px-5'>Join Free Webinar</span>
          <div className='flex flex-col items-center justify-center w-full gap-2'>
            <h2 className='text-2xl md:text-4xl font-bold text-center text-white md:leading-[55px]'>All you need is an intent to thrive and <span className='red-text'>2 hours</span> to turn the struggle of trying to build online business model into the most fulfilling and interesting project you have ever been part of.</h2>
            <p className='text-base md:text-2xl font-normal text-center text-white md:w-9/12'>
              All I need is just 2 hours to show you this Game-Chaning Method
            </p>
          </div>
          <div className='flex flex-col items-center justify-center w-full md:w-9/12'>
            <img src='https://i.ibb.co/pdXR2sN/1.png' alt='What You Will Learn In The Webinar' className='w-full rounded-lg' draggable={false} />
          </div>
          <Link href='https://us06web.zoom.us/meeting/register/tZEtd--ppzgvHdagzP5cC9SbAmH3t_Q60wUf' className='red-bg text-center text-white font-bold text-xl md:text-2xl px-10 py-3 w-full md:w-8/12 rounded-3xl hover:bg-red-500 active:bg-red-700 hover:shadow-xl active:shadow-md hover:scale-105 active:scale-100 transition-all duration-200'>Register Now</Link>
        </div>
      </section>
      <FunnelFooter />
    </main>
  )
}
