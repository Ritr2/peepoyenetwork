import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BsFillCaretRightFill } from 'react-icons/bs'
import parse from 'html-react-parser'

export default function PaymentSection() {
  const [currentPlan, setCurrentPlan] = useState('monthly')
  const items = [
    '<span className="font-bold text-black">Lifetime access to Youtubeneur Foundation Accelerator </span> our flagship Course to Build Online Authority',
    'Instant access to our Private Youtubeneur Community to collaborate while learning',
    `Bonus #1: Donot Do This On Youtube`,
    `Bonus #2: Scripting Secret Course`,
    `Bonus #3: Thumbnail Designing Hack`,
    `Bonus #4: Video Editing Checklist`,
    `Bonus #5: Video Optimization Doc`,
    `Bonus #6: Revenue Prediction Tool`,
  ]
  return (
    <div className="flex flex-col items-center gap-10" id="paymentPage">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl text-center font-bold text-red-600">Choose The Plan which suits you the best</h1>
        <div className="flex flex-row justify-center items-end gap-5">
          <div className="flex flex-col flex-1">
            <button className={`px-5 py-2 rounded-md ${currentPlan === 'monthly' ? 'bg-red-700 text-white' : 'bg-white text-red-700'}`} onClick={() => setCurrentPlan('monthly')}>Monthly</button>
          </div>
          <div className="flex flex-col flex-1">
            <button className={`px-5 py-2 rounded-md ${currentPlan === 'yearly' ? 'bg-red-700 text-white' : 'bg-white text-red-700'}`} onClick={() => setCurrentPlan('yearly')}>Yearly</button>
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-2xl bg-red-500 px-4 text-white rounded-t-lg">Recommended</span>
            <button className={`px-5 py-2 rounded-b-md ${currentPlan === 'lifetime' ? 'bg-red-700 text-white' : 'bg-white text-red-700'}`} onClick={() => setCurrentPlan('lifetime')}>Lifetime</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-6/12 bg-gradient-to-br from-neutral-100 to-neutral-300 shadow-md rounded-xl p-5 drop-shadow-md">
      <h2 className=' text-3xl text-center fon font-bold'>Are You Ready To Join Now?</h2>
      <h3 className=' text-xl text-center font-bold'>Here is what you get</h3>
      <div className="flex flex-col gap-5">
        {
          items.map((item, index) => (
            <div className="flex flex-row gap-2" key={index}>
              <BsFillCaretRightFill className="text-2xl text-red-700 w-6 mt-px" />
              <p className="text-lg flex-1">{parse(item)}</p>
            </div>
          ))
        }
        </div>
        {
          currentPlan === 'monthly' &&
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl text-center font-bold">Monthly Plan</h2>
          </div>

        }
        {
          currentPlan === 'yearly' &&
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl text-center font-bold"> Yearly Plan</h2>
          </div>
        }
        {
          currentPlan === 'lifetime' &&
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl text-center font-bold">Lifetime Plan</h2>
          </div>
        }
      </div>
    </div>
  )
}
