'use client'
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser';
import { useInView } from 'react-intersection-observer';
import { motion} from 'framer-motion';

export default function FeatureSection({data, reverse, backgroundColor}) {
  const {ref, inView} = useInView();

  const variants1 = {
    hidden: {
      opacity: 0,
      x: reverse? '100%': '-100%'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        delay: 0.5,
        duration: 1
      }
    }
  }

  const variants2 = {
    hidden: {
      opacity: 0,
      x: reverse? '-100%': '100%'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        delay: 0.5,
        duration: 1
      }
    }
  }

  return (
    <section
     className={`flex flex-col md:flex-row px-5 md:px-20 items-center justify-center py-6 md:py-12 gap-4 md:gap-14 ${backgroundColor}`}>
        <motion.div
          variants={variants1}
          initial="hidden"
          animate={inView? "visible": "hidden"}
        ref={ref} className="flex flex-col flex-1 gap-2 md:gap-5 order-2">
          <h2 className="text-xl md:text-4xl md:tracking-wide font-bold text-left text-neutral-600">{data.h2}</h2>
          <p className="text-base md:text-xl text-left text-neutral-700">{parse(data.p)}</p>
          <Link href="https://skoolapp.in/" className="text-lg md:text-xl text-left self-start bg-neutral-600 text-white p-2 md:p-4 px-8 rounded-lg drop-shadow-lg shadow-lg hover:bg-neutral-700 hover:shadow-xl hover:drop-shadow-xl active:bg-neutral-800 active:shadow-2xl active:drop-shadow-2xl active:translate-x-1 active:scale-95">
            Read More</Link>
        </motion.div>
        <motion.div
          variants={variants2}
          initial="hidden"
          animate={inView? "visible": "hidden"}
        className={`flex flex-col items-center justify-center flex-1 order-1 ${reverse? 'md:order-1': 'md:order-3'}`}>
          <Image src={data.image.src} alt={data.image.alt} width={1000} height={1000} className="w-full drop-shadow-lg shadow-lg" />
        </motion.div>
      </section>
  )
}
