'use client'
import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { usePathname, useRouter } from 'next/navigation';
import ls from 'localstorage-slim'

export default function DynamicForm({ animation = true, closeFunc = false }) {
  const pathname = usePathname();
  const forwardingLink = '/viral-video-script'
  const router = useRouter();
  const { ref, inView } = useInView();
  const firstNameRef = useRef();
  const emailRef = useRef();
  const [formVisible, setFormVisible] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormVisible(false);
    const first_name = firstNameRef.current.value;
    const email = emailRef.current.value;
    ls.set('name', first_name);
    ls.set('email', email);
    const listkey = '3zd68638338d9c5d0ef377736a83bc4fa184c645a9d6cac1bacd7d9e9f095821cd';

    let data = {
      listkey,
      email,
      first_name,
    }
    axios.post('https://peepoye-user-database.onrender.com/add_contact', data)
    if (closeFunc) {
      setTimeout(() => {
        closeFunc(false);
      }, 2000);
    }
    router.push(forwardingLink);
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
    <div ref={ref} className="flex flex-col flex-1 w-full overflow-hidden">
      <AnimatePresence>
        {
          formVisible ?
            <motion.form
              variants={animation ? variants1 : ''}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col gap-5 max-h-[60vh] px-2 overflow-y-auto" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-1 w-full">
                <input ref={firstNameRef} type="text" name="first_name" id="firstName" className="border-2 flex-1 border-neutral-400 rounded-lg p-2" placeholder="Name" required />
              </div>
              <div className="flex flex-col gap-1">
                <input ref={emailRef} type="email" name="email" id="email" className="border-2 border-neutral-400 rounded-lg p-2" placeholder='Email' required />
              </div>
              <div className="flex flex-col gap-1">
                <button type="submit" className="text-base md:text-lg text-center red-bg text-white p-2 px-8 rounded-lg drop-shadow-lg shadow-lg hover:bg-red-700 hover:shadow-xl hover:drop-shadow-xl active:bg-red-800 active:shadow-2xl active:drop-shadow-2xl active:translate-x-1 active:scale-95">Download now</button>
                {/* <p className="text-sm md:text-base text-center text-neutral-600">Instructions: I will send you an email with the Zoom Link with Schedule of Webinar within 15 minutes and remind you as well so you don't miss this one-time opportunity.</p> */}
              </div>
            </motion.form> :
            <motion.div
              variants={animation ? variants2 : ''}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 bg-stone-200 p-2 rounded-lg">
                <p className="text-base md:text-lg text-center text-neutral-600">Redirecting....</p>
              </div>
            </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}
