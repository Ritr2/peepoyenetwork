import React from 'react'
import style from '@/styles/Dfy.module.css'
import { BsCheck } from 'react-icons/bs'
import ls from 'localstorage-slim'
import { apiUrl } from '@/utils/url'

export default function BulkPrice() {
  const [first_name, setFirstName] = React.useState(ls.get('name') || '')
  const [email, setEmail] = React.useState(ls.get('email') || '')
  const [numberOfVideos, setNumberOfVideos] = React.useState(10)
  const [youtubeUrl, setYoutubeUrl] = React.useState('')
  const [formVisible, setFormVisible] = React.useState(true)

  const details = [
    `If you require more than 10 videos, we can create a personalized plan for you with a discount.`,
    `The customized plan will be tailored to your specific needs and requirements.`,
    `As part of the offer, we will provide you with a sample thumbnail to give you an idea of the video's quality and style.`,
  ]

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormVisible(false)
    const data = {
      first_name,
      email,
      note: `Number of Videos: ${numberOfVideos}\nYoutube URL: ${youtubeUrl}`,
      listkey: '3z9029f2fa7b88d02f02cfe9c9c74e34cc9573b39b135b08bdca9c98f2beee808c',
      product: 'dfy'
    }
    const res = await fetch(`${apiUrl}/add_contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
  }
  return (
    <div id ="bulkPrice" className="flex flex-col md:flex-row gap-5 w-full items-center">
      <div className="flex-1 flex flex-col gap-5">
        <h2 className='text-xl md:text-3xl font-semibold w-full text-neutral-800'>Need Special Offer for <span className={`font-bold ${style.textGreen}`}>Bulk Purchase?</span></h2>
        <ul className='flex flex-col gap-2 text-base md:text-lg text-neutral-800 -ml-1'>
          {
            details.map((detail, index) => (
              <li key={index} className='flex flex-row md:items-center gap-2'>
                <BsCheck className={`inline-block ${style.textGreen} text-2xl md:text-4xl`} />
                <p className='flex-1'>{detail}</p>
              </li>
            ))
          }
        </ul>
      </div>
      {
        formVisible ? <form className="flex-1 flex flex-col gap-5 bg-white rounded-2xl border-2 border-dashed border-black p-2 md:p-5" onSubmit={(e) => { handleFormSubmit(e) }}>
          <input type="text" placeholder='First Name' className='w-full px-5 py-3 rounded-2xl border-[1px] border-neutral-600 focus:outline-none placeholder:text-neutral-400' value={first_name} onChange={(e) => setFirstName(e.target.value)} required />
          <input type="email" placeholder='Email' className='w-full px-5 py-3 rounded-2xl border-[1px] border-neutral-600 focus:outline-none placeholder:text-neutral-400' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="number" placeholder='Number of Videos' className='w-full px-5 py-3 rounded-2xl border-[1px] border-neutral-600 focus:outline-none placeholder:text-neutral-400' value={numberOfVideos} onChange={(e) => setNumberOfVideos(e.target.value)} min={10} required />
          <input type="url" placeholder='Youtube URL' className='w-full px-5 py-3 rounded-2xl border-[1px] border-neutral-600 focus:outline-none placeholder:text-neutral-400' value={youtubeUrl} onChange={(e) => setYoutubeUrl(e.target.value)} required />
          <button className='bg-green-700 text-white text-lg md:text-xl rounded-3xl py-2 md:py-3 px-5 md:px-8 hover:bg-green-800 transition duration-300 ease-in-out'>GET THE PERSONALIZED QUOTATION</button>
        </form> :
          <div className="flex-1 flex flex-col gap-5 bg-green-600 rounded-2xl p-2 md:p-5">
            <h2 className='text-xl md:text-3xl font-semibold w-full text-white'>Thank You!</h2>
            <p className='text-base md:text-lg text-white'>We will get back to you with a personalized quotation within 24 hours.</p>
          </div>
      }
    </div>
  )
}
