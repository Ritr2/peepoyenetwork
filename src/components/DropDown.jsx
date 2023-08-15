'use client'
import React from 'react'
import Link from 'next/link'
import { BiChevronDown } from 'react-icons/bi'

export default function DropDown({ name, links, setIsOpen2 }) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
    <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className='hidden relative lg:flex flex-col items-center gap-10'>
      <div className="flex flex-row gap-1 items-center px-2">
        <span className="font-medium cursor-pointer">{name}</span>
        <BiChevronDown className={`font-medium ${isOpen? 'rotate-180' : ''} transition-all duration-300`} />
      </div>
      {isOpen && (
        <div className="absolute top-full flex flex-col bg-white shadow-md">
          {Object.keys(links).map((key, index) => (
            <Link key={index} href={links[key]} className="text-base font-medium p-2 px-3 hover:bg-slate-200">{key}</Link>
          ))}
        </div>
      )}
    </div>
    <div className="lg:hidden flex flex-col gap-1">
      <div className='flex flex-row gap-1 items-center justify-center'>
      <span className="font-medium cursor-pointer" onClick={() => setIsOpen(!isOpen)}>{name}</span>
      <BiChevronDown className={`font-medium ${isOpen? 'rotate-180' : ''} transition-all duration-300`} onClick={() => setIsOpen(!isOpen)} />
      </div>
      {isOpen && (
        <div className="flex flex-col items-center">
          {Object.keys(links).map((key, index) => (
            <Link key={index} href={links[key]} className="ml-2 font-medium p-2 px-3" onClick={() => setIsOpen2(false)}>{key}</Link>
          ))}
        </div>
      )}
    </div>
    </>
  )
}
