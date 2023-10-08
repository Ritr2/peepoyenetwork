'use client'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Notification({ notification, setNotificationStatus }) {
  let color;
  if (notification.color === 'red') {
    color = 'bg-red-700'
  }
  else {
    color = 'bg-green-700'
  }

  const variants = {
    hidden: { y: -500 },
    visible: { y: 0 },
    exit: { y: -500 },
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotificationStatus(false)
    }, 5000);
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5, type: 'spring', ease: 'easeInOut' }}
      className={`fixed max-w-full xl:max-w-sm top-24 right-2 md:right-12 rounded-lg ${color} p-5 z-50`} >
      <p className='w-full text-white'>{notification.msg}</p>
    </motion.div>
  )
}
