import React from 'react'
import style from '@/styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={`${style.backgroundImage} flex flex-col items-center py-4 px-1 md:p-20`}>
      <div className={`${style.backgroundOverlay}`} />
      <div className="flex flex-col md:flex-row gap-2 md:gap-36 z-10">
        <div className="flex flex-col gap-2 flex-1">
          <h2 className="text-lg md:text-2xl font-sans font-semibold text-center md:text-left text-white">Why Akassh Ashok Gupta is the right strategist for building online authority leveraging YouTube?</h2>
          <p className="text-base font-sans mt-2 md:mt-4 font-thin md:text-xl text-center md:text-left text-white">Akassh Ashok Gupta is an excellent choice for building online authority through YouTube due to his extensive experience in both business consulting and YouTube content creation. With 20 years of experience in business consulting, he has developed a deep understanding of strategy and tactics, which makes him well-equipped to develop effective approaches to growing and maintaining online authority.</p>
          <h2 className="md:mt-4 mt-2 text-lg md:text-2xl font-sans font-semibold text-center md:text-left text-stone-300">Media Coverage</h2>
          <div className="flex flex-row flex-wrap gap-5 justify-center md:justify-start md:gap-10 items-center mt-1 md:mt-2">
          <a href='https://formenindia.in/akassh-ashok-gupta-raises-his-voice-against-the-gender-biased-laws-and-the-harassments-faced-by-men-in-india/' target="_blank" rel="noopener noreferrer"><img src="/assets/images/media_coverage/for-men.png" className="w-24 md:w-32 h-auto" /></a>
            <a href='https://www.greatcompanies.in/post/akassh-ashok-gupta-founder-ceo-at-peepoye-network' target="_blank" rel="noopener noreferrer"><img src="/assets/images/media_coverage/great-companies.png" className="w-24 md:w-32 h-auto" /></a>
            <a href='https://innovativezoneindia.com/peepoye-network/' target="_blank" rel="noopener noreferrer"><img src="/assets/images/media_coverage/innovative-zone.png" className="w-24 md:w-32 h-auto" /></a>
            <a href='https://primeinsights.in/peepoye-network/' target="_blank" rel="noopener noreferrer"><img src="/assets/images/media_coverage/prime-Insight.png" className="w-24 md:w-32 h-auto" /></a>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-start">
          <h2 className="mt-2 md:mt-0 text-xl md:text-2xl font-sans font-semibold text-center md:text-left text-white">Stay connected with Akassh Daily</h2>
          <div className="flex flex-row gap-5 items-center justify-between">
          <a href='https://www.youtube.com/@peepoye' target="_blank" rel="noopener noreferrer"><img src="/assets/images/social_media/youtube.png" className="w-14 md:w-16 h-auto" /></a>
            <a href='https://www.instagram.com/peepoye/' target="_blank" rel="noopener noreferrer"><img src="/assets/images/social_media/instagram.png" className="w-14 md:w-16 h-auto" /></a>
            <a href='https://www.facebook.com/peepoye' target="_blank" rel="noopener noreferrer"><img src="/assets/images/social_media/facebook.png" className="w-14 md:w-16 h-auto" /></a>
            <a href='https://twitter.com/peepoye_' target="_blank" rel="noopener noreferrer"><img src="/assets/images/social_media/twitter.png" className="w-14 md:w-16 h-auto" /></a>
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-2 mt-10 w-full items-center z-10'>
        <div className="flex flex-col gap-2 w-2 border-b-2 flex-1" />
        <img src="/assets/images/akassh_signature.jpg" className="w-40 md:w-52 h-auto" />
        <div className="flex flex-col gap-2 w-2 border-b-2 flex-1" />
      </div>
      <div className="flex md:flex-row flex-col gap-3 mt-10 w-full items-center justify-between z-10">
        <p className="text-sm font-sans font-thin md:text-xl text-left text-white flex-1">© The PeepoyeNetwork. All rights reserved.</p>
        <div className="flex flex-row flex-1 justify-center">
            <Link href="/careers" className="text-base font-sans font-thin md:text-xl text-left px-2 cursor-pointer border-r-2 border-white text-white">Careers</Link>
            <Link href="/help-center" className="text-base font-sans font-thin md:text-xl text-left px-2 cursor-pointer border-r-2 border-white text-white">Help Center</Link>
            <a href="https://merchit.in/pages/peepoye" className="text-base font-sans font-thin cursor-pointer md:text-xl text-left text-white px-2" target="_blank" rel="noopener noreferrer">Shop</a>
        </div>
        <div className="flex flex-row flex-wrap flex-1 justify-center">
          <Link href="/cancellation-refund-policy" className="text-base font-sans cursor-pointer font-thin md:text-xl text-center md:text-left px-1 border-r-2 border-white text-white">Refund Policy</Link>
          <Link href="/privacy-policy" className="text-base font-sans cursor-pointer font-thin md:text-xl text-center md:text-left px-1 border-r-2 border-white text-white">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-base font-sans cursor-pointer font-thin md:text-xl text-center md:text-left text-white px-1">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
