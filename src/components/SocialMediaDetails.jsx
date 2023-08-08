'use client'
import React from 'react'
import {motion} from 'framer-motion';
import images from '@/utils/socialmedia_images';
import { useSpring, animated } from 'react-spring'


const Number = (n) => {
  const {number} = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 }
  });
  return <animated.span>{
    number.to(n => n.toFixed(2)%1 === 0 ? n.toFixed(0) : n.toFixed(1))
    }</animated.span>
}

export default function SocialMediaDetails() {

  return (
    <section className='px-2 md:px-16 w-full'>
      <div className='flex flex-col gap-3 py-2 md:py-6 z-10 w-full shadow-lg bg-stone-200 drop-shadow-lg border-2 rounded-3xl border-stone-200'>
        <div className='flex flex-row items-center px-2'>
          <div className='overflow-hidden flex-1'>
            <div
              className="flex flex-row flex-wrap justify-between w-full items-center gap-4 px-1 md:px-24">
              {
                Object.keys(images).map((key, index) => (
                  <div key={index} className="flex flex-row items-center justify-center gap-5">
                    <div className="flex flex-col items-center justify-center">
                      <img src={images[key].image.src} alt={images[key].image.alt} className={`w-5 md:w-14 h-auto`} draggable={false} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-sm md:text-2xl tracking-wide font-bold text-left text-neutral-600">{Number(images[key].count)}{images[key].countSuffix}</p>
                      <p className="text-sm md:text-2xl tracking-wide font-bold text-left text-neutral-600">{images[key].bottomText}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
