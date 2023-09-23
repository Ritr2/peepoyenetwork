import React, { Fragment } from 'react'
import { Roboto_Serif } from 'next/font/google'
import { notFound } from 'next/navigation';
import url from '@/utils/url';
import { AiFillFacebook, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import Link from 'next/link';
import { RiTwitterXFill } from 'react-icons/ri';
import LearnSearch from '@/components/linktree/LearnSearch';
import Footer from '@/components/Footer';


const robo = Roboto_Serif({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
})

export const metadata = {
    title: `Akassh's Weekly Learning Blogs`,
    description: `Discover valuable insights on YouTube, Business, Online Authority, Career advice, Soft Skills, and more, drawn from Akassh's 20 years in corporate leadership and his journey to 1 million YouTube subscribers with a winning strategy.`,
    images: [
        {
            url: 'https://i.ibb.co/GdRJ5sw/akasshashokgupta.webp',
            width: 500,
            height: 500,
            alt: 'Akassh Ashok Gupta',
        },
    ],
    url: 'https://peepoye.com/learn',
    type: 'website',
    keywords: [`Akassh Ashok Gupta`, `Akassh`, `Akassh Gupta`, `Akassh Ashok`, `Akassh Ashok Gupta`, `Akassh Ashok Gupta Blogs`, `Akassh Ashok Gupta Blog`, `Akassh Gupta Blogs`, `Akassh Gupta Blog`, `Akassh Ashok Blogs`, `Akassh Ashok Blog`, `Akassh Blogs`, `Akassh Blog`, `Akassh Ashok Gupta Learn`, `Akassh Gupta Learn`, `Akassh Ashok Learn`, `Akassh Learn`, `Akassh Ashok Gupta Learning`, `Akassh Gupta Learning`, `Akassh Ashok Learning`, `Akassh Learning`, `Akassh Ashok Gupta Weekly Learning`, `Akassh Gupta Weekly Learning`, `Akassh Ashok Weekly Learning`, `Akassh Weekly Learning`, `Akassh Ashok Gupta Weekly Learning Blogs`, `Akassh Gupta Weekly Learning Blogs`, `Akassh Ashok Weekly Learning Blogs`, `Akassh Weekly Learning Blogs`, `Akassh Ashok Gupta Weekly Learning Blog`, `Akassh Gupta Weekly Learning Blog`, `Akassh Ashok Weekly Learning Blog`, `Akassh Weekly Learning Blog`],
    openGraph: {
        title: `Akassh's Weekly Learning Blogs`,
        description: `Discover valuable insights on YouTube, Business, Online Authority, Career advice, Soft Skills, and more, drawn from Akassh's 20 years in corporate leadership and his journey to 1 million YouTube subscribers with a winning strategy.`,
        images: [
            {
                url: 'https://i.ibb.co/GdRJ5sw/akasshashokgupta.webp',
                width: 500,
                height: 500,
                alt: 'Akassh Ashok Gupta',
            },
        ],
        url: 'https://peepoye.com/learn',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: `Akassh's Weekly Learning Blogs`,
        description: 'Discover valuable insights on YouTube, Business, Online Authority, Career advice, Soft Skills, and more, drawn from Akassh\'s 20 years in corporate leadership and his journey to 1 million YouTube subscribers with a winning strategy.',
        images: ['https://i.ibb.co/GdRJ5sw/akasshashokgupta.webp'],
        creator: '@peepoye',
    },
}

export async function getSocialBlogs(page = false, search = false) {
    let res
    try {
        res = await fetch(`${url}/api/personal-blog/learn${page ? `?page=${page}` : ''}${search ? `&search=${search}` : ''}`, { cache: 'no-cache' })
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
    }
    catch (err) {
        notFound()
    }
    return res.json()
}

export default async function page({ searchParams }) {
    let page = 1;
    let search = false;
    if (searchParams.page) {
        page = parseInt(searchParams.page);
    }
    if (searchParams.search) {
        search = decodeURIComponent(searchParams.search);
    }
    const { data, totalPage } = await getSocialBlogs(page, search);

    return (
        <main className={`flex flex-col items-center justify-between min-h-screen gap-2 md:gap-10 pt-10 ${robo.className}`}>
            <div className="flex flex-col items-center w-full gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                    <Link href="/learn">
                    <img src="https://i.ibb.co/GdRJ5sw/akasshashokgupta.webp" alt="Akassh" className='w-24 h-24 object-contain object-bottom rounded-full shadow-xl drop-shadow-xl border-2 border-neutral-300' />
                    </Link>
                    <Link href="/learn">
                    <h1 className="text-sm md:text-base font-light text-neutral-800">@akasshashokgupta</h1>
                    </Link>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Link href="https://www.instagram.com/akasshashokgupta/">
                        <AiOutlineInstagram className="text-2xl md:text-4xl text-neutral-800" />
                    </Link>
                    <Link href="https://x.com/akasshagupta">
                        <RiTwitterXFill className="text-2xl md:text-4xl text-neutral-800" />
                    </Link>
                    <Link href="https://www.facebook.com/akasshashokgupta">
                        <AiFillFacebook className="text-2xl md:text-4xl text-neutral-800" />
                    </Link>
                    <Link href="https://www.youtube.com/@AkasshAshokGupta">
                        <AiOutlineYoutube className="text-2xl md:text-4xl text-neutral-800" />
                    </Link>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <LearnSearch search={search} />
                </div>
            </div>
            <div className="flex flex-row flex-wrap w-full justify-center gap-1 md:gap-5 md:w-11/12 md:px-5">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col w-5/12 md:w-3/12 md:hover:scale-105">
                        <Link href={`${url}/blogs/${item.slug}`}>
                            <img src={item.image.src} alt={item.image.alt} className="w-full md:rounded-xl shadow-lg drop-shadow-lg" />
                        </Link>
                    </div>
                ))}
                {
                    data.length === 0 && (
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="text-2xl md:text-4xl font-medium text-neutral-800">No Blogs Found</h1>
                            <Link href="/learn">
                                <button type="button" className="px-2 py-1 rounded-md shadow-md drop-shadow-md bg-primary-100 text-primary-800 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">Go Back</button>
                            </Link>
                        </div>
                    )
                }
            </div>
            {
                totalPage > 1 && (
                    <div className="flex flex-row items-center justify-center gap-2">
                        {
                            (page > 1) && (
                                <Link href={`${url}/learn?page=${page - 1}${search ? `&search=${search}` : ''}`} className='flex flex-row items-center justify-center gap-1 px-2 py-1 rounded-md shadow-md drop-shadow-md bg-neutral-100 text-neutral-800 hover:bg-neutral-200'>
                                    <span className="text-sm font-medium">Prev</span>
                                </Link>
                            )
                        }
                        {
                            new Array(totalPage).fill(0).map((_, index) => (
                                <Fragment key={index}>
                                    {
                                        (index < 2 || index > totalPage - 3 || index === page - 1) && (
                                            <Link href={`${url}/learn?page=${index + 1}${search ? `&search=${search}` : ''}`} className={`flex flex-row items-center justify-center gap-1 px-2 py-1 rounded-md shadow-md drop-shadow-md ${index === page - 1 ? 'bg-primary-100 text-primary-800' : 'bg-neutral-100 text-neutral-800'} hover:bg-neutral-200`}>
                                                <span className="text-sm font-medium">{index + 1}</span>
                                            </Link>
                                        )

                                    }
                                    {
                                        (index === 2 && index !== page - 1 && totalPage > 4) && (
                                            <span className="text-sm font-medium">...</span>
                                        )
                                    }
                                    {
                                        (index === totalPage - 3 && index !== page - 1 && totalPage > 4) && (
                                            <span className="text-sm font-medium">...</span>
                                        )
                                    }
                                </Fragment>
                            ))
                        }
                        {
                            (page < totalPage) && (
                                <Link href={`${url}/learn?page=${page + 1}${search ? `&search=${search}` : ''}`} className='flex flex-row items-center justify-center gap-1 px-2 py-1 rounded-md shadow-md drop-shadow-md bg-neutral-100 text-neutral-800 hover:bg-neutral-200'>
                                    <span className="text-sm font-medium">Next</span>
                                </Link>
                            )
                        }
                    </div>
                )
            }
            <Footer />
        </main>
    )
}
