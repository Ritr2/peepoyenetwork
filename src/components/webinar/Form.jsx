'use client'
import React, { Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import DynamicForm from './DynamicForm';


export default function Form({buttonColor={normal:'red-bg', hover:'red-400', active:'red-900'}, text='Register Now', textSize='text-base md:text-3xl'}) {
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
      <button className={`flex rounded-lg py-4 ${textSize} font-bold flex-row items-center justify-center gap-2 w-full text-white ${buttonColor.normal} hover:bg-${buttonColor.hover} hover:shadow-lg hover:drop-shadow-lg hover:scale-105 active:bg-${buttonColor.active} active:shadow-none active:drop-shadow-none active:scale-95`} onClick={() => setFormVisible(true)}>{text}</button>
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
              className='relative flex flex-col items-center justify-center gap-5 max-w-3xl bg-white p-6 md:px-14 md:py-10 rounded-lg shadow-lg'>
              <IoClose className='absolute top-1 right-1 md:top-2 md:right-2 text-3xl text-neutral-700 cursor-pointer hover:text-red-600' onClick={() => setFormVisible(false)} />
              <div className='flex flex-col items-center justify-center gap-5'>
                <h1 className='text-xl md:text-3xl font-bold text-center text-neutral-700'>Signup for LIVE Webinar</h1>
                <p className='text-base md:text-lg font-normal text-center text-neutral-700'>Take the first step towards your success by filling out the form</p>
                <DynamicForm animation={false} closeFunc={setFormVisible} />
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </Fragment>
  )
}
