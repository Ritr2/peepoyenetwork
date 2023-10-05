'use client'
import React, { useEffect } from 'react'
import style from '@/styles/Dfy.module.css'
import { BsCheck } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GoPulse } from 'react-icons/go'
import { AiOutlineAreaChart, AiOutlinePieChart } from 'react-icons/ai'
import serviceData from '@/utils/dfy/servicesData'
import url from '@/utils/url'
import PricingDfy from './PricingDfy'
import { Link } from 'react-scroll'

export default function Dfy() {
    const { ref: ref1, inView: inView1 } = useInView();

    useEffect(() => {
        const apiCall = async () => {
            const res = await fetch(`${url}/api/dfy/stripe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    products: [
                        {
                            priceId: "price_1NIZEJSDli6WzERSLv9JKLOf",
                            quantity: "2",
                        },
                        {
                            priceId: "price_1NHXWGSDli6WzERSQSr8Ydev",
                            quantity: "2",
                        }
                    ],
                    page: "dfy",
                    success: "dfy-success",
                    cancel: `${url}/dfy-${"ind"}`,
                })
            })
            const data = await res.json()
            window.location.href = data.url
        }
        apiCall()
    }, [])

    return (
        <div className='flex flex-col md:items-center justify-center w-full'>
            <div className={`flex flex-col ${style.bgGreen} w-full px-5 py-3`}>
                <h1 className='text-lg md:text-2xl text-center text-white'>Don't fall behind your competitors, upgrade to our DFY product now!!</h1>
            </div>
            <section className='flex flex-col md:items-center justify-center px-5 md:px-40 py-5 md:py-20 animate-text bg-gradient-to-r from-green-100 via-white to-emerald-200 w-full'>
                <div className='flex flex-col-reverse md:flex-row justify-center w-full' ref={ref1}>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 0.75, type: 'spring', bounce: 0.25 }}
                        className='flex flex-col flex-1 gap-4 md:gap-5'>
                        <div className='flex flex-col md:gap-2'>
                            <h2 className='text-2xl md:text-4xl text-center md:text-left font-semibold text-neutral-800 md:leading-normal'>Not getting the YouTube reach you <span className={`${style.textGreen}`}>Deserve?</span></h2>
                            <img src='https://i.ibb.co/nPMwYR3/Vector.webp' alt='not getting the youtube reach you deserve' className='w-full h-auto object-contain' />
                        </div>
                        <p className='text-base md:text-lg text-neutral-800'>Top 3 reasons why <span className='font-semibold'>96% creators fail to grow</span> on YouTube:</p>
                        <ul className='flex flex-col gap-2 text-base md:text-lg text-neutral-800'>
                            <li className='flex flex-row md:items-center md:ml-2'>
                                <BsCheck className={`inline-block ${style.textGreen} text-2xl md:text-4xl w-6 md:w-12`} />
                                <p className='flex-1'>Poor alignment with YouTube algorithm & lack of <span className='font-semibold'>Optimization</span></p>
                            </li>
                            <li className='flex flex-row md:items-center md:ml-2'>
                                <BsCheck className={`inline-block ${style.textGreen} text-2xl md:text-4xl w-6 md:w-12`} />
                                <p className='flex-1'>Common and most basic foundational <span className='font-semibold'>mistakes</span></p>
                            </li>
                            <li className='flex flex-row md:items-center md:ml-2'>
                                <BsCheck className={`inline-block ${style.textGreen} text-2xl md:text-4xl w-6 md:w-12`} />
                                <p className='flex-1'>Absence of Long term <span className='font-semibold'>strategy</span></p>
                            </li>
                        </ul>
                        <p className='text-base md:text-lg text-neutral-800 leading-8'>Join the <span className='font-semibold'>top 4% successful YouTubers</span> by avoiding these above mentioned issues. Get our <span className='font-semibold'>expert services</span> now and separate yourself from the masses, securing your place among the <span className='font-semibold'>elite ranks</span> of successful content creators.</p>
                        <div className='flex flex-col w-8/12'>
                            <Link to='dfyPricingSection' smooth={true} duration={500} className='flex flex-row items-center justify-center gap-2 md:gap-5 bg-emerald-700 cursor-pointer text-white text-lg md:text-xl font-bold rounded-xl py-2 md:py-3 px-5 md:px-8 hover:bg-emerald-600'>
                                Book Now
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                        transition={{ duration: 0.75, type: 'spring', bounce: 0.25 }}
                        className='flex flex-col md:items-center justify-center flex-1'>
                        <img src='https://i.ibb.co/10pN3YM/akassh-dfy.webp' alt='not getting the youtube reach you deserve' />
                    </motion.div>
                </div>
            </section>
            <section className='flex flex-col md:items-center justify-center px-5 md:px-40 py-20 w-full'>
                <div className='flex flex-col md:flex-row justify-center w-full gap-10'>
                    <div className='flex flex-col md:items-center flex-1 gap-2 md:gap-5'>
                        <h2 className='text-xl md:text-2xl font-bold text-neutral-800 leading-normal'>How do we support our <span className={`${style.textGreen}`}>Customers</span> all over the world</h2>
                        <p className='text-base md:text-lg text-neutral-800 leading-8'>Our YouTube SaaS services are designed to support content creators and simplify the content production process. Whether you need to create stunning thumbnails, edit videos, write scripts, or build websites, our platform has got you covered. We offer a suite of services that are easy to use and accessible to anyone, regardless of technical skill level. With our SaaS services, you can focus on creating the content you love, while we handle the technical upliftment. From start to finish, we've got you covered, so you can produce professional-quality content with ease.</p>
                    </div>
                    <div className='flex flex-col md:items-center justify-center flex-1'>
                        <ul className='flex flex-col items-start justify-start gap-10 text-xl text-neutral-800'>
                            <li className='flex flex-row md:items-center gap-5 text-lg'>
                                <div className='flex flex-col md:items-center justify-center bg-neutral-100 w-10 h-10 md:w-16 md:h-16 p-1 rounded-lg md:rounded-xl shadow-xl drop-shadow-xl'>
                                    <GoPulse className={` ${style.textGreen} text-4xl w-full`} />
                                </div>
                                <div className='flex flex-col md:gap-2 flex-1'>
                                    <h3 className='font-bold text-lg md:text-xl text-neutral-800'>Strategy, Creation & Design</h3>
                                    <p className='text-neutral-500 text-base'>SaaS services for thumbnail, video editing, scripting, website building etc.</p>
                                </div>
                            </li>
                            <li className='flex flex-row md:items-center gap-5 text-lg'>
                                <div className='flex flex-col md:items-center justify-center bg-neutral-100 w-10 h-10 md:w-16 md:h-16 p-1 rounded-lg md:rounded-xl shadow-xl drop-shadow-xl'>
                                    <AiOutlinePieChart className={` ${style.textGreen} text-4xl w-full`} />
                                </div>
                                <div className='flex flex-col md:gap-2 flex-1'>
                                    <h3 className='font-bold text-lg md:text-xl text-neutral-800'>Analytics, BI & Automation</h3>
                                    <p className='text-neutral-500 text-base'>Track content performance with our analytics services.</p>
                                </div>
                            </li>
                            <li className='flex flex-row md:items-center gap-5 text-lg'>
                                <div className='flex flex-col md:items-center justify-center bg-neutral-100 w-10 h-10 md:w-16 md:h-16 p-1 rounded-lg md:rounded-xl shadow-xl drop-shadow-xl'>
                                    <AiOutlineAreaChart className={` ${style.textGreen} text-4xl w-full`} />
                                </div>
                                <div className='flex flex-col md:gap-2 flex-1'>
                                    <h3 className='font-bold text-lg md:text-xl text-neutral-800'>Engagement & Optimization</h3>
                                    <p className='text-neutral-500 text-base'>Maximize content reach and impact with our engagement services.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='flex flex-col gap-5 md:gap-10 md:items-center justify-center px-5 md:px-40 py-20 animate-text bg-gradient-to-r from-green-100 via-white to-emerald-200 w-full'>
                <h2 className='text-xl md:text-4xl text-center font-semibold w-full md:w-6/12 text-neutral-800'>Our Top Offerings That Are <span className={`font-bold ${style.textGreen}`}>Changing</span> the Game</h2>
                {
                    serviceData.map((service, index) => (
                        <div key={index} className='flex flex-col md:flex-row md:items-center justify-center w-full gap-2 md:gap-10'>
                            <div className={`flex flex-col md:items-center justify-center flex-1 ${index % 2 === 0 ? 'order 1 md:order-1' : 'order 1 md:order-2'}`}>
                                <img src={service.image.src} alt={service.image.alt} className='w-full h-auto object-contain' />
                            </div>
                            <div className={`flex flex-col flex-1 gap-2 ${index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
                                <h2 className='text-xl md:text-2xl font-bold text-neutral-800 leading-normal'>{service.h2}</h2>
                                <p className='text-base md:text-lg text-neutral-800 leading-8'>{service.p}</p>
                                <ul className='flex flex-col gap-2 text-base md:text-lg text-neutral-800'>
                                    {
                                        service.bullets.map((bullet, index2) => (
                                            <li key={index2} className='flex flex-row md:items-center'>
                                                <BsCheck className={`inline-block ${style.textGreen} text-2xl md:text-4xl w-6 md:w-12`} />
                                                <p className='flex-1'>{bullet}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))

                }
            </section>
            <section className='flex flex-col gap-5 md:gap-10 md:items-center justify-center px-5 md:px-40 py-20 w-full'>
                <h2 className='text-xl md:text-4xl text-center font-semibold w-full text-neutral-800'>Select the <span className={`font-bold ${style.textGreen}`}>Quantity of video</span> For You</h2>
                <PricingDfy />
            </section>
        </div>
    )
}
