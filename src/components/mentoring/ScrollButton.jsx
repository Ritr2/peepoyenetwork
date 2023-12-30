'use client'
import React from 'react'
import { Link } from 'react-scroll'

export default function ScrollButton() {
  return (
    <Link to="plan" smooth={true} duration={500} className="text-lg md:text-xl text-center bg-neutral-600 text-white p-3 rounded-lg drop-shadow-lg shadow-lg hover:bg-neutral-700 hover:shadow-xl hover:drop-shadow-xl active:bg-neutral-800 active:shadow-2xl active:drop-shadow-2xl active:translate-x-1 active:scale-95 cursor-pointer">
              Join Now
            </Link>
  )
}
