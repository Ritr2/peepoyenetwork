import React, { Fragment } from 'react'
import url, { apiUrl } from '@/utils/url'
import { notFound } from 'next/navigation';
import Link from 'next/link'
import PollAndResult from '@/components/polls/PollAndResult';

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

export async function generateMetadata({ params }) {
    const { slug, poll } = params
    const data = await fetchPoll(slug, poll)
    return {
        title: `${data.name}`,
        description: `Share Your Bekhauf Opinion and get to know what others think about it.`,
        images: [
            {
                url: data.image,
                width: 800,
                height: 500,
                alt: data.name,
            },
        ],
        url: `${url}/opinion-polls/${slug}/${poll}`,
        type: 'website',
        keywords: [data.name, 'opinion polls', 'polls', 'opinion', 'peepoye'],
        openGraph: {
            title: `${data.name}`,
        description: `Share Your Bekhauf Opinion and get to know what others think about it.`,
        images: [
            {
                url: data.image,
                width: 800,
                height: 500,
                alt: data.name,
            },
        ],
        url: `${url}/opinion-polls/${slug}/${poll}`,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${data.name}`,
        description: `Share Your Bekhauf Opinion and get to know what others think about it.`,
            images: [
                {
                    url: data.image,
                    width: 800,
                    height: 500,
                    alt: data.name,
                },
            ],
            creator: '@peepoye',
        },
        alternates: {
            canonical: `${url}/opinion-polls/${slug}/${poll}`,
        },
    }
}

export default async function page({ params }) {
    const { slug, poll } = params
    const data = await fetchPoll(slug, poll)
    return (
        <div className="flex flex-col">
            <PollAndResult data={data} category={slug} passloading = {data.sub_category.name === 'Expired Polls' ? true : false} />
        </div>
    )
}
