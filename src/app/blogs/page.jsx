import React, { Fragment } from 'react'
import { DM_Sans } from 'next/font/google'
import Link from 'next/link'
import url from '@/utils/url'
import Profile from '@/components/blogs/Profile'

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
            <h1 className="text-xl md:text-5xl font-bold text-center md:text-left text-neutral-700">BLOG</h1>
          </div>
        </section>
        <div className=' flex flex-col md:flex-row w-full gap-8 px-2 md:py-14 md:px-40'>
          <div className=' flex flex-col w-full flex-1'>
            <section className="flex flex-col md:flex-row w-full bg-white items-center justify-center">
              <div className="flex flex-col md:flex-row flex-1 gap-2 md:gap-4">
                {
                  data.map((category, index) => (
                    <Fragment key={index}>
                      {
                        category.blogs.map((blog, index2) => (
                          <div key={index2} className="flex flex-col w-full md:w-4/12 gap-3 rounded-lg items-center justify-between shadow-lg drop-shadow-lg bg-stone-100">
                            <div className="flex flex-col w-full justify-center items-center">
                              <img src={blog.image.src} alt={blog.image.alt} className="w-full rounded-t-lg h-auto" draggable={false} />
                            </div>
                            <h1 className="text-lg md:text-xl text-center md:text-left text-neutral-700 px-3">{blog.title}</h1>
                            <Link href={`/blogs/${blog.slug}`} className="flex rounded-b-lg p-3 text-lf md:text-xl text-white flex-row items-center justify-center gap-2 w-full bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800">
                              Read More
                            </Link>
                          </div>
                        ))
                      }
                    </Fragment>
                  ))
                }
              </div>
            </section>
          </div>
          <Profile />
        </div>
      </main>
  )
}
