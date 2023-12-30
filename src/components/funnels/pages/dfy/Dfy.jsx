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
import BulkPrice from './BulkPrice'
import Link2 from 'next/link'
import Experience from './Experience'
import SocialMediaDetails from './SocialMediaDetails'
import FAQ from '@/components/FAQ'
import FunnelFooter from '../../FunnelFooter'

export default function Dfy({loc = 'ind'}) {
    const { ref: ref1, inView: inView1 } = useInView()
    const { ref: socialMediaRef, inView: socialMediaInView } = useInView();
    const faqData = [
        {
            question: 'What can I do if my plan has been exhausted and I require a specific service?',
            answer: `You can contact our support team at hello@peepoye.com and request any specific feature or service that you require after the exhaustion of your plan. Please note that any additional service or feature will be billed separately.`,
        },
        {
            question: 'What kind of communication can I expect from you throughout the process of using your services?',
            answer: `You will keep getting updates from our team regarding your services through emails. We make sure that none of your queries or concerns stay unanswered for more than 12 hours.`,
        },
        {
            question: `What is the turnaround time for your services?`,
            answer: `The turn around time is generally 24 hours. However it may exceed 24 hours in case revisions are demanded by the client.`,
        },
        {
            question: `Can I request revisions or changes to the work you provide?`,
            answer: `Yes, we accept revision request after the completion of the work and we provide the revised work to you within 12 hours of you demanding it`,
        }
    ]

    return (
        <div className='flex flex-col md:items-center justify-center w-full mt-16'>
            <div className={`flex flex-col ${style.bgGreen} w-full px-5 py-4`}>
                <h1 className='text-lg md:text-2xl text-center text-white'>Don't fall behind your competitors, upgrade to our Youtube Growth Service now!!</h1>
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
                        <div className='flex flex-row w-full gap-5'>
                            <Link to='dfyPricingSection' smooth={true} duration={500} className='flex-1 flex flex-row items-center justify-center gap-2 md:gap-5 bg-emerald-700 cursor-pointer text-white text-lg md:text-xl font-bold rounded-full py-2 md:py-3 px-5 md:px-8 hover:bg-emerald-600'>
                                Book Now
                            </Link>
                            <Link to='bulkPrice' smooth={true} duration={500} className='flex-1 flex flex-row items-center justify-center gap-2 md:gap-5 bg-white cursor-pointer text-emerald-700 text-lg md:text-xl font-bold rounded-full py-2 md:py-3 px-5 md:px-8 hover:bg-neutral-200'>
                                Get Customized Plan
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
                        <p className='text-base md:text-lg text-neutral-800 leading-8'>Our YouTube Growth services are designed to support content creators and simplify the content production process. Whether you need to create stunning thumbnails, edit videos, write scripts, or build websites, our platform has got you covered. We offer a suite of services that are easy to use and accessible to anyone, regardless of technical skill level. With our YouTube Growth Services, you can focus on creating the content you love, while we handle the technical upliftment. From start to finish, we've got you covered, so you can produce professional-quality content with ease.</p>
                    </div>
                    <div className='flex flex-col md:items-center justify-center flex-1'>
                        <ul className='flex flex-col items-start justify-start gap-10 text-xl text-neutral-800'>
                            <li className='flex flex-row md:items-center gap-5 text-lg'>
                                <div className='flex flex-col md:items-center justify-center bg-neutral-100 w-10 h-10 md:w-16 md:h-16 p-1 rounded-lg md:rounded-xl shadow-xl drop-shadow-xl'>
                                    <GoPulse className={` ${style.textGreen} text-4xl w-full`} />
                                </div>
                                <div className='flex flex-col md:gap-2 flex-1'>
                                    <h3 className='font-bold text-lg md:text-xl text-neutral-800'>Strategy, Creation & Design</h3>
                                    <p className='text-neutral-500 text-base'>Youtube Growth Service for thumbnail, video editing, scripting, website building etc.</p>
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
                <PricingDfy loc={loc} />
            </section>
            <section className='flex flex-col gap-5 md:gap-10 md:items-center justify-center px-5 md:px-20 py-20 animate-text bg-gradient-to-r from-green-100 via-white to-emerald-200 w-full'>
                <BulkPrice />
            </section>
            <section className="z-10 flex flex-col py-10 md:py-20 px-5 md:px-20 gap-5 md:gap-14">
                <div className={`flex flex-col items-center gap-2`}>
                    <h2 className={`text-xl md:text-4xl text-center text-neutral-800 font-bold`}>
                        Meet Your Coach, Guide, and Mentor - <span className={`${style.textGreen}`}> Akassh Ashok Gupta </span>
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
                    <div className={`flex flex-col w-full md:w-6/12 rounded-xl`}>
                        <img src="https://i.ibb.co/pdXR2sN/1.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
                    </div>
                    <div className="flex flex-col flex-1">
                        <p className={`text-base md:text-xl text-neutral-600 font-normal`}>
                            Hey there, I'm Akassh Ashok Gupta! Thanks for stopping by to learn more about me. With over <span className={``}>19 years of experience</span> in the corporate world and more than <span className={``}>5 years dedicated</span> to mastering the art of YouTube, I bring a unique blend of skills to the table. My background as a business consultant, coupled with my status as an influencer, sets me apart as the ideal mentor for this journey.<br /><br /><span className={``}>Imagine this:</span> in less than a year after leaving a high-profile leadership position, I managed to build an impressive online presence with over 1 million followers across various social media platforms. This success is a result of my distinctive approach to consulting and influence, all fueled by the vast experience I gained from mentoring some of the world's biggest brands.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col h-32" ref={socialMediaRef}>
                    {
                        socialMediaInView && <SocialMediaDetails />
                    }
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
                    <div className={`flex flex-col w-full md:w-6/12 rounded-xl order-1 md:order-2`}>
                        <img src="https://i.ibb.co/RT3XGxt/2.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
                    </div>
                    <div className="flex flex-col flex-1 order-2 md:order-1">
                        <p className={`text-base md:text-xl text-neutral-600 font-normal`}>
                            Even when I was at a leadership position at my job, earning really well, I decided to quit my job and do YouTube full-time. The reason was simple- I realised my Passion. Today, <span className={``}>I breathe passion</span> by doing what I love. Quitting the job was not an easy call but still I took that step because I knew what I was truly meant for and what my passion was. Now, I am on a mission to <span className={``}>enable 1 lac people</span> like me breathe their passion and create multiple revenue streams by doing what they love the most.<br /><br />What sets me apart further are my incredible collaborations with legends like Sonu Nigam and Shruti Haasan. Additionally, I've gained the admiration of top YouTube influencers including Ashish Chanchlani, Harsh Beniwal, MythPat, Sourav Joshi, and many more.
                        </p>
                    </div>
                </div>
                <Experience />
                <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
                    <div className={`flex flex-col w-full md:w-6/12 rounded-xl`}>
                        <img src="https://i.ibb.co/LrvNWBp/3.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
                    </div>
                    <div className="flex flex-col flex-1">
                        <p className={`text-base md:text-xl text-neutral-600 font-normal`}>
                            I believe in the power of YouTube not just as a platform for entertainment but as a strategic tool for business growth.<br /><br />Let's embark on this exciting journey together, and I'll guide you every step of the way in leveraging YouTube to its fullest potential.<br /><br />Whether you're looking to diversify your <span className={``}>revenue streams or attract valuable business leads</span>, I've got the expertise to make it happen. Let's make your YouTube venture a resounding success!<br /><br />I'm really looking forward to you completing this course and make this about passion, fullfillment and enjoy every bit of the journey it entails.<br /><br />
                        </p>
                        <img src="https://i.ibb.co/6vX34KQ/akassh-signature.png" className="w-40 md:w-40 h-auto" />
                    </div>
                </div>
                <div className="flex flex-row gap-5 self-center w-full md:w-8/12">
                    <Link to='dfyPricingSection' smooth={true} duration={500} className='flex-1 flex flex-row items-center justify-center gap-2 md:gap-5 bg-emerald-700 cursor-pointer text-white text-lg md:text-xl font-bold rounded-xl py-2 md:py-3 px-5 md:px-8 hover:bg-emerald-600'>
                        Book Now
                    </Link>
                </div>
            </section>
            <section className='flex flex-col gap-5 md:gap-10 md:items-center justify-center px-5 md:px-20 py-20 animate-text bg-gradient-to-r from-green-100 via-white to-emerald-200 w-full'>
                <h2 className='text-xl md:text-4xl text-center font-semibold w-full text-neutral-800'>Frequently Asked <span className={`font-bold ${style.textGreen}`}>Questions</span></h2>
                <div className='flex flex-col w-full md:w-8/12'>
                    <FAQ data={faqData} textSize={{ question: 'text-lg md:text-xl', answer: 'text-base md:text-lg' }} textcolor={{ question: 'text-neutral-800', answer: 'text-neutral-700' }} bgcolor={{ question: 'bg-neutral-100', answer: 'bg-green-100' }} />
                </div>
            </section>
        </div>
    )
}
