import React from 'react'
import { DM_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import parse from 'html-react-parser'
import url from '@/utils/url'
import SideBar from '@/components/social-blogs/SideBar'
import { Tweet } from 'react-tweet';
import dynamic from "next/dynamic";


const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), { ssr: false });

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export async function generateMetadata({ params }) {
  const { slug } = params
  const data = await fetchPosts(slug)
  return {
    title: `${data.blog.title} - Peepoye`,
    description: data.blog.description,
    image: data.blog.image.src,
    url: `https://peepoye.com/social-blog/blogs/${data.blog.slug}`,
    type: 'article',
    openGraph: {
      title: `${data.blog.title} - Peepoye`,
      description: data.blog.description,
      image: data.blog.image.src,
      url: `https://peepoye.com/blogs/${data.blog.slug}`,
      type: 'article',
      article: {
        publishedTime: data.blog.date,
      }
    },
  }
}

export const fetchPosts = async (slug) => {
  let res;
  try {
    res = await fetch(`${url}/api/social-blog/${slug}`, { cache: 'no-cache' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  }
  catch (err) {
    notFound()
  }
  return res.json()
}

const longdateConvert = (date) => {
  const d = new Date(date)
  const month = d.toLocaleString('default', { month: 'long' })
  return `${d.getDate()}-${month}-${d.getFullYear()}`
}

export default async function page({ params }) {
  const { slug } = params
  const data = await fetchPosts(slug)
  return (
    <main className={`relative flex min-h-screen social-blog-section flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
      <div className=' flex flex-col md:flex-row w-full gap-8 px-2 py-12 md:py-24 md:px-40'>
        <section className="flex flex-col w-full gap-5 justify-center md:w-8/12">
          <div className="flex flex-col justify-center w-full border-y-2 border-stone-200  py-2 flex-1 gap-2 md:gap-5">
            <span className='text-left text-base text-neutral-500'>
              <Link href={`/social-awareness/blogs`}>Social Blog</Link> / <Link href={`/social-awareness/categories/${data.category.slug}`}>{data.category.name}</Link> / <Link href={`/social-awareness/blogs/${data.blog.slug}`}>{data.blog.title}</Link>
            </span>
          </div>
          <div className="flex flex-col justify-center flex-1 gap-2">
            <h1 className="text-xl md:text-3xl font-bold text-left text-neutral-700">{data.blog.title}</h1>
            <p className="text-xs md:text-sm text-left text-neutral-500"> Posted at {longdateConvert(data.blog.date)} / Written by {data.blog.owner}</p>
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
                      section.h2 && <h3 className="text-base md:text-lg font-bold text-left text-neutral-700">{parse(section.h2)}</h3>
                    }
                    {
                      section.p && <p className="text-base md:text-lg font-light text-left text-neutral-600">{parse(section.p)}</p>
                    }
                    {
                      section.html && <div className="self-center text-base md:text-lg font-light text-left text-neutral-600">
                        {
                          section.html.type === 'twitter' &&
                          <div data-theme="light">
                            <Tweet id={section.html.value} />
                          </div>
                        }
                        {
                          section.html.type === 'youtube' &&
                          <div className='flex flex-col justify-center items-center'>
                            <VideoPlayer url={section.html.value} />
                          </div>
                        }
                      </div>
                    }
                    {
                      section.image && <img src={section.img.src} alt={section.image.alt} className="w-full rounded-lg h-auto" draggable={false} />
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
                                  subSection.h2 && <h3 className="text-base md:text-lg font-bold text-left text-neutral-700">{parse(subSection.h2)}</h3>
                                }
                                {
                                  subSection.p && <p className="text-base md:text-lg font-light text-left text-neutral-600">{parse(subSection.p)}</p>
                                }
                                {
                                  subSection.html && <div className="self-center text-base md:text-lg font-light text-left text-neutral-600">
                                    {
                                      subSection.html.type === 'twitter' &&
                                      <div data-theme="light">
                                        <Tweet id={subSection.html.value} />
                                      </div>
                                    }
                                    {
                                      subSection.html.type === 'youtube' &&
                                      <div className='flex flex-col justify-center items-center'>
                                        <VideoPlayer url={subSection.html.value} />
                                      </div>
                                    }
                                  </div>
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
            data.blog.referBlog.show && (
              <div className="flex flex-col justify-center flex-1 gap-2 rounded-lg bg-neutral-300 p-4">
                <p className="text-base md:text-lg text-left font-bold text-neutral-900"> Also Read : <Link href={`/social-awareness/blogs/${data.blog.referBlog.slug}`} className='font-light hover:underline text-blue-700'>{data.blog.referBlog.title}</Link>
                </p>
              </div>
            )
          }
          {
            data.blog.advertisements.show && (
              <div className="flex flex-col md:flex-row justify-center flex-1 gap-2 border-y-2 border-neutral-500 py-5">
                {data.blog.advertisements.image &&
                  <div className="flex flex-col justify-center self-center gap-2 rounded-lg w-full p-4">
                    <Link href={data.blog.advertisements.image.link} target="_blank" rel="noopener noreferrer">
                      <img src={data.blog.advertisements.image.src} alt={data.blog.advertisements.image.alt} className="w-full rounded-lg h-auto" draggable={false} />
                    </Link>
                  </div>
                }
              </div>
            )
          }
        </section>
        <div className='w-full flex-1 flex flex-col'>
          <SideBar />
        </div>
      </div >
    </main >
  )
}
