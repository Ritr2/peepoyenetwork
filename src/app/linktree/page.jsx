import React, { Fragment } from 'react'
import { Roboto_Serif } from 'next/font/google'
import { notFound } from 'next/navigation';
import url from '@/utils/url';
import { AiFillFacebook, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import Link from 'next/link';
import { RiTwitterXFill } from 'react-icons/ri';
import Search from '@/components/linktree/Search';
import FunnelFooter from '@/components/funnels/FunnelFooter';


const robo = Roboto_Serif({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
})

export const metadata = {
    title: `Social Awareness Stories - Peepoye`,
    description: `Read the stories that impact our social environment`,
    images: [
        {
            url: 'https://i.ibb.co/TcHVdR1/Linktree.png',
            width: 500,
            height: 500,
            alt: 'Peepoye Social Awareness Stories Linktree',
        },
    ],
    url: 'https://peepoye.com/linktree',
    type: 'website',
    keywords: [`social awareness stories`, `social awareness stories linktree`, `peepoye social awareness stories linktree`],
    openGraph: {
        title: 'Social Awareness Stories - Peepoye',
        description: `Read the stories that impact our social environment`,
        images: [
            {
                url: 'https://i.ibb.co/TcHVdR1/Linktree.png',
                width: 500,
                height: 500,
                alt: 'Peepoye Social Awareness Stories Linktree',
            },
        ],
        url: 'https://peepoye.com/linktree',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Social Awareness Stories - Peepoye',
        description: 'Read the stories that impact our social environment',
        images: ['https://i.ibb.co/TcHVdR1/Linktree.png'],
        creator: '@peepoye',
    },
}

export async function getSocialBlogs(page = false, search = false) {
    let res
    try {
        res = await fetch(`${url}/api/social-blog/linktree${page ? `?page=${page}` : ''}${search ? `&search=${search}` : ''}`, { cache: 'no-cache' })
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
                    <Link href="/linktree">
                    <img src="https://i.ibb.co/TcHVdR1/Linktree.png" alt="Linktree" className='w-24 h-24 rounded-full shadow-xl drop-shadow-xl border-2 border-neutral-300' />
                    </Link>
                    <Link href="/linktree">
                    <h1 className="text-sm md:text-base font-light text-neutral-800">@Peepoye</h1>
                    </Link>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Link href="https://instagram.com/peepoye">
                        <AiOutlineInstagram className="text-2xl md:text-4xl text-neutral-800" />
                    </Link>
                    <Link href="https://x.com/peepoye_">
                        <RiTwitterXFill className="text-2xl md:text-4xl text-neutral-800" />
                    </Link>
                    <Link href="https://www.facebook.com/peepoye">
                        <AiFillFacebook className="text-2xl md:text-4xl text-neutral-800" />
                    </Link>
                    <Link href="https://www.youtube.com/@peepoye">
                        <AiOutlineYoutube className="text-2xl md:text-4xl text-neutral-800" />
                    </Link>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Search search={search} />
                </div>
            </div>
            <div className="flex flex-row flex-wrap w-full justify-center gap-1 md:gap-5 md:w-11/12 md:px-5">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col w-5/12 md:w-3/12 md:hover:scale-105">
                        <Link href={`${url}/social-awareness/blogs/${item.slug}`}>
                            <img src={item.image.src} alt={item.image.alt} className="w-full md:rounded-xl shadow-lg drop-shadow-lg" />
                        </Link>
                    </div>
                ))}
            </div>
            {
                totalPage > 1 && (
                    <div className="flex flex-row items-center justify-center gap-2">
                        {
                            (page > 1) && (
                                <Link href={`${url}/linktree?page=${page - 1}${search ? `&search=${search}` : ''}`} className='flex flex-row items-center justify-center gap-1 px-2 py-1 rounded-md shadow-md drop-shadow-md bg-neutral-100 text-neutral-800 hover:bg-neutral-200'>
                                    <span className="text-sm font-medium">Prev</span>
                                </Link>
                            )
                        }
                        {
                            new Array(totalPage).fill(0).map((_, index) => (
                                <Fragment key={index}>
                                    {
                                        (index < 2 || index > totalPage - 3 || index === page - 1) && (
                                            <Link href={`${url}/linktree?page=${index + 1}${search ? `&search=${search}` : ''}`} className={`flex flex-row items-center justify-center gap-1 px-2 py-1 rounded-md shadow-md drop-shadow-md ${index === page - 1 ? 'bg-primary-100 text-primary-800' : 'bg-neutral-100 text-neutral-800'} hover:bg-neutral-200`}>
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
                                <Link href={`${url}/linktree?page=${page + 1}${search ? `&search=${search}` : ''}`} className='flex flex-row items-center justify-center gap-1 px-2 py-1 rounded-md shadow-md drop-shadow-md bg-neutral-100 text-neutral-800 hover:bg-neutral-200'>
                                    <span className="text-sm font-medium">Next</span>
                                </Link>
                            )
                        }
                    </div>
                )
            }
            <FunnelFooter bgcolor={"bg-neutral-300"} textcolor={"text-neutral-800"} />
        </main>
    )
}
