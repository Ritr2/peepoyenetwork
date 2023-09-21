'use client'
import React from 'react'
import bonus from '@/utils/funnels/bonusData'
import { GoDotFill } from 'react-icons/go'
import style from '@/styles/AccRibbonBonus.module.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export default function AccRibbonBonus({ data, loc = "ind" }) {

  return (
    // <div className=' flex flex-col md:flex-row flex-wrap gap-5 md:gap-28 justify-center px-5'>
    //   {
    //     data.map((item, index) => (
    //       <div key={index} className={`relative ${style.redShadow} w-full md:w-5/12 gap-5 flex flex-col border-2 border-white bg-white/5 rounded-lg px-2 md:px-4 py-3`}>
    //         <div className={`${style.ribbon} z-10 ${style.ribbonTopRight}`}>
    //           <span><p className='text-lg md:text-xl'>Included</p></span>
    //         </div>
    //         <div className="flex flex-col items-center">
    //           <div className="flex flex-col w-full">
    //             <img src={bonus[item].image.src} alt={bonus[item].image.alt} className={`object-contain object-center h-40 w-96`} draggable={false} />
    //           </div>
    //           <div className="flex flex-col w-full items-center">
    //             <p className="text-base md:text-lg font-bold text-center text-red-500">Total Value: {bonus[item].symbol[loc]}<s>{bonus[item].value[loc]}</s>/-</p>
    //           </div>
    //         </div>
    //         <div className="flex flex-col gap-3 w-full">
    //           {
    //             bonus[item].h1 && (
    //               <h2 className="text-base md:text-lg font-bold text-center text-white">{index+2}. {bonus[item].h1}</h2>
    //             )
    //           }
    //           {
    //             bonus[item].list2 && (
    //               <div className="flex flex-col w-full gap-2">
    //                 {
    //                   bonus[item].list2.map((list, index2) => (
    //                     <div key={index2} className="flex flex-row gap-2 md:gap-2">
    //                       <AiOutlineCheckCircle className="text-red-500/90 rounded-full w-4 h-4 md:w-5 md:h-5 mt-1 text-2xl" />
    //                       <span className="flex-1 text-sm md:text-base text-left text-white">{list}</span>
    //                     </div>
    //                   ))
    //                 }
    //               </div>
    //             )
    //           }

    //         </div>
    //       </div>

    //     ))
    //   }
       <div className=' flex flex-col md:flex-row flex-wrap gap-20 justify-center px-5'>
      {
        data.map((item, index) => (
          <div key={index} className={`relative w-full gap-5 flex flex-col md:flex-row border-2 items-center border-white bg-neutral-100 rounded-lg px-2 md:px-10 py-8`}>
            <div className={`absolute ${style.ribbon2Container}`}>
              <img src="/assets/images/donot/bonus_ribbon.png" alt="Ribbon" className="w-44 md:w-60" draggable={false} />
              <span className={`absolute flex h-10 rotate-45 text-xl md:text-2xl font-bold text-white ${style.ribbon2}`}>{bonus[item].symbol[loc]}{bonus[item].value[loc]}/-</span>
            </div>
            <div className="flex flex-col flex-1 gap-2 md:gap-8 order-2 md:order-1">
            {
                bonus[item].h1 && (
                  <h2 className="text-base md:text-3xl font-bold text-neutral-700"><span className='uppercase text-xl font-normal text-green-700'>Bonus {index+2}</span><br/> {bonus[item].h1}</h2>
                )
            }
            {
                bonus[item].list2 && (
                  <div className="flex flex-col w-full gap-2 md:gap-5">
                    {
                      bonus[item].list2.map((list, index2) => (
                        <div key={index2} className="flex flex-row gap-2 md:gap-2 items-center">
                          <AiOutlineCheckCircle className="text-red-500/90 rounded-full h-5 w-5 md:w-10 md:h-10" />
                          <span className="flex-1 text-sm md:text-xl text-left text-neutral-600">{list}</span>
                        </div>
                      ))
                    }
                  </div>
                )
              }
            </div>
            <div className="flex flex-col w-full md:w-5/12 order-1 md:order-2 gap-1 md:gap-2">
            <div className="flex flex-col w-full">
                <img src={bonus[item].image.src} alt={bonus[item].image.alt} className={`object-contain object-center w-full max-h-52 md:max-h-72`} draggable={false} />
              </div>
              <div className="flex flex-col w-full items-center">
                <p className="text-sm md:text-2xl font-bold text-center text-red-500">Total Value: {bonus[item].symbol[loc]}<s>{bonus[item].value[loc]}</s>/-</p>
                <p className="text-sm md:text-lg font-bold text-center text-green-700">Included in this Exclusive Offer!</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
