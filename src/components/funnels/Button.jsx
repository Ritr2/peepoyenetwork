'use client'
import React from 'react'
import PaymentForm from '../payments/PaymentForm'

export default function Button({query, product, text,bgcolor,txcolor}) {
  const [dataFormVisible, setDataFormVisible] = React.useState(false)

  const handleClick = () => {
    setDataFormVisible(true)
  }

  return (
    <>
      <button className={`flex rounded-lg p-2 text-base md:text-xl font-bold flex-row items-center justify-center gap-2 w-full ${txcolor} ${bgcolor.normal} hover:${bgcolor.hover} hover:shadow-lg hover:drop-shadow-lg hover:scale-105 active:${bgcolor.active} active:shadow-none active:drop-shadow-none active:scale-95`} onClick={handleClick}>
        {text}
      </button>
      {
        dataFormVisible &&
        <PaymentForm setDataFormVisible={setDataFormVisible} query={query} product={product} />
      }
    </>
  )
}
