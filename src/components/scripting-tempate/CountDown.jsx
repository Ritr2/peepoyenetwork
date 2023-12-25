'use client'
import React from 'react'
import Countdown from 'react-countdown';

export default function CountDown() {
  return (
    <>
    <Countdown date={Date.now() + 120000}
    renderer={({ minutes, seconds}) => (
                <p className='text-center text-sm md:text-2xl flex flex-row gap-2 self-center w-6/12'>
                <span className='bg-white rounded-lg flex flex-col gap-2 p-1 flex-1'>
                  <span className='red-text text-xl md:text-4xl text-center font-bold'>{minutes > 9 ? minutes : `0${minutes}`}</span>
                  <span className='text-black text-center text-xs md:text-lg'>{minutes > 1 ? 'minutes' : 'minute'}</span>
                </span>
                <span className='bg-white rounded-lg flex flex-col gap-2 p-1 flex-1'>
                  <span className='red-text text-xl md:text-4xl text-center font-bold'>{seconds > 9 ? seconds : `0${seconds}`}</span>
                  <span className='text-black text-center text-xs md:text-lg'>{seconds > 1 ? 'seconds' : 'second'}</span>
                </span>
              </p>
              )} />
    </>
  )
}
