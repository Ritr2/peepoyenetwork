import React from 'react'
import { DM_Sans } from 'next/font/google'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export default function page() {
  const data = [
    {
      question:'HOW CAN I CONNECT ?',
      answer:`You can follow us on <a href="https://www.facebook.com/akasshagupta" className="underline text-blue-700">Facebook</a>, <a href="https://www.instagram.com/akasshashokgupta/" className="underline text-blue-700">Instagram</a>, <a href="https://twitter.com/akasshagupta" className="underline text-blue-700">Twitter</a> or <a href="https://www.linkedin.com/in/akasshagupta/" className="underline text-blue-700">Linkedin</a>.`
    },
    {
      question:'HOW CAN I LEARN FROM AKASSH?',
      answer:`Register yourself at the <a href="/mentoring" className="underline text-blue-700">link</a>`,
    },
    {
      question:'HOW CAN I WORK WITH AKASSH?',
      answer:`<p class="id-6Z-4PLxG-432"> Visit the <a href="/careers" className="underline text-blue-700">Careers</a> section on the website and look out for hiring updates in our email newsletter.`,
    }
  ]
  return (
    <main className={`relative flex flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
      <section className="flex flex-col md:flex-row w-full bg-neutral-200 items-center justify-center px-2 py-12 md:py-24 md:px-20">
        <div className="flex flex-col justify-center items-center flex-1 gap-2 md:gap-5">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left text-neutral-700">FAQs</h1>
          <h2 className="text-sm md:text-lg font-thin text-center md:text-left text-neutral-500">Most frequently asked questions and answers</h2>
        </div>
      </section>
          <section className="flex flex-col w-full py-20 px-2 md:px-52 gap-10 md:gap-20">
            <FAQ data={data} />
            <div className="flex flex-col items-center justify-center gap-2 md:gap-5">
              <h2 className="text-xl md:text-3xl font-bold text-center text-neutral-700">If You Still Have An Open Query,</h2>
              <p className="text-base md:text-xl font-medium text-center text-neutral-600">WRITE TO US AT <a href="mailto:hello@peepoye.com" className="underline text-blue-700">hello@peepoye.com</a></p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 md:gap-5">
              <h2 className="text-xl md:text-3xl font-bold text-center text-neutral-700">Business Address</h2>
              <p className="text-base md:text-xl font-medium text-center text-neutral-600">Peepoye Network<br/>Plot No. 76D, Phase 4,<br/>Sector-14, Udyog Vihar,<br/>Gurgaon-122001, India</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 md:gap-5">
              <h2 className="text-xl md:text-3xl font-bold text-center text-neutral-700">Contact Us on Whatsapp</h2>
              <p className="text-base md:text-xl font-medium text-center text-blue-700"><Link href="https://wa.me/+918282827192">+91 8282827192</Link></p>
            </div>
          </section>
    </main>
  )
}
