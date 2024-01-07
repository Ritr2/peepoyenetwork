'use client'
import React, { Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import DynamicForm from './DynamicForm';
import Link from 'next/link';


export default function AreYouSure() {
  const [formVisible, setFormVisible] = React.useState(false);
  const variants = {
    hidden: {
      opacity: 0,
      y: '-100%'
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 1
      }
    }
  }

  const points = [
    'Blue Card with 12 Free Live Workshops, valued at a minimum of INR 10k.',
    'Exclusive Private Telegram Community Access',
    'Participation in our Gamified Rewards Program',
    'Lifetime access to the Mentorship Archive to ensure you never miss any content',
    `Permanent program access that you'll retain forever unlike Free Mentorship`,
  ]

  return (
    <Fragment>
      <button className="text-base md:text-lg text-center text-neutral-300 hover:underline " onClick={() => setFormVisible(true)}>No Thanks, I&apos;ll Apply for Free Grey Tier</button>
      <AnimatePresence>
        {
          formVisible &&
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center backdrop-filter backdrop-blur-sm'>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className='relative flex flex-col items-center justify-center gap-5 max-w-5xl bg-white p-6 md:px-14 md:py-10 rounded-lg shadow-lg'>
              <IoClose className='absolute top-1 right-1 md:top-2 md:right-2 text-3xl text-neutral-700 cursor-pointer hover:text-red-600' onClick={() => setFormVisible(false)} />
              <div className='flex flex-col items-center justify-center gap-2 md:gap-10'>
                <div className='flex flex-col gap-5'>
                <h1 className='text-xl md:text-3xl font-bold text-center text-neutral-700'>Are you absolutely certain you want to pass up the extraordinary opportunity of our Premium Blue Tier that cost only Rs 1 per day?</h1>
                <p className='text-base md:text-xl font-normal text-center blue-text'>Remember, declining means missing out on these exclusive benefits given below which may never be offered at such a low price ever again!</p>
                </div>
                <div className='flex flex-col w-full gap-2'>
                {
                  points.map((point, index) => (
                    <div key={index} className='flex flex-row items-center gap-2'>
                      <div className='flex flex-row gap-2'>
                        <div className='w-3 h-3 rounded-full blue-bg'></div>
                      </div>
                      <p className='text-base md:text-xl font-normal text-center text-neutral-700'>{point}</p>
                    </div>
                  ))
                }
                  </div>
                <div className='flex flex-col md:flex-row items-center justify-center gap-5 w-full'>
                  <button className='text-base md:text-lg text-center golden-bg text-white p-2 px-8 rounded-lg drop-shadow-lg shadow-lg hover:shadow-xl hover:drop-shadow-xl active:shadow-2xl active:drop-shadow-2xl active:translate-x-1 active:scale-95 w-6/12 uppercase' onClick={() => setFormVisible(false)}>I want to upgrade to Blue!</button>
                  <Link href='https://forms.gle/5Kh5uPWoFkB5P6ZS8' className='text-base md:text-lg text-center bg-neutral-400 text-white p-2 px-8 rounded-lg drop-shadow-lg shadow-lg hover:bg-neutral-200 hover:shadow-xl hover:drop-shadow-xl active:bg-neutral-400 active:shadow-2xl active:drop-shadow-2xl active:translate-x-1 active:scale-95 flex-1 capitalize'>
                    Yes, I want to apply for Free Grey Mentorship
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </Fragment>
  )
}
