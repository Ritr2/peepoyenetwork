'use client'
import React from 'react'
import ReactPlayer from "react-player/lazy";

export default function VideoPlayer({url}) {
  return (
    <div className='w-full h-full'>
       <ReactPlayer
        url={url}
        width={'100%'}
        height={'400px'}
        style={{
          selfAlign: 'center',
          margin: 'auto',
        }}
        controls={true}
      />
    </div>
  )
}
