'use client'
import React from 'react'
import bonus from '@/utils/funnels/bonusData'
import { GoDotFill } from 'react-icons/go'
import style from '@/styles/RibbonBonus.module.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export default function RibbonBonus({ data, loc="ind" }) {

  return (
    <>
      {
        data.map((item, index) => (
          <div key={index} className=" relative flex md:flex-row flex-col gap-5 md:gap-1 border-2 border-neutral-900 rounded-lg p-3 py-6 animate-text bg-gradient-to-r h-fit from-neutral-200 via-neutral-100 to-neutral-300">
            <div className="absolute -top-9 -right-10 md:-top-16 md:-right-16">
              <img src="/assets/images/donot/bonus_ribbon.png" alt="Ribbon" className="w-44 md:w-72" draggable={false} />
              <span className={`absolute flex h-10 rotate-45 text-xl md:text-3xl font-bold text-white ${style.ribbon}`}>{bonus[item].symbol[loc]}{bonus[item].value[loc]}/-</span>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 w-full md:w-6/12 order-2 md:order-1">
              {
                bonus[item].h1 && (
                  <h2 className="text-xl md:text-3xl font-bold text-center md:text-left text-neutral-900">{bonus[item].h1}</h2>
                )
              }
              {
                bonus[item].p && (
                  <p className="text-sm md:text-xl font-normal text-justify md:text-left text-neutral-700">{bonus[item].p}</p>
                )
              }
              
                {
                  bonus[item].list && (
                    <div className="flex flex-col w-full">
                      {
                        bonus[item].list.map((list, index2) => (
                          <div key={index2} className="flex flex-row md:gap-2">
                            <GoDotFill className="text-stone-600 w-5 md:mt-1 text-lg md:text-2xl" />
                            <span className="flex-1 text-sm md:text-xl font-normal text-left text-neutral-700">{list}</span>
                          </div>
                        ))
                      }
                    </div>
                  )
                }
                {
                  bonus[item].list2 && (
                    <div className="flex flex-col w-full md:pt-10 gap-2 md:gap-10">
                      {
                        bonus[item].list2.map((list, index2) => (
                          <div key={index2} className="flex flex-row md:gap-2">
                            <AiOutlineCheckCircle className="text-red-500/90 w-8 text-2xl md:text-4xl" />
                            <span className="flex-1 text-sm md:text-2xl font-normal text-left text-neutral-700">{list}</span>
                          </div>
                        ))
                      }
                    </div>
                  )
                }
              
            </div>
            <div className="flex flex-col items-center justify-between flex-1 order-1 md:order-2">
              <div className="flex flex-col w-11/12 flex-1">
                <img src={bonus[item].image.src} alt={bonus[item].image.alt} className="object-contain object-center h-48 w-96 md:w-full md:h-80" draggable={false} />
              </div>
              <div className="flex flex-col w-full items-center">
                <p className="text-base md:text-2xl font-bold text-center md:text-left text-yellow-600">Total Value: {bonus[item].symbol[loc]}<s>{bonus[item].value[loc]}</s>/-</p>
                <p className="text-base md:text-2xl font-bold text-center md:text-left text-green-700">Included in This Exclusive Offer!</p>
              </div>
            </div>
          </div>

        ))
      }
    </>
  )
}
