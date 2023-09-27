import React, { Fragment, useEffect } from 'react'
import style from '@/styles/Walking.module.css'
import { motion } from 'framer-motion'

export default function WalkingPath() {
    const walkingManImages = [
        'https://i.ibb.co/JcdvcfN/1.png',
        'https://i.ibb.co/5kRT9L1/2.png',
        'https://i.ibb.co/f4kfNtf/3.png',
        'https://i.ibb.co/5YG7GZY/4.png',
        'https://i.ibb.co/hXzpWD7/5.png'
    ]

    const products = [
        'https://i.ibb.co/QYMnCmc/accelerator.webp',
        'https://i.ibb.co/BrZHYbt/green.webp',
        'https://i.ibb.co/yfRqGJq/product.webp',
        'https://i.ibb.co/sqDV87D/audit-call.webp',
    ]

    const [currentImage, setCurrentImage] = React.useState(0)
    const [isWalking, setIsWalking] = React.useState(false)
    const imageRef = React.useRef(null)
    const [currentProduct, setCurrentProduct] = React.useState(-1)
    const [productEnd, setProductEnd] = React.useState(false)
    const [startProductAnimation, setStartProductAnimation] = React.useState(false)

    useEffect(() => {
        if (isWalking) {
            const interval = setInterval(() => {
                if (currentImage === walkingManImages.length - 1) {
                    setCurrentImage(0)
                } else {
                    setCurrentImage(currentImage + 1)
                }
            }, 100)
            return () => clearInterval(interval)
        }
    }, [currentImage, isWalking])

    useEffect(() => {
        if (isWalking) {
            const SetInterval = setInterval(() => {
                setIsWalking(false)
            }
                , 3000)
            return () => clearInterval(SetInterval)
        }
    }, [currentProduct, isWalking])

    useEffect(() => {
        if (currentProduct === products.length - 1) {
            setProductEnd(true)
        }
    }, [currentProduct])

    const handleButton = () => {
        {
            setStartProductAnimation(true)
            setCurrentProduct(currentProduct + 1)
            if (productEnd) {
                setProductEnd(false)
                setCurrentProduct(-1)
                setStartProductAnimation(false)
            }
            else {
                setIsWalking(true)
            }
        }
    }

    return (
        <div className='flex flex-col w-full gap-8'>
            <div className={`relative flex flex-col w-full h-full items-center justify-center overflow-hidden rounded-2xl`}>
                <div className={`z-0 absolute ${style.backgroundLeftToRigtMovingAnimation} ${isWalking ? style.playing : style.paused}`}>
                </div>
                <div className='flex z-10 flex-row justify-center items-center'>
                    <img src={walkingManImages[currentImage]} className={`h-80 w-auto`} ref={imageRef} />
                </div>
                {
                    products.map((product, index) => (
                        <Fragment key={index}>
                            {
                                (index === currentProduct && startProductAnimation) &&
                                <motion.div
                                    initial={{ x: "100vw" }}
                                    animate={{ x: 0 }}
                                    transition={{ duration: 3 }}
                                    className={`z-40 flex flex-col justify-center absolute right-1/4 bottom-0 w-fit h-fit `}
                                >
                                    <p className='text-neutral-600 bg-white border-2 border-neutral-600 rounded-lg p-2 text-center font-bold text-base animate-pulse'>Click on the product to learn more</p>
                                    <img src={product} className={`h-40 w-auto object-contain hover:scale-110 cursor-pointer`} />
                                </motion.div>
                            }
                        </Fragment>
                    ))
                }
            </div>
            <div className='flex flex-row justify-center items-center'>
                <button className={`bg-red-500 rounded-lg py-2 px-10 text-white font-bold text-center hover:scale-105 ${isWalking ? 'cursor-not-allowed opacity-5' : 'cursor-pointer'}`} onClick={handleButton} disabled={isWalking}>
                    {(productEnd && !isWalking) ? 'Reset' : currentProduct === -1 ? 'Start' : isWalking ? 'Wait' : 'Next'}
                </button>
            </div>
        </div>
    )
}
