import React from 'react'
import { DM_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import parse from 'html-react-parser'
import './blog.css'
import Profile from '@/components/blogs/Profile'
import url, {apiUrl} from '@/utils/url'
import AdsenseLayout from '@/components/AdsenseLayout'
import { Tweet } from 'react-tweet';
import dynamic from "next/dynamic";
import InstagramPost from '@/components/InstagramPost'
import { AiFillFacebook, AiFillRedditCircle } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { BiLogoWhatsapp } from 'react-icons/bi'

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), { ssr: false });

export async function generateMetadata({ params }) {
  const { slug } = params
  const data = await fetchPosts(slug)
  return {
    title: `${data.title} - Akassh`,
    description: data.description,
    images: [
      {
        url: data.image.src,
        width: 800,
        height: 500,
        alt: data.image.alt,
      },
    ],
    url: `https://peepoye.com/blogs/${data.slug}`,
    type: 'article',
    keywords: data.tags,
    openGraph: {
      title: `${data.title} - Akassh`,
      description: data.description,
      images: [
        {
          url: data.image.src,
          width: 700,
          height: 500,
          alt: data.image.alt,
        },
      ],
      url: `https://peepoye.com/blogs/${data.slug}`,
      type: 'article',
      article: {
        publishedTime: new Date(data.date).toISOString(),
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.title} - Akassh`,
      description: data.description,
      images: [ {
          url: data.image.src,
          width: 700,
          height: 500,
          alt: data.image.alt,
        }],
      creator: '@peepoye',
    },
  }
}

export const fetchPosts = async (slug) => {
  let res;
  try {
    res = await fetch(`${apiUrl}/social_awareness_blogs/${slug}`, { cache: "no-cache" })
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
      <div className=' flex flex-col md:flex-row w-full gap-8 px-2 py-12 md:px-40'>
        <section className="flex flex-col flex-1 w-full gap-5 justify-center">
          <div className="flex flex-col justify-center w-full border-y-2 border-stone-200  py-2 flex-1 gap-2 md:gap-5">
            <span className='text-left text-base text-neutral-500'>
              <Link href={`/blogs`}>Primary Blog</Link> / <Link href={`/categories/${data.category.slug}`}>{data.category.name}</Link> / <Link href={`/blogs/${data.slug}`}>{data.title}</Link>
            </span>
          </div>
          <div className="flex flex-col justify-center flex-1 gap-2">
            <h1 className="text-xl md:text-3xl font-bold text-left text-neutral-700">{data.title}</h1>
            <p className="text-xs md:text-sm text-left text-neutral-500">{data.date} / {data.owner}</p>
          </div>
          <div className="flex flex-col justify-center flex-1 gap-2">
            <div className="flex flex-col justify-center flex-1 gap-2">
              <img src={data.image.src} alt={data.image.alt} className="w-full rounded-lg h-auto" draggable={false} />
            </div>
            {data.summary &&
                <div className="flex flex-col justify-center flex-1 gap-2 rounded-lg bg-neutral-300 p-4">
                  <h2 className="text-lg md:text-xl font-bold text-left text-neutral-700">10-sec summary</h2>
                  <span className="text-base md:text-lg font-light text-left text-neutral-900">{parse(data.summary)}</span>
                </div>}
              <section className="sectionAnchor flex flex-col justify-center flex-1 gap-7 rounded-lg  p-4">
                {
                  data.sections.map((section, index) => (
                    <div key={index} className="flex flex-col justify-center flex-1 gap-1">
                      {
                        section.h1 && <h2 className="text-lg md:text-xl font-bold text-left social-anchor-tag text-neutral-900">{parse(section.h1)}</h2>
                      }
                      {
                        section.h2 && <h3 className="text-base md:text-lg font-bold text-left social-anchor-tag text-neutral-700">{parse(section.h2)}</h3>
                      }
                      {
                        section.p && <span className="text-base md:text-lg font-light social-anchor-tag text-left text-neutral-600">{parse(section.p)}</span>
                      }
                      {
                        section.list && <ul className={`text-base md:text-lg flex flex-col gap-2 font-light text-left anchor-tag ${section.p ? `pt-5` : `pt-1`}`}>
                          {
                            section.list.map((listItem, index3) => (
                              <li key={index3} className='text-neutral-600 flex flex-row gap-2'>
                                <span className='text-neutral-700 font-semibold select-none'>{index3 + 1}.</span>
                                <span className='overflow-x-hidden'>
                                  {
                                    listItem.h1 && <span className='text-neutral-700 font-semibold'>{parse(listItem.h1)}: </span>
                                  }
                                  {parse(listItem.p)}</span>
                              </li>
                            ))
                          }
                        </ul>
                      }
                      {
                        section.html && <div className="self-center text-base md:text-lg font-light text-left text-neutral-600 w-full pt-5">
                          {
                            section.html.type === 'twitter' &&
                            <div className='flex flex-col justify-center items-center' data-theme="light">
                              <Tweet id={section.html.value ? section.html.value : section.html.src} />
                            </div>
                          }
                          {
                            section.html.type === 'youtube' &&
                            <div className='flex flex-col justify-center items-center'>
                              <VideoPlayer url={section.html.value ? section.html.value : section.html.src} />
                            </div>
                          }
                          {
                            section.html.type === 'instagram' &&
                            <div className='flex flex-col justify-center items-center w-full'>
                              <InstagramPost url={section.html.value ? section.html.value : section.html.src} />
                            </div>
                          }
                          {
                            section.html.type === 'poll' &&
                            <div className='flex flex-col justify-center items-center'>
                              <Link href={section.html.value ? section.html.value : section.html.src} target="_blank" rel="noopener noreferrer" className='hover:scale-105'>
                                <img src={section.html.image.src} alt={section.html.image.alt} className="w-full rounded-lg h-auto" draggable={false} />
                              </Link>
                            </div>
                          }
                        </div>
                      }
                      {
                        section.image && <img src={section.image.src} alt={section.image.alt} className="w-full rounded-lg h-auto mt-5" draggable={false} />
                      }
                      {
                        section.subSections && (
                          <section className="flex flex-col justify-center flex-1 gap-5 rounded-lg pt-5">
                            {
                              section.subSections.map((subSection, index2) => (
                                <div key={index2} className="flex flex-col justify-center flex-1 gap-1">
                                  {
                                    subSection.h1 && <h2 className="text-lg md:text-xl font-bold text-left social-anchor-tag text-neutral-900">{parse(subSection.h1)}</h2>
                                  }
                                  {
                                    subSection.h2 && <h3 className="text-base md:text-lg font-bold text-left social-anchor-tag text-neutral-700">{parse(subSection.h2)}</h3>
                                  }
                                  {
                                    subSection.p && <span className="text-base md:text-lg font-light text-left social-anchor-tag text-neutral-600">{parse(subSection.p)}</span>
                                  }
                                  {
                                    subSection.list && <ul className={`text-base md:text-lg flex flex-col gap-2 font-light text-left anchor-tag ${subSection.p ? `pt-5` : `pt-1`}`}>
                                      {
                                        subSection.list.map((listItem, index3) => (
                                          <li key={index3} className='text-neutral-600 flex flex-row gap-2'>
                                            <span className='text-neutral-700 font-semibold select-none'>{index3 + 1}.</span>
                                            <span className='overflow-x-hidden'>
                                              {
                                                listItem.h1 && <span className='text-neutral-700 font-semibold'>{parse(listItem.h1)}: </span>
                                              }
                                              {parse(listItem.p)}</span>
                                          </li>
                                        ))
                                      }
                                    </ul>
                                  }
                                  {
                                    subSection.html && <div className="self-center text-base md:text-lg font-light text-left text-neutral-600 w-full my-6">
                                      {
                                        subSection.html.type === 'twitter' &&
                                        <div className='flex flex-col justify-center items-center' data-theme="light">
                                          <Tweet id={subSection.html.value ? subSection.html.value : subSection.html.src} />
                                        </div>
                                      }
                                      {
                                        subSection.html.type === 'youtube' &&
                                        <div className='flex flex-col justify-center items-center'>
                                          <VideoPlayer url={subSection.html.value ? subSection.html.value : subSection.html.src} />
                                        </div>
                                      }
                                      {
                                        subSection.html.type === 'instagram' &&
                                        <div className='flex flex-col justify-center items-center w-full'>
                                          <InstagramPost url={subSection.html.value ? subSection.html.value : subSection.html.src} />
                                        </div>
                                      }
                                      {
                                        subSection.html.type === 'poll' &&
                                        <div className='flex flex-col justify-center items-center'>
                                          <Link href={subSection.html.value ? subSection.html.value : subSection.html.src} target="_blank" rel="noopener noreferrer">
                                            <img src={subSection.html.image.src} alt={subSection.html.image.alt} className="w-full rounded-lg h-auto" draggable={false} />
                                          </Link>
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
                      {/* {
                        index === 1 &&
                        <div className="flex flex-col w-full py-4 md:py-8">
                          <AdsenseLayout />
                        </div>
                      } */}
                    </div>
                  )
                  )
                }
              </section>
              <div className="flex flex-col justify-center flex-1 gap-2 bg-neutral-50">
                <h2 className="text-lg md:text-xl font-bold text-center text-neutral-700">To share this blog on social media click on the icons below :</h2>
                <div className="flex flex-row justify-center gap-2">
                  <Link href={`https://www.facebook.com/sharer/sharer.php?u=${url}/blogs/${data.slug}`} target="_blank" rel="noopener noreferrer">
                    <AiFillFacebook className="w-8 h-8 rounded-lg text-neutral-700" />
                  </Link>
                  <Link href={`https://twitter.com/intent/tweet?text=${data.description}\n ${url}/blogs/${data.slug}/`} target="_blank" rel="noopener noreferrer">
                    <RiTwitterXFill className="w-8 h-8 rounded-lg text-neutral-700" />
                  </Link>
                  <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}/blogs/${data.slug}&title=${data.title}&summary=${data.summary}&source=Peepoye`} target="_blank" rel="noopener noreferrer">
                    <BsLinkedin className="w-8 h-8 rounded-lg text-neutral-700" />
                  </Link>
                  <Link href={`https://api.whatsapp.com/send?text=${url}/blogs/${data.slug}`} target="_blank" rel="noopener noreferrer">
                    <BiLogoWhatsapp className="w-8 h-8 rounded-lg text-neutral-700" />
                  </Link>
                  <Link href={`https://www.reddit.com/submit?url=${url}/blogs/${data.slug}&title=${data.title}`} target="_blank" rel="noopener noreferrer">
                    <AiFillRedditCircle className="w-8 h-8 rounded-lg text-neutral-700" />
                  </Link>
                </div>
              </div>
          </div>
          {
              data.advertisement && data.advertisement.show && (
                <div className="flex flex-col md:flex-row justify-center flex-1 gap-2 border-y-2 border-neutral-500 py-5">
                  {data.advertisement.image &&
                    <div className="flex flex-col justify-center self-center gap-2 rounded-lg w-full p-4">
                      <Link href={data.advertisement.link} target="_blank" rel="noopener noreferrer">
                        <img src={data.advertisement.image.src} alt={data.advertisement.image.alt} className="w-full rounded-lg h-auto" draggable={false} />
                      </Link>
                    </div>
                  }
                </div>
              )
            }
            {
              data.referBlog.show && (
                <div className="flex flex-col justify-center flex-1 gap-2 rounded-lg bg-neutral-300 p-4">
                  <span className="text-base md:text-lg text-left font-bold text-neutral-900"> Also Read : <Link href={`/blogs/${data.referBlog.slug}`} className='font-light hover:underline text-blue-700'>{data.referBlog.title}</Link>
                  </span>
                </div>
              )
            }
        </section>
        <Profile />
      </div>
    </main>
  )
}
