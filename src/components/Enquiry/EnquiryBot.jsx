'use client'
import React, { useEffect } from 'react'
import EnquiryForm from '@/components/EnquiryForm'
import enquiryformData from '@/utils/enquiry_form/enquiryformData'
import { IoClose } from 'react-icons/io5'
import {AnimatePresence, motion} from 'framer-motion'

export default function EnquiryBot() {
  const [show, setShow] = React.useState(false)
  const [hover, setHover] = React.useState(false)
  const [bounce, setBounce] = React.useState(false)
  const [bounceCount, setBounceCount] = React.useState(0)

  useEffect(() => {
    if (bounceCount < 4) {
      if (!bounce) {
        setTimeout(() => {
          setBounce(true)
          setHover(true)
          setBounceCount(bounceCount + 1)
        }, 2000)
      }
    }
    if (bounce) {
      setTimeout(() => {
        setBounce(false)
        setHover(false)
      }, 3000)
    }
  }, [show, bounce])

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

  return (
    <>
    <div className={`fixed bottom-10 right-10 z-10 rounded-full hover:scale-105 cursor-pointer ${bounce ? 'animate-bounce': ''}`} onClick={() => setShow(true)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src="https://i.ibb.co/xS9gmWD/enquiry.png" alt="EnquiryBot" className='w-10 md:w-14 h-auto' />
      <div className={`absolute -top-12 -left-5 p-2 rounded-md bg-neutral-500 ${hover ? 'flex' : 'hidden'} justify-center items-center text-white text-xs transition-all duration-300`}>
        Click for help
      </div>
    </div>
    <AnimatePresence>
    {
      show && (
        <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} className='flex flex-col items-center justify-center fixed bottom-0 right-0 z-50 bg-neutral-600 rounded-tl-3xl shadow-2xl w-screen h-screen backdrop-filter backdrop-blur-sm bg-opacity-50'>
          <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden" className=' relativeflex flex-col overflow-hidden w-full md:w-6/12 bg-neutral-200/70 rounded-3xl shadow-2xl p-10'>
            <IoClose className='absolute top-3 right-3 md:top-2 md:right-2 text-4xl text-neutral-700 cursor-pointer hover:text-red-600' onClick={() => setShow(false)} />
            <EnquiryForm data={enquiryformData} closePopup = {setShow} />
          </motion.div>
        </motion.div>
      )
    }
    </AnimatePresence>
    </>
  )
}
