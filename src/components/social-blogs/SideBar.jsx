import React from 'react'
import url from '@/utils/url'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import converblogtomonth from '@/utils/social-blogs/convertblogtomonths'
import Search from './Search'

const getrecentfiveblogs = async () => {
  let res
  try {
    res = await fetch(`${url}/api/social-blog/recentfive_mothlyarchive_category`, { cache: 'no-cache' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  }
  catch (err) {
    notFound()
  }
  return res.json()
}


export default async function SideBar({search, afterurl}) {
  const data = await getrecentfiveblogs();
  return (
    <div className='flex flex-col w-full gap-5 bg-neutral-100 p-5 rounded-xl'>
      <div className='flex flex-row gap-2 border-b-2 border-neutral-300 pb-8'>
        <Search search={search} afterurl={afterurl} />
        </div>
      <div className='flex flex-col gap-2 pb-8 border-b-2 border-neutral-300'>
        <h2 className='text-2xl font-bold text-blue-800'>Recent Blogs</h2>
        {
          data.recentFive.map((blog, index) => (
            <div key={index} className='flex flex-row w-full gap-5'>
                <Link href={`/social-awareness/blogs/${blog.slug}`} className='hover:underline'>
                  <p className='text-base md:text-lg text-neutral-600 line-clamp-2'>{blog.title}</p>
                </Link>
            </div>
          ))
        }
      </div>
      <div className='flex flex-col gap-2 pb-8 border-b-2 border-neutral-300'>
        <h2 className='text-2xl font-bold text-blue-800'>Monthly Archive</h2>
        {
          data.monthlyArchive.map((blog, index) => (
            <div key={index} className='flex flex-row w-full gap-5'>
                <Link href={`/social-awareness/archive/${blog}`} className='hover:underline'>
                  <p className='text-base md:text-lg text-neutral-600 line-clamp-2'>{converblogtomonth(blog)}</p>
                </Link>
            </div>
          ))
        }
      </div>
      <div className='flex flex-col gap-2 pb-8 border-b-2 border-neutral-300'>
        <h2 className='text-2xl font-bold text-blue-800'>Category</h2>
        {
          data.category.map((blog, index) => (
            <div key={index} className='flex flex-row w-full gap-5'>
                <Link href={`/social-awareness/categories/${blog.slug}`} className='hover:underline'>
                  <p className='text-base md:text-lg text-neutral-600 line-clamp-2'>{blog.name}</p>
                </Link>
                </div>
          ))
        }
        </div>
    </div>
  )
}
