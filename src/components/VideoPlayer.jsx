'use client'
import React from 'react'
import ReactPlayer from "react-player/lazy";

export default function VideoPlayer({url, height="md:h-[200px] md:h-[400px]"}) {
  return (
    <div className={`w-full ${height} rounded-lg overflow-hidden`}>
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
