'use client'
import React from 'react'
import Link from 'next/link'
import DropDown from './DropDown'

export default function NavItems({setIsOpen = false}) {
  return (
    <>
      <Link href="/about" className="font-medium px-2" onClick={() => setIsOpen ? setIsOpen(false) : null}>ABOUT</Link>
      <DropDown name="SOCIAL AWARENESS" links={{ "SOCIAL AWARENESS": "/social-awareness", "OPINION PLATFORM": "http://opinions.peepoye.com/", "BLOG": "/social-awareness/blogs" }} setIsOpen2={setIsOpen} />
      <DropDown name="LEARN" links={{ MENTORING: "/mentoring", COURSES: "/courses", BLOG:'/blogs', COMMUNITY: "https://www.skool.com/youtubeneur" }} setIsOpen2={setIsOpen} />
      <Link href="https://services.peepoye.com/" className="font-medium px-2" onClick={() => setIsOpen ? setIsOpen(false) : null}>SERVICES</Link>
      <Link href="/collaborate-with-us" className="font-medium px-2" onClick={() => setIsOpen ? setIsOpen(false) : null}>COLLABORATE</Link>
      <Link href="/resources" className="font-medium px-2" onClick={() => setIsOpen ? setIsOpen(false) : null}>RESOURCES</Link>
    </>
  )
}
