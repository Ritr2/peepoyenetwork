import Link from 'next/link'
import React from 'react'

export default function FunnelFooter({bgcolor = false, textcolor = false}) {
  return (
    <footer className={`flex flex-col items-center justify-center ${bgcolor ? bgcolor : 'bg-black'} gap-5 py-5 px-2 md:px-52 w-full`}>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className={`text-sm md:text-lg font-normal text-center md:text-left ${textcolor? textcolor: 'text-white'}`}>© The PeepoyeNetwork. All rights reserved. Gurgaon | Haryana | India </p>
        <p className={`text-sm md:text-lg font-normal text-center md:text-left ${textcolor? textcolor: 'text-white'}`}>Contact: <a href="mailto:hello@peepoye.com" className="hover:underline">hello@peepoye.com</a></p>
        <p className={`text-sm md:text-lg font-normal text-center md:text-left ${textcolor? textcolor: 'text-white'}`}>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <span className="mx-1">|</span>
          <Link href="/terms-and-conditions" className="hover:underline">
            Terms and Conditions
          </Link>
        </p>
      </div>
    </footer>
  )
}
