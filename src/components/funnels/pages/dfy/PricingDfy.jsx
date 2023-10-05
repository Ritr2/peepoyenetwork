import React, {useState} from 'react'
import parse from 'html-react-parser'
import { BsFillCaretRightFill } from 'react-icons/bs'
import style from '@/styles/Dfy.module.css'
import PaymentForm from './PaymentForm'
import url from '@/utils/url'

export default function PricingDfy({ loc = 'ind' }) {
  const [quantity, setQuantity] = React.useState(1)
  const [dataFormVisible, setDataFormVisible] = useState(false);
  const perVideo = {
    ind: 5999,
    int: 99,
  }
  const stripePriceId = 'price_1Myz0fSDli6WzERSlmAh3snU'

  const itemsWithPrices = [
    {
      id: 'editing',
      name: `<span className="font-bold">Video editing</span> with professional software life Final cut pro`,
      price: {
        ind: 6000,
        int: 499,
      }
    },
    {
      id: 'thumbnail',
      name: `<span className="font-bold">Thumbnail Design</span> with unlimited iterations untill satisfaction, approval and video upload`,
      price: {
        ind: 2000,
        int: 299,
      }
    },
    {
      id: 'subtitle',
      name: `<span className="font-bold">Multilingual subtitle</span> options that enable you to reach a global audience`,
      price: {
        ind: 1000,
        int: 99,
      }
    },
    {
      id: 'seo',
      name: `<span className="font-bold">SEO Optimization</span> for video content & channel for maximum reach`,
      price: {
        ind: 1500,
        int: 99,
      }
    },
    {
      id: 'abTesting',
      name: `<span className="font-bold">A/B Testing</span> to improve CTR + complimentary thumbnail`,
      price: {
        ind: 2000,
        int: 199,
      }
    },
    {
      id: `auditReport`,
      name: `<span className="font-bold">Audit report</span> featuring expert analysis and tailored insights`,
      price: {
        ind: 2000,
        int: 99,
      }
    }
  ]

  const handleQuantity = (e) => {
    if (e === '-') {
      if (quantity > 1) {
        setQuantity(quantity - 1)
      }
    } else if (e === '+') {
      if (quantity < 10) {
        setQuantity(quantity + 1)
      }
    } else {
      if (e.target.value > 10) {
        setQuantity(10)
      }
      else if (e.target.value < 1) {
        setQuantity(1)
      }
      else {
        setQuantity(parseInt(e.target.value))
      }
    }
  }

  return (
    <div className="flex flex-col md:gap-8 w-full md:w-7/12 rounded-3xl shadow-xl bg-gradient-to-br from-green-100 to-emerald-100 p-1 md:p-5">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl md:text-4xl font-bold text-center text-neutral-800">Are You Ready To Book Now?</h3>
        <p className="text-center text-green-700 text-medium text-lg md:text-2xl mt-5">Here's exactly what you're getting...</p>
      </div>
      <div id = "dfyPricingSection" className="flex flex-col gap-5 md:gap-8">
        {
          itemsWithPrices.map((item, index) => (
            <div className="flex flex-row gap-2 justify-between items-center" key={index}>
              <div className="flex flex-row gap-2 flex-1">
                <BsFillCaretRightFill className={`text-2xl text-green-700 w-6 mt-px`} />
                <p className="text-neutral-900 text-base md:text-lg flex-1">{parse(item.name)}</p>
              </div>
              <p className="text-neutral-900 font-semibold text-base md:text-lg">
                {(item.price[loc] * quantity).toLocaleString(loc === 'ind' ? 'en-IN' : 'en-US', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                  style: 'currency',
                  currency: loc === 'ind' ? 'INR' : 'USD'
                })}
                /-
              </p>
            </div>
          ))
        }
        <h2 className={`text-xl md:text-2xl text-center flex flex-row items-center justify-center`}>Total Value: &nbsp;<span className="relative flex items-center">
          {(itemsWithPrices.reduce((acc, item) => {
            return acc + (item.price[loc] * quantity)
          }, 0))
            .toLocaleString(loc === 'ind' ? 'en-IN' : 'en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
              style: 'currency',
              currency: loc === 'ind' ? 'INR' : 'USD'
            })}/-<span className='absolute left-0 right-0 h-1 opacity-80 border-b-2 border-green-600' /></span></h2>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className={`text-xl md:text-2xl text-center flex flex-row font-bold items-center ${style.increase} justify-center`}>Quantity: &nbsp;<span className="flex">
          <button className="text-2xl bg-white rounded-l-md text-green-700 w-6" onClick={() => handleQuantity('-')}>-</button>
          <input type="number" className="text-center w-12 md:w-16 text-lg md:text-2xl font-bold text-green-700" value={quantity} onChange={(e) => handleQuantity(e)} min={1} max={10} />
          <button className="text-2xl bg-white rounded-r-md text-green-700 w-6" onClick={() => handleQuantity('+')}>+</button>
        </span></h2>
        <h2 className={`text-xl md:text-2xl text-center flex flex-row font-bold items-center justify-center`}>Special Offer: &nbsp;<span className="flex items-center text-green-700">
          {
            (perVideo[loc] * quantity).toLocaleString(loc === 'ind' ? 'en-IN' : 'en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
              style: 'currency',
              currency: loc === 'ind' ? 'INR' : 'USD'
            })
          }
          /-</span>
        </h2>
      </div>
      <div className="flex flex-col">
        <button className="bg-green-700 text-white text-lg md:text-xl font-bold rounded-3xl py-2 md:py-3 px-5 md:px-8 hover:bg-green-800 transition duration-300 ease-in-out" onClick={() => setDataFormVisible(true)}>Book Now</button>
        <p className="text-center text-sm md:text-base text-neutral-800 mt-2">PN: If you want the service for more than 10 videos, Fill the below form</p>
      </div>
      {
        dataFormVisible && (
          <PaymentForm setDataFormVisible={setDataFormVisible} successUrl={`${url}/thankyou?product=dfy`} loc={loc} stripePriceId={stripePriceId} quantity={quantity} loading />
        )
      }
    </div>
  )
}
