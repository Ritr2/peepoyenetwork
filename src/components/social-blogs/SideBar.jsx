import React from 'react'
import url from '@/utils/url'
import { notFound } from 'next/navigation'
import Link from 'next/link'

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

const converblogtomonth = (blog) => {
  const month = blog.split('-')[1]
  const year = blog.split('-')[0]
  switch (month) {
    case '1':
      return `January ${year}`
    case '2':
      return `February ${year}`
    case '3':
      return `March ${year}`
    case '4':
      return `April ${year}`
    case '5':
      return `May ${year}`
    case '6':
      return `June ${year}`
    case '7':
      return `July ${year}`
    case '8':
      return `August ${year}`
    case '9':
      return `September ${year}`
    case '10':
      return `October ${year}`
    case '11':
      return `November ${year}`
    case '12':
      return `December ${year}`
    default:
      return 'Invalid Month'
  }
}


export default async function SideBar() {
  const data = await getrecentfiveblogs();
  return (
    <div className='flex flex-col w-full gap-5 bg-neutral-100 p-5 rounded-xl'>
      <div className='flex flex-col gap-2 pb-8 border-b-2 border-neutral-300'>
        <h2 className='text-2xl font-bold text-blue-800'>Recent Blogs</h2>
        {
          data.recentFive.map((blog, index) => (
            <div key={index} className='flex flex-row w-full gap-5'>
                <Link href={`/social-awareness/blogs/${blog.slug}`} className='hover:underline'>
                  <p className='text-lg text-neutral-600 line-clamp-3'>{blog.title}</p>
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
                  <p className='text-lg text-neutral-600 line-clamp-3'>{converblogtomonth(blog)}</p>
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
                <Link href={`/social-awareness/category/${blog.slug}`} className='hover:underline'>
                  <p className='text-lg text-neutral-600 line-clamp-3'>{blog.name}</p>
                </Link>
                </div>
          ))
        }
        </div>
    </div>
  )
}
