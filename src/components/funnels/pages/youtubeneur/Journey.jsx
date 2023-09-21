import React, { useState, useRef, useEffect, Fragment } from 'react'
import { motion, useMotionValue, useTransform, useMotionTemplate, animate, AnimatePresence } from 'framer-motion'



export default function Journey() {
    let data = [
        {
            title: 'The 3-Days Challenge',
            description: `Complete the 3-Days Foundational Accelerator course on YouTube and do all the tasks which will lay down the foundation of your YouTube journey.`,
            image: {
                src: 'https://i.ibb.co/QYMnCmc/accelerator.webp',
                alt: 'accelerator',
            },
        },
        {
            title: 'The 35-Days Jump Challenge',
            description: `Set up every system, tool, and process with step-by-step instructions as part of becoming a YouTubeneur.`,
            image: {
                src: 'https://i.ibb.co/BrZHYbt/green.webp',
                alt: 'jump',
            },
        },
        {
            title: `The 100 Videos Challenge`,
            description: `Create 100 videos for your YouTube channel and implement all the strategies you learned and grow in the process. `,
            image: {
                src: 'https://i.ibb.co/TB8cBHn/video-challenge.webp',
                alt: 'videos',
            },
        },
        {
            title: `Community Building Challenge`,
            description: `Build your own loyal community of like-minded individuals. Collaborate and build your personal brand. `,
            image: {
                src: 'https://i.ibb.co/8PtTDky/community.webp',
                alt: 'community',
            },
        },
        {
            title: `Product Roll-Out Challenge`,
            description: `Launch your product in the market and start generating sales out of it by using strategies taught in the youtubeneur journey.`,
            image: {
                src: 'https://i.ibb.co/yfRqGJq/product.webp',
                alt: 'product',
            },
        },
        {
            title: `Collaborate with Akassh`,
            description: `Once you have 100 members in your community and have generated 10 sales of your first product, you get an opportunity to collaborate with Akassh- The first "YouTubeneur" himself!`,
            image: {
                src: 'https://i.ibb.co/sqDV87D/audit-call.webp',
                alt: 'collaborate',
            },
        }
    ]
    let min = 0;
    let max = 5;
    let [value, setValue] = useState(0);
    let [remaining, setRemaining] = useState(0);
    let percent = value / (max - min);

    let [dragging, setDragging] = useState(false);
    let constraintsRef = useRef();
    let handleRef = useRef();
    let progressBarRef = useRef();
    let handleSize = 30;
    let handleX = useMotionValue(0);
    let progress = useTransform(handleX, (v) => v + handleSize / 2);
    let background = useMotionTemplate`linear-gradient(90deg, #c13438 ${progress}px, white 0)`;

    function handleDrag() {
        let handleBounds = handleRef.current.getBoundingClientRect();
        let middleOfHandle = handleBounds.x + handleBounds.width / 2;
        let progressBarBounds = progressBarRef.current.getBoundingClientRect();
        let newProgress =
            (middleOfHandle - progressBarBounds.x) / progressBarBounds.width;
        setValue(newProgress * (max - min));
        setRemaining(newProgress * (max - min) - Math.floor(newProgress * (max - min)));
    }

    useEffect(() => {
        let newProgress = value / (max - min);
        let progressBarBounds = progressBarRef.current.getBoundingClientRect();

        handleX.set(newProgress * progressBarBounds.width);
    }, [handleX, max, min, value]);

    return (
        <div className='flex flex-col gap-5 w-full md:w-10/12 self-center'>
            <div className='flex flex-col md:flex-row border-2 border-white rounded-2xl p-2 md:p-10 overflow-hidden'>
                {
                    data.map((item, index) => (
                        <AnimatePresence key={index} mode='pop'>
                            {

                                index === Math.floor(value) &&
                                (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0, x: -300 }}
                                            animate={{ opacity: 1, x: remaining * 100 < 30 ? 0 : -remaining * 600, opacity: remaining * 100 < 80 ? 1 : 0, transition: { duration: 0.7 } }}
                                            exit={{ display: 'none', transition: { duration: 0.1, delay: 0 } }}
                                            className='flex flex-col gap-1 md:gap-5 md:w-7/12 order-2 md:order-1'
                                        >
                                            <h1 className='text-xl md:text-4xl text-center md:text-left font-bold text-white'>{item.title}</h1>
                                            <p className='text-base md:text-xl text-center md:text-left text-white'>{item.description}</p>
                                        </motion.div>
                                        <motion.img
                                            initial={{ opacity: 0, x: 300 }}
                                            animate={{ opacity: 1, x: remaining * 100 < 40 ? 0 : remaining * 600, opacity: remaining * 100 < 80 ? 1 : 0, transition: { duration: 0.7 } }}
                                            exit={{ display: 'none', transition: { duration: 0.1, delay: 0 } }}
                                            transition={{ duration: 0.7 }}
                                            className='h-48 md:h-96 w-full md:flex-1 object-contain object-center md:object-right order-1 md:order-2'
                                            src={item.image.src}
                                            alt={item.image.alt}
                                        />
                                    </>
                                )
                            }
                        </AnimatePresence>
                    ))
                }
            </div>
            <div className="flex flex-col">
                <div data-test="slider" className="relative flex flex-col justify-center">
                    <motion.div
                        data-test="slider-background"
                        className="absolute w-full h-3 rounded-full"
                        style={{ background }}
                    />

                    <div
                        data-test="slider-progress"
                        ref={progressBarRef}
                        className="absolute h-2"
                        style={{
                            left: handleSize / 2,
                            right: handleSize / 2,
                        }}
                    />

                    <div ref={constraintsRef}>
                        <motion.div
                            data-test="slider-handle"
                            ref={handleRef}
                            className="relative z-10 bg-red-500 rounded-full cursor-pointer hover:scale-125"
                            drag="x"
                            dragMomentum={false}
                            dragConstraints={constraintsRef}
                            dragElastic={0}
                            onDrag={handleDrag}
                            onDragStart={() => setDragging(true)}
                            onDragEnd={() => setDragging(false)}
                            onPointerDown={() => setDragging(true)}
                            onPointerUp={() => setDragging(false)}
                            animate={{
                                scale: dragging ? 2 : 1,
                            }}
                            style={{
                                width: handleSize,
                                height: handleSize,
                                x: handleX,
                            }}
                        />
                    </div>

                    <div
                        data-test="slider-clickable-area"
                        className="absolute w-full h-4"
                        onPointerDown={(event) => {
                            let { left, width } =
                                progressBarRef.current.getBoundingClientRect();
                            let position = event.pageX - left;
                            let newProgress = clamp(position / width, 0, 1);
                            let newValue = newProgress * (max - min);
                            setValue(newValue, min, max);
                            setRemaining(newValue - Math.floor(newValue));
                            animate(handleX, newProgress * width);
                        }}
                    />
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-5 w-8/12 md:w-6/12 self-center'>
                <button className={`flex-1 bg-red-500 rounded-lg py-2 text-white font-bold text-center ${value < 1 ? 'cursor-not-allowed' : ''}`} onClick={() => { value > 0 ? setValue(Math.ceil(value) - 1) : null; setRemaining(0) }}>Previous</button>
                <button className={`flex-1 bg-red-500 rounded-lg py-2 text-white font-bold text-center ${value > 4 ? 'cursor-not-allowed' : ''}`} onClick={() => { value < 5 ? setValue(Math.floor(value) + 1) : null; setRemaining(0) }}>Next</button>
            </div>
        </div>
    );
}

function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
}

