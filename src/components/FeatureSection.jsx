import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser';

export default function FeatureSection({data, reverse, backgroundColor}) {
  return (
    <section className={`flex flex-col md:flex-row px-5 md:px-20 items-center justify-center py-12 gap-5 ${backgroundColor}`}>
        <div className="flex flex-col flex-1 gap-5 order-2">
          <h2 className="text-4xl tracking-wide font-bold text-left text-neutral-600">{data.h2}</h2>
          <p className="text-xl text-left text-neutral-700">{parse(data.p)}</p>
          <Link href="https://skoolapp.in/" className="text-xl text-left self-start bg-neutral-600 text-white p-4 px-8 rounded-lg drop-shadow-lg shadow-lg hover:bg-neutral-700 hover:shadow-xl hover:drop-shadow-xl active:bg-neutral-800 active:shadow-2xl active:drop-shadow-2xl active:translate-x-1 active:scale-95">
            Read More</Link>
        </div>
        <div className={`flex flex-col items-center justify-center flex-1 order-1 ${reverse? 'md:order-1': 'md:order-3'}`}>
          <Image src={data.image.src} alt={data.image.alt} width={1000} height={1000} className="w-full drop-shadow-lg shadow-lg" />
        </div>
      </section>
  )
}
