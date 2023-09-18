'use client'
import React from 'react'
import { Link } from 'react-scroll'

export default function ButtonToScroll() {
    return (
        <Link to='collabForm' smooth={true} duration={500} offset={-100} className="flex rounded-lg p-2 md:p-3 cursor-pointer md:px-4 text-lg md:text-xl text-stone-800 flex-row items-center justify-center gap-2 w-full font-medium bg-yellow-600 hover:bg-yellow-300 hover:scale-105 active:bg-yellow-600 active:scale-95 transition-all duration-100">
            Get our Media Kit
        </Link>
    )
}
