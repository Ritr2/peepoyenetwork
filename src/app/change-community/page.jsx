import React from 'react'
import { DM_Sans } from 'next/font/google'
import Link from 'next/link'
import { AiOutlineCheck } from 'react-icons/ai'

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Private Club',
  description: 'Join our exclusive private club and gain access to special perks and benefits. Connect with like-minded individuals and elevate your lifestyle.',
  url: 'https://peepoye.com',
  type: 'website',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://peepoye.com',
    title: 'Private Club',
    description: 'Join our exclusive private club and gain access to special perks and benefits. Connect with like-minded individuals and elevate your lifestyle.',
  },
  canonical: 'https://peepoye.com/change-community',
}

export default function page() {
  return (
    <main className={`relative flex flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
      <section className="flex flex-col w-full items-center justify-center">
        <div className=" relative flex flex-col justify-center flex-1 md:gap-2 w-full bg-stone-800">
          <img src='/assets/images/collaborate_with_us/collab_1.png' alt='Akassh Ashok Gupta' className=' w-full h-40 md:h-80 opacity-70 object-center block object-contain' draggable={false} />
          <div className="absolute top-0 left-0 w-full h-full flex gap-1 md:gap-5 flex-col justify-center bg-black/90 px-2 md:px-20">
            <h1 className="text-lg md:text-5xl text-center text-white uppercase">बेख़ौफ़ Opinion के लिए सब्सक्राइब करें क्यूंकि </h1>
            <h2 className="text-3xl md:text-7xl tracking-wide font-bold text-center text-white">अब कुछ नहीं छुपेगा</h2>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center my-10 mx-2 md:mx-60">
        <h2 className="text-xl md:text-2xl text-center font-bold text-neutral-900">Join Peepoye Private Club and get access to some Exclusive benefits by becoming a Channel Member</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-20 mt-5">
          <div className="flex flex-col justify-center gap-4 bg-neutral-100 shadow-lg drop-shadow-lg rounded-lg p-3 max-w-xs">
            <div className="flex items-center justify-center">
              <img src="https://i.postimg.cc/vHxNQsBG/image.png" alt="Akassh Ashok Gupta" className="w-4/12" draggable={false} />
            </div>
            <h3 className="text-lg md:text-2xl self-center font-bold text-neutral-900">Change Catalyst</h3>
            <p className="text-sm md:text-lg text-neutral-700 text-center">Change Catalysts work in different campaigns with Peepoye to bring a positive change in the social environment.</p>
            <div className="flex gap-2 w-full">
              <Link href="https://www.youtube.com/channel/UCyR0KBccWM6RnAMweDTWS1g/join" className='flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white py-4 rounded-lg text-lg md:text-xl font-bold w-full'>
                Join Now
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 bg-neutral-100 shadow-lg drop-shadow-lg rounded-lg p-3 max-w-xs">
            <div className="flex items-center justify-center">
              <img src="https://i.postimg.cc/7ZFCpSRx/image.png" alt="Akassh Ashok Gupta" className="w-4/12" draggable={false} />
            </div>
            <h3 className="text-lg md:text-2xl self-center font-bold text-neutral-900">Change Leader</h3>
            <p className="text-sm md:text-lg text-neutral-700 text-center">Change Leaders drive change initiatives and collaborate with Team Peepoye to plan future campaigns.</p>
            <div className="flex gap-2 w-full">
              <Link href="https://www.youtube.com/channel/UCyR0KBccWM6RnAMweDTWS1g/join" className='flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white py-4 rounded-lg text-lg md:text-xl font-bold w-full'>
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center py-10 px-2 md:px-60 gap-10 bg-neutral-100">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-neutral-900">Benefits with YouTube Membership</h2>
        <div className="flex flex-row items-center gap-2">
          <AiOutlineCheck className="text-3xl text-red-600 w-10" />
          <p className="text-lg md:text-2xl text-neutral-700">Loyalty badges next to your name in comments and live chat</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src="https://i.postimg.cc/NfhjGQ44/AB-KUCH-NAHI-CHUPEGA-5-1.png" alt="Akassh Ashok Gupta" className="w-4/12" draggable={false} />
        </div>
        <div className="flex flex-row items-center gap-2">
          <AiOutlineCheck className="text-3xl text-red-600 w-10" />
          <p className="text-lg md:text-2xl text-neutral-700">Custom emoji to use in comments and live chat</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src="https://i.postimg.cc/ncvcCNSt/AB-KUCH-NAHI-CHUPEGA-6-1.png" alt="Akassh Ashok Gupta" className="w-4/12" draggable={false} />
        </div>
        <div className="flex flex-row items-center gap-2">
          <AiOutlineCheck className="text-3xl text-red-600 w-10" />
          <p className="text-lg md:text-2xl text-neutral-700">Priority reply to comments received in the first week subject to uniqueness, relevance etc</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src="https://i.postimg.cc/3x18ZmHS/AB-KUCH-NAHI-CHUPEGA-16.png" alt="Akassh Ashok Gupta" className="w-10/12" draggable={false} />
        </div>
        <div className="flex flex-row items-center gap-2">
          <AiOutlineCheck className="text-3xl text-red-600 w-10" />
          <p className="text-lg md:text-2xl text-neutral-700">Private Club Access where you can get updates on upcoming videos from me</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src="https://i.postimg.cc/PqqtVJXt/AB-KUCH-NAHI-CHUPEGA-15.png" alt="Akassh Ashok Gupta" className="w-10/12" draggable={false} />
        </div>
        <div className="flex flex-row items-center gap-2">
          <AiOutlineCheck className="text-3xl text-red-600 w-10" />
          <p className="text-lg md:text-2xl text-neutral-700">Monthly virtual video collaborations with Akassh and Team Peepoye</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src="https://i.postimg.cc/xjm94W2b/Group-6.png" alt="Akassh Ashok Gupta" className="w-10/12" draggable={false} />
        </div>
      </section>
      <section className="flex flex-col w-full justify-center py-10 px-2 md:px-60 gap-10">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-neutral-900">Plans of Youtube Membership</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-20">
          <div className="flex flex-col justify-center gap-4">
            <Link href="https://www.youtube.com/channel/UCyR0KBccWM6RnAMweDTWS1g/join" >
              <img src="https://i.postimg.cc/bYC23JKL/Change-Catalyst-2.png" alt="Akassh Ashok Gupta" className="w-10/12" draggable={false} />
            </Link>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Link href="https://www.youtube.com/channel/UCyR0KBccWM6RnAMweDTWS1g/join" >
              <img src="https://i.postimg.cc/Gh4TNRRR/Change-leader-2.png" alt="Akassh Ashok Gupta" className="w-10/12" draggable={false} />
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full justify-center py-10 px-2 md:px-60 gap-10 bg-neutral-100">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-neutral-900">Desired traits of Private Club Member</h2>
        <div className="flex flex-col items-center justify-center gap-10">
          <img src="https://i.postimg.cc/76BbssQb/AB-KUCH-NAHI-CHUPEGA-1264-872px-1024x666.png" alt="Akassh Ashok Gupta" className="w-10/12" draggable={false} />
          </div>
        </section>
    </main>
  )
}

