import Footer from '@/components/Footer'
import NavigationBar from '@/components/NavigationBar'
import React from 'react'
import {FaRegSadTear} from 'react-icons/fa'

export const metadata = {
  title: 'Page Not Found - Peepoye',
  description: 'Page Not Found - Peepoye',
  image: 'https://i.ibb.co/6vX34KQ/akassh-signature.png',
  url: 'https://peepoye.com',
  type: 'website'
}

export default function NotFound() {
  return (
    <>
    <NavigationBar />
    <div className="flex flex-col gap-5 md:flex-row items-center justify-center w-full h-screen bg-white">
      <h1 className="text-5xl font-bold text-neutral-700"> Page Not Found </h1>
      <FaRegSadTear className="text-4xl text-neutral-700" />
    </div>
    <Footer />
    </>
  )
}
