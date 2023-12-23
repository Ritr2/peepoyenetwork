import React, { Fragment } from 'react'
import { DM_Sans } from 'next/font/google'
import Link from 'next/link'
import url,{apiUrl} from '@/utils/url'
import Profile from '@/components/blogs/Profile'
import BlogsList from '@/components/blogs/BlogsList'
import { notFound } from 'next/navigation'

const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Blogs - Peepoye',
  description: 'With Peepoye, Discover the path to awareness and happiness through our transformative content, empowering courses, and engaging masterminds.',
  url: 'https://peepoye.com',
  type: 'website',
  openGraph: {
    title: 'Blogs - Peepoye',
    description: 'With Peepoye, Discover the path to awareness and happiness through our transformative content, empowering courses, and engaging masterminds.',
    url: 'https://peepoye.com',
    type: 'website',
  },
  canonical: 'https://peepoye.com/blogs'
}

export async function getBlogs(page=1, search=false, all=false) {
  let res
  try {
    res = await fetch(`${apiUrl}/social_awareness_blogs?blog_type=personal&p=${page}${search ? `&search=${search}` : ''}${all ? `?all=${true}` : ''}`, { cache: 'no-cache' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  }
  catch(err) {
    notFound()
  }
  const data = await res.json()
  return data
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
  const {pageCount, blogs} = await getBlogs(1, false);
  return (
      <main className={`relative flex flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
        <section className="flex flex-col md:flex-row w-full bg-neutral-200 items-center justify-center px-2 py-12 md:py-24 md:px-20">
          <div className="flex flex-col justify-center items-center flex-1 gap-2 md:gap-5">
            <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left text-neutral-700">BLOG</h1>
          </div>
        </section>
        <div className='flex flex-col md:flex-row w-full gap-8 px-7 py-7 md:py-14 md:px-24'>
          <div className=' flex flex-col w-full flex-1'>
          <BlogsList data={blogs} totalPage={pageCount} page={page} search={search} afterurl='blogs' />
          </div>
          <Profile />
        </div>
      </main>
  )
}
