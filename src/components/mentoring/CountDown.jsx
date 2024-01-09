'use client'
import React from 'react'
import Countdown from 'react-countdown';

export default function CountDown() {
  return (
    <>
      <Countdown date={Date.now() + 86400000} renderer={({ days, hours, minutes, seconds, completed }) => (
        <p className='text-center text-sm md:text-2xl flex flex-row gap-1 self-center'>
          <span className='bg-white rounded-lg flex flex-col flex-1 min-w-[70px]'>
            <span className='red-text text-sm md:text-xl text-center font-bold'>{hours > 9 ? hours : `0${hours}`}</span>
            <span className='text-black text-center text-xs md:text-base'>{hours > 1 ? 'hours' : 'hour'}</span>
          </span>
          <span className=' mt-1'>:</span>
          <span className='bg-white rounded-lg flex flex-col flex-1 min-w-[70px]'>
            <span className='red-text text-sm md:text-xl text-center font-bold'>{minutes > 9 ? minutes : `0${minutes}`}</span>
            <span className='text-black text-center text-xs md:text-base'>{minutes > 1 ? 'minutes' : 'minute'}</span>
          </span>
          <span className=' mt-1'>:</span>
          <span className='bg-white rounded-lg flex flex-col flex-1 min-w-[70px]'>
            <span className='red-text text-sm md:text-xl text-center font-bold'>{seconds > 9 ? seconds : `0${seconds}`}</span>
            <span className='text-black text-center text-xs md:text-base'>{seconds > 1 ? 'seconds' : 'second'}</span>
          </span>
        </p>
      )} />
    </>
  )
}
