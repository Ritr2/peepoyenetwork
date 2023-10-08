'use client'
import React, { useEffect } from 'react'
import { apiUrl } from '@/utils/url'
import Link from 'next/link'

const featuredSection = async () => {
    const response = await fetch(`${apiUrl}/featured_polls`, { cache: "no-cache" })
    const data = await response.json()
    return data;
}

const trendingSection = async () => {
    const response = await fetch(`${apiUrl}/popular_polls`, { cache: "no-cache" })
    const data = await response.json()
    return data;
}


export default function FeaturedAndTrending() {
    const [selectedSection, setSelectedSection] = React.useState('featured')
    const [featuredPolls, setFeaturedPolls] = React.useState([])
    const [trendingPolls, setTrendingPolls] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState([])
    const [apiCalled, setApiCalled] = React.useState([false, false])

    useEffect(() => {
        if (selectedSection === 'featured') {
            setData(featuredPolls)
        }
        else if (selectedSection === 'trending') {
            setData(trendingPolls)
        }
    }, [selectedSection, featuredPolls, trendingPolls])

    useEffect(() => {
        if (selectedSection === 'featured' && featuredPolls.length === 0 && !apiCalled[0]) {
            setLoading(true)
            featuredSection().then(data => {
                setFeaturedPolls(data)
                setLoading(false)
                setApiCalled([true, apiCalled[1]])
            })
        }
        else if (selectedSection === 'trending' && trendingPolls.length === 0 && !apiCalled[1]) {
            setLoading(true)
            trendingSection().then(data => {
                setTrendingPolls(data)
                setLoading(false)
                setApiCalled([apiCalled[0], true])
            })
        }
    }, [selectedSection, featuredPolls, trendingPolls])


    return (
        <div className="flex flex-col items-center">
            <h3 className="text-xl md:text-2xl my-5 md:m-10 font-medium text-neutral-800">
                <span className={`cursor-pointer ${selectedSection === "featured" ? 'text-white bg-neutral-800' : 'text-neutral-800 bg-neutral-200'} px-1 md:px-4 py-1 rounded-l-full transition-all duration-300`} onClick={() => setSelectedSection('featured')}>Featured Polls</span>
                <span className={`cursor-pointer ${selectedSection === "trending" ? 'text-white bg-neutral-800' : 'text-neutral-800 bg-neutral-200'} rounded-r-full px-1 md:px-4 py-1 transition-all duration-300`} onClick={() => setSelectedSection('trending')}>Trending Polls</span>
            </h3>
            {loading &&
                <>
                    <div className='loader self-center z-10' />
                </>
            }
            {data.length > 0 && <div className="flex flex-col md:flex-row flex-wrap md:w-4/5 m-auto items-center justify-center gap-10 p-3">
                {data.map((item, index) => (
                    <div key={index} className={`flex flex-col items-center justify-center w-full md:w-2/5 hover:scale-105`}>
                        <Link href={`/opinion-polls/${item.category.slug}/${item.slug}`} className='w-full'>
                            <img src={item.image} alt="img" className="object-cover w-full rounded-t-lg" />
                        </Link>
                        <div className='flex flex-row items-center justify-center w-full gap-1'>
                            {item.context_text.length > 0 && item.context_button.length > 0 &&
                                <Link href={`/context/${item.category.slug}/${item.slug}`} className='bg-neutral-900 text-white text-md md:text-base font-bold p-3 w-full text-center rounded-bl-lg hover:text-neutral-800 hover:bg-neutral-400 transition-all duration-300'>Know the Story</Link>
                            }
                            <Link href={`/opinion-polls/${item.category.slug}/${item.slug}`} className='flex flex-row w-full'>
                                <button type='button' className={`bg-neutral-900 text-white font-bold p-3 w-full ${item.context_text.length > 0 && item.context_button.length > 0 ? 'rounded-br-lg' : 'rounded-b-lg'} hover:text-neutral-800 hover:bg-neutral-400 transition-all duration-300`}>Vote Now</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>}
            {
                data.length === 0 && ((selectedSection === 'featured' && apiCalled[0]) || (selectedSection === 'trending' && apiCalled[1])) &&
                <div className='flex flex-col items-center justify-center w-full'>
                    <h2 className='text-2xl text-neutral-800 font-bold'>No {selectedSection} polls available</h2>
                </div>
            }
        </div>
    )
}
