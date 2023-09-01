import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function PaymentSection() {
  const [currentPlan, setCurrentPlan] = useState('monthly')
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl text-center font-bold text-red-600">Choose The Plan which suits you the best</h1>
        <div className="flex flex-row justify-center items-end gap-5">
          <div className="flex flex-col">
            <button className={`px-5 py-2 rounded-md ${currentPlan === 'monthly' ? 'bg-red-700 text-white' : 'bg-white text-red-700'}`} onClick={() => setCurrentPlan('monthly')}>Monthly</button>
          </div>
          <div className="flex flex-col">
            <button className={`px-5 py-2 rounded-md ${currentPlan === 'yearly' ? 'bg-red-700 text-white' : 'bg-white text-red-700'}`} onClick={() => setCurrentPlan('yearly')}>Yearly</button>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl bg-red-500 px-4 text-white rounded-t-lg">Recommended</span>
            <button className={`px-5 py-2 rounded-b-md ${currentPlan === 'lifetime' ? 'bg-red-700 text-white' : 'bg-white text-red-700'}`} onClick={() => setCurrentPlan('lifetime')}>Lifetime</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-4/12 bg-neutral-200 shadow-md rounded-xl p-5 drop-shadow-md h-80">
        {
          currentPlan === 'monthly' &&
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl text-center font-bold">Monthly Plan</h2>
          </div>

        }
        {
          currentPlan === 'yearly' &&
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl text-center font-bold">Yearly Plan</h2>
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
