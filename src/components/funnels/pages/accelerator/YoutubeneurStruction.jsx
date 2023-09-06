import React, { useEffect } from 'react'
import parse from 'html-react-parser'
import { AiOutlineDown } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion'

export default function YoutubeneurStruction() {
    const data = [
        {
            h2: 'Day-1',
            p: `The Influence Engine`,
            modules: [
                {
                    h3: '1: The YouTube Ecosystem',
                    time: '4 Hours',
                },
                {
                    h3: '2: The YouTube Algorithm',
                    time: '2 Hours',
                }
            ]
        },
        {
            h2: 'Day-2',
            p: `The Content Engine`,
            modules: [
                {
                    h3: 'Module 2: The Content Strategy',
                    time: '4 Hours',
                },
            ],
        },
        {
            h2: 'Day-3',
            p: `The Money Engine`,
            modules: [
                {
                    h3: 'Module 3: The Monetization Strategy',
                    time: '4 Hours',
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
        <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col gap-5 self-center items-center justify-center mb-5 w-full md:w-6/12 animate-text bg-gradient-to-r from-red-500/90 via-red-500/90 to-red-500 p-4 rounded-lg">
                {
                    data.map((item, index) => (
                        <div key={index} className="flex flex-col items-center w-full">
                            <div className="flex flex-row items-center gap-10 justify-between w-full">
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-sm md:text-lg text-white" >{parse(item.h2)}</h2>
                                    <p className="text-lg md:text-xl font-bold text-white" >{parse(item.p)}</p>
                                </div>
                                <AiOutlineDown className={`text-3xl w-10 text-white transform transition-all duration-1000 ease-in-out ${show[index] ? 'rotate-180' : ''}`} onClick={() => {
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
                                            animate={{ height: 'auto', opacity: 1, transition: { duration: 0.7 } }}
                                            exit={{ height: 0, opacity: 0, transition: { duration: 0.7 } }}
                                            className="flex flex-col gap-5 justify-center overflow-hidden bg-white/25 p-2 rounded-lg w-full box-content"
                                        >
                                            <h2 className="text-lg md:text-xl font-bold text-white" >Modules</h2>
                                            <div className="flex flex-col gap-1 justify-center">
                                                {
                                                    item.modules.map((module, index2) => (
                                                        <div key={index2} className="flex flex-col items-center justify-center w-full">
                                                            <div className="flex flex-row items-center justify-between gap-5 w-full">
                                                                <h3 className="text-sm md:text-base text-white" >{parse(module.h3)}</h3>
                                                                <span className="text-sm md:text-base font-bold text-white" >{parse(module.time)}</span>
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
                <img src="https://i.ibb.co/Ch10Tqb/akasshashokgupta.png" alt="struction" className="w-full -scale-x-100" draggable={false} />
            </div>
        </div>
    )
}
