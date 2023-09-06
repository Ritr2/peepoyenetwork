'use client'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import PaymentSection from './PaymentSection'
import { Sora } from 'next/font/google'
import dynamic from "next/dynamic";
import style from '@/styles/AcceleratorInd.module.css'
import { useInView } from 'react-intersection-observer'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import RibbonBonus from '../../RibbonBonus'
import WhoIsThisFor from './WhoIsThisFor'
import YoutubeneurStruction from './YoutubeneurStruction'
import Testimonials from './Testimonials'
import FAQ from '@/components/FAQ'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const sora = Sora({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
})

export default function AcceleratorInd() {
  const { ref, inView } = useInView();
  const [videoMutted, setVideoMutted] = React.useState(true)
  const [playing, setPlaying] = React.useState(true)
  const [notClosed, setNotClosed] = React.useState(false)


  const firstSectionData = [
    {
      image: 'https://i.ibb.co/VLzWq14/1.png',
      p1: '21 Modules in 3 Days',
      p2: 'to learn everything about youtube',
    },
    {
      image: 'https://i.ibb.co/sQqgGHN/2.png',
      p1: 'A Copy-Paste Method',
      p2: 'to strategize your youtube growth',
    }
    ,
    {
      image: 'https://i.ibb.co/hBBNXCq/3.png',
      p1: 'Lifetime Access',
      p2: 'to the course to learn and implement ',
    }
    ,
    {
      image: 'https://i.ibb.co/sW1LcLQ/4.png',
      p1: 'Weekly Coffee Chats',
      p2: 'to solve all your doubts on a live call.',
    }
  ]

  const faqData = [
    {
      question: 'What language are the courses conducted in?',
      answer: 'All our courses are conducted in English, ensuring that learners from around the world can easily access and benefit from the valuable content provided by Youtubeneur Community.',
    },
    {
      question: 'What are the schedules of the Weekly Coffee Chats?',
      answer: `We provide a clear and up-to-date schedule for our weekly coffee chats in the Youtubeneur community. These interactive sessions are designed to foster networking, knowledge sharing, clear doubts and collaboration among members.`,
    },
    {
      question: `What if I can't attend a coffee chat due to emergencies?`,
      answer: `No worries! We understand that life can be unpredictable. In case you miss a live coffee chat, we have you covered. All coffee chat sessions are recorded and archived for the benefit of Youtubeneur Skool members. You can access these archives at your convenience to catch up on any missed sessions.`,
    }
  ]

  return (
    <div className='flex flex-col w-full'>
      <div className="flex flex-col w-full justify-center py-3 items-center bg-red-500/90 overflow-hidden">
        <motion.h1 className={`text-lg md:text-2xl text-center px-2 text-white font-light ${sora.className}`}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.5 }}>
          ⚠️Do you know that <span className='italic font-medium'>99 out of 100 people</span> start YouTube the wrong way?
        </motion.h1>
      </div>
      <section ref={ref} className="flex flex-col py-10 px-5 md:px-40 md:gap-16 gap-5 bg-gradient-to-r from-red-500/20 to-neutral-200">
        <div className="flex flex-col items-center gap-10">
          <motion.h2 className='text-lg md:text-2xl px-5 py-2 text-center bg-yellow-300 shadow-md rounded-md'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 0.5 }}>
            Become one of those <span className='text-red-500 font-bold'>1% successful YouTubers</span> and Influencers before it&apos;s TOO LATE!
          </motion.h2>
        </div>
        <div className="flex flex-col items-center gap-5 md:gap-20">
          <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10">
            <motion.div className="flex flex-col gap-5 md:gap-12 flex-1 order-2 md:order-1"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 1 }}
            >
              <p className={`text-2xl text-center md:text-left md:text-5xl text-neutral-800 font-bold ${style.headlineLineHeight} ${sora.className}`}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 1 }}>
                Accelerate your online growth strategy using <br /> <span className={`text-red-500 font-bold ${style.lineBg}`}>YouTube in 3 Days</span>
              </p>
              <div className="flex flex-col items-center md:flex-row flex-wrap gap-5">
                {
                  firstSectionData.map((item, index) => (
                    <div key={index} className="flex flex-row w-10/12 md:w-5/12 items-center gap-2 bg-red-500/90 text-white px-5 py-1 rounded-md hover:scale-105 shadow-md drop-shadow-md">
                      <div className="flex flex-col gap-1">
                        <img src={item.image} alt={index + 1} className='w-auto h-10' />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className='text-lg'>{item.p1}</span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </motion.div>
            <motion.div className={`flex order-1 md:order-2 flex-col z-40 md:h-auto ${(inView || notClosed) ? 'md:flex-1 relative h-52' : ' fixed top-4 right-4 h-24 md:h-48 w-40 md:w-80'}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 1 }}
            >
              <ReactPlayer
                url='https://vimeo.com/860895143?share=copy'
                width={'100%'}
                height={'100%'}
                playing={playing}
                muted={videoMutted}
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"
                onClick={() => setVideoMutted(false)}
              >
                {
                  videoMutted ? (
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <p className='text-2xl font-bold select-none cursor-pointer text-white bg-white/30 rounded-lg p-5'>Click to 🔊 unmute</p>
                    </div>
                  ) : (
                    <div className="w-full h-full cursor-pointer"
                      onClick={() => setPlaying(!playing)}
                    />
                  )
                }
              </div>
              {
                !inView && (
                  <AiFillCloseCircle className='absolute top-2 right-2 text-white text-2xl cursor-pointer' onClick={() => setNotClosed(true)} />
                )
              }
            </motion.div>
          </div>
          <div className="flex flex-col gap-5 w-full md:w-6/12">
            <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className="flex flex-col items-center cursor-pointer bg-red-600 rounded-lg px-5 py-3 hover:scale-105 shadow-sm drop-shadow-sm">
              <span className='text-white text-xl md:text-3xl font-medium'>Book Now at 50% discount</span>
              <span className='text-white text-sm md:text-base font-light'>and reserve your spot at a discounted price!</span>
            </Link>
          </div>
        </div>

      </section>
      <section className="flex flex-col py-10 px-5 md:px-40 gap-5">
        <div className={`flex flex-col gap-2 ${sora.className}`}>
          <h2 className='text-xl md:text-3xl text-center text-neutral-700 font-bold'>
            SPEAK WITH YOUR EXPERT- <span className='text-red-500/90'>AKASSH ASHOK GUPTA</span>
          </h2>
          <p className='text-sm md:text-lg text-center text-neutral-800'>
            Weekly Live Coffee Chats with Akassh + Free Access to all the recorded sessions
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-5 items-center">
          <div className='flex flex-col flex-1 items-center'>
            <img src="https://images.clickfunnels.com/cdn-cgi/image/f=auto,q=80/https://statics.myclickfunnels.com/image/1094198/file/670d93e0195cc8ddcc082993e48b1810.png" alt="Akassh Ashok Gupta" className='w-full md:w-10/12' />
          </div>
          <div className='flex flex-col flex-1 gap-5 md:gap-6'>
            <h3 className={`text-base md:text-xl text-center md:text-left text-neutral-700 font-bold ${sora.className}`}>
              Let Akassh answer your biggest and smallest &quot;YouTube Growth&quot; Challenges/Doubts/Questions.
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-2">
                <BsCheckLg className='text-red-500 text-2xl w-5 md:text-4xl md:w-10' />
                <span className=' flex-1 text-sm md:text-lg text-neutral-800'>Need help in applying the course in your unique youtube niche?<br /> <span className='font-semibold'> Ask Akassh directly!</span></span>
              </div>
              <div className="flex flex-row gap-2">
                <BsCheckLg className='text-red-500 text-2xl w-5 md:text-4xl md:w-10' />
                <span className=' flex-1 text-sm md:text-lg text-neutral-800'>Feeling alone in this struggle? <br /><span className='font-semibold'> Celebrate your wins and get rewarded in these calls.</span></span>
              </div>
              <div className="flex flex-row gap-2">
                <BsCheckLg className='text-red-500 text-2xl w-5 md:text-4xl md:w-10' />
                <span className=' flex-1 text-sm md:text-lg text-neutral-800'>Not able to stay disciplined?<br /><span className='font-semibold'> Get your accountability partner who will always keep a check on you.</span></span>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full md:w-8/12">
              <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className="flex flex-col items-center cursor-pointer bg-red-600 rounded-lg px-5 py-3 hover:scale-105 shadow-sm drop-shadow-sm">
                <span className='text-white text-xl md:text-3xl font-medium'>Book Now at 50% discount</span>
                <span className='text-white text-sm md:text-base font-light'>and reserve your spot at a discounted price!</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col py-10 px-5 md:px-40 gap-5 bg-gradient-to-r from-red-500/20 to-neutral-200">
        <div className={`flex flex-col gap-10 items-center`}>
          <div className={`flex flex-col gap-2 ${sora.className}`}>
            <h2 className='text-xl md:text-4xl text-center text-red-500/90 font-bold'>
              THIS IS NOT IT!
            </h2>
            <p className='text-sm md:text-xl text-center text-neutral-800'>
              Also get some amazing bonuses with this course!
            </p>
          </div>
          <div className="flex flex-col gap-10 md:gap-20 w-10/12">
            <RibbonBonus data={['community2', 'donot', 'scriptSecret', 'acc1', 'acc2', 'acc3', 'acc4', 'acc5', 'acc6',]} />
          </div>
          <div className="flex flex-col gap-5 w-full md:w-8/12">
            <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className="flex flex-col items-center cursor-pointer bg-red-600 rounded-lg px-5 py-3 hover:scale-105 shadow-sm drop-shadow-sm">
              <span className='text-white text-xl md:text-3xl font-medium'>Book Now at 50% discount</span>
              <span className='text-white text-sm md:text-base font-light'>and reserve your spot at a discounted price!</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col py-10 px-5 md:px-40 gap-5 md:gap-10">
        <div className={`flex flex-col items-center gap-2 ${sora.className}`}>
          <h2 className={`text-base md:text-xl text-red-500 font-medium`}>
            <span className='font-semibold'>Meet Your Coach, Guide, and Mentor</span>
          </h2>
          <h3 className={`text-3xl md:text-5xl text-neutral-700 font-medium`}>
            Akassh Ashok Gupta
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className={`flex flex-col w-full md:w-6/12 rounded-xl`}>
            <img src="https://i.ibb.co/SNBgrWD/akassh-1.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
          </div>
          <div className="flex flex-col flex-1">
            <p className={`text-base md:text-xl text-neutral-600 font-normal`}>
              Hi! I’m Akassh, and I thank you for taking an interest in reading about me!<br />In my career, I have been fortunate enough to <span className='text-red-500/90 font-bold'>experience 20+ years of corporate life</span> at leadership positions consulting big firms and <span className='text-red-500/90 font-bold'>5 years of YouTube experience</span>, gaining over <span className='text-red-500/90 font-bold'>1 million+ subscribers</span>.<br />I attribute much of these experiences to how I run my day, every day.<br />While most of us feel lost and feel like we are wasting time, I have, over the past 20 years, built a wonderful relationship with time, processes, methods, and systems.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className={`flex flex-col w-full md:w-6/12 rounded-xl order-1 md:order-2`}>
            <img src="https://i.ibb.co/3TcB93w/akassh-2.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
          </div>
          <div className="flex flex-col flex-1 order-2 md:order-1">
            <p className={`text-base md:text-xl text-neutral-600 font-normal`}>Through those systems and processes, I have been able to create <span className='text-red-500/90 font-bold'>multiple revenue streams</span> for myself by just doing what I love.<br />With the launch of <span className='text-red-500/90 font-bold'>X monetization policy</span>, I dived deeper into it and gained a hefty amount from the platform in the first month itself.<br />I am on a mission to <span className='text-red-500/90 font-bold'>educate 1 lac people</span> on how to leverage social media to create multiple revenue streams.<br />In this <span className='text-red-500/90 font-bold'>guidebook</span>, I share how I managed to earn this amount from X, and at the time, I have also shared some interesting case studies of top X influencers and some <span className='text-red-500/90 font-bold'>practical tasks to implement.</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 self-center w-full md:w-8/12">
          <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className="flex flex-col items-center cursor-pointer bg-red-600 rounded-lg px-5 py-3 hover:scale-105 shadow-sm drop-shadow-sm">
            <span className='text-white text-xl md:text-3xl font-medium'>Book Now at 50% discount</span>
            <span className='text-white text-sm md:text-base font-light'>and reserve your spot at a discounted price!</span>
          </Link>
        </div>
      </section>
      <section className="flex flex-col py-10 px-5 md:px-40 gap-5 md:gap-10 bg-gradient-to-r from-red-500/20 to-neutral-200">
        <div className={`flex flex-col gap-2 ${sora.className}`}>
          <h2 className='text-xl md:text-3xl text-center text-red-500/90 font-bold'>
            Who must take this Course?
          </h2>
        </div>
        <div className="flex flex-col">
          <WhoIsThisFor />
        </div>
      </section>
      <section className="flex flex-col pt-10 px-5 md:px-40 gap-5 md:gap-10">
        <div className={`flex flex-col gap-2 ${sora.className}`}>
          <h2 className='text-xl md:text-3xl text-center text-red-500/90 font-bold'>
            YouTubeneur Accelerator Course Structure
          </h2>
        </div>
        <YoutubeneurStruction />
      </section>
      <section className="flex flex-col py-20 px-40 gap-5 bg-neutral-300 bg-gradient-to-r from-red-500/20 to-neutral-200">
        <PaymentSection />
      </section>
      <section className="flex flex-col py-10 px-5 md:px-40 gap-5 md:gap-10">
        <div className={`flex flex-col gap-10 ${sora.className}`}>
          <h2 className='text-xl md:text-3xl text-center text-red-500/90 font-bold'>
            Featured Testimonials From The Community & Clients
          </h2>
          <div className="flex flex-col">
            <Testimonials />
          </div>
        </div>
      </section>
      <section className="flex flex-col py-10 px-5 md:px-40 gap-5 md:gap-10 bg-gradient-to-r from-red-500/20 to-neutral-200">
        <div className={`flex flex-col gap-2 ${sora.className}`}>
          <h2 className='text-xl md:text-3xl text-center text-red-500/90 font-bold'>
            Frequently Asked Questions
          </h2>
        </div>
        <div className={`flex w-full md:w-8/12 self-center flex-col ${sora.className}`}>
          <FAQ data={faqData} bgcolor={{question: 'bg-white', answer: 'bg-neutral-300'}} textSize={{ question: 'text-base md:text-xl', answer: 'text-sm md:text-base' }} />
          </div>
      </section>
    </div >
  )
}
