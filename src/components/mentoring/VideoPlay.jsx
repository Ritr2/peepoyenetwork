'use client'
import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

export default function VideoPlay({img}) {
    const [videoPlayervisible, setVideoPlayervisible] = React.useState(false)
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className='relative flex flex-col items-center justify-center w-full min-h-[200px] md:min-h-[0]'>
            <div className='absolute md:hidden z-5 w-full top-0 bottom-0'>
            <img src={img} alt="Akassh ashok Gupta" className="w-full h-full object-right object-cover rounded-lg shadow-lg drop-shadow-lg" draggable={false} />
            </div>
            <div className="relative flex flex-col w-20 h-20 justify-center cursor-pointer items-center bg-gradient-to-r from-red-700 to-red-800 rounded-full hover:scale-105" onClick={() => setVideoPlayervisible(true)}>
                <FaPlay className='text-white text-3xl z-20' />
            </div>
            </div>
            {
                videoPlayervisible && (
                    <div className="flex flex-col items-center justify-center fixed top-0 right-0 left-0 bottom-0 z-50 backdrop-filter bg-neutral-800 backdrop-blur-sm">
                        <div className="flex flex-col justify-center w-full h-80 md:h-screen gap-2 p-4">
                            <div className='relative flex-1 rounded-2xl w-full h-auto overflow-hidden order-2 md:order-1' style={{ position: 'relative' }}>
                                <iframe src="https://www.loom.com/embed/e7d28591110a40cca95b626b95d78f21?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&showEmbedControls=false&show_date=false&loop=1"
                                    frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} autoPlay
                                ></iframe>
                                <IoClose className="absolute top-1 right-1 z-50 text-4xl text-white cursor-pointer hover:text-red-700 order-1 md:order-2" onClick={() => setVideoPlayervisible(false)} />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
