import React from 'react'
import { DM_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import url from '@/utils/url'
import Link from 'next/link'
import SideBar from '@/components/social-blogs/SideBar'
import BlogsList from '@/components/social-blogs/BlogsList'


const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

async function getSocialBlogs(slug) {
  let res
  try {
    res = await fetch(`${url}/api/social-blog/categories/${slug}`, { cache: 'no-cache' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  }
  catch (err) {
    notFound()
  }
  return res.json()
}

export default async function page({params}) {
  const { slug } = params;
  const data = await getSocialBlogs(slug);
  return (
    <main className={`relative flex flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
      <section className="flex flex-col md:flex-row w-full bg-neutral-200 items-center justify-center px-2 py-12 md:py-24 md:px-20">
        <div className="flex flex-col justify-center items-center flex-1 gap-2 md:gap-5">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left text-neutral-700">{data.category.name}</h1>
        </div>
      </section>
      <div className='flex flex-col md:flex-row w-full gap-8 px-7 py-7 md:py-14 md:px-36'>
        <div className=' flex flex-col w-full md:w-8/12 gap-10'>
          {
            data.blog.length === 0 ? <h1 className='text-5xl font-bold text-center text-neutral-700'>No Blogs Found</h1>:<BlogsList data={data.blog} />
          }
        </div>
        <div className='flex flex-col w-full flex-1'>
        <SideBar />
        </div>
      </div>
    </main>
  )
}
