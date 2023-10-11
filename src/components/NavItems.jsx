'use client'
import React from 'react'
import Link from 'next/link'
import DropDown from './DropDown'
import NavBar from './polls/NavBar'
import { usePathname } from 'next/navigation'

export default function NavItems({setIsOpen = false}) {
  const [navVisible, setNavVisible] = React.useState(false)
  const path = usePathname()
  React.useEffect(() => {
    if (path.includes('/bekhauf-awaaz')) {
      setNavVisible(true)
    }
    else {
      setNavVisible(false)
    }
  }, [path])

  return (
    <>
      <Link href="/about" className="font-medium px-2" onClick={() => setIsOpen ? setIsOpen(false) : null}>ABOUT</Link>
      <DropDown name="SOCIAL AWARENESS" links={{ "SOCIAL AWARENESS": "/social-awareness", "OPINION PLATFORM": "/bekhauf-awaaz", "BLOG": "/social-awareness/blogs" }} setIsOpen2={setIsOpen} />
      <DropDown name="LEARN" links={{ MENTORING: "/mentoring", COURSES: "/courses", BLOG:'/blogs', COMMUNITY: "https://www.skool.com/youtubeneur" }} setIsOpen2={setIsOpen} />
      <Link href="https://akassh.co/dfy" className="font-medium px-2" onClick={() => setIsOpen ? setIsOpen(false) : null}>SERVICES</Link>
      <Link href="/collaborate-with-us" className="font-medium px-2" onClick={() => setIsOpen ? setIsOpen(false) : null}>COLLABORATE</Link>
      <Link href="/resources" className="font-medium px-2" onClick={() => setIsOpen ? setIsOpen(false) : null}>RESOURCES</Link>
      {
        navVisible &&
        <NavBar />
      }
    </>
  )
}
