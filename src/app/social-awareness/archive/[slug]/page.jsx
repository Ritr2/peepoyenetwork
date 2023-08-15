import React from 'react'
import { DM_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import url from '@/utils/url'
import Link from 'next/link'
import SideBar from '@/components/social-blogs/SideBar'
import converblogtomonth from '@/utils/social-blogs/convertblogtomonths'


const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

async function getSocialBlogs(slug) {
  let res
  try {
    res = await fetch(`${url}/api/social-blog/archive/${slug}`, { cache: 'no-cache' })
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
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left text-neutral-700">{converblogtomonth(slug)}</h1>
        </div>
      </section>
      <div className='flex flex-col md:flex-row w-full gap-8 px-7 py-7 md:py-14 md:px-36'>
        <div className=' flex flex-col w-full md:w-8/12 gap-10'>
          {
            data.map((blog, index) => (
              <div key={index} className='flex flex-row w-full gap-8'>
                <div className='flex flex-col gap-2 w-7/12'>
                  <h1 className='text-2xl font-bold text-neutral-700'>{blog.title}</h1>
                  <p className='text-lg text-neutral-600 line-clamp-3'>{blog.summary}</p>
                  <Link href={`/social-awareness/blogs/${blog.slug}`} className='text-lg text-primary-500 font-semibold'>Read More</Link>
                </div>
                <div className='flex flex-col w-full flex-1'>
                  <Link href={`/social-awareness/blogs/${blog.slug}`} className='hover:scale-105 '>
                    <img src={blog.image.src} alt={blog.image.alt} className='w-full h-full rounded-xl' />
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
        <div className='flex flex-col w-full flex-1'>
        <SideBar />
        </div>
      </div>
    </main>
  )
}
