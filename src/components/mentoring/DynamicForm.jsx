'use client'
import React, { useRef } from 'react'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/navigation';

export default function DynamicForm({ animation = true, closeFunc = false }) {
  const router = useRouter();
  const { ref, inView } = useInView();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [formVisible, setFormVisible] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormVisible(false);
    const first_name = nameRef.current.value;
    const email = emailRef.current.value;

    const data = {
      listkey: "3z23b92183b64713c40ed71feef5794847a9f98c9edd98244826c9cc05288735d8",
      email,
      first_name,
    }
    axios.post('https://peepoye-user-database.onrender.com/add_contact', data)
    if (closeFunc) {
      setTimeout(() => {
        closeFunc(false);
      }, 2000);
    }
    router.push('/guide-x?product=mentorship');
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
              className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1">
                <input ref={nameRef} type="text" name="first_name" id="firstName" className="border-2 border-neutral-400 rounded-lg p-2" placeholder="First Name" required />
              </div>
              <div className="flex flex-col gap-1">
                <input ref={emailRef} type="email" name="email" id="email" className="border-2 border-neutral-400 rounded-lg p-2" placeholder='Email' required />
              </div>
              <div className='flex flex-row w-full justify-center gap-1'>
                <input type='checkbox' required name='privacy' />
                <p className='text-xs md:text-sm font-normal text-left text-neutral-800'>I agree to Peepoye Network's <a href='/privacy-policy' className='text-blue-500 hover:underline' target='_blank' rel='noreferrer'>Privacy Policy</a></p>
              </div>
              <div className="flex flex-col gap-1">
                <button type="submit" className="text-base md:text-lg text-center bg-neutral-600 text-white p-2 px-8 rounded-lg drop-shadow-lg shadow-lg hover:bg-neutral-700 hover:shadow-xl hover:drop-shadow-xl active:bg-neutral-800 active:shadow-2xl active:drop-shadow-2xl active:translate-x-1 active:scale-95">YES! I&apos;M IN!</button>
              </div>
            </motion.form> :
            <motion.div
              variants={animation ? variants2 : ''}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 bg-stone-200 p-2 rounded-lg">
                <p className="text-base md:text-lg text-center text-neutral-600">Thank you for subscribing to our Weekly Mentoring Program. You will receive an email from us shortly.</p>
              </div>
            </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}
