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
        <div className='flex flex-col items-center justify-center w-full'>
            <div className={`flex flex-col ${style.bgGreen} w-full py-3`}>
                <h1 className='text-2xl text-center text-white'>Don't fall behind your competitors, upgrade to our DFY product now!!</h1>
            </div>
            <section className='flex flex-col items-center justify-center px-40 py-20 bg-gradient-to-r from-green-100 to-emerald-100 w-full'>
                <div className='flex flex-row justify-center w-full' ref={ref1}>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 0.75, type: 'spring', bounce: 0.25 }}
                        className='flex flex-col flex-1 gap-5'>
                        <h2 className='text-4xl font-semibold text-neutral-800 leading-normal'>Not getting the YouTube reach you <span className={`${style.textGreen}`}>Deserve?</span></h2>
                        <img src='https://images.clickfunnels.com/cdn-cgi/image/f=auto,q=80/https://statics.myclickfunnels.com/image/404279/file/cb35d96352eba098fcf5ebfecb0473b5.png' alt='not getting the youtube reach you deserve' className='w-full h-auto object-contain' />
                        <p className='text-lg text-neutral-800'>Top 3 reasons why <span className='font-semibold'>96% creators fail to grow</span> on YouTube:</p>
                        <ul className='flex flex-col gap-2 text-lg text-neutral-800'>
                            <li className='flex flex-row items-center ml-2'>
                                <BsCheck className={`inline-block ${style.textGreen} text-4xl w-12`} />
                                <p className='flex-1'>Poor alignment with YouTube algorithm & lack of <span className='font-semibold'>Optimization</span></p>
                            </li>
                            <li className='flex flex-row items-center ml-2'>
                                <BsCheck className={`inline-block ${style.textGreen} text-4xl w-12`} />
                                <p className='flex-1'>Common and most basic foundational <span className='font-semibold'>mistakes</span></p>
                            </li>
                            <li className='flex flex-row items-center ml-2'>
                                <BsCheck className={`inline-block ${style.textGreen} text-4xl w-12`} />
                                <p className='flex-1'>Absence of Long term <span className='font-semibold'>strategy</span></p>
                            </li>
                        </ul>
                        <p className='text-lg text-neutral-800 leading-8'>Join the <span className='font-semibold'>top 4% successful YouTubers</span> by avoiding these above mentioned issues. Get our <span className='font-semibold'>expert services</span> now and separate yourself from the masses, securing your place among the <span className='font-semibold'>elite ranks</span> of successful content creators.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                        transition={{ duration: 0.75, type: 'spring', bounce: 0.25 }}
                        className='flex flex-col items-center justify-center flex-1'>
                        <img src='https://images.clickfunnels.com/cdn-cgi/image/f=auto,q=80/https://statics.myclickfunnels.com/image/562249/file/3af30d43eccc4b88306029fd2457c1d5.png' alt='not getting the youtube reach you deserve' />
                    </motion.div>
                </div>
            </section>
            <section className='flex flex-col items-center justify-center px-40 py-20 w-full'>
                <div className='flex flex-row justify-center w-full gap-10'>
                    <div className='flex flex-col items-center flex-1 gap-5'>
                        <h2 className='text-2xl font-bold text-neutral-800 leading-normal'>How do we support our <span className={`${style.textGreen}`}>Customers</span> all over the world</h2>
                        <p className='text-lg text-neutral-800 leading-8'>Our YouTube SaaS services are designed to support content creators and simplify the content production process. Whether you need to create stunning thumbnails, edit videos, write scripts, or build websites, our platform has got you covered. We offer a suite of services that are easy to use and accessible to anyone, regardless of technical skill level. With our SaaS services, you can focus on creating the content you love, while we handle the technical upliftment. From start to finish, we've got you covered, so you can produce professional-quality content with ease.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center flex-1'>
                        <ul className='flex flex-col items-start justify-start gap-10 text-xl text-neutral-800'>
                            <li className='flex flex-row items-center gap-5 text-lg'>
                                <div className='flex flex-col items-center justify-center bg-neutral-100 w-16 h-16 rounded-xl shadow-xl drop-shadow-xl'>
                                    <GoPulse className={` ${style.textGreen} text-4xl w-full`} />
                                </div>
                                <div className='flex flex-col gap-2 flex-1'>
                                    <h3 className='font-bold text-xl text-neutral-800'>Strategy, Creation & Design</h3>
                                    <p className='text-neutral-500'>SaaS services for thumbnail, video editing, scripting, website building etc.</p>
                                </div>
                            </li>
                            <li className='flex flex-row items-center gap-5 text-lg'>
                                <div className='flex flex-col items-center justify-center bg-neutral-100 w-16 h-16 rounded-xl shadow-xl drop-shadow-xl'>
                                    <AiOutlinePieChart className={` ${style.textGreen} text-4xl w-full`} />
                                </div>
                                <div className='flex flex-col gap-2 flex-1'>
                                    <h3 className='font-bold text-xl text-neutral-800'>Analytics, BI & Automation</h3>
                                    <p className='text-neutral-500'>Track content performance with our analytics services.</p>
                                </div>
                            </li>
                            <li className='flex flex-row items-center gap-5 text-lg'>
                                <div className='flex flex-col items-center justify-center bg-neutral-100 w-16 h-16 rounded-xl shadow-xl drop-shadow-xl'>
                                    <AiOutlineAreaChart className={` ${style.textGreen} text-4xl w-full`} />
                                </div>
                                <div className='flex flex-col gap-2 flex-1'>
                                    <h3 className='font-bold text-xl text-neutral-800'>Engagement & Optimization</h3>
                                    <p className='text-neutral-500'>Maximize content reach and impact with our engagement services.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='flex flex-col items-center justify-center px-40 py-20 bg-gradient-to-r from-green-100 to-emerald-100 w-full'>
                {
                    serviceData.map((service, index) => (
                        <div key={index} className='flex flex-row items-center justify-center w-full gap-10'>
                            <div className={`flex flex-col items-center justify-center flex-1 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                                <img src={service.image.src} alt={service.image.alt} className='w-full h-auto object-contain' />
                            </div>
                            <div className={`flex flex-col flex-1 gap-2 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                                <h2 className='text-2xl font-bold text-neutral-800 leading-normal'>{service.h2}</h2>
                                <p className='text-lg text-neutral-800 leading-8'>{service.p}</p>
                                <ul className='flex flex-col gap-2 text-lg text-neutral-800'>
                                    {
                                        service.bullets.map((bullet, index2) => (
                                            <li key={index2} className='flex flex-row items-center'>
                                                <BsCheck className={`inline-block ${style.textGreen} text-4xl w-12`} />
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
        </div>
    )
}
