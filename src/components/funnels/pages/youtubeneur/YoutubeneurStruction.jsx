import React, { useEffect } from 'react'
import parse from 'html-react-parser'
import { AiOutlineDown } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion'
import { BsFillCaretDownFill } from 'react-icons/bs';

export default function YoutubeneurStruction() {
    const data = [
        {
            h2: 'Day-1',
            p: `The Influence Engine`,
            modules: [
                {
                    h3: '1. You have made it',
                    time: '1:30',
                },
                {
                    h3: '2. Launch the Missile',
                    time: '18:08',
                },
                {
                    h3: '3. Methods work, People fail',
                    time: '23:51',
                },
                {
                    h3: '4. Dig the Beast',
                    time: '2:57',
                },
                {
                    h3: '5. Shift the Paradigm',
                    time: '20:25',
                },
                {
                    h3: '6. The Success Guarantee',
                    time: '6:08',
                },
                {
                    h3: '7. Get that Golden Niche',
                    time: '8:02',
                }
            ]
        },
        {
            h2: 'Day-2',
            p: `The Content Engine`,
            modules: [
                {
                    h3: '8. The Platform of Choice',
                    time: '7:55',
                },
                {
                    h3: '9. Building the Content Strategy',
                    time: '15:28',
                },
                {
                    h3: '10. Produce the Value Content',
                    time: '28:22',
                },
                {
                    h3: '11. Optimize Content for Algorithm',
                    time: '17:34',
                },
                {
                    h3: '12. Explode the Reach',
                    time: '5:30',
                },
                {
                    h3: '13. Build the Influence Foundation',
                    time: '8:48',
                }
            ],
        },
        {
            h2: 'Day-3',
            p: `The Money Engine`,
            modules: [
                {
                    h3: 'Day 3 will be comming soon',
                    time: false,
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
                                    <p className="text-lg md:text-xl font-bold text-white" >{parse(item.p)}</p>
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
                                            <div className="flex flex-col gap-1 justify-center">
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
