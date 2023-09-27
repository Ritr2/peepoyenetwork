'use client'
import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import images from '@/utils/experience_images';
import { BsArrowRightCircleFill } from 'react-icons/bs';

export default function Experience() {
  const [visibleRange, setVisibleRange] = React.useState([0, 1]);

  const handlescrollright = () => {
    if (visibleRange[1] < images.length - 1) {
      setVisibleRange([visibleRange[0] + 1, visibleRange[1] + 1]);
    } else {
      setVisibleRange([0, 1]);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleRange[1] < images.length - 1) {
        setVisibleRange([visibleRange[0] + 1, visibleRange[1] + 1]);
      } else {
        setVisibleRange([0, 1]);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [visibleRange]);

  return (
    <section className='md:px-20 w-full'>
      <div className='flex flex-col gap-3 py-3 z-10 w-full shadow-lg drop-shadow-lg border-2 rounded-3xl bg-neutral-300/5 border-stone-200'>
        <h2 className="text-sm md:text-2xl tracking-wide font-bold text-center text-white">A YOUTUBER WITH 20+ YRS OF EXP. CONSULTING TOP BRANDS</h2>
        <div className='flex flex-row items-center px-2'>
          <div className='overflow-hidden flex-1'>
            <div
              className=" hidden md:flex flex-row justify-between w-full items-center gap-4 px-1 md:px-24">
              {images.map((image, index) => (
                <img key={index} src={image} alt="Akassh ashok Gupta" className={`${index === 3 ? 'w-14' : 'w-28'} h-auto`} draggable={false} />
              ))}
            </div>
            <div
              className=" md:hidden flex flex-row justify-between w-full items-center gap-4 px-1 md:px-24 transition-all duration-300">
              <AnimatePresence >
                <motion.div
                  key={visibleRange[0]}
                  initial={{ opacity: 0, x: 300  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5}}
                  className="flex flex-row justify-between w-full items-center gap-4 px-1 md:px-24">
                  <img src={images[visibleRange[0]]} alt="Akassh ashok Gupta" className={`${visibleRange[0] === 3 ? 'w-14' : 'w-24'} h-auto`} draggable={false} />
                  <img src={images[visibleRange[1]]} alt="Akassh ashok Gupta" className={`${visibleRange[1] === 3 ? 'w-14' : 'w-24'} h-auto`} draggable={false} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <BsArrowRightCircleFill className='text-xl md:hidden cursor-pointer text-white' onClick={handlescrollright} />
        </div>
      </div>
    </section>
  )
}
