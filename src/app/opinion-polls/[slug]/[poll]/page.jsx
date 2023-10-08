import React, { Fragment } from 'react'
import { apiUrl } from '@/utils/url'
import { notFound } from 'next/navigation';
import Link from 'next/link'

const fetchPoll = async (slug, polls) => {
    let res;
    try {
        res = await fetch(`${apiUrl}/categories/${slug}/questions/${polls}`, { next: { revalidate: 10000 } })
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
    const { slug, polls } = params
    const data = await fetchPoll(slug, polls)
    console.log(data)
    return (
        <div className="flex flex-col">
        </div>
    )
}
