import React from 'react'
import { DM_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import url, {apiUrl} from '@/utils/url'
import Link from 'next/link'
import SideBar from '@/components/social-blogs/SideBar'
import BlogsList from '@/components/social-blogs/BlogsList'

const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

export async function getSocialBlogs(page=false, search=false, all=false) {
  let res
  try {
    res = await fetch(`${url}/api/social-blog${page ? `?page=${page}` : ''}${search ? `&search=${search}` : ''}${all ? `?all=${true}` : ''}`, { cache: 'no-cache' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  }
  catch (err) {
    notFound()
  }
  return res.json()
}

const getDailyQuote = async() => {
  const res = await fetch(`${apiUrl}/global_configs/daily_quote`, { next: { revalidate: 10000 } })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
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

  const {config_value} = await getDailyQuote();

  return (
    <main className={`relative flex flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
      <section className="flex flex-col md:flex-row w-full bg-neutral-200 items-center justify-center px-2 py-12 md:py-24 md:px-20">
        <div className="flex flex-col justify-center items-center flex-1 gap-2 md:gap-5">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left text-neutral-700">{config_value}</h1>
          {
            search && (
              <p className='text-base md:text-lg text-center md:text-left text-neutral-600'>Search Results for "{search}"</p>
            )
          }
        </div>
      </section>
      <div className='flex flex-col md:flex-row w-full gap-8 px-7 py-7 md:py-14 md:px-36'>
        <div className=' flex flex-col w-full md:w-8/12'>
        {
            data.length === 0 ? (
              <div className='flex flex-col w-full gap-2 items-center justify-center'>
                <h1 className='text-5xl font-bold pt-5 text-neutral-700'>No Blogs Found</h1>
              </div>
            ) :
          <BlogsList data={data} totalPage={totalPage} page={page} search={search} afterurl='social-awareness/blogs' />
        }

        </div>
        <div className='flex flex-col w-full flex-1'>
          <SideBar search={search} afterurl='social-awareness/blogs' />
        </div>
      </div>
    </main>
  )
}
