import React from 'react'
import url from '@/utils/url';
import Profile from '@/components/blogs/Profile';
import Link from 'next/link';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

async function category(slug) {
  let res;
  try {
    res = await fetch(`${url}/api/personal-blog/categories/${slug}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  }
  catch (err) {
    notFound()
  }
  return res.json()
}

export default async function page({ params }) {
  const { slug } = params;
  const data = await category(slug);
  return (
    <main className={`relative flex flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
      <section className="flex flex-col md:flex-row w-full bg-neutral-200 items-center justify-center px-2 py-12 md:py-24 md:px-20">
        <div className="flex flex-col justify-center items-center flex-1 gap-2 md:gap-5">
          <h1 className="text-xl md:text-5xl font-bold text-center md:text-left text-neutral-700">{data.name}</h1>
        </div>
      </section>
      <div className=' flex flex-col md:flex-row w-full gap-8 px-2 md:py-14 md:px-40'>
        <div className=' flex flex-col w-full flex-1'>
          <section className="flex flex-col md:flex-row w-full bg-white items-center justify-center">
            <div className="flex flex-col md:flex-row flex-1 gap-2 md:gap-4">
              {
                data.blogs.map((blog, index) => (
                  <div key={index} className="flex flex-col w-full md:w-4/12 gap-3 rounded-lg items-center justify-between shadow-lg drop-shadow-lg bg-stone-100">
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
            </div>
          </section>
        </div>
        <Profile />
      </div>
    </main>
  )
}
