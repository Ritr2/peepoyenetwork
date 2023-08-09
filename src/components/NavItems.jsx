'use client'
import React from 'react'
import Link from 'next/link'
import DropDown from './DropDown'

export default function NavItems({setIsOpen = false}) {
  return (
    <>
      <Link href="/about" className="font-medium" onClick={() => setIsOpen ? setIsOpen(false) : null}>ABOUT</Link>
      <Link href="/social-awareness" className="font-medium" onClick={() => setIsOpen ? setIsOpen(false) : null}>SOCIAL AWARENESS</Link>
      <DropDown name="LEARN" links={{ MENTORING: "mentoring", COURSES: "courses", BLOG:'/blogs', COMMUNITY: "https://www.skool.com/youtubeneur" }} setIsOpen2={setIsOpen} />
      <Link href="https://services.peepoye.com/" className="font-medium" onClick={() => setIsOpen ? setIsOpen(false) : null}>SERVICES</Link>
      <Link href="/collaborate-with-us" className="font-medium" onClick={() => setIsOpen ? setIsOpen(false) : null}>COLLABORATE</Link>
      <Link href="/resources" className="font-medium" onClick={() => setIsOpen ? setIsOpen(false) : null}>RESOURCES</Link>
    </>
  )
}
