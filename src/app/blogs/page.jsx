import React, { Fragment } from 'react'
import { DM_Sans } from 'next/font/google'
import Link from 'next/link'
import url from '@/utils/url'
import Profile from '@/components/blogs/Profile'
import BlogsList from '@/components/blogs/BlogsList'

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

async function getBlogs() {
  const res = await fetch(`${url}/api/personal-blog`, { cache: 'no-cache' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function page() {
  const data = await getBlogs();
  return (
      <main className={`relative flex flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
        <section className="flex flex-col md:flex-row w-full bg-neutral-200 items-center justify-center px-2 py-12 md:py-24 md:px-20">
          <div className="flex flex-col justify-center items-center flex-1 gap-2 md:gap-5">
            <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left text-neutral-700">BLOG</h1>
          </div>
        </section>
        <div className='flex flex-col md:flex-row w-full gap-8 px-7 py-7 md:py-14 md:px-36'>
          <div className=' flex flex-col w-full flex-1'>
            <BlogsList data={data} />
          </div>
          <Profile />
        </div>
      </main>
  )
}
