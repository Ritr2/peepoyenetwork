import React, { Fragment } from 'react'
import url, { apiUrl } from '@/utils/url'
import { notFound } from 'next/navigation';
import PollContext from '@/components/polls/PollContext';
import Link from 'next/link';

const fetchPoll = async (slug, poll) => {
    let res;
    try {
        res = await fetch(`${apiUrl}/categories/${slug}/questions/${poll}`, { next: { revalidate: 10000 } })
        if (!res.ok) {
            throw new Error('Something went wrong')
        }
    }
    catch (error) {
        notFound()
    }
    return res.json()
}

export default async function page({ params }) {
    const { slug, poll } = params
    const data = await fetchPoll(slug, poll)
    return (
        <div className="flex flex-col">
            {
                data.context_text.length > 0 && data.context_button.length > 0 ?
                    <PollContext data={data} category={slug} /> :
                    <div className="flex flex-col justify-center gap-5 items-center px-5 md:px-20 py-10">
                        <h3 className="text-2xl md:text-3xl font-medium text-neutral-800 text-center">No Context Found</h3>
                        <p className="text-base md:text-lg text-neutral-600 text-center">We are working on it. Please check back later.</p>
                        <Link href={`/bekhauf-awaaz/${slug}/${poll}`} className='bg-neutral-900 max-w-xs text-white text-md md:text-base text-center font-bold p-3 w-full rounded-lg hover:text-neutral-800 hover:bg-neutral-400 transition-all duration-300'>Back to Poll</Link>
                    </div>
            }
        </div>
    )
}
