import React from 'react'
import { DM_Sans } from 'next/font/google'
import PastCollab from '@/components/PastCollab'
import { GoDotFill } from 'react-icons/go'
import SocialMediaDetails from '@/components/SocialMediaDetails'
import images from '@/utils/experience_images'
import CollabQueryForm from '@/components/collaborate_with_us/CollabQueryForm'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { GrLinkedinOption } from 'react-icons/gr'
import ButtonToScroll from '@/components/collaborate_with_us/ButtonToScroll'

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Collaborate with us - Peepoye',
  description: 'Partner with us to showcase your brand on our YouTube channel. Join our community and reach a diverse audience. Visit our page and collaborate with us today.',
  images: [
    {
      url: 'https://i.ibb.co/rHqF2Hz/demographic-2.png',
      width: 800,
      height: 500,
      alt: 'Collaborate with us - Peepoye',
    },
  ],
  url: 'https://peepoye.com/collaborate-with-us',
  keywords: ['collaborate with us', 'influencer marketing', 'social media marketing', 'brand promotion', 'brand marketing', 'brand awareness', 'branding', 'marketing', 'social media', 'social media influencers', 'social media influencers in india', 'social media influencers in delhi', 'social media influencers in mumbai', 'social media influencers in bangalore'],
  type: 'website',
  openGraph: {
    title: 'Collaborate with us - Peepoye',
    description: 'Partner with us to showcase your brand on our YouTube channel. Join our community and reach a diverse audience. Visit our page and collaborate with us today.',
    images: [
      {
        url: 'https://i.ibb.co/rHqF2Hz/demographic-2.png',
        width: 730,
        height: 410,
        alt: 'Collaborate with us - Peepoye',
      },
    ],
    url: 'https://peepoye.com/collaborate-with-us',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Collaborate with us - Peepoye',
    description: 'Partner with us to showcase your brand on our YouTube channel. Join our community and reach a diverse audience. Visit our page and collaborate with us today.',
    images: [{
      url: 'https://i.ibb.co/rHqF2Hz/demographic-2.png',
      width: 730,
      height: 410,
      alt: 'Collaborate with us - Peepoye',
    },],
    creator: '@peepoye',
  },
  alternates: {
    canonical: 'https://peepoye.com/collaborate-with-us',
  },
}

export default function page() {
  return (
    <main className={`relative flex flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
      <section className="flex flex-col w-full items-center justify-center">
        <div className=" relative flex flex-col justify-center flex-1 md:gap-2 w-full bg-stone-800">
          <img src='/assets/images/collaborate_with_us/collab_1.png' alt='Akassh Ashok Gupta' className=' w-full h-40 md:h-80 opacity-70 object-right block object-contain' draggable={false} />
          <div className="absolute top-0 left-0 w-full h-full flex gap-3 flex-col justify-center bg-black/80 px-2 md:px-20">
            <h1 className="text-3xl md:text-7xl tracking-wide font-bold text-left text-white uppercase">Collaborate</h1>
            <h2 className="text-3xl md:text-7xl tracking-wide font-bold text-left text-white uppercase">with us</h2>
          </div>
        </div>
        <div className=" relative flex flex-col justify-center flex-1 gap-2 w-full">
          <img src='/assets/images/collaborate_with_us/collab_2.png' alt='Akassh Ashok Gupta' className='w-full h-56 md:h-96 object-center block object-cover' draggable={false} />
          <div className="absolute top-0 left-0 w-full h-full flex gap-2 md:gap-10 flex-col justify-center items-center bg-black/75 backdrop-blur-md">
            <h2 className="text-lg md:text-5xl font-bold text-center text-white">Are you looking to connect with <br /> your target customers and make a <br /> lasting impact?</h2>
            <div className="flex flex-col items-center gap-1">
              <p className="text-xs md:text-2xl font-medium text-center rounded-lg px-3 bg-stone-300 text-stone-900">Let us help your brand soar and reach new heights with our</p>
              <p className="text-xs md:text-2xl font-medium text-center rounded-lg px-3 bg-stone-300 text-stone-900">extensive YouTube presence!</p>
            </div>
            <div className='self-center'>
              <ButtonToScroll />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full items-center justify-center gap-2 py-5 md:py-10">
        <h2 className="text-lg md:text-4xl font-bold text-center md:text-left text-neutral-900">Trusted by Top Brands</h2>
        <p className="text-sm md:text-xl font-bold text-center rounded-lg px-3 text-stone-700">Powerful Results from <span className='bg-yellow-500 rounded-lg text-stone-900 text-sm md:text-2xl font-bold px-1 md:px-2'>Past Collaborations</span></p>
        <PastCollab />
        <div className="flex flex-col md:flex-row w-full justify-center gap-3 md:gap-10 py-5 md:py-10 px-2 md:px-40">
          <div className="flex flex-col items-center md:w-1/2 justify-center gap-2">
            <p className="text-base md:text-3xl font-normal md:pl-5 text-center md:text-left text-neutral-900">Our massive <span className='bg-yellow-500 rounded-lg text-stone-900 text-lg md:text-2xl font-bold px-2'>SOCIAL MEDIA REACH</span> can help in bridging the gap between you and your potential customers.
              Let’s Talk <span className='bg-yellow-500 rounded-lg text-stone-900 text-lg md:text-2xl font-bold px-2'>NUMBERS!</span></p>
            <div className="flex flex-col">
              <img src='/assets/images/collaborate_with_us/demographic_1.png' alt='Akassh Ashok Gupta' className='w-full h-auto border-2 border-yellow-500 drop-shadow-lg shadow-lg rounded-xl' draggable={false} />
            </div>
          </div>
          <div className="flex flex-col flex-1 items-center justify-between gap-2">
            <div className="flex flex-col">
              <img src='/assets/images/collaborate_with_us/demographic_2.png' alt='Akassh Ashok Gupta' className='w-full h-auto border-2 border-yellow-500 drop-shadow-lg shadow-lg rounded-xl' draggable={false} />
            </div>
            <div className="flex flex-col">
              <img src='/assets/images/collaborate_with_us/demographic_3.png' alt='Akassh Ashok Gupta' className='w-full h-auto border-2 border-yellow-500 drop-shadow-lg shadow-lg rounded-xl' draggable={false} />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center gap-3 md:gap-14 py-5 md:py-10 px-2 md:px-40">
          <div className="flex flex-col md:w-6/12 items-center justify-end gap-2 order-2 md:order-1">
            <div className="flex flex-col">
              <img src='/assets/images/collaborate_with_us/demographic_5.png' alt='Akassh Ashok Gupta' className='w-full h-auto border-2 border-yellow-500 drop-shadow-lg shadow-lg rounded-xl' draggable={false} />
            </div>
          </div>
          <div className="flex flex-col items-center flex-1 justify-between gap-2 order-1 md:order-2">
            <p className="text-base md:text-3xl font-normal md:pl-5 text-center md:text-left text-neutral-900">Our <span className='bg-yellow-500 rounded-lg text-stone-900 text-lg md:text-2xl font-bold px-2'>Demographic Insights</span> to Align Your Brand with the <span className='bg-yellow-500 rounded-lg text-stone-900 text-lg md:text-2xl font-bold px-2'>Right Audience</span></p>
            <div className="flex flex-col">
              <img src='/assets/images/collaborate_with_us/demographic_6.png' alt='Akassh Ashok Gupta' className='w-full h-auto border-2 border-yellow-500 drop-shadow-lg shadow-lg rounded-xl' draggable={false} />
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col w-full items-center justify-center gap-2 py-5 md:py-10">
        <img src='/assets/images/collaborate_with_us/collab_3.png' alt='Akassh Ashok Gupta' className='w-full h-96 object-center block object-cover' draggable={false} />
        <div className="absolute top-0 left-0 w-full h-full flex gap-4 md:gap-10 flex-col justify-center bg-black/75 backdrop-blur-md md:px-32">
          <h2 className="text-lg md:text-5xl font-medium text-left text-white">Seamless Integration, Maximum Impact: How We Align<br className='hidden md:flex' />
            Your Brand with Our <span className='bg-stone-400 rounded-lg text-stone-900 text-lg md:text-4xl font-bold px-2'>Engaged Audience?</span></h2>
          <div className="flex flex-col gap-2 text-stone-200 font-normal">
            <div className="flex flex-row gap-2">
              <GoDotFill className='text-xl md:text-3xl text-yellow-600 pt-1' />
              <span className='text-base md:text-2xl flex flex-1'>Positioning based on the Target Market & Audience</span>
            </div>
            <div className="flex flex-row gap-2">
              <GoDotFill className='text-xl md:text-3xl text-yellow-600 pt-1' />
              <span className='text-base md:text-2xl flex flex-1'>Transparency with Brand on the current engagement and Audience Demographics</span>
            </div>
            <div className="flex flex-row gap-2">
              <GoDotFill className='text-xl md:text-3xl text-yellow-600 pt-1' />
              <span className='text-base md:text-2xl flex flex-1'>Aligning the key outcome metric for the campaign with the Video Topic and the Script for e.g. conversions, brand recall, competitor analysis etc.</span>
            </div>
          </div>
          <div className='self-center'>
            <ButtonToScroll />
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full items-center justify-center gap-4 md:gap-10 bg-slate-200 py-6 md:py-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left text-neutral-900">A Glance on our Audience Sentiment</h2>
        <div className="flex flex-col md:flex-row w-full justify-center gap-4 md:gap-10 pt-2 md:pt-5 px-2 md:px-40">
          <div className="flex flex-col items-center flex-1 justify-center gap-2">
            <img src='/assets/images/collaborate_with_us/sentiments_1.png' alt='Akassh Ashok Gupta' className='w-full h-auto border-2 border-yellow-500 drop-shadow-lg shadow-lg rounded-xl' draggable={false} />
          </div>
          <div className="flex flex-col items-center flex-1 justify-center gap-2">
            <img src='/assets/images/collaborate_with_us/sentiments_2.png' alt='Akassh Ashok Gupta' className='w-full h-auto border-2 border-yellow-500 drop-shadow-lg shadow-lg rounded-xl' draggable={false} />
          </div>
          <div className="flex flex-col items-center flex-1 justify-center gap-2">
            <img src='/assets/images/collaborate_with_us/sentiments_3.png' alt='Akassh Ashok Gupta' className='w-full h-auto border-2 border-yellow-500 drop-shadow-lg shadow-lg rounded-xl' draggable={false} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center gap-4 md:gap-10 px-2 md:px-40">
          <div className="flex flex-col items-center flex-1 justify-center gap-2">
            <img src='/assets/images/collaborate_with_us/sentiments_1.png' alt='Akassh Ashok Gupta' className='w-full h-auto border-2 border-yellow-500 drop-shadow-lg shadow-lg rounded-xl' draggable={false} />
          </div>
          <div className="flex flex-col items-center flex-1 justify-center gap-2">
            <img src='/assets/images/collaborate_with_us/sentiments_2.png' alt='Akassh Ashok Gupta' className='w-full h-auto border-2 border-yellow-500 drop-shadow-lg shadow-lg rounded-xl' draggable={false} />
          </div>
          <div className="flex flex-col items-center flex-1 justify-center gap-2">
            <img src='/assets/images/collaborate_with_us/sentiments_3.png' alt='Akassh Ashok Gupta' className='w-full h-auto border-2 border-yellow-500 drop-shadow-lg shadow-lg rounded-xl' draggable={false} />
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full items-center justify-center gap-10 px-2 pt-5 md:pt-10 md:px-20">
        <SocialMediaDetails />
        <div className="flex flex-col md:flex-row w-full justify-center gap-0 md:gap-10">
          <div className="flex flex-col items-center md:w-1/2 justify-end gap-2">
            <img src='https://i.ibb.co/Ch10Tqb/akasshashokgupta.png' alt='Akassh Ashok Gupta' className='w-full h-auto' />
          </div>
          <div className="flex flex-col flex-1 gap-1 md:gap-2">
            <h2 className="text-xl md:text-3xl font-bold text-center md:text-left text-neutral-600">ABOUT AKASSH ASHOK GUPTA</h2>
            <h3 className="text-base md:text-xl font-normal text-center md:text-left text-neutral-600">CEO & FOUNDER PEEPOYENETWORK</h3>
            <p className="text-base md:text-lg font-normal text-center md:text-left text-neutral-600">Akassh Ashok Gupta brings 19+ years in the corporate world and 5+ years doing YouTube who’s currently one of the top influencers in the Social Activism space with the Brand Peepoye’<br />In less than 1 year of quitting a high-profile leadership Job, he has built an influence of 1MN+ across social media platforms and is known for his unique proposition in consulting & influence based on his vast experience is now venturing into consulting and coaching in public domain.<br /> Akassh in past has collaborated with the likes of Sonu Nigam, Shruti Haasan, Gauahar Khan and is admired by many of the Top Influencers like Ashish Chanchalani, Harsh Beniwal, Triggered Insaan, Sourav Joshi & more</p>
            <div className='flex flex-row gap-4'>
              {
                images.map((image, index) => (
                  <div key={index} className='w-auto h-20'>
                    <img src={image} alt='Akassh Ashok Gupta' className='w-full h-full object-contain object-center' draggable={false} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row w-full gap-5 md:gap-32 py-5 px-2 md:py-10 md:px-40 bg-stone-200">
        <div id="collabForm" className="flex flex-col w-full md:w-1/2 gap-5">
          <h2 className="text-xl md:text-3xl font-bold text-center md:text-left text-neutral-600">CONTACT US NOW</h2>
          <CollabQueryForm />
        </div>
        <div className="flex flex-col flex-1 gap-2 md:gap-5">
          <h2 className="text-xl md:text-3xl font-bold text-center md:text-left text-neutral-600">CONTACT INFO</h2>
          <div className="flex flex-col gap-1">
            <h3 className="text-base md:text-xl font-bold text-center md:text-left text-neutral-600">EMAIL</h3>
            <p className="text-base md:text-lg font-normal text-center md:text-left text-neutral-600">
              <a href="mailto:hello@peepoye.com" className='hover:underline'>
                hello@peepoye.com
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base md:text-xl font-bold text-center md:text-left text-neutral-600">FOLLOW US</h3>
            <div className="flex flex-row gap-2 justify-center md:justify-start">
              <a href="https://www.facebook.com/peepoye" target="_blank" rel="noopener noreferrer" className='bg-neutral-600 rounded-full p-3 hover:underline'>
                <FaFacebookF className='text-2xl text-white' />
              </a>
              <a href="https://www.instagram.com/peepoye" target="_blank" rel="noopener noreferrer" className='bg-neutral-600 rounded-full p-3 hover:underline'>
                <AiFillInstagram className='text-2xl text-white' />
              </a>
              <a href="https://www.linkedin.com/in/akasshagupta/" target="_blank" rel="noopener noreferrer" className='bg-neutral-600 rounded-full p-3 hover:underline'>
                <GrLinkedinOption className='text-2xl text-white' />
              </a>
              <a href="https://twitter.com/peepoye_" target="_blank" rel="noopener noreferrer" className='bg-neutral-600 rounded-full p-3 hover:underline'>
                <BsTwitter className='text-2xl text-white' />
              </a>
              <a href="https://www.youtube.com/@peepoye" target="_blank" rel="noopener noreferrer" className='bg-neutral-600 rounded-full p-3 hover:underline'>
                <AiFillYoutube className='text-2xl text-white' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
