import React, { Fragment, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BsFillCaretRightFill } from 'react-icons/bs'
import parse from 'html-react-parser'
import Link2 from 'next/link'
import url from '@/utils/url'
import style from '@/styles/AcceleratorInd.module.css'
import PaymentForm from './PaymentForm'
import StripeapiCall from '@/utils/payments/stripePaymentCall'
import { Roboto } from 'next/font/google'
import Countdown from 'react-countdown'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
})

export default function PaymentSection({ loc, data, bf=false }) {
  const [dataFormVisible, setDataFormVisible] = useState(false);
  const [loading, setLoading] = React.useState(false)
  const dataP = {
    ind: {
      monthly: {
        selectortext: 'Monthly',
        recommended: false,
        buttonText: {
          main: 'Book Now at $15/month',
          sub: 'cancel anytime'
        },
        successlink: `https://www.skool.com/youtubeneur`,
      },
      yearly: {
        selectortext: 'Yearly',
        recommended: false,
        buttonText: {
          main: 'Book Now at ₹2499/year',
          sub: 'cancel anytime'
        },
        successlink: `${url}/thankyou?product=accelerator`,
      },
      lifetime: {
        selectortext: 'Lifetime',
        recommended: true,
        buttonText: {
          main: 'Book Now at ₹4999/- only',
          sub: 'Limited Time Offer'
        },
        successlink: `${url}/thankyou?product=accelerator`,
      },
    },
    int: {
      monthly: {
        selectortext: 'Monthly',
        recommended: false,
        buttonText: {
          main: 'Book Now at $15/month',
          sub: 'cancel anytime'
        },
        successlink: 'https://www.skool.com/youtubeneur',
      },
      yearly: {
        selectortext: 'Yearly',
        recommended: false,
        buttonText: {
          main: 'Book Now at $99/year',
          sub: 'cancel anytime'
        },
        successlink: `${url}/thankyou?product=accelerator`,
        price_id: 'price_1NrH43SDli6WzERSGDhPlBTr',
        mode: 'subscription',
      },
      lifetime: {
        selectortext: 'Lifetime',
        recommended: true,
        buttonText: {
          main: bf ? 'Book the Black Friday Offer at $99/- only': 'Book Now at $129 only',
          sub: 'Limited Offer (Original Price $499/-)'
        },
        successlink: `${url}/thankyou?product=accelerator`,
        price_id: bf ? 'price_1ODk9ySDli6WzERSQI5Hggh5' : 'price_1Ns51ZSDli6WzERSqSX38qyO',
        mode: 'payment',
      },
    }
  }
  const [currentPlan, setCurrentPlan] = useState('lifetime')
  const items = [
    {
      text: '<span className="font-normal text-neutral-300">Access to Youtubeneur Foundation Accelerator </span> our flagship Course with 19 Modules',
      price: {
        ind: 14999,
        int: 299
      },
      plan: ['lifetime', 'yearly', 'monthly'],
      quantity: {
        lifetime: 120,
        yearly: 12,
        monthly: 1
      },
      bf: false
    },
    {
      text: '<span className="font-normal text-neutral-300">Bonus #1:</span> Weekly Live Coffee Chats on Zoom',
      price: {
        ind: 2499,
        int: 99
      },
      plan: ['lifetime', 'yearly', 'monthly'],
      quantity: {
        lifetime: 120,
        yearly: 12,
        monthly: 1
      },
      bf: false
    },
    {
      text: '<span className="font-normal text-neutral-300">Bonus #2:</span> Access to our Private YouTube Growth Community',
      price: {
        ind: 4999,
        int: 99,
      },
      plan: ['lifetime', 'yearly', 'monthly'],
      quantity: {
        lifetime: 120,
        yearly: 12,
        monthly: 1
      },
      bf: false
    },
    {
      text: `<span className="font-normal text-neutral-300">Bonus #3:</span> Do Not Do This On YouTube Course`,
      price: {
        ind: 1499,
        int: 49
      },
      plan: ['lifetime', 'yearly', 'monthly'],
      quantity: {
        lifetime: 120,
        yearly: 12,
        monthly: 1
      },
      bf: false
    },
    {
      text: `<span className="font-normal text-neutral-300">Bonus #4:</span> Scripting Secret Course`,
      price: {
        ind: 1499,
        int: 49,
      },
      plan: ['lifetime', 'yearly', 'monthly'],
      quantity: {
        lifetime: 120,
        yearly: 12,
        monthly: 1
      },
      bf: false
    },
    {
      text: `<span className="font-normal text-neutral-300">Bonus #5:</span> Content Strategy Doc`,
      price: {
        ind: 999,
        int: 29
      },
      plan: ['lifetime', 'yearly', 'monthly'],
      quantity: {
        lifetime: 120,
        yearly: 12,
        monthly: 1
      },
      bf: false
    },
    {
      text: `<span className="font-normal text-neutral-300">Bonus #6:</span> Video Editing Checklist`,
      price: {
        ind: 499,
        int: 19
      },
      plan: ['lifetime', 'yearly', 'monthly'],
      quantity: {
        lifetime: 120,
        yearly: 12,
        monthly: 1
      },
      bf: false
    },
    {
      text: `<span className="font-normal text-neutral-300">Bonus #7:</span> Video Research Template`,
      price: {
        ind: 499,
        int: 19
      },
      plan: ['lifetime', 'yearly', 'monthly'],
      quantity: {
        lifetime: 120,
        yearly: 12,
        monthly: 1
      },
      bf: false
    },
    {
      text: `<span className="font-normal text-neutral-300">Bonus #8:</span> Thumbnail Designing Hack`,
      price: {
        ind: 499,
        int: 19
      },
      plan: ['lifetime', 'yearly', 'monthly'],
      quantity: {
        lifetime: 120,
        yearly: 12,
        monthly: 1
      },
      bf: false
    },
    {
      text: `<span className="font-normal text-neutral-300">Bonus #9:</span> Video Optimization Doc`,
      price: {
        ind: 499,
        int: 19
      },
      plan: ['lifetime', 'yearly', 'monthly'],
      quantity: {
        lifetime: 120,
        yearly: 12,
        monthly: 1
      },
      bf: false
    },
    {
      text: `<span className="font-normal text-neutral-300">Bonus #10:</span> Revenue Prediction Tool`,
      price: {
        ind: 499,
        int: 19
      },
      plan: ['lifetime', 'yearly', 'monthly'],
      quantity: {
        lifetime: 120,
        yearly: 12,
        monthly: 1
      },
      bf: false
    },
    {
      text: `<span className="font-normal text-red-500">Additional Bonus:</span> Channel audit report tailor made for your channel personally created by the YouTube expert`,
      price: {
        ind: 1499,
        int: 49
      },
      plan: ['lifetime'],
      quantity: {
        lifetime: 1,
      },
      bf: false
    },
    {
      text: `<span className="font-normal text-red-500">Limited Bonus:</span> Free one-on-one consulting calls for the first 25 members`,
      price: {
        ind: 7999,
        int: 499
      },
      plan: ['lifetime'],
      quantity: {
        lifetime: 1,
        yearly: 1,
      },
      bf: true
    }
  ]

  const handlePayment = () => {
    if (loc === 'ind') {
      setDataFormVisible(true)
    }
    if (loc === 'int') {
      setDataFormVisible(true)
    }
  }

  const handleStripePayment = (details) => {
    if (currentPlan === 'monthly') {
      window.location.href = dataP[loc][currentPlan].successlink
    }
    else {
      const products = [
        {
          priceId: dataP[loc][currentPlan].price_id,
          quantity: 1,
        }
      ]
      const successlink = data ? `${url}/${data.yes.query}?product=${data.yes.product}` : dataP[loc][currentPlan].successlink
      StripeapiCall(details, products, dataP[loc][currentPlan].mode, successlink, `${url}/accelerator-${loc}${data ? `?product=${data.product}` : ''}`, setLoading, 'accelerator')
    }
  }


  return (
    <div className="flex flex-col items-center gap-10" id="paymentPage">
      <div className={`${style.redShadow} flex flex-col gap-5 w-full md:w-7/12 bg-white/5 border-2 border-white shadow-md rounded-xl p-2 md:p-5 drop-shadow-md`}>
        <div className="flex flex-col gap-5">
          <h2 className={`text-white text-2xl md:text-4xl text-center font-bold`}>Ready to become a Youtubeneur?</h2>
          <h3 className={`text-xl md:text-2xl text-center ${style.textRed} font-medium`}>Here is what you get</h3>
        </div>
        <div className="flex flex-col gap-5">
          {
            items.map((item, index) => (
              <Fragment key={index}>
                {
                  item.plan.includes(currentPlan) && (
                    <>
                      {
                        !item.bf && (<div className="flex flex-row gap-2 justify-between items-center" key={index}>
                          <div className="flex flex-row gap-2 flex-1">
                            <BsFillCaretRightFill className={`text-2xl ${style.textRed} w-6 mt-px`} />
                            <p className="text-neutral-300 font-thin text-base md:text-lg flex-1">{parse(item.text)}</p>
                          </div>
                          <p className="text-white text-base md:text-lg">
                            {item.price[loc].toLocaleString(loc === 'ind' ? 'en-IN' : 'en-US', {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 2,
                              style: 'currency',
                              currency: loc === 'ind' ? 'INR' : 'USD'
                            })}
                            /-
                          </p>
                        </div>
                        )
                      }
                      {
                        bf && item.bf && (
                          <div className="flex flex-row gap-2 justify-between items-center" key={index}>
                            <div className="flex flex-row gap-2 flex-1">
                              <BsFillCaretRightFill className={`text-2xl ${style.textRed} w-6 mt-px`} />
                              <p className="text-neutral-300 font-thin text-base md:text-lg flex-1">{parse(item.text)}</p>
                            </div>
                            <p className="text-white text-base md:text-lg">
                              {item.price[loc].toLocaleString(loc === 'ind' ? 'en-IN' : 'en-US', {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2,
                                style: 'currency',
                                currency: loc === 'ind' ? 'INR' : 'USD'
                              })}
                              /-
                            </p>
                          </div>
                        )
                      }
                    </>
                  )
                }
              </Fragment>
            ))
          }
        </div>
        <div className="flex flex-row justify-center items-end gap-1 md:gap-5 w-full">
          {
            Object.keys(dataP[loc]).map((key, index) => (
              <div className="flex flex-col flex-1" key={index}>
                {
                  dataP[loc][key].recommended && (
                    <p className={`bg-green-600 text-white text-center font-bold px-1 py-1 rounded-t-md`}>Recommended</p>
                  )
                }
                <button className={` px-1 py-1 md:px-5 md:py-2 ${dataP[loc][key].recommended ? 'rounded-b-md' : 'rounded-md'} ${currentPlan === key ? 'bg-white text-red-600' : 'bg-white/10 text-white'}`} onClick={() => setCurrentPlan(key)}>{dataP[loc][key].selectortext}</button>
              </div>
            ))
          }
        </div>
        <div className="flex flex-col gap-5">
          {
            bf && (
              <>
                <div className="flex flex-col gap-2 w-5/12 self-center">
                  <img src="/picture.png" alt="money back guarantee" className='w-full' />
                </div>
                <Countdown date={1700937000000} renderer={({ days, hours, minutes, seconds, completed }) => {
                  if (completed) {
                    return <span className='text-white text-center text-lg md:text-3xl'>Offer Closed</span>
                  } else {
                    return <p className='text-center text-sm md:text-2xl flex flex-row gap-2 self-center w-full md:w-9/12'>
                      <span className='bg-white rounded-lg flex flex-col gap-2 p-1 flex-1'>
                        <span className='red-text text-xl md:text-4xl text-center font-bold'>{days > 9 ? days : `0${days}`}</span>
                        <span className='text-black text-center text-xs md:text-lg'>{days > 1 ? 'days' : 'day'}</span>
                      </span>
                      <span className='bg-white rounded-lg flex flex-col gap-2 p-1 flex-1'>
                        <span className='red-text text-xl md:text-4xl text-center font-bold'>{hours > 9 ? hours : `0${hours}`}</span>
                        <span className='text-black text-center text-xs md:text-lg'>{hours > 1 ? 'hours' : 'hour'}</span>
                      </span>
                      <span className='bg-white rounded-lg flex flex-col gap-2 p-1 flex-1'>
                        <span className='red-text text-xl md:text-4xl text-center font-bold'>{minutes > 9 ? minutes : `0${minutes}`}</span>
                        <span className='text-black text-center text-xs md:text-lg'>{minutes > 1 ? 'minutes' : 'minute'}</span>
                      </span>
                      <span className='bg-white rounded-lg flex flex-col gap-2 p-1 flex-1'>
                        <span className='red-text text-xl md:text-4xl text-center font-bold'>{seconds > 9 ? seconds : `0${seconds}`}</span>
                        <span className='text-black text-center text-xs md:text-lg'>{seconds > 1 ? 'seconds' : 'second'}</span>
                      </span>
                    </p>
                  }
                }} />
              </>
            )
          }
          <h2 className={`text-white text-xl md:text-2xl text-center flex flex-row items-center justify-center`}>Total Value: &nbsp;<span className="relative flex items-center text-red-500 hover:no-underline">
            {(items.reduce((acc, item) => {
              if (item.plan.includes(currentPlan)) {
                return acc + (item.price[loc] * item.quantity[currentPlan])
              }
              return acc
            }, 0))
              .toLocaleString(loc === 'ind' ? 'en-IN' : 'en-US', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
                style: 'currency',
                currency: loc === 'ind' ? 'INR' : 'USD'
              })}/-<span className='absolute left-0 right-0 h-1 opacity-40 border-b-2 border-white' /></span></h2>
        </div>
        <div className="flex flex-col gap-2">
          <button className={`text-lg md:text-2xl ${style.bgRed} text-white px-3 py-2 rounded-md  hover:scale-105 active:scale-95 transition duration-300 ease-in-out shadow-md`} onClick={() => handlePayment()}>
            {
              dataP[loc][currentPlan].buttonText.main
            }
            <p className="text-sm text-white">{dataP[loc][currentPlan].buttonText.sub}</p>
          </button>
          {
            data && (
              <Link2 className='self-center text-lg text-white hover:underline' href={`${url}/${data.no.query}?product=${data.no.product}`} >
                No, I don't want this offer
              </Link2>
            )
          }
        </div>
      </div>
      {
        dataFormVisible && (
          <PaymentForm setDataFormVisible={setDataFormVisible} currentPlan={currentPlan} successUrl={data ? `${url}/${data.yes.query}?product=${data.yes.product}` : dataP[loc][currentPlan].successlink} handleStripePayment={handleStripePayment} loc={loc} bf={bf} />
        )
      }
      {
        loading && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col gap-6 justify-center items-center z-50 backdrop-filter backdrop-blur-lg">
            <h2 className="text-xl md:text-3xl font-bold text-center text-white">Please wait while we redirect you to the payment Gateway...</h2>
            <div className="loader" />
          </div>
        )
      }
    </div>
  )
}
