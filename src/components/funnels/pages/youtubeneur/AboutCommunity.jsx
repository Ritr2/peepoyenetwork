'use client'
import React from 'react'
import Link from 'next/link'
import parse from 'html-react-parser';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function AboutCommunity({ data,key2, reverse, backgroundColor, about = false }) {
  const { ref, inView } = useInView();

  const variants1 = {
    hidden: {
      opacity: 0,
      x: reverse ? '100%' : '-100%'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        duration: 0.5
      }
    }
  }

  const variants2 = {
    hidden: {
      opacity: 0,
      x: reverse ? '-100%' : '100%'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        duration: 0.5
      }
    }
  }

  return (
    <section
      className={`flex flex-col md:flex-row px-5 md:px-20 items-center justify-center py-6 md:py-12 gap-4 md:gap-14 ${backgroundColor}`}>
      <motion.div
        variants={variants1}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref} className={`flex flex-col ${about? 'md:w-7/12 md:flex-0 flex-1': 'flex-1'} gap-2 md:gap-5 order-2`}>
        <span className="text-base md:text-lg capitalize text-red-600">{key2}</span>
        <h2 className="text-xl md:text-4xl md:tracking-wide font-bold text-left text-neutral-100">{data.h2}</h2>
        <p className="text-base md:text-xl text-left text-neutral-200">{parse(data.p)}</p>
      </motion.div>
      <motion.div
        variants={variants2}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={`flex flex-col items-center justify-center flex-1 order-1 ${reverse ? 'md:order-1' : 'md:order-3'}`}>
        <img src={data.image.src} alt={data.image.alt} width={1000} height={1000} className={`${about? 'w-8/12': 'w-full'}`} />
      </motion.div>
    </section>
  )
}

