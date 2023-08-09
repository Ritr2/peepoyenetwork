'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CollabQueryForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const { ref, inView } = useInView();
  const [formVisible, setFormVisible] = React.useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormVisible(false);
    const data = {
      api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
      email,
      first_name: name,
      fields: {
        phone
      },
    }
    try {
      const res = await fetch('https://api.convertkit.com/v3/forms/4877976/subscribe/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
    }
    catch (err) {
      setFormVisible(true);
      return;
    }
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
    <div ref={ref} className='flex flex-col w-full'>
      <AnimatePresence>
        {
          formVisible ?
            <motion.form
              variants={variants1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className='flex flex-col w-full gap-5'
              onSubmit={handleSubmit}
            >
              <input type="text" placeholder="Name" className='w-full px-3 py-2 rounded-lg bg-stone-100 text-neutral-700' value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="email" placeholder="Email" className='w-full px-3 py-2 rounded-lg bg-stone-100 text-neutral-700' value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="tel" placeholder="Phone" className='w-full px-3 py-2 rounded-lg bg-stone-100 text-neutral-700' value={phone} onChange={(e) => setPhone(e.target.value)} required />
              <div className='flex flex-col md:self-start self-center items-center justify-center gap-3'>
                <button className="flex rounded-lg p-2 px-3 text-lg md:text-xl text-stone-800 flex-row items-center justify-center gap-2 w-full font-medium bg-yellow-500 hover:bg-yellow-300 hover:scale-105 active:bg-yellow-600 active:scale-95 transition-all duration-100">
                  Get our Media Kit
                </button>
              </div>
            </motion.form>
            : <motion.div
              variants={variants2}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 bg-stone-200 p-2 rounded-lg">
                <p className="text-base md:text-lg text-left text-neutral-600 bg-green-300 p-3 rounded-lg">Thank you for your interest in collaborating with us. We will get back to you shortly.</p>
              </div>
            </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}
