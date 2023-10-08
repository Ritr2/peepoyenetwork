import React from 'react'
import Link from 'next/link'
import { BsSearch } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

export default function NavBar() {
    return (
      <div className="fixed flex w-full box-border flex-col md:flex-row bg-stone-800 justify-between px-2 md:px-6 h-24 md:h-20 gap-y-2 z-40">
        <div className="flex flex-row items-center justify-center gap-2">
          <Link href="/" className='text-white text-2xl md:text-left font-bold md:text-3xl'>
            <h1>Peepoye</h1>
          </Link>
          <h1 className='hidden md:block text-white text-2xl md:text-left font-bold md:text-3xl'>|</h1>
          <h2 className="hidden text-2xl md:block text-gray-100 mt-1"> Bekhauf Opinion Platform</h2>
        </div>
        <div className="flex flex-row gap-4 flex-1 items-center box-border justify-center md:justify-end">
          <div className="flex flex-col gap-1 relative flex-1 max-w-lg">
            <input type="text" placeholder="Search The Poll you want to vote for" className="flex-1 box-border bg-stone-950 text-white border-2 placeholder:text-gray-300 border-white rounded-full px-3 py-2" />
            <div className='flex flex-col justify-center box-border items-center m-auto bg-gray-500 h-8 w-8 absolute top-0 bottom-0 right-1 rounded-full p-2 hover:scale-110 active:scale-90'><BsSearch className="text-white text-2xl w-full h-full " /></div>
          </div>
          <div className="relative flex flex-col gap-1 w-10 h-10">
            <CgProfile className={`w-full bg-white rounded-full h-full cursor-pointer hover:scale-110`} />
          </div>
        </div>
      </div>
    );
}
