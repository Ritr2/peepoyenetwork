'use client'
import React from 'react'
import bonus from '@/utils/funnels/bonusData'
import { GoDotFill } from 'react-icons/go'
import style from '@/styles/AccRibbonBonus.module.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export default function AccRibbonBonus({ data, loc = "ind" }) {

  return (
    <div className=' flex flex-col md:flex-row gap-12 justify-center'>
      {
        data.map((item, index) => (
          <div key={index} className={`relative ${style.redShadow} w-full md:w-4/12 gap-8 flex flex-col border-2 border-white bg-white/5 rounded-lg px-2 py-3`}>
            <div className={`${style.ribbon} z-10 ${style.ribbonTopRight}`}>
              <span><p className='text-lg md:text-xl'>Included</p></span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col w-full">
                <img src={bonus[item].image.src} alt={bonus[item].image.alt} className={`object-contain object-center h-40 w-96`} draggable={false} />
              </div>
              <div className="flex flex-col w-full items-center">
                <p className="text-base md:text-lg font-bold text-center text-red-500">Total Value: {bonus[item].symbol[loc]}<s>{bonus[item].value[loc]}</s>/-</p>
                <p className="text-sm md:text-base font-bold text-center text-green-700">Included in This Exclusive Offer!</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              {
                bonus[item].h1 && (
                  <h2 className="text-base md:text-lg font-bold text-center text-white">{bonus[item].h1}</h2>
                )
              }
              {
                bonus[item].list2 && (
                  <div className="flex flex-col w-full gap-2">
                    {
                      bonus[item].list2.map((list, index2) => (
                        <div key={index2} className="flex flex-row gap-2 md:gap-2">
                          <AiOutlineCheckCircle className="text-red-500/90 bg-white rounded-full w-4 h-4 md:w-5 md:h-5 mt-1 text-2xl" />
                          <span className="flex-1 text-sm md:text-base font-light text-left text-white">{list}</span>
                        </div>
                      ))
                    }
                  </div>
                )
              }

            </div>
          </div>

        ))
      }
    </div>
  )
}
