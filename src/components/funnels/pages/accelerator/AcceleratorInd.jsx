'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import PaymentSection from './PaymentSection'

export default function AcceleratorInd() {
  const firstSectionData = [
    {
      image: 'https://i.postimg.cc/qvd6s12Q/1.png',
      p1: '21 Modules in 3 Days',
      p2: 'to learn everything about youtube',
    },
    {
      image: 'https://i.postimg.cc/XYcGQ98W/2.png',
      p1: 'A Copy-Paste Method',
      p2: 'to strategize your youtube growth',
    }
    ,
    {
      image: 'https://i.postimg.cc/Zqb9g07d/3.png',
      p1: 'Lifetime Access',
      p2: 'to the course to learn and implement ',
    }
    ,
    {
      image: 'https://i.postimg.cc/R0g3z9yb/4.png',
      p1: 'Weekly Coffee Chats',
      p2: 'to solve all your doubts on a live call.',
    }
  ]
  return (
    <div className='flex flex-col w-full'>
      <div className="flex flex-col w-full justify-center py-3 items-center bg-red-700 overflow-hidden">
        <motion.h1 className={`text-4xl text-white font-medium`}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.5 }}>
          Do you know that 99 out of 100 people start YouTube the wrong way?
        </motion.h1>
      </div>
      <section className="flex flex-col py-2 pb-10 px-28 gap-10">
        <div className="flex flex-col gap-10">
          <motion.h2 className=' text-3xl text-center'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 0.5 }}>
            Become one of those <span className='text-red-700 font-bold'>1% successful YouTubers</span> and Influencers before it&apos;s TOO LATE!
          </motion.h2>
          <motion.p className='text-5xl text-center font-bold'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 0.5 }}>
            ACCELERATE YOUR ONLINE GROWTH <br />STRATEGY USING YOUTUBE JUST IN 3 DAYS
          </motion.p>
        </div>
        <div className="flex flex-row justify-center items-center gap-10">
          <motion.div className="flex flex-col gap-5 w-4/12 "
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 1 }}
          >
            {
              firstSectionData.map((item, index) => (
                <div key={index} className="flex flex-row justify-center items-center gap-2 bg-red-700/90 text-white px-5 py-3 rounded-md hover:scale-105">
                  <div className="flex flex-col gap-1">
                    <img src={item.image} alt={index + 1} className='w-10 h-auto' />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className='text-lg font-bold'>{item.p1}</span>
                    <span className='text-base'>{item.p2}</span>
                  </div>
                </div>
              ))
            }
          </motion.div>
          <motion.div className="flex flex-col gap-5 flex-1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 1 }}
          >
            <img src="https://i.postimg.cc/g0X19Fhm/06e2c4da0e7eea3255aa3117ce558def.png" alt="akasshashokgupta" className='w-full h-auto' />
          </motion.div>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className="flex flex-col items-center cursor-pointer bg-red-700 rounded-lg px-20 py-2 hover:scale-105">
            <span className='text-white text-3xl font-bold'>PRE-BOOK NOW</span>
            <span className='text-white text-base'>and reserve your spot at a discounted price!</span>
          </Link>
        </div>
      </section>
      <section className="flex flex-col py-20 px-28 gap-5 bg-neutral-300">
      <PaymentSection />
      </section>
      <section className="flex flex-col py-20 px-28 gap-5 bg-neutral-300">
        <div className="flex flex-col gap-2">
          <h2 className='text-4xl text-center text-neutral-900 font-bold'>
            SPEAK WITH YOUR EXPERT- AKASSH ASHOK GUPTA
          </h2>
          <p className='text-2xl text-center text-neutral-900'>
            Weekly Live Coffee Chats with Akassh + Free Access to all the recorded sessions
          </p>
        </div>
        <div className="flex flex-row gap-5">
        </div>
      </section>
    </div>
  )
}
