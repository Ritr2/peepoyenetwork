'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { IoClose } from 'react-icons/io5'
import ls from 'localstorage-slim'
import { useRouter } from 'next/navigation'
import {apiUrl} from '@/utils/url'


export default function PopupForm() {
  const router = useRouter()
  const [name, setName] = React.useState(ls.get('name') || '')
  const [email, setEmail] = React.useState(ls.get('email') || '')
  const [showForm, setShowForm] = React.useState(true)
  const [showThankYou, setShowThankYou] = React.useState(false)

  const variants = {
    hidden: {
      opacity: 0,
      y: '-100%'
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 1
      }
    }
  }

  const formHandler = async (e) => {
    const list = '3z0db07d0b185588e61f201c6bc57ecac10f55d92ec66303f1531f2bf5e9712b31'
    e.preventDefault()
    // thank you message is not shown, uncomment below line to show it
    // setShowThankYou(true)
    setTimeout(() => {
      setShowForm(false)
    }, 2000)
    const details = {
      first_name: name,
      email,
      listkey: list,
    }
    await fetch(`${apiUrl}/add_contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details),
    })
    router.push('/audit-report/thank-you')
    ls.set('name', name)
    ls.set('email', email)
  }

  return (
    <>
      <button type='button' className='bg-red-700 text-white text-lg md:text-xl font-medium py-5 px-5 shadow-lg drop-shadow-lg hover:bg-red-600 hover:scale-105 active:bg-red-800 active:scale-95 transition duration-100 ease-in-out' onClick={() => setShowForm(true)}>
        YES, I WANT MY FREE YOUTUBE CHANNEL AUDIT REPORT</button>
      <AnimatePresence>
        {
          showForm &&
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 flex flex-col items-center justify-center backdrop-filter backdrop-blur-sm overflow-hidden'>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className='relative flex flex-col items-center justify-center gap-5 max-w-3xl bg-white p-6 md:px-14 md:py-10 rounded-lg shadow-lg'>
              <IoClose className='absolute top-1 right-1 md:top-2 md:right-2 text-3xl text-neutral-700 cursor-pointer hover:text-red-600' onClick={() => setShowForm(false)} />
              {
                showThankYou ? <>
                  <div className='flex flex-col items-center w-full bg-green-600 rounded-lg p-5'>
                    <h2 className='text-xl md:text-2xl font-bold text-center text-white'>Thank you for your interest!</h2>
                    <p className='text-sm md:text-base text-center text-white'> We will send you the email for further steps.</p>
                  </div>
                </> : <>
                  <h2 className='text-xl md:text-2xl font-bold text-center text-neutral-950'>Where should I send you the Audit report of your YouTube Channel for instant growth opportunities?</h2>
                  <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
                    <div className='flex flex-col flex-1 items-center'>
                      <img src='https://i.ibb.co/CpyjVjv/audit-report.webp' alt='audit-report' className='w-full object-contain' />
                    </div>
                    <div className='flex flex-col w-full gap-1 md:w-7/12'>
                      <h2 className='text-lg md:text-xl font-bold text-center text-neutral-700'>Start here by entering your name and email address.*</h2>
                      <p className='text-xs font-normal text-center text-neutral-700'>By entering your information, you’re allowing us to send your report directly to your email address and subscribe to Akassh’s newsletter which you can unsubscribe to at anytime:</p>
                      <form className="flex flex-col w-full gap-3" onSubmit={formHandler}>
                        <input type="text" placeholder="Name" className="flex-1 rounded-lg p-2 text-base md:text-xl font-normal text-center md:text-left text-neutral-700 bg-neutral-100 border-2 border-neutral-200 border-dashed focus:outline-none focus:ring-2 focus:ring-red-600/40 focus:border-transparent" value={name} onChange={(e) => setName(e.target.value)} required />
                        <input type="email" placeholder="Email" className="flex-1 rounded-lg p-2 text-base md:text-xl font-normal text-center md:text-left text-neutral-700 bg-neutral-100 border-2 border-neutral-200 border-dashed focus:outline-none focus:ring-2 focus:ring-red-600/40 focus:border-transparent" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <div className='flex flex-row w-full justify-center gap-1'>
                          <input type='checkbox' required name='privacy' />
                          <p className='text-xs md:text-sm font-normal text-left text-neutral-800'>I agree to Peepoye Network's <a href='/privacy-policy' className='text-blue-500 hover:underline' target='_blank' rel='noreferrer'>Privacy Policy</a></p>
                        </div>
                        <div className='flex flex-col gap-1'>
                          <button type="submit" className={`flex rounded-lg p-2 text-white bg-red-700 hover:bg-red-600 active:bg-red-700 text-sm md:text-base flex-row items-center justify-center gap-2 w-full  hover:shadow-lg hover:drop-shadow-lg hover:scale-105 active:shadow-none active:drop-shadow-none active:scale-95`}>YES, I WANT MY CHANNEL AUDIT REPORT</button>
                          <p className='text-xs text-center text-neutral-600'>* Your information is 100% secure and will never be shared with anyone.</p>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              }
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>
  )
}
