import React, { useEffect } from 'react'
import parse from 'html-react-parser'
import { AiOutlineDown } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion'
import { BsFillCaretDownFill } from 'react-icons/bs';

export default function YoutubeneurStruction() {
    const data = [
        {
            h2: '<span className="italic">Day-1</span>',
            p: `The Foundations of the Engine`,
            modules: [
                {
                    h3: '1. <span className="font-bold capitalize">You have made it</span><br/>Course Overview and Objective',
                    time: '1:30',
                },
                {
                    h3: '2. <span className="font-bold capitalize">Launch the Missile</span><br/>How to Crack the Youtubeneur Method',
                    time: '18:08',
                },
                {
                    h3: '3. <span className="font-bold capitalize">Methods work, People fail</span><br/>Cut, Copy & Paste Method to Accelerate',
                    time: '23:49',
                },
                {
                    h3: '4. <span className="font-bold capitalize">Dig the Beast</span><br/>A Secret Case Study that you can Replicate',
                    time: '2:57',
                },
                {
                    h3: '5. <span className="font-bold capitalize">Shift the Paradigm</span><br/>Set Goals for Success',
                    time: '20:23',
                },
                {
                    h3: '6. <span className="font-bold capitalize">The Success Guarantee</span><br/>How to Collaborate in Our Community',
                    time: '6:10',
                },
                {
                    h3: '7. <span className="font-bold capitalize">Get that Golden Niche</span><br/>Find the Target Market that Awaits You!',
                    time: '8:02',
                }
            ]
        },
        {
            h2: '<span className="italic">Day-2</span>',
            p: `The Content and Influence Engine`,
            modules: [
                {
                    h3: '8. <span className="font-bold capitalize">The Platform of Choice</span><br/>Learn about the Magical Power of YouTube',
                    time: '7:58',
                },
                {
                    h3: '9. <span className="font-bold capitalize">Building the Content Strategy</span><br/>Learn to Build the Content Strategy that promises sustained benefit over long-term',
                    time: '15:29',
                },
                {
                    h3: '10. <span className="font-bold capitalize">Produce the Value Content</span><br/>Learn the Secrets of Content Production from Ideation, Research to Scripting, Shooting and Editing',
                    time: '28:22',
                },
                {
                    h3: '11. <span className="font-bold capitalize">Optimize Content for Algorithm</span><br/>Learn How to Hack Youtube Algorithm and get more recommendations and reach for your videos',
                    time: '17:34',
                },
                {
                    h3: '12. <span className="font-bold capitalize">Explode the Reach</span><br/>Learn how to re-use the same content and re-classify, re-purpose and re-distribute to create maximum impact and build 360 degree social media following from Youtube content',
                    time: '5:29',
                },
                {
                    h3: '13. <span className="font-bold capitalize">Build the Influence Foundation</span><br/>Cracking the Influencer Mindset',
                    time: '8:52',
                }
            ],
        },
        {
            h2: '<span className="italic">Day-3</span>',
            p: `The Money Engine`,
            modules: [
                {
                    h3: '14. <span className="font-bold capitalize">Build your legacy</span><br/>Branding Blocks, Learn how to crack Brand Collaborations like a Pro',
                    time: '14:07',
                },
                {
                    h3: '15. <span className="font-bold capitalize">Pull the Eggs out</span><br/>Creating Multiple Digital Revenue Streams',
                    time: '08:49',
                },
                {
                    h3: '16. <span className="font-bold capitalize">A Big $ Opportunity</span><br/>Create & Promote your own Digital Product',
                    time: '08:36',
                },
                {
                    h3: '17. <span className="font-bold capitalize">Build the Money Engine</span><br/>My Top Money Making Tools! Shhhh',
                    time: '11:41',
                },
                {
                    h3: '18. <span className="font-bold capitalize">Choose your Journey</span><br/>Create your Journey to the Next Level of Digital Entrepreneurship',
                    time: '05:08',
                }
            ],
        }
    ]
    const [show, setShow] = React.useState(new Array(data.length).fill(false));

    useEffect(() => {
        setShow(prev => {
            prev[0] = true;
            return [...prev];
        })
    }, [])

    return (
        <div className="flex flex-row justify-center w-full gap-10 py-5 ">
            <div className="flex flex-col gap-5 self-center items-center justify-center w-full md:w-6/12 p-4 bg-white/5 rounded-3xl border-2 border-white">
                {
                    data.map((item, index) => (
                        <div key={index} className="flex flex-col items-center w-full">
                            <div className="flex flex-row items-center gap-10 justify-between w-full">
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-sm md:text-lg text-white" >{parse(item.h2)}</h2>
                                    <p className="text-lg md:text-xl font-bold text-white uppercase" >{parse(item.p)}</p>
                                </div>
                                <BsFillCaretDownFill className={`text-3xl w-10 text-white transform transition-all duration-700 ease-in-out ${show[index] ? 'rotate-180' : ''}`} onClick={() => {
                                    setShow(prev => {
                                        return prev.map((item, index3) => {
                                            if (index3 === index) {
                                                return !item;
                                            }
                                            return false;
                                        })
                                    })
                                }} />
                            </div>
                            <AnimatePresence>
                                {
                                    show[index] && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1, transition: { duration: 0.4 } }}
                                            exit={{ height: 0, opacity: 0, transition: { duration: 0.4 } }}
                                            className="flex flex-col gap-5 justify-center overflow-hidden bg-white/25 p-2 rounded-lg w-full box-content"
                                        >
                                            <h2 className="text-lg md:text-xl font-bold text-white" >Modules</h2>
                                            <div className="flex flex-col gap-3 justify-center">
                                                {
                                                    item.modules.map((module, index2) => (
                                                        <div key={index2} className="flex flex-col items-center justify-center w-full">
                                                            <div className="flex flex-row items-center justify-between gap-5 w-full">
                                                                <h3 className="text-sm md:text-base text-white" >{parse(module.h3)}</h3>
                                                                {
                                                                    module.time && (
                                                                        <span className="text-sm md:text-base font-bold text-white" >{parse(module.time)}</span>
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                        </div>
                    ))
                }
            </div>
            <div className=" hidden md:flex flex-col gap-5 items-center justify-end flex-1 ">
                <img src="https://i.ibb.co/JRjfHhr/accelerator.png" alt="struction" className="w-8/12" draggable={false} />
            </div>
        </div>
    )
}
