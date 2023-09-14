import React from 'react'
import { DM_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import parse from 'html-react-parser'
import './blog.css'
import Profile from '@/components/blogs/Profile'
import url from '@/utils/url'

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export async function generateMetadata({ params }) {
  const { slug } = params
  const data = await fetchPosts(slug)
  return {
    title: `${data.blog.title} - Akassh`,
    description: data.blog.description,
    images: [
      {
        url: data.blog.image.src,
        width: 800,
        height: 500,
        alt: data.blog.image.alt,
      },
    ],
    url: `https://peepoye.com/blogs/${data.blog.slug}`,
    type: 'article',
    keywords: data.blog.tags,
    openGraph: {
      title: `${data.blog.title} - Peepoye`,
      description: data.blog.description,
      images: [
        {
          url: data.blog.image.src,
          width: 800,
          height: 500,
          alt: data.blog.image.alt,
        },
      ],
      url: `https://peepoye.com/blogs/${data.blog.slug}`,
      type: 'article',
      article: {
        publishedTime: new Date(data.blog.date).toISOString(),
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.blog.title} - Peepoye`,
      description: data.blog.description,
      images: [data.blog.image.src],
      creator: '@peepoye',
    },
  }
}

export const fetchPosts = async (slug) => {
  let res;
  try {
    res = await fetch(`${url}/api/personal-blog/${slug}`, {cache: "no-cache"})
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
  const { slug } = params
  const data = await fetchPosts(slug)
  return (
    <main className={`relative flex min-h-screen flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
      <div className=' flex flex-col md:flex-row w-full gap-8 px-2 py-12 md:py-24 md:px-40'>
        <section className="flex flex-col flex-1 w-full gap-5 justify-center">
          <div className="flex flex-col justify-center w-full border-y-2 border-stone-200  py-2 flex-1 gap-2 md:gap-5">
            <span className='text-left text-base text-neutral-500'>
              <Link href={`/blogs`}>Primary Blog</Link> / <Link href={`/categories/${data.category.slug}`}>{data.category.name}</Link> / <Link href={`/blogs/${data.blog.slug}`}>{data.blog.title}</Link>
            </span>
          </div>
          <div className="flex flex-col justify-center flex-1 gap-2">
            <h1 className="text-xl md:text-3xl font-bold text-left text-neutral-700">{data.blog.title}</h1>
            <p className="text-xs md:text-sm text-left text-neutral-500">{data.blog.date} / {data.blog.owner}</p>
          </div>
          <div className="flex flex-col justify-center flex-1 gap-2">
            <div className="flex flex-col justify-center flex-1 gap-2">
              <img src={data.blog.image.src} alt={data.blog.image.alt} className="w-full rounded-lg h-auto" draggable={false} />
            </div>
            <div className="flex flex-col justify-center flex-1 gap-2 rounded-lg bg-neutral-300 p-4">
              <h2 className="text-lg md:text-xl font-bold text-left text-neutral-700">30-sec summary</h2>
              <p className="text-base md:text-lg font-light text-left text-neutral-900">{parse(data.blog.summary)}</p>
            </div>
            <section className="sectionAnchor flex flex-col justify-center flex-1 gap-5 rounded-lg  p-4">
              {
                data.blog.sections.map((section, index) => (
                  <div key={index} className="flex flex-col justify-center flex-1 gap-1">
                    {
                      section.h1 && <h2 className="text-lg md:text-xl font-bold text-left text-neutral-900">{parse(section.h1)}</h2>
                    }
                    {
                      section.h2 && <h3 className="text-lg md:text-xl font-bold text-left text-neutral-700">{parse(section.h2)}</h3>
                    }
                    {
                      section.p && <p className="text-base md:text-lg font-light text-left text-neutral-600">{parse(section.p)}</p>
                    }
                    {
                      section.image && <img src={section.image.src} alt={section.image.alt} className="w-full rounded-lg h-auto" draggable={false} />
                    }
                    {
                      section.subSections && (
                        <section className="flex flex-col justify-center flex-1 gap-2 rounded-lg px-2 pt-2">
                          {
                            section.subSections.map((subSection, index2) => (
                              <div key={index2} className="flex flex-col justify-center flex-1 gap-1">
                                {
                                  subSection.h1 && <h2 className="text-lg md:text-xl font-bold text-left text-neutral-900">{parse(subSection.h1)}</h2>
                                }
                                {
                                  subSection.h2 && <h3 className="text-lg md:text-xl font-bold text-left text-neutral-700">{parse(subSection.h2)}</h3>
                                }
                                {
                                  subSection.p && <p className="text-base md:text-lg font-light text-left text-neutral-600">{parse(subSection.p)}</p>
                                }
                                {
                                  subSection.image && <img src={subSection.image.src} alt={subSection.image.alt} className="w-full rounded-lg h-auto" draggable={false} />
                                }
                              </div>
                            ))
                          }
                        </section>
                      )
                    }
                  </div>
                )
                )
              }
            </section>
          </div>
          {
            data.blog.advertisements.show && (
              <div className="flex flex-col md:flex-row justify-center flex-1 gap-2 border-y-2 border-neutral-500 py-5">
                {data.blog.advertisements.image &&
                  <div className="flex flex-col justify-center self-center gap-2 rounded-lg w-8/12 md:w-3/12 p-4">
                    <img src={data.blog.advertisements.image.src} alt={data.blog.advertisements.image.alt} className="w-full rounded-lg h-auto" draggable={false} />
                  </div>
                }
                <div className="flex flex-col justify-center gap-2 rounded-lg p-4 flex-1">
                  {
                    data.blog.advertisements.h1 && <h2 className="text-lg md:text-xl font-bold text-left text-neutral-900">{parse(data.blog.advertisements.h1)}</h2>
                  }
                  {
                    data.blog.advertisements.h2 && <h3 className="text-base md:text-lg font-bold text-left text-neutral-700">{parse(data.blog.advertisements.h2)}</h3>
                  }
                  {
                    data.blog.advertisements.p && <p className="text-base md:text-lg font-light text-left text-neutral-600">{parse(data.blog.advertisements.p)}</p>
                  }
                  {data.blog.advertisements.button &&
                    <div className=" flex flex-col w-full">
                      <Link href={data.blog.advertisements.button.link} className='flex rounded-lg p-3 text-lf md:text-xl text-white flex-row items-center justify-center gap-2 w-full bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800'>{data.blog.advertisements.button.text}</Link>
                    </div>
                  }
                  </div>
              </div>
            )
          }
        </section>
        <Profile />
      </div>
    </main>
  )
}
