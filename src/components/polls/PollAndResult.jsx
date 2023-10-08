'use client'
import React, { Fragment, useEffect } from 'react'
import { Sora } from 'next/font/google'
import style from '@/styles/Poll.module.css'
import Link from 'next/link'
import ls from 'localstorage-slim';
import { useRouter } from 'next/navigation'
import url, { apiUrl } from '@/utils/url'

const sora = Sora(
  {
    weight: ['100', '300', '400', '500', '700'],
    subsets: ['latin'],
  }
)

export default function PollAndResult({ data, category, passloading }) {
  const [loading, setLoading] = React.useState(passloading)
  const router = useRouter()
  const [productAdView, setProductAdView] = React.useState(false)
  const [result, setResult] = React.useState(false)
  const [skipCount, setSkipCount] = React.useState(5)

  useEffect(() => {
    ls.get('authStatus') ? ls.remove('poll') : null
  }, [])

  useEffect(() => {
    if (productAdView) {
      if (skipCount > 0) {
        const timer = setTimeout(() => {
          setSkipCount(skipCount - 1)
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [skipCount, productAdView])

  useEffect(() => {
    if (passloading) {
      sendVote(ls.get('email'), data.id, false)
    }
  }, [])

  const sendVote = async (email, question_id, option_id) => {
    const data = option_id ? { email, question_id, option_id } : { email, question_id }
    const res = await fetch(`${apiUrl}/votes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const recievedData = await res.json()
    if (recievedData.email) {
      if (recievedData.auth) {
        setLoading(false)
        setResult({ result: recievedData.result, sum: recievedData.sum })
      }
      else {
        ls.set('poll', `/opinion-polls/${category}/${data.slug}`)
        ls.remove('authStatus')
        router.push(`/opinion-polls/login?nm=${recievedData.result}&nc=red`)
      }
    }
    else {
      ls.set('poll', `/opinion-polls/${category}/${data.slug}`)
      ls.remove('authStatus')
      router.push(`/opinion-polls/signup?nm=${recievedData.result}&nc=red`)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const option_id = e.target.optionsquiz.value
    setLoading(true)
    const email = ls.get('email') || false
    const authStatus = ls.get('authStatus') || false
    if (!email || !authStatus) {
      ls.set('poll', `/opinion-polls/${category}/${data.slug}`)
      router.push(`/opinion-polls/login?nm=Please login to vote&nc=red`)
    } else {
      if (data.product.url !== 'NA') {
        setLoading(false)
        setProductAdView(true)
      }
      sendVote(email, data.id, option_id)
    }
  }

  return (
    <div className={`flex flex-col px-5 py-5 pb-16 md:px-24 md:py-12 gap-3 md:gap-6 ${sora.className}`}>
      <Link href={`/opinion-polls/${category}`}>
        <h2 className="text-sm md:text-3xl font-bold text-center text-neutral-600 uppercase underline-offset-2 hover:underline">
          {
            productAdView ? 'Wait for the Result...' : `${category} Poll`
          }
        </h2>
      </Link>
      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
        <div className="flex-1 flex flex-col">
          <img src={productAdView ? data.product.image : data.image} alt={productAdView ? data.product.name : data.name} className="w-full rounded-2xl" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:p-4 gap-3">
          <h2 className="text-base md:text-2xl font-bold text-center">{productAdView ? data.product.headline : data.name}</h2>
          {
            productAdView && <h3 className="text-sm md:text-xl text-neutral-700 font-bold text-center">{data.product.sub_headline}</h3>
          }
          {
            loading ? <div className="loader self-center" /> :
              <>
                {
                  productAdView ? <div className='flex flex-col gap-4'>
                    <p className="text-sm md:text-lg text-center">{data.product.paragraph}</p>
                    <div className="flex flex-col md:flex-row gap-4">
                      <Link href={data.product.url} className='bg-neutral-900 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg w-full text-center' target="_blank">
                        {data.product.button_text}
                      </Link>
                      <button className={`bg-neutral-900 text-white px-4 py-2 rounded-lg w-full text-center ${skipCount > 0 ? 'bg-opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-neutral-700'}`} onClick={() => setProductAdView(false)} disabled={skipCount > 0}>Skip {
                        skipCount > 0 && `in ${skipCount}`
                      }</button>
                    </div>
                  </div> :
                    <>
                      {
                        result ?
                          <div className='flex flex-col gap-2'>
                            <div className="flex flex-row flex-wrap gap-4 justify-center md:max-h-[370px] overflow-y-auto">
                              {
                                data.options.map((option, index) => (
                                  <div key={index} className={`relative flex flex-row justify-between items-center border-2 border-neutral-900 gap-10 rounded-lg px-4 py-2 ${option.name.length > 40 ? 'w-full' : 'w-full md:w-5/12'}`}>
                                    <div className={`absolute z-0 top-0 left-0 bottom-0 rounded-lg ${index % 2 ? 'bg-neutral-300' : 'bg-neutral-500'} transition-all duration-500`} style={{ width: `${result.result[option.id] ? ((result.result[option.id] / result.sum) * 100).toFixed(2) : 0}%` }} />
                                    <span className='z-10 text-sm md:text-base'>{option.name}</span>
                                    <span className='z-10 text-sm md:text-base'>{result.result[option.id] ? ((result.result[option.id] / result.sum) * 100).toFixed(2) : 0}%</span>
                                  </div>
                                ))
                              }
                            </div>
                            <h3 className='text-xl font-semibold text-center w-full'>Total Votes {result.sum}</h3>
                            {data.sub_category.name !== 'Expired Polls' &&
                              <div className='flex flex-col w-full items-center justify-center gap-4'>
                                <h4 className='text-lg md:text-xl text-center text-stone-800 font-semibold w-full'>Share this poll with others to get to know more opinions</h4>
                                <div className='flex flex-row w-full items-center justify-center gap-6'>
                                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}/opinion-polls/${category}/${data.slug}`} target='_blank' rel="noreferrer" className='h-12 w-12'><img src="https://i.ibb.co/s90Nqhz/facebook.png" alt="facebook" className='w-full h-full' /></a>
                                  <a href={`https://twitter.com/intent/tweet?text=Share Your opinion Now-&url=${url}/opinion-polls/${category}/${data.slug}&hashtags=bekhaufopinion`} target='_blank' rel="noreferrer" className='h-12 w-12'><img src="https://i.ibb.co/7Kq3Rg9/twitter.png" alt="twitter" className='w-full h-full' /></a>
                                  <a href={`https://api.whatsapp.com/send?text=Share Your opinion Now- ${url}/opinion-polls/${category}/${data.slug}`} target='_blank' rel="noreferrer" className='h-12 w-12'><img src="https://i.ibb.co/y6rkDdg/Whats-App-icon.webp" alt="whatsapp" className='w-full h-full' /></a>
                                  <a href={`https://telegram.me/share/url?url=${url}/opinion-polls/${category}/${data.slug}&text=${data.name} Share Your opinion Now.`} target='_blank' rel="noreferrer" className='h-12 w-12'><img src="https://i.ibb.co/C8c6dKB/image.png" alt="telegram" className='w-full h-full' /></a>
                                </div>
                              </div>
                            }
                            <div className='flex flex-wrap flex-column'>
                              <div className="flex flex-col mt-3 sm:flex-row w-full items-center justify-center gap-4">
                                <Link href={data.result_link} target='_blank' rel="noreferrer" className='flex-1 text-sm w-full sm:text-lg text-center bg-neutral-800 text-white p-3 rounded-lg hover:text-neutral-800 hover:bg-neutral-400 duration-300 transition-all'>{data.result_button}</Link>
                                <Link href= {`/opinion-polls/${category}`} className='flex-1 text-sm w-full sm:text-lg text-center bg-neutral-800 text-white p-3 rounded-lg hover:text-neutral-800 hover:bg-neutral-400 duration-300 transition-all'>Back to {category} Polls</Link>
                              </div>
                            </div>
                          </div> :
                          <form className="flex flex-row flex-wrap gap-4 justify-center" onSubmit={handleSubmit} >
                            {
                              data.options.map((option, index) => (
                                <div key={index} className={`flex flex-col ${option.name.length > 40 ? 'w-full' : 'w-full md:w-5/12'}`}>
                                  <input type="radio" name="optionsquiz" className={`hidden ${style.quizPoll}`} value={option.id} id={`option-${index}`} required />
                                  <label htmlFor={`option-${index}`} className="text-sm md:text-base flex flex-col h-full text-center items-center gap-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-900 px-4 py-2 rounded-lg cursor-pointer">
                                    <span>{option.name}</span>
                                  </label>
                                </div>
                              ))
                            }
                            <button type="submit" className="bg-neutral-900 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg w-full">Vote</button>
                          </form>
                      }
                    </>
                }
              </>
          }
        </div>
      </div>
    </div>
  )
}
