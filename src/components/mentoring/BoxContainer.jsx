'use client'
import React from 'react'
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function BoxContainer({data}) {
  const { ref, inView } = useInView();
  const variantSelector = {
      left: [0,3,6,7,8],
      center: [1,4,7],
      right: [2,5,8]
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
        type: 'spring',
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

  const variants3 = {
    hidden: {
      opacity: 0,
      x: '100%'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        duration: 1
      }
    }
  }


  return (
    <div ref={ref} className="flex flex-col md:flex-row flex-wrap items-center gap-10 justify-between w-full">
      {
        data.map((item, index) => (
          <motion.div
            variants={variantSelector.left.includes(index) ? variants1 : variantSelector.center.includes(index) ? variants2 : variants3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
           key={index} className="flex flex-col items-center justify-center w-full md:w-3/12 gap-3 p-4 bg-white rounded-lg drop-shadow-lg shadow-lg">
            <h2 className="text-base md:text-lg font-bold text-center md:text-left text-neutral-700">{item.text}</h2>
            <div className="flex flex-col items-center justify-center">
              <img src={item.image} alt={item.image_alt} className={`w-full h-auto rounded-lg`} draggable={false} />
            </div>
          </motion.div>
        ))
      }
    </div>
  )
}
