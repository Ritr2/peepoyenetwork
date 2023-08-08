'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FormPopup from './FormPopup';

export default function Testimonials({ data, index }) {
  const { ref, inView } = useInView();

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
        duration: 1.5
      }
    }
  }

  const variants2 = {
    hidden: {
      opacity: 0,
      x: '100%'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        duration: 1.5
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={index % 2 === 0 ? variants1 : variants2}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col items-center justify-center gap-10 w-full">
      <img src={data} alt="testimonial" className="w-full h-auto" draggable={false} />
    </motion.div >
  )
}
