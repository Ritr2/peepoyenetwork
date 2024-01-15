'use client'
import React from 'react'
import Countdown from 'react-countdown';

export default function CountDown({time}) {
  return (
    <>
      <Countdown date={Date.now() + time} renderer={({ days, hours, minutes, seconds, completed }) => (
        <p className='text-center text-sm md:text-2xl flex flex-row gap-1 self-center'>
          <span className='bg-white rounded-lg flex flex-col flex-1 min-w-[70px]'>
            <span className='red-text text-sm md:text-xl text-center font-bold'>{days > 9 ? days : `0${days}`}</span>
            <span className='text-neutral-600 text-center text-xs font-medium uppercase'>{days > 1 ? 'days' : 'day'}</span>
          </span>
          <span className='bg-white rounded-lg flex flex-col flex-1 min-w-[70px]'>
            <span className='red-text text-sm md:text-xl text-center font-bold'>{hours > 9 ? hours : `0${hours}`}</span>
            <span className='text-neutral-600 text-center text-xs font-medium uppercase'>{hours > 1 ? 'hours' : 'hour'}</span>
          </span>
          <span className=' mt-1'>:</span>
          <span className='bg-white rounded-lg flex flex-col flex-1 min-w-[70px]'>
            <span className='red-text text-sm md:text-xl text-center font-bold'>{minutes > 9 ? minutes : `0${minutes}`}</span>
            <span className='text-neutral-600 text-center text-xs font-medium uppercase'>{minutes > 1 ? 'minutes' : 'minute'}</span>
          </span>
          <span className=' mt-1'>:</span>
          <span className='bg-white rounded-lg flex flex-col flex-1 min-w-[70px]'>
            <span className='red-text text-sm md:text-xl text-center font-bold'>{seconds > 9 ? seconds : `0${seconds}`}</span>
            <span className='text-neutral-600 text-center text-xs font-medium uppercase'>{seconds > 1 ? 'seconds' : 'second'}</span>
          </span>
        </p>
      )} />
    </>
  )
}
