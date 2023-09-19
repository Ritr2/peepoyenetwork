import React from 'react'
import style from '@/styles/AcceleratorInd.module.css'

export default function WhoIsThisFor() {
    const data = [
        {
            h1: 'Content Creators',
            p: `Learn how to build content strategy, produce an optimize content, understand youtube algorithm and thus get maximum reach and growth in the shortest time possible.`,
            image: `https://i.ibb.co/3cFdQKD/who-can-take-1.webp`,
        },
        {
            h1: 'Business Owners',
            p: `Learn how to leverage YouTube to increase brand visibility, create digital products, multiple revenue streams & get continuous flow of business lead organically.`,
            image: `https://i.ibb.co/9tQ5NSh/who-can-take-2.webp`,
        },
        {
            h1: 'Students',
            p: `Showcase your talent, build a personal brand, and even earn supplemental income by turning your passion into profit.`,
            image: `https://i.ibb.co/y5R6hPG/who-can-take-3.png`,
        },
        {
            h1: 'Freelancers',
            p: `Learn how to attract potential clients and generate leads using YouTube. Enhance your credibility with a strong online presence.`,
            image: `https://i.ibb.co/qppLJDD/who-can-take-4.webp`,
        },
        {
            h1: 'Working Professionals',
            p: `Use YouTube for building your personal brand around your profession and expand the customer market digitally to scale-up revenue by creating a strong network with like-minded people.`,
            image: `https://i.ibb.co/Lzr4cFt/who-can-take-5.webp`,
        },
        {
            h1: 'Job-Goers',
            p: `Use YouTube for building your personal brand around your area of expertise and build a parallel stream of income by creating a strong network with like-minded people.`,
            image: `https://i.ibb.co/pwn5SbW/who-can-take-6.webp`,
        }
    ]
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-5 md:gap-10 w-full">
        {
            data.map((item, index) => (
                <div key={index} className={`flex flex-col items-center gap-5 justify-between w-full md:w-4/12 bg-white/5 rounded-lg border-2 border-white p-5`}>
                    <div className="flex flex-col items-center w-full flex-1">
                        <img src={item.image} alt={item.h1} className="object-contain object-center h-40 w-52 md:h-60 md:w-96" draggable={false} />
                    </div>
                    <div className="flex flex-col w-full items-center gap-5">
                        <h2 className="text-xl md:text-2xl font-bold text-center md:text-left text-white">{item.h1}</h2>
                        <p className="text-sm md:text-base font-normal text-justify md:text-left text-white">{item.p}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
