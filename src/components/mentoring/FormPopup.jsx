'use client'
import React, { Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import DynamicForm from './DynamicForm';


export default function FormPopup() {
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

  return (
    <Fragment>
      <button className="text-lg md:text-xl text-center bg-neutral-600 text-white p-2 md:p-4 px-8 rounded-lg drop-shadow-lg shadow-lg hover:bg-neutral-700 hover:shadow-xl hover:drop-shadow-xl active:bg-neutral-800 active:shadow-2xl active:drop-shadow-2xl active:translate-x-1 active:scale-95" onClick={() => setFormVisible(true)}>Join Now</button>
      <AnimatePresence>
      {
        formVisible &&
        <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center backdrop-filter backdrop-blur-sm overflow-hidden'>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        className='relative flex flex-col items-center justify-center gap-5 max-w-3xl bg-white p-6 md:px-14 md:py-10 rounded-lg shadow-lg'>
          <IoClose className='absolute top-1 right-1 md:top-2 md:right-2 text-3xl text-neutral-700 cursor-pointer hover:text-red-600' onClick={() => setFormVisible(false)} />
          <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-xl md:text-3xl font-bold text-center text-neutral-700'>WEEKLY MENTORSHIP PROGRAM</h1>
            <p className='text-base md:text-lg font-normal text-center text-neutral-700'>Take the first step towards your success by filling out the opt-in and joining our weekly mentorship program today</p>
            <DynamicForm animation={false} closeFunc={setFormVisible} />
          </div>
        </motion.div>
      </motion.div>
      }
      </AnimatePresence>
    </Fragment>
  )
}
