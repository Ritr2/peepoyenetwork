'use client'
import Link from 'next/link';
import React from 'react'
import { Tweet } from 'react-tweet';
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function PollContext({ data, category }) {
  return (
    <div className={`flex flex-col justify-center items-center px-5 md:px-20 py-10 ${data.context_button !== 'twitter'?'gap-3 md:gap-10': ''}`}>
      <h3 className="text-2xl md:text-3xl font-medium text-neutral-800 text-center">Context of the Poll</h3>
      {
        data.context_button === 'blog' &&
        <>
          <iframe src={data.context_text} title="context" className="w-full h-[900px] rounded-xl self-center" />
        </>
      }
      {
        data.context_button === 'youtube' &&
        <div className=' relative flex flex-col items-center justify-center rounded-lg gap-4 w-full md:w-6/12 h-48 md:h-96 overflow-hidden'>
          <ReactPlayer url={data.context_text} controls={true} width='100%' height='100%' />
        </div>
      }
      {
        data.context_button === 'twitter' &&
        <div className=' relative flex flex-col items-center justify-center rounded-lg gap-4 w-full h-full overflow-auto'>
          <Tweet id={data.context_text} />
        </div>
      }
      <div className="flex flex-col md:flex-row justify-center gap-5 w-full md:w-7/12">
        <Link href={`/opinion-polls/${category}/${data.id}`} className='bg-neutral-900 text-white text-md md:text-base text-center font-bold p-3 w-full rounded-lg hover:text-neutral-800 hover:bg-neutral-400 transition-all duration-300'>Back to Poll</Link>
        <Link href={`/opinion-polls`} className='bg-neutral-900 text-white text-md md:text-base text-center font-bold p-3 w-full rounded-lg hover:text-neutral-800 hover:bg-neutral-400 transition-all duration-300'>Back to Home</Link>
      </div>
    </div>
  )
}
