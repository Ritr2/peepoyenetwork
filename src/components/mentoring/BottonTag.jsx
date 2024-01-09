'use client'
import React from 'react'
import CountDown from './CountDown'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BottonTag() {
    const [show, setShow] = React.useState(true)
    const variants = {
        hidden: { opacity: 1, y: 125, transition: { duration: 0.5 } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }
  return (
    <motion.div
    variants={variants}    
    initial="hidden"
        animate={show ? 'visible' : 'hidden'}
        className={`flex fixed bottom-0 left-0 z-50 w-full flex-col  md:flex-row items-center justify-center bg-neutral-200 shadow-lg py-2 px-5 md:px-10 gap-2 md:gap-10`}>
        <div className='md:hidden flex absolute z-50 -top-4 right-2 px-2 bg-neutral-400 text-white rounded-xl' onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</div> 
        <span className='text-sm md:text-lg font-bold text-center md:text-left text-black'>⏰ THIS OFFER IS ONLY AVAILABLE FOR THE NEXT</span>
        <CountDown />
        <Link href="https://pages.razorpay.com/successblue" className='flex flex-row w-full golden-bg-button md:max-w-[400px] text-white font-bold md:py-2 py-1 px-1 text-sm md:px-4 md:text-base rounded-lg justify-center items-center gap-2 uppercase'>
          Upgrade to Blue Tier at ₹ 1/day only
        </Link>
      </motion.div>
  )
}
