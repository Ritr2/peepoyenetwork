import React from 'react'
import { BsCheck } from 'react-icons/bs'
import parse from 'html-react-parser'
import { IoClose } from 'react-icons/io5'
import style from '@/styles/AcceleratorInd.module.css'

export default function Matrix() {
    const data = [
        {
            q: `Not getting views on your YouTube videos still?`,
            s: `Secrets to hack youtube recommendation engine`,
            a: true,
        },
        {
            q: `Number of subscribers not growing?`,
            s: `Learn how to make people click and hit the subscribe button by learning the scripting secrets.`,
            a: true,
        },
        {
            q: `Can't devote time for YouTube?`,
            s: `Learn the structured and accelerated approach to grow youtube in parallel faster then anyone else. `,
            a: true,
        },
        {
            q: `Lack of technical skills for YouTube?`,
            s: `Learn the methods for each technical skill like research, shooting, editing, SEO etc and align it to youtube algorithm. `,
            a: true,
        },
        {
            q: `Not sure about the niche/content category?`,
            s: `Learn to identify the correct niche and endless content ideas`,
            a: true,
        },
        {
            q: `Uncertain about youtube as a career?`,
            s: `Learn to create multiple revenue streams and Generating conitues flow of business leads though YouTube`,
            a: true,
        },
        {
            q: `Worried about people's judging you?`,
            s: `Learn to build a popular personal brand and a loyal community`,
            a: true,
        },
        {
            q: `Feeling nervous in front of the camera?`,
            s: `Learn the systematic approach and method that will make each step in content production including shooting simple to implement.`,
            a: true,
        },
        {
            q: `Feeling demotivated and lonely in the journey?`,
            s: `Access and grow together inside our world class "YouTube Growth Community"`,
            a: true,
        },
        {
            q: `Not have enough time to research and script the video?`,
            s: `Learn Simple research and scripting techniques though guide and templates.`,
            a: true,
        },
        {
            q: `Do not have time to do it your own?`,
            s: `Learn about our 'done-for-you' YouTube growth services`,
            a: true,
        },
        {
            q: `Worried about channel monetization?`,
            s: `Monetize your channel in the shortest time possible.`,
            a: true,
        },
        {
            q: `Uncertainity and fear stopping you to start YouTube?`,
            s: `Learn how to validate and align your life goal with your YouTube niche and content which becames a source of lifelong joy and happiness`,
            a: true,
        },
    ]
    return (
        <div className={`flex flex-col w-full ${style.matrixBreaker}`}>
            <div className={`flex flex-row justify-between w-full border-white border-y-2 rounded-t-2xl`}>
                <p className='text-white text-center text-3xl font-bold flex-1 p-4 border-x-2 rounded-tl-2xl border-white'>
                    Check your need here
                </p>
                <p className='text-white text-center text-3xl font-bold w-6/12 p-4'>
                    Why is it for you...
                </p>
                <p className='text-white text-center text-3xl font-bold w-2/12 p-4 border-x-2 rounded-tr-2xl border-white'>
                    Included?
                </p>
            </div>
            {
                data.map((item, index) => (
                    <div key={index} className={`flex flex-row bg-white/5 justify-between w-full border-white border-b-2 ${index === data.length - 1 ? 'rounded-b-2xl' : ''}`}>
                        <p className={`text-white flex flex-col justify-center text-center text-3xl flex-1 p-4 border-x-2 border-white ${index === data.length - 1 ? 'rounded-bl-2xl' : ''}`}>
                            <span>{parse(item.q)}</span>
                        </p>
                        <p className='text-white flex flex-col justify-center text-center text-3xl font-light w-6/12 p-4 border-white'>
                            <span>{parse(item.s)}</span>
                        </p>
                        <div className={`flex flex-col justify-center w-2/12 p-4 border-x-2 border-white ${index === data.length - 1 ? 'rounded-br-2xl' : ''}`}>
                            {
                                item.a ? <BsCheck className='text-green-500 w-full text-6xl' /> : <IoClose className='text-red-500 text-6xl' />
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
