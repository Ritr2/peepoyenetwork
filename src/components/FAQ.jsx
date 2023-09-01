'use client'
import React, { Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import parse from 'html-react-parser'
import { AiFillCaretRight, AiOutlineDown } from 'react-icons/ai';

export default function FAQ({ data, bgcolor = false, textcolor = false }) {
  const { ref, inView } = useInView();

  const [show, setShow] = React.useState(new Array(data.length).fill(false));

  return (
    <div ref={ref} className='flex flex-col w-full gap-2'>
      {
        data.map((item, index) => (
          <Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, x: '-100%', }}
              animate={inView ? { opacity: 1, x: 0, transition: { type: 'spring', duration: 0.7, delay: index * 0.3 } } : { opacity: 0, x: '-100%' }}
              onClick={() => {
                setShow(prev => {
                  prev[index] = !prev[index];
                  return [...prev];
                })
              }}
              className={`w-full cursor-pointer h-full ${bgcolor? bgcolor.question : 'bg-stone-300'} p-4 rounded-lg flex justify-between items-center`}>
              <h2 className={`text-base md:text-2xl font-medium ${textcolor? textcolor.question : 'text-neutral-700'}`}>{index + 1}. {parse(item.question)}</h2>
              <AiOutlineDown className={`text-base md:text-2xl ${textcolor? textcolor.question : 'text-neutral-700'} w-6 h-6 md:w-8 md:h-8 transform transition-all duration-1000 ease-in-out ${show[index] ? 'rotate-180' : ''}`} />
            </motion.div>
            <AnimatePresence>
              {
                show[index] && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto', transition: { duration: 0.7 } }}
                    exit={{ height: 0, transition: { duration: 0.7 } }}
                    className={`w-full h-full ${bgcolor? bgcolor.answer : 'bg-stone-200'} rounded-lg overflow-hidden`}
                  >
                    <p className={`text-lg md:text-xl font-light p-4 ${textcolor? textcolor.answer : 'text-neutral-700'}`}>
                      {parse(item.answer)}
                    </p>
                    {
                      item.bulletPoints && (
                        <div className='flex flex-col gap-2 p-4 pt-0'>
                          {
                            item.bulletPoints.map((bullet, index) => (
                              <div key={index} className='flex flex-row gap-2'>
                                <AiFillCaretRight className={`text-2xl w-3 ${textcolor? textcolor.answer : 'text-neutral-700'}`} />
                                <p className={`text-base md:text-lg font-medium ${textcolor? textcolor.answer : 'text-neutral-700'}`}>{parse(bullet)}</p>
                              </div>
                            ))
                          }
                        </div>
                      )
                    }
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
