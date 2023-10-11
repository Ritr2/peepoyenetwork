import React from 'react'
import { BsCheck } from 'react-icons/bs'
import parse from 'html-react-parser'
import FunnelFooter from '@/components/funnels/FunnelFooter'
import PopupForm from '@/components/funnels/pages/audit-report/PopupForm'

export default function page() {
  const dataBullets = [
    {
      h1: `Get your Report <span className='font-bold text-red-700'>now</span> and receive:`,
      dataBullets: [
        `A digital copy of Your YouTube Channel Audit [valued at $​99​] for <span className='font-bold text-red-700'>FREE!</span> *`,
      ]
    },
    {
      h1: `How will this Audit Report <span className='font-bold text-red-700'>help you</span>:`,
      dataBullets: [
        `Insights about what mistakes you are currently doing`,
        `Action items that you can implement <span className='font-bold text-red-700'>instantly</span>`,
        `Validate top issues with your <span className='font-bold text-red-700'>content strategy</span>`,
        `Important recommendations when it comes to aligning your content with <span className='font-bold text-red-700'>Youtube Algorithm</span>`,
      ]
    }
  ]
  return (
    <main className={`flex flex-col items-center w-full overflow-x-hidden`}>
      <div className='flex flex-col bg-red-700 w-full items-center px-5 py-3'>
        <span className='text-2xl font-medium text-white'>FREE Youtube Channel Audit report that has already got #1235 downloads since launch</span>
      </div>
      <section className='flex flex-col items-center w-full px-5 md:px-52 py-10 pt-20 gap-4'>
        <h2 className='text-4xl md:px-32 text-center text-neutral-900 leading-[50px]'><span className='font-bold text-red-700'>GRAB UP</span> YOUR YOUTUBE CHANNEL AUDIT REPORT BASED ON YOUTUBE ALGORITHM FOR QUICK OPPORTUNITIES TO GROW</h2>
        <p className='border-y-[1px] border-neutral-950 text-3xl py-6 w-full text-center'>
          <span className='font-bold text-red-700'>Hurry</span> – only a limited number of reports available.
        </p>
        <div className='flex flex-col md:flex-row gap-8 w-full border-b-[1px] border-black py-8'>
          <div className='flex flex-col flex-1 items-center'>
            <img src='https://i.ibb.co/CpyjVjv/audit-report.webp' alt='audit-report' className='w-full md:w-8/12 object-contain' />
          </div>
          <div className='flex flex-col md:w-1/2 gap-4'>
            {
              dataBullets.map((data, index) => (
                <div className='flex flex-col gap-2' key={index}>
                  <h3 className='text-lg md:text-2xl text-stone-950 font-medium'>{parse(data.h1)}</h3>
                  <div className='flex flex-col gap-2'>
                    {
                      data.dataBullets.map((bullet, index2) => (
                        <div className='flex flex-row gap-1' key={index2}>
                          <BsCheck className='text-4xl text-red-700 -mt-1 -ml-2 w-10' />
                          <p className='text-neutral-900 text-base md:text-lg flex-1'>{parse(bullet)}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='flex flex-col gap-8 w-full py-5 border-b-[1px] border-black'>
          <h3 className='text-lg md:text-2xl text-center text-stone-950'> This offer is only available for a <span className='font-bold text-red-700'>limited time</span> and may never be offered again.</h3>
          <p className='text-xl md:text-5xl text-center text-neutral-900'>GET YOURS <span className='font-bold text-red-700'>TODAY!</span></p>
          <div className='flex flex-col gap-2 w-full md:w-10/12 self-center'>
            <PopupForm />
            <p className='text-center text-neutral-600 text-sm md:text-base'>*The Audit report usually retails for $99 but for today, you will get it for free and also receive access to our Private Community.</p>
          </div>
        </div>
        <div className='flex flex-col gap-8 w-full py-5'>
          <p className='text-neutral-900 text-lg md:text-3xl'>With over <span className='font-bold'>19 years of experience</span> consulting major brands and <span className='font-bold'>5 years as a successful</span> YouTube influencer with a subscriber base of over <span className='font-bold'>1 million, Akassh Ashok Gupta</span> is the ideal choice for a <span className='font-bold'>YouTube channel audit.</span> His extensive corporate background combined with his <span className='font-bold'>YouTube expertise</span> positions him perfectly to provide valuable insights and guidance for optimizing and improving your YouTube channel.</p>
        </div>
      </section>
      <FunnelFooter />
    </main>
  )
}
