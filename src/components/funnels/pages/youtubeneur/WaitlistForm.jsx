'use client'
import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function WaitlistForm({ loc = 'ind' }) {
  const emailRef = useRef(null);
  const [formVisible, setFormVisible] = React.useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormVisible(false);
    const listkey = '3z9ea26bddc48d247e753f1f647254d6630cf076d1c61baf309ac5e11a3e18971e';
    const lead_country = loc === 'ind' ? 'India' : 'International';
    let data = {
      listkey,
      email: emailRef.current.value,
      lead_country
    }
    await axios.post('https://peepoye-user-database.onrender.com/add_contact', data)
  }

  const variants1 = {
    hidden: {
      opacity: 0,
      x: '-100%'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'easeInOut',
        duration: 1
      }
    }
  }

  const variants2 = {
    hidden: {
      opacity: 0,
      y: '100%'
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

  return (
    <div className="flex flex-col flex-1 w-full max-w-[600px] overflow-hidden gap-5">
      <AnimatePresence>
        {
          formVisible ?
            <motion.form
              variants={variants1}
              initial="visible"
              animate="visible"
              className="flex flex-col gap-5 max-h-[60vh] px-2 overflow-y-auto" onSubmit={handleSubmit}>
                <h1 className="text-xl md:text-4xl text-center text-neutral-600 font-bold">Exclusive Black Friday Waitlist!</h1>
                <div className="flex flex-col gap-1">
                <input ref={emailRef} type="email" name="email" id="email" className="border-2 border-neutral-400 rounded-lg p-2" placeholder='Email' required />
              </div>
              <div className="flex flex-col gap-1">
                <button type="submit" className="text-base md:text-lg text-center bg-neutral-600 text-white p-2 px-8 rounded-lg drop-shadow-lg shadow-lg hover:bg-neutral-700 hover:shadow-xl hover:drop-shadow-xl active:bg-neutral-800 active:shadow-2xl active:drop-shadow-2xl active:translate-x-1 active:scale-95">YES! I&apos;M IN!</button>
              </div>
            </motion.form> :
            <motion.div
              variants={variants2}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 bg-stone-200 p-2 rounded-lg">
                <p className="text-base md:text-xl text-center text-neutral-600">Thank you for joining the Exclusive One-Time Youtubeneur Foundation Accelerator Black Friday Waitlist!</p>
              </div>
            </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}
