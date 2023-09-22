'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BsSearch } from 'react-icons/bs';

export default function LearnSearch({search = false}) {
    const router = useRouter()
    const [searchText, setSearchText] = React.useState(search || '')
    const handleSearch = () => {
        if(searchText.length > 0) {
            router.push(`/learn?search=${searchText}`)
        }
        else {
            router.push(`/learn`)
        }
    }
    return (
        <>
            <input type="text" placeholder="Search" className="px-2 py-1 rounded-md shadow-md drop-shadow-md bg-neutral-100 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2" value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSearch()} />
            <button type='button' className="flex-1 px-2 py-1 rounded-md shadow-md drop-shadow-md bg-primary-100 text-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2" onClick={handleSearch} >
                <BsSearch className="text-xl md:text-2xl" />
            </button>
        </>
    )
}
