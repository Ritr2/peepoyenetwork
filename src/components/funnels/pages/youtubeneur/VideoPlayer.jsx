import React from 'react'
import { IoClose } from 'react-icons/io5';
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function VideoPlayer({ setVideoPlayervisible }) {
    return (
        <div className="flex flex-col items-center justify-center fixed top-0 right-0 left-0 bottom-0 z-50 backdrop-filter bg-neutral-800 backdrop-blur-sm">
            <div className="flex flex-col justify-center w-full h-80 md:h-screen gap-2 p-4">
                <div className='relative flex-1 rounded-2xl w-full h-auto overflow-hidden order-2 md:order-1' style={{ position: 'relative' }}>
                    <iframe src="https://www.loom.com/embed/6fbcab15480546e58edc0e1f6f6d91bb?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&showEmbedControls=false&show_date=false&loop=1"
                    frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} autoPlay
                    ></iframe>
                    <IoClose className="absolute top-1 right-1 z-50 text-4xl text-white cursor-pointer hover:text-red-700 order-1 md:order-2" onClick={() => setVideoPlayervisible(false)} />
                 </div>
            </div>
        </div>
    )
}
