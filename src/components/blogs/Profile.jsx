import React from 'react'
import url from '@/utils/url'
import { notFound } from 'next/navigation'
import Link from 'next/link';

const fetchCategories = async () => {
  let res;
  try {
    res = await fetch(`${url}/api/personal-blog/categories`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  }
  catch (err) {
    notFound()
  }
  return res.json()
}

export default async function Profile() {
  const data = await fetchCategories();
  return (
    <div className='flex flex-col flex-1 gap-1 items-center self-start max-w-xs justify-center w-full bg-neutral-200 p-4 pb-10 rounded-lg'>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <img src='/assets/images/blogs/profile/akasshashokgupta2.png' alt='Akassh Ashok Gupta' className='w-full' draggable={false} />
      </div>
      <div className='flex flex-col gap-2 justify-center w-full'>
        <h2 className='text-lg md:text-2xl font-bold text-left text-neutral-800'>Hi, I Am Akassh</h2>
        <h3 className='text-xs md:text-sm font-light text-left text-neutral-700'>Founder & CEO Of Peepoyenetwork</h3>
        <p className='text-sm md:text-base font-normal text-left text-neutral-700 py-2 border-y-2 border-neutral-300'>Akassh Ashok Gupta brings 19+ years in the corporate world and 5+ years doing YouTube who’s currently one of the top influencers in the Social Activism space with the Brand Peepoye’</p>
      </div>
      <div className='flex flex-col gap-2 justify-center w-full'>
        <h2 className='text-lg md:text-2xl font-bold text-left text-neutral-800'>Blog Category</h2>
        <div className='flex flex-col gap-2 justify-center'>
          {
            data.map((category, index) => (
              <Link key={index} href={`/blogs/categories/${category.slug}`} className='flex flex-col gap-2 justify-center text-sm md:text-base text-neutral-700 hover:text-neutral-800 hover:underline active:underline'>
                {category.name}
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}
