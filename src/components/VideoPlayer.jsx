'use client'
import React from 'react'
import ReactPlayer from "react-player/lazy";

export default function VideoPlayer({url}) {
  return (
    <div className='w-full md:h-[420px] rounded-lg overflow-hidden'>
       <ReactPlayer
        url={url}
        width={'100%'}
        height={'100%'}
        style={{
          selfAlign: 'center',
          margin: 'auto',
        }}
        controls={true}
      />
    </div>
  )
}
