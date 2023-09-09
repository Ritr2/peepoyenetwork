import React from 'react'
import { IoClose } from 'react-icons/io5';
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function VideoPlayer({ setVideoPlayervisible }) {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50 backdrop-filter backdrop-blur-sm">
            <div className="relative flex flex-col items-center justify-center w-full h-full p-4">
                <IoClose className="text-white md:absolute md:top-5 md:right-5 text-4xl self-end cursor-pointer hover:text-red-700" onClick={() => setVideoPlayervisible(false)} />
                <div className="w-full md:flex-1">
                    <ReactPlayer
                        url='https://vimeo.com/860895143?share=copy'
                        wrapper='div'
                        width='100%'
                        height='100%'
                        controls={true}
                        playing={true}
                        loop={true}
                    />
                </div>
            </div>
        </div>
    )
}
