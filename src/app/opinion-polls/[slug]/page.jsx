import React, { Fragment } from 'react'
import url, { apiUrl } from '@/utils/url'
import { notFound } from 'next/navigation';
import Link from 'next/link'

const fetchPolls = async (slug) => {
    let res;
    try {
        res = await fetch(`${apiUrl}/categories/${slug}`, { cache: 'no-cache' })
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
    const { slug } = params
    const data = await fetchPolls(slug)
    return {
        title: `${data.name} Category - Peepoye`,
        description: `Share Your Opinion on ${data.name} Category Polls and get to know what others think about it.`,
        images: [
            {
                url: data.image,
                width: 800,
                height: 500,
                alt: data.name,
            },
        ],
        url: `${url}/opinion-polls/${data.slug}`,
        type: 'website',
        keywords: [data.name, 'opinion polls', 'polls', 'opinion', 'peepoye'],
        openGraph: {
            title: `${data.name} Category - Peepoye`,
            description: `Share Your Opinion on ${data.name} Category Polls and get to know what others think about it.`,
            images: [
                {
                    url: data.image,
                    width: 800,
                    height: 500,
                    alt: data.name,
                },
            ],
            url: `${url}/opinion-polls/${data.slug}`,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${data.name} Category - Peepoye`,
            description: `Share Your Opinion on ${data.name} Category Polls and get to know what others think about it.`,
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
            canonical: `${url}/opinion-polls/${data.slug}`,
        },
    }
}


export default async function page({ params }) {
    const { slug } = params
    const data = await fetchPolls(slug)
    const featuredPolls = data.questions.filter((item) => item.sub_category.name === 'Featured Polls');
    const activePolls = data.questions.filter((item) => item.sub_category.name === 'Active Polls');
    const expiredPolls = data.questions.filter((item) => item.sub_category.name === 'Expired Polls');
    const polls = {
        'Featured Polls': featuredPolls ? featuredPolls : [],
        'Active Polls': activePolls ? activePolls : [],
        'Expired Polls': expiredPolls ? expiredPolls : []
    }

    return (
        <div className="flex flex-col pb-10 px-5">
            <div className='w-full flex items-center mt-5 mb-3 md:mt-10 gap-3 justify-center flex-col md:flex-row'>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-800">Category - {data.name}</h3>
            </div>
            {
                Object.keys(polls).map((key, index) => (
                    <Fragment key={index}>
                        {
                            polls[key].length > 0 &&
                            <div className='flex flex-col items-center'>
                                <div className='w-full flex items-center mt-5 mb-3 md:mt-10 gap-3 justify-center flex-col md:flex-row'>
                                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-800">{key}</h3>
                                </div>
                                <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-10 w-full md:w-10/12">
                                    {
                                        polls[key].map((item2, index2) => (
                                            <div className={`flex ${key === 'Expired Polls' ? 'opacity-70' : ''} flex-col items-center justify-center w-full md:w-2/5 hover:scale-105`} key={index2}>
                                                <Link href={`/opinion-polls/${slug}/${item2.slug}`} className='w-full'>
                                                    <img src={item2.image} alt="img" className="object-cover w-full rounded-t-lg" loading='lazy' />
                                                </Link>
                                                <div className='flex flex-row items-center justify-center w-full gap-1'>
                                                    {item2.context_text.length > 0 && item2.context_button.length > 0 &&
                                                        <Link href={`/context/${slug}/${item2.slug}`} className='bg-neutral-900 text-white text-md md:text-base text-center font-bold p-3 w-full rounded-bl-lg hover:text-neutral-800 hover:bg-neutral-400 transition-all duration-300'>Know the Story</Link>
                                                    }
                                                    <Link href={`/opinion-polls/${slug}/${item2.slug}`} className='flex flex-row w-full'>
                                                        <button type='button' className={`bg-neutral-900 text-white font-bold p-3 w-full ${item2.context_text.length > 0 && item2.context_button.length > 0 ? 'rounded-br-lg' : 'rounded-b-lg'} hover:text-neutral-800 hover:bg-neutral-400 transition-all duration-300`}>{key === 'Expired Polls' ? 'View Results' : 'Vote Now'}</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                    </Fragment>
                ))
            }
        </div>
    )
}
