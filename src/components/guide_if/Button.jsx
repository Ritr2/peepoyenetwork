'use client'
import React from 'react'
import PaymentForm from '../payments/PaymentForm'

export default function Button() {
  const [dataFormVisible, setDataFormVisible] = React.useState(false)
  const query = '/donot'
  const product = 'if-guide'

  const handleClick = () => {
    setDataFormVisible(true)
  }

  return (
    <>
      <button className="flex rounded-lg p-2 text-base md:text-xl font-bold text-white flex-row items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg hover:drop-shadow-lg hover:scale-105 active:bg-emerald-800 active:shadow-none active:drop-shadow-none active:scale-95" onClick={handleClick}>
        BUY THE INFLUENCER GUIDE ONLY FOR TODAY AT AN UNBELIEVEABLE 90% DISCOUNT
      </button>
      {
        dataFormVisible &&
        <PaymentForm setDataFormVisible={setDataFormVisible} query={query} product={product} />
      }
    </>
  )
}
