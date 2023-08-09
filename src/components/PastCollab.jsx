'use client'
import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import images from '@/utils/collaborate_with_us/pastcollab_images';
import { BsArrowRightCircleFill } from 'react-icons/bs';

export default function PastCollab() {
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
    <section className='px-2 md:px-40 w-full'>
      <div className='flex flex-col gap-3 py-3 z-10 w-full shadow-lg drop-shadow-lg rounded-3xl bg-stone-300'>
        <div className='flex flex-row items-center px-2'>
          <div className='overflow-hidden flex-1'>
            <div
              className=" hidden md:flex flex-row justify-between w-full items-center gap-4 px-1 md:px-24">
              {images.map((image, index) => (
                <img key={index} src={image} alt="Akassh ashok Gupta" className={`w-28 h-auto`} draggable={false} />
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
                  <img src={images[visibleRange[0]]} alt="Akassh ashok Gupta" className={`w-28 h-auto`} draggable={false} />
                  <img src={images[visibleRange[1]]} alt="Akassh ashok Gupta" className={`w-28 h-auto`} draggable={false} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <BsArrowRightCircleFill className='text-xl md:hidden cursor-pointer text-neutral-600' onClick={handlescrollright} />
        </div>
      </div>
    </section>
  )
}
