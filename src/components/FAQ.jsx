'use client'
import React, { Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import parse from 'html-react-parser'
import { AiOutlineDown } from 'react-icons/ai';

export default function FAQ({ data }) {
  const { ref, inView } = useInView();

  const [show, setShow] = React.useState(new Array(data.length).fill(false));

  const variant1 = {
    initial: {
      opacity: 0,
      x: '-100%',
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
      },
    }
  }

  const variant2 = {
    initial: {
      height: '0%',
    },
    animate: {
      height: '100%',
      transition: {
        duration: 1,
      },
    },
    exit: {
      height: '0%',
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div ref={ref} className='flex flex-col w-full gap-2'>
      {
        data.map((item, index) => (
          <Fragment key={index}>
          <motion.div
            initial= {{opacity: 0, x: '-100%',}}
            animate= { inView ? {opacity: 1, x: 0, transition: {type: 'spring', duration: 0.7, delay: index*0.3}} : {opacity: 0, x: '-100%'}}
            onClick={() => {
              setShow(prev => {
                prev[index] = !prev[index];
                return [...prev];
              })
            }}
            className='w-full cursor-pointer h-full bg-stone-300 p-4 rounded-lg flex justify-between items-center'>
            <h2 className='text-xl md:text-2xl font-bold text-neutral-700'>{index+1}. {parse(item.question)}</h2>
            <AiOutlineDown className={`text-2xl text-neutral-700 w-8 h-8 transform transition-all duration-1000 ease-in-out ${show[index] ? 'rotate-180' : ''}`} />
          </motion.div>
          <AnimatePresence>
          {
              show[index] && (
                <motion.div
                  variants={variant2}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  className='w-full bg-stone-200 rounded-lg'
                >
                  <p className='text-lg md:text-xl font-medium p-4 text-neutral-700'>
                    {parse(item.answer)}
                  </p>
                  </motion.div>
              )
            }
          </AnimatePresence>
          </Fragment>
        )
        )
      }
    </div>
  )
}
